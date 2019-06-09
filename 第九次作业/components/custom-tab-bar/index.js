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
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "/../imagesi.png",
        "selectedIconPath": "/../imagesi1.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/table/table",
        "iconPath": "/../images/cx  (1).png",
        "selectedIconPath": "/../images/cx  (2).png",
        "text": "列表"
      },
      {
        "pagePath": "pages/lyb/lyb",
        "iconPath": "/../images.png",
        "selectedIconPath": "/../images1.png",
        "text": "案例"
      },
      {
        "pagePath": "pages/logs/logs",
        "iconPath": "/../images/rw.png",
        "selectedIconPath": "/../images/rw1.png",
        "text": "设置"
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
      wx.switchTab({ url })
      this.setData({
        /* selected: data.index, */
      })
    }
  }
})
