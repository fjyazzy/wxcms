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
      { "pagename": "WXML学习的基本语法", "pagetext": "/tools/Wxmls/wxml" },
      { "pagename": "利息计算器", "pagetext": "/tools/lxjsq/lxjsq" },
      { "pagename": '计算器', "pagetext": "/tools/calc/calc" },
      { "pagename": '留言本', "pagetext": "/tools/lyb/lyb" },
      { "pagename": '课程表', "pagetext": "/tools/table/table" }, 
      { "pagename": '猜数游戏', "pagetext": "/tools/guess/guess" }, 
      { "pagename": "微信API", "pagetext": "/tools/wxapi/wxapi" }
      ],
  },
  attached() {
  },
  wethods:{

  }
  })