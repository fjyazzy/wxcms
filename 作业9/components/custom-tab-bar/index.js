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
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
      pagePath: "/pages/index/index",
      iconPath: "/images/icon_home.png",
      selectedIconPath: "/images/icon_home_2.png",
      text: "首页"
      }, 
      {
        pagePath: "/pages/table/table",
        iconPath: "/images/icon_list.jpg",
        selectedIconPath: "/images/icon_list_2.jpg",
        text: "列表"
      },  
      {
      pagePath: "/pages/lyb/lyb",
      iconPath: "/images/icon_al.png",
      selectedIconPath: "/images/icon_al_2.png",
      text: "案例"
      }, 
      {
        pagePath: "/pages/logs/logs",
      iconPath: "/images/icon_user.png",
      selectedIconPath: "/images/icon_user_2.png",
      text: "用户"
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