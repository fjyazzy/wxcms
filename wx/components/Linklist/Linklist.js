// Linklist/Linklist.js
Component({
  data: {
    ItemList: [{
      pagePath: "/pages/Wxmls/wxml",
      text: "题库"
    }, {
      pagePath: "/pages/calc/calc",
      text: "计算器"
    }, {
      pagePath: "/pages/lxjsq/lxjsq",
      text: "利息计算器"
      }, {
        pagePath: "/pages/category/category",
        text: "扫一扫"
      }, {
        pagePath: "/pages/guess/guess",
        text: "猜数游戏"
      }, 
    {
        pagePath: "/pages/wxapi/wxapi",
        text: "微信API"
      }
    ],
  },
  attached() {
  },
  methods: {
  }
})
