// components/Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [{ "pagename": '留言本', "pagetext": "/tools/lyb/lyb" }, { "pagename": '课程表', "pagetext": "/tools/table/table" }, { "pagename": '猜数游戏', "pagetext": "/tools/guess/guess" }, { "pagename": "微信API", "pagetext": "/tools/wxapi/wxapi" }],
  },
  attached() {
  },
  wethods:{

  }
  })