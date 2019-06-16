Component({
  /**   * 组件的初始数据   */
  data: {
    newList: [{
        title: "最新1:",
        text: "特价水果",
        pagePath:"/pages/mall/mall"
      },{
        title: "最新2:",
        text: "特价衣服",
        pagePath: "/pages/cart/cart"
      },{
        title: "最新3:",
        text: "特价书包",
        pagePath: "/pages/information/information" 
      }
    ]
    
  },
  attached() {
  },
  methods: {
  }
})