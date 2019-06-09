Component({
  properties: {
    selected: { // 属性名
      type: Number, 
      value: 0, 
      observer(newVal, oldVal, changedPath) {
      }
    },
  },
  data: {
    color: "#000",
    selectedColor: "#f00",
    borderStyle: "black",
    backgroundColor: "#fcc",
    list: [
      {
      pagePath: "/pages/index/index",
      iconPath: "/images/shouye1.png",
      selectedIconPath: "/images/shouye1.png",
      text: "首页"
      }, 
      {
        iconPath: "/images/gouwu.png",
        selectedIconPath: "/images/gouwu.png",
        text: "收藏"
      },  
      {
        iconPath: "/images/geren.png",
        selectedIconPath: "/images/geren.png",
        text: "更多"
      }, 
      {
        iconPath: "/images/1.png",
        selectedIconPath: "/images/1.png",
        text: "消息"
      },
      {
        iconPath: "/images/1.png",
        selectedIconPath: "/images/1.png",
      text: "我的"
    }
    ]
  }, 
  attached() {
  },
  onLoad: function (options) {

  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
       /* selected: data.index, */
      })
    }
  }
})