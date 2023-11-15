import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffectEvent } from "hooks/hookPolyfills";

import { DEFAULT_RECORDS_PER_PAGE } from "./utils";
import { clamp } from "lodash";

import {
  type QueryFunctionContext,
  type QueryKey,
  type UseQueryOptions,
  useQueryClient,
  useQuery,
} from "react-query";

/**
 * The key to use for getting/setting the page number from the search params
 */
const PAGE_NUMBER_PARAMS_KEY = "page";

/**
 * Information about a paginated request. Passed into both the queryKey and
 * queryFn functions on each render
 */
type QueryPageParams = {
  pageNumber: number;
  pageSize: number;
  pageOffset: number;
  searchParamsQuery?: string;
};

/**
 * Any JSON-serializable object returned by the API that exposes the total
 * number of records that match a query
 */
type PaginatedData = {
  count: number;
};

type QueryFnContext<TQueryKey extends QueryKey = QueryKey> = QueryPageParams &
  Omit<QueryFunctionContext<TQueryKey>, "pageParam">;

/**
 * A more specialized version of UseQueryOptions built specifically for
 * paginated queries.
 */
// All the type parameters just mirror the ones used by React Query
export type UsePaginatedQueryOptions<
  TQueryFnData extends PaginatedData = PaginatedData,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "keepPreviousData" | "queryKey" | "queryFn"
> & {
  /**
   * The key to use for parsing additional query information
   */
  searchParamsKey?: string;

  /**
   * A function that takes pagination information and produces a full query key.
   *
   * Must be a function so that it can be used for the active query, as well as
   * any prefetching.
   */
  queryKey: (params: QueryPageParams) => TQueryKey;

  /**
   * A version of queryFn that is required and that exposes the pagination
   * information through the pageParams context property
   */
  queryFn: (
    context: QueryFnContext<TQueryKey>,
  ) => TQueryFnData | Promise<TQueryFnData>;
};

export function usePaginatedQuery<
  TQueryFnData extends PaginatedData = PaginatedData,
  TError = unknown,
  TData extends PaginatedData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(options: UsePaginatedQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
  const {
    queryKey,
    searchParamsKey,
    queryFn: outerQueryFn,
    ...extraOptions
  } = options;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parsePage(searchParams);
  const pageSize = DEFAULT_RECORDS_PER_PAGE;
  const pageOffset = (currentPage - 1) * pageSize;

  const getQueryOptionsFromPage = (pageNumber: number) => {
    const searchParamsQuery =
      searchParamsKey !== undefined
        ? searchParams.get(searchParamsKey) ?? undefined
        : undefined;

    const pageParam: QueryPageParams = {
      pageNumber,
      pageOffset,
      pageSize,
      searchParamsQuery,
    };

    return {
      queryKey: queryKey(pageParam),
      queryFn: (context: QueryFunctionContext<TQueryKey>) => {
        return outerQueryFn({ ...context, ...pageParam });
      },
    } as const;
  };

  // Not using infinite query right now because that requires a fair bit of list
  // virtualization as the lists get bigger (especially for the audit logs)
  const query = useQuery<TQueryFnData, TError, TData, TQueryKey>({
    ...extraOptions,
    ...getQueryOptionsFromPage(currentPage),
    keepPreviousData: true,
  });

  const totalRecords = query.data?.count ?? 0;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const hasNextPage = pageSize * pageOffset < totalRecords;
  const hasPreviousPage = currentPage > 1;

  const queryClient = useQueryClient();
  const prefetchPage = useEffectEvent((newPage: number) => {
    return queryClient.prefetchQuery(getQueryOptionsFromPage(newPage));
  });

  // Have to split hairs and sync on both the current page and the hasXPage
  // variables, because the page can change immediately client-side, but the
  // hasXPage values are derived from the server and won't be immediately ready
  // on the initial render
  useEffect(() => {
    if (hasNextPage) {
      void prefetchPage(currentPage + 1);
    }
  }, [prefetchPage, currentPage, hasNextPage]);

  useEffect(() => {
    if (hasPreviousPage) {
      void prefetchPage(currentPage - 1);
    }
  }, [prefetchPage, currentPage, hasPreviousPage]);

  // Mainly here to catch user if they navigate to a page directly via URL
  const updatePageIfInvalid = useEffectEvent(() => {
    const clamped = clamp(currentPage, 1, totalPages);

    if (currentPage !== clamped) {
      searchParams.set(PAGE_NUMBER_PARAMS_KEY, String(clamped));
      setSearchParams(searchParams);
    }
  });

  useEffect(() => {
    if (!query.isFetching) {
      updatePageIfInvalid();
    }
  }, [updatePageIfInvalid, query.isFetching]);

  const onPageChange = (newPage: number) => {
    const safePage = Number.isInteger(newPage)
      ? clamp(newPage, 1, totalPages)
      : 1;

    searchParams.set(PAGE_NUMBER_PARAMS_KEY, String(safePage));
    setSearchParams(searchParams);
  };

  return {
    ...query,
    onPageChange,
    goToPreviousPage: () => onPageChange(currentPage - 1),
    goToNextPage: () => onPageChange(currentPage + 1),
    currentPage,
    pageSize,
    totalRecords,
    hasNextPage,
    hasPreviousPage,

    // Hijacking the isLoading property slightly because keepPreviousData is
    // true; by default, isLoading will always be false after the initial page
    // loads, even if new pages are loading in. Especially since
    // keepPreviousData is an implementation detail, simplifying the API felt
    // like the better option, at the risk of it becoming more "magical"
    isLoading: query.isLoading || query.isFetching,
  } as const;
}

function parsePage(params: URLSearchParams): number {
  const parsed = Number(params.get("page"));
  return Number.isInteger(parsed) && parsed > 1 ? parsed : 1;
}
