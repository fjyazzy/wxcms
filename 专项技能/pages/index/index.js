//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
   
      ItemList: [
        { "pagename": "利息计算器", "pagetext": "../lxjsq/lxjsq" },
        { "pagename": "留言板", "pagetext": "../liuyanban/liuyanban" },
        { "pagename": "计算器", "pagetext": "../calc/calc" },
        { "pagename": "地图", "pagetext": "../map/map" },
        { "pagename": "数字游戏", "pagetext": "../guess/guess" },
        { "pagename": "题库", "pagetext": "../myprofile/myprofile" },
        { "pagename": "扫码", "pagetext": "../saoma/saoma" },
        { "pagename": "问卷调查", "pagetext": "../wjdc/wjdc" }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})  
