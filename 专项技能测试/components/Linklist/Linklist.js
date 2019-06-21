// components/Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [{ "pagename": '课程表', "pagetext": "/tools/table/table" }, { "pagename": '答题', "pagetext": "/tools/quesChoice/quesChoice" }, { "pagename": '猜数游戏', "pagetext": "/tools/guess/guess" }, { "pagename": '留言本', "pagetext": "/tools/lyb/lyb" }, { "pagename": '扫码', "pagetext": "/tools/sys/sys" }, { "pagename": "微信API", "pagetext": "/tools/wxapi/wxapi" }],
  },
  attached() {
  },
  wethods:{

  }
  })