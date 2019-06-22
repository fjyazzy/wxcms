// components/LinkList/LinkList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    ItemList: [{ 
      "pageno": "01", 
      "pagename": "WXML学习的基本语法", 
      "pagetitle": "WXML语言的基本用法和使用说明", 
      "pagetext": "/pages/index/index" 
      }, { 
        "pageno": "02", 
        "pagename": "计算器", 
        "pagetitle": "一个简易的计算器，可实现运算", 
        "pagetext": "/pages/lyb/lyb" 
        }, { 
          "pageno": "03", 
          "pagename": "利息计算器", 
          "pagetitle": "一个按月复利的计算器", 
        "pagetext": "/pages/myprofile/myprofile" 
          }, { 
            "pageno": "04",
             "pagename": "猜数游戏", 
             "pagetitle": "简单的猜数字游戏", 
            "pagetext": "/pages/logs/logs" 
            }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
