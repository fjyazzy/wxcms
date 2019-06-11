// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [{
      "pagename": "WXML学习的基本语法",
      "pagetext": "../index/index"
    },
      {
        "pagename": "利息计算机",
        "pagetext": "../lxjsq/lxjsq"
      },
      
      {
        "pagename": "地图",
        "pagetext": "../map/map"
      },

      {
        "pagename": "猜数游戏",
        "pagetext": "../guess/guess"
      },

      {
        "pagename": "选择题",
        "pagetext": "../choose/choose"
      },




      ],
  },
  attached() {
  },
  methods: {
    

  }
})