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
      { "pagename": "留言板", "pagetext": "../liuyb/liuyb" },
      { "pagename": "利息计算器","pagetext":"../lxjsq/lxjsq"},
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "猜数字", "pagetext": "../guess/guess" },
      { "pagename": "题库", "pagetext": "../myprofile/myprofile" },
    ],
  },
  attached() {
  },
  methods: {

  }
})
