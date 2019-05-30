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
      { "pagename": "游戏", "pagetext": "../guess/guess" },
      { "pagename": "成绩", "pagetext": "../myscore/myscore" },

    ],
  },
  attached() {
  },
  methods: {

  }
})

