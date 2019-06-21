Component({
  /**   * 组件的初始数据   */
  data: {
    newList: [{
        title: "最新1:",
        text: "添加了扫码购物功能",
        pagePath:"/pages/wjdc/wjdc"
      },{
        title: "最新2:",
        text: "添加了地图定位功能",
        pagePath: "/pages/map/map"
      },{
        title: "最新3:",
        text: "添加了了问卷调查功能",
        pagePath: "/pages/wjdc/wjdc" 
      }, {
        title: "最新4:",
        text: "添加了了查询公司信息功能",
        pagePath: "/pages/gsxx/gsxx"
      }
    ]
    
  },
  attached() {
  },
  methods: {
  }
})