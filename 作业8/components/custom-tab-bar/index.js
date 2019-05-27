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
      iconPath: "/images/icon_home.png",
      selectedIconPath: "/images/icon_home_2.png",
      text: "首页"
      }, 
      {
        pagePath: "/pages/myfavorite/myfavorite",
        iconPath: "/images/icon_sc.png",
        selectedIconPath: "/images/icon_sc_2.png",
        text: "收藏"
      },  
      {
        pagePath: "/pages/more/more",
        iconPath: "/images/icon_more.png",
        selectedIconPath: "/images/icon_more_2.png",
        text: "更多"
      }, 
      {
        pagePath: "/pages/mymsg/mymsg",
        iconPath: "/images/icon_msg.png",
        selectedIconPath: "/images/icon_msg_2.png",
        text: "消息"
      },
      {
        pagePath: "/pages/myprofile/myprofile",
      iconPath: "/images/icon_user.png",
      selectedIconPath: "/images/icon_user_2.png",
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