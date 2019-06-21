// components/Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [{ "pagename": '留言本', "pagetext": "/tools/lyb/lyb" }, { "pagename": '课程表', "pagetext": "/tools/table/table" }, { "pagename": '猜数游戏', "pagetext": "/tools/guess/guess" }, { "pagename": "微信API", "pagetext": "/tools/wxapi/wxapi" }, { "pagename": "定位", "pagetext": "/pages/map/map" }, { "pagename": "问卷调查", "pagetext": "/pages/wjdc/wjdc" }, { "pagename": "公司信息", "pagetext": "/pages/houqv/houqv" }],
  },
  attached() {
  },
  wethods:{

  }
  })