Component({
  /**   * 组件的初始数据   */
  data: {
    newList: [{
        title: "新菜色已上线:",
        text: "各式菜色",
        pagePath:"/pages/calc/calc"
      },{
        title: "老顾客回馈:",
        text: "免费尝鲜",
        pagePath: "/pages/lxjsq/lxjsq"
      },{
        title: "新老顾客折扣优惠:",
        text: "根据消费金额进行折扣",
        pagePath: "/pages/lxjsq/lxjsq" 
      }
    ]
    
  },
  attached() {
  },
  methods: {
  }
})