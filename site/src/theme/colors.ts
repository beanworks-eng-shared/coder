// Based on https://codepen.io/hkfoster/pen/YzeYRwR

export const colors = {
  white: "hsl(0, 0%, 100%)",

  gray: {
    17: "hsl(220, 50%, 3%)",
    16: "hsl(223, 44%, 9%)",
    15: "hsl(222, 38%, 14%)",
    14: "hsl(222, 32%, 19%)",
    13: "hsl(222, 31%, 25%)",
    12: "hsl(222, 30%, 31%)",
    11: "hsl(219, 29%, 38%)",
    10: "hsl(219, 28%, 45%)",
    9: "hsl(219, 28%, 52%)",
    8: "hsl(218, 29%, 58%)",
    7: "hsl(219, 30%, 64%)",
    6: "hsl(219, 31%, 71%)",
    5: "hsl(218, 32%, 77%)",
    4: "hsl(223, 38%, 84%)",
    3: "hsl(218, 44%, 92%)",
    2: "hsl(220, 50%, 95%)",
    1: "hsl(220, 55%, 98%)",
  },

  red: {
    17: "hsl(355, 95%, 3%)",
    16: "hsl(355, 88%, 9%)",
    15: "hsl(355, 86%, 14%)",
    14: "hsl(355, 84%, 19%)",
    13: "hsl(355, 82%, 25%)",
    12: "hsl(355, 74%, 31%)",
    11: "hsl(355, 70%, 38%)",
    10: "hsl(355, 66%, 45%)",
    9: "hsl(355, 69%, 52%)",
    8: "hsl(355, 73%, 58%)",
    7: "hsl(355, 76%, 64%)",
    6: "hsl(355, 78%, 71%)",
    5: "hsl(355, 79%, 77%)",
    4: "hsl(355, 85%, 84%)",
    3: "hsl(355, 88%, 92%)",
    2: "hsl(355, 95%, 96%)",
    1: "hsl(355, 100%, 98%) ",
  },

  orange: {
    17: "hsl(20, 100%, 3%)",
    16: "hsl(20, 98%, 9%)",
    15: "hsl(20, 97%, 14%)",
    14: "hsl(20, 93%, 19%)",
    13: "hsl(20, 88%, 25%)",
    12: "hsl(20, 84%, 32%)",
    11: "hsl(20, 80%, 38%)",
    10: "hsl(20, 76%, 46%)",
    9: "hsl(20, 79%, 53%)",
    8: "hsl(20, 83%, 59%)",
    7: "hsl(20, 86%, 65%)",
    6: "hsl(20, 88%, 72%)",
    5: "hsl(20, 93%, 78%)",
    4: "hsl(20, 97%, 84%)",
    3: "hsl(20, 98%, 91%)",
    2: "hsl(20, 99%, 96%)",
    1: "hsl(20, 100%, 98%)",
  },

  yellow: {
    17: "hsl(48, 100%, 3%)",
    16: "hsl(48, 87%, 9%)",
    15: "hsl(48, 83%, 14%)",
    14: "hsl(48, 88%, 19%)",
    13: "hsl(48, 82%, 25%)",
    12: "hsl(48, 74%, 32%)",
    11: "hsl(48, 70%, 38%)",
    10: "hsl(48, 66%, 46%)",
    9: "hsl(48, 69%, 53%)",
    8: "hsl(48, 73%, 59%)",
    7: "hsl(48, 76%, 65%)",
    6: "hsl(48, 78%, 72%)",
    5: "hsl(48, 79%, 78%)",
    4: "hsl(48, 85%, 84%)",
    3: "hsl(48, 90%, 89%)",
    2: "hsl(46, 95%, 93%)",
    1: "hsl(46, 100%, 97%)",
  },

  green: {
    17: "hsl(132, 98%, 3%)",
    16: "hsl(140, 94%, 8%)",
    15: "hsl(144, 93%, 12%)",
    14: "hsl(145, 99%, 16%)",
    13: "hsl(143, 83%, 22%)",
    12: "hsl(143, 74%, 27%)",
    11: "hsl(142, 64%, 34%)",
    10: "hsl(141, 57%, 41%)",
    9: "hsl(140, 50%, 49%)",
    8: "hsl(140, 51%, 54%)",
    7: "hsl(138, 54%, 61%)",
    6: "hsl(137, 56%, 68%)",
    5: "hsl(137, 55%, 75%)",
    4: "hsl(137, 60%, 82%)",
    3: "hsl(136, 74%, 91%)",
    2: "hsl(136, 82%, 95%)",
    1: "hsl(136, 100%, 97%)",
  },

  turquoise: {
    17: "hsl(162, 88%, 3%)",
    16: "hsl(164, 84%, 8%)",
    15: "hsl(165, 76%, 14%)",
    14: "hsl(167, 85%, 18%)",
    13: "hsl(166, 74%, 25%)",
    12: "hsl(166, 65%, 32%)",
    11: "hsl(165, 61%, 38%)",
    10: "hsl(165, 56%, 46%)",
    9: "hsl(165, 56%, 53%)",
    8: "hsl(165, 60%, 57%)",
    7: "hsl(164, 65%, 64%)",
    6: "hsl(163, 66%, 70%)",
    5: "hsl(163, 66%, 77%)",
    4: "hsl(162, 74%, 83%)",
    3: "hsl(162, 97%, 91%)",
    2: "hsl(163, 93%, 94%)",
    1: "hsl(163, 100%, 97%)",
  },

  cyan: {
    17: "hsl(186, 100%, 3%)",
    16: "hsl(185, 86%, 8%)",
    15: "hsl(186, 80%, 14%)",
    14: "hsl(185, 83%, 18%)",
    13: "hsl(185, 76%, 25%)",
    12: "hsl(185, 68%, 31%)",
    11: "hsl(185, 64%, 37%)",
    10: "hsl(185, 59%, 45%)",
    9: "hsl(185, 57%, 52%)",
    8: "hsl(185, 61%, 57%)",
    7: "hsl(185, 64%, 63%)",
    6: "hsl(185, 66%, 70%)",
    5: "hsl(185, 66%, 77%)",
    4: "hsl(185, 72%, 83%)",
    3: "hsl(185, 91%, 91%)",
    2: "hsl(182, 96%, 94%)",
    1: "hsl(182, 100%, 97%)",
  },

  blue: {
    17: "hsl(215, 100%, 3%)",
    16: "hsl(215, 92%, 7%)",
    15: "hsl(215, 88%, 12%)",
    14: "hsl(215, 93%, 17%)",
    13: "hsl(215, 87%, 23%)",
    12: "hsl(215, 79%, 30%)",
    11: "hsl(215, 75%, 36%)",
    10: "hsl(215, 71%, 44%)",
    9: "hsl(215, 74%, 51%)",
    8: "hsl(215, 78%, 57%)",
    7: "hsl(215, 81%, 63%)",
    6: "hsl(215, 83%, 70%)",
    5: "hsl(215, 84%, 76%)",
    4: "hsl(215, 90%, 82%)",
    3: "hsl(215, 93%, 89%)",
    2: "hsl(215, 97%, 95%)",
    1: "hsl(215, 100%, 98%)",
  },

  indigo: {
    17: "hsl(256, 100%, 3%)",
    16: "hsl(254, 87%, 9%)",
    15: "hsl(252, 83%, 14%)",
    14: "hsl(250, 88%, 19%)",
    13: "hsl(248, 82%, 25%)",
    12: "hsl(246, 74%, 32%)",
    11: "hsl(244, 70%, 38%)",
    10: "hsl(242, 66%, 44%)",
    9: "hsl(240, 67%, 53%)",
    8: "hsl(238, 70%, 59%)",
    7: "hsl(232, 74%, 63%)",
    6: "hsl(236, 78%, 72%)",
    5: "hsl(234, 79%, 78%)",
    4: "hsl(232, 85%, 84%)",
    3: "hsl(230, 90%, 91%)",
    2: "hsl(228, 95%, 96%)",
    1: "hsl(226, 100%, 98%)",
  },

  violet: {
    17: "hsl(264, 100%, 3%)",
    16: "hsl(265, 87%, 9%)",
    15: "hsl(265, 83%, 14%)",
    14: "hsl(265, 88%, 19%)",
    13: "hsl(265, 82%, 25%)",
    12: "hsl(265, 74%, 32%)",
    11: "hsl(265, 70%, 38%)",
    10: "hsl(265, 66%, 46%)",
    9: "hsl(265, 69%, 53%)",
    8: "hsl(265, 73%, 59%)",
    7: "hsl(265, 76%, 65%)",
    6: "hsl(265, 78%, 72%)",
    5: "hsl(265, 79%, 78%)",
    4: "hsl(264, 85%, 84%)",
    3: "hsl(265, 90%, 91%)",
    2: "hsl(265, 95%, 96%)",
    1: "hsl(265, 100%, 98%)",
  },

  magenta: {
    17: "hsl(316, 100%, 3%)",
    16: "hsl(316, 86%, 9%)",
    15: "hsl(314, 83%, 14%)",
    14: "hsl(315, 85%, 19%)",
    13: "hsl(315, 80%, 25%)",
    12: "hsl(315, 71%, 31%)",
    11: "hsl(315, 68%, 38%)",
    10: "hsl(315, 62%, 45%)",
    9: "hsl(315, 63%, 52%)",
    8: "hsl(315, 67%, 58%)",
    7: "hsl(315, 70%, 64%)",
    6: "hsl(315, 71%, 71%)",
    5: "hsl(315, 72%, 77%)",
    4: "hsl(315, 79%, 84%)",
    3: "hsl(316, 88%, 92%)",
    2: "hsl(315, 95%, 96%)",
    1: "hsl(315, 100%, 98%)",
  },
};
