//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ItemList: [
      {
        "pagename": "学习wxml的基本语法",
        "pagetext": "../index/index"
      },
      {
        "pagename": "利息计算机",
        "pagetext": "../lxjsq/lxjsq"
      },
      {
        "pagename": "地图",
        "pagetext": "../map/map"
      }
    ],
    imgList: [{
      imagePath: "/images/1.jpg",
      pagePath: "/pages/calc/calc"
    },
    {
      imagePath: "/images/2.jpg",
      pagePath: "/pages/lxjsq/lxjsq"
    },
    {
      imagePath: "/images/3.jpg",
      pagePath: "/pages/lxjsq/lxjsq"
    }
    ]
  },


  //测试代码开始
 
 //测试代码结束

  onLoad: function () {
    
  },

})
