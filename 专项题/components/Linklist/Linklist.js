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
      { "pagename": "地图位置", "pagetext": "../map/map" },
      { "pagename": "扫一扫", "pagetext": "../saoma/saoma" },
      { "pagename": "问卷表", "pagetext": "../wenjuan/wenjuan" },
    ],
  },
  attached() {
  },
  methods: {

  }
})
