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