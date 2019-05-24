// components/Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename": "利息计算器", "pagetext": "../lxjsq/lxjsq" },
      { "pagename": "留言板", "pagetext": "../liuyanban/liuyanban" },
      { "pagename": "计算器", "pagetext": "../lxjsq/lxjsq" },
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "数字游戏", "pagetext": "../guess/guess" },
      {"pagename":"题库","pagetext":"../myprofile/myprofile"}

    ],
  },
  attached() {
  },
  methods: {

  }
})
