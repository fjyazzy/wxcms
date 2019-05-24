//index.js
//获取应用实例
Component({
  properties: {
    selected: { // 属性名
      type: Number,
      value: 0,
      observer(newVal, oldVal, changedPath) {
      }
    },
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