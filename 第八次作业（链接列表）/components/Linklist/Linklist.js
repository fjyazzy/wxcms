// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename": "首页", "pagetext": "../recipes/recipes" },
      
      
      { "pagename": "猜字游戏", "pagetext": "../game/game" },
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "日志", "pagetext": "../log/log" }
    ],
  },
  attached() {
  },
  methods: {


  }
})