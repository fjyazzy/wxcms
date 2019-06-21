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
        "pagePath": "pages/index/index",
        "iconPath": "images/selectoff.png",
        "selectedIconPath": "images/selecton.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/orders/orders",
        "iconPath": "images/classificationoff.png",
        "selectedIconPath": "/images/classificationon.png",
        "text": "列表"
      },
      {
        "pagePath": "pages/lyb/lyb",
        "iconPath": "images/icon_component.png",
        "selectedIconPath": "images/icon_component_HL.png",
        "text": "案例"
      },
      {
        "pagePath": "pages/ucenter/index/index",
        "iconPath": "images/myoff.png",
        "selectedIconPath": "images/myon.png",
        "text": "我的"
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