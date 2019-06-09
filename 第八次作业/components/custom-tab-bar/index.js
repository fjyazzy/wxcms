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
        iconPath: "/images/icon_homesy.png",
        selectedIconPath: "/images/icon_homesy_2.png",
      text: "首页"
      }, 
      {
        pagePath: "/pages/table/table",
        iconPath: "/images/iicon_fl..png",
        selectedIconPath: "/images/icon_fl_2.png",
        text: "分类"
      },  
      {
      pagePath: "/pages/lyb/lyb",
        iconPath: "/images/icon_listyd.png",
        selectedIconPath: "/images/icon_listyd_2.png",
      text: "书架"
      }, 
      {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/icon_userwd.png",
        selectedIconPath: "/images/icon_userwd_2.png",
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