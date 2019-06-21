// components/Linklist/Linklist.js
Component({
  data: {
    ItemList: [{
      pagePath: "/pages/Wxmls/wxml",
      text: "WXML学习的基本语法"
    }, {
      pagePath: "/pages/calc/calc",
      text: "计算器"
    }, {
        pagePath: "/pages/Itcr/Itcr",
      text: "利息计算器"
    },{
        pagePath: "/pages/game/game",
        text: "猜数字"
      }, {
        pagePath: "/pages/wjdc/wjdc",
        text: "问卷调查"
      },{
        pagePath: "/pages/map/index",
        text: "地图"
      },{
        pagePath: "/pages/orders/orders",
        text: "订单"
      }, {
        pagePath: "/pages/mydata/mydata",
        text: "后端公司信息"
      }
    ],
  },
  attached() {
  },
  methods: {
  }
})
