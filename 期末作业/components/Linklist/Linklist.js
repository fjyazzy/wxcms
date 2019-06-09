// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename": "扫码", "pagetext": "../recipes/recipes" },
      { "pagename": "问卷调查", "pagetext": "../ly/ly" },
      { "pagename": "利息计算器", "pagetext": "../lxjsq/lxjsq" },
      //{ "pagename": "猜字游戏", "pagetext": "../game/game" },
      { "pagename": "用户地图", "pagetext": "../map/map" },
      { "pagename": "选择题", "pagetext": "../myprofile/myprofile" },
      //{ "pagename": "系统", "pagetext": "../log/log" }
    ],
  },
  attached() {
  },
  methods: {


  }
})