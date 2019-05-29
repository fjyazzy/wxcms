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