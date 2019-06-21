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
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "题库", "pagetext": "../myprofile/myprofile" },
      { "pagename": "问卷调查", "pagetext": "../wjdc/wjdc" },

    ],
  },
  attached() {
  },
  methods: {

  }
})

