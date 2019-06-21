// components/Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [{ "pagename": '留言本', "pagetext": "/tools/lyb/lyb" }, { "pagename": '猜数游戏', "pagetext": "/tools/guess/guess" }, { "pagename": "利息计算器", "pagetext": "/tools/lxjsq/lxjsq" },   { "pagename": "显示地图", "pagetext": "/tools/map/map" }, { "pagename": "题库(通过后端调用)", "pagetext": "/tools/quesChoice/quesChoice" }],
  },
  attached() {
  },
  wethods:{

  }
  })