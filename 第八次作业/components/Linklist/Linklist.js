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
      { "pagename": "系统", "pagetext": "../guess/guess" },
    ],
  },
  attached() {
  },
  methods: {

  }
})
