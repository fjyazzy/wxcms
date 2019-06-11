// pages/lxjsq/lxjsq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bj: 10000,
    lx: 10,
    sl: 1,
    inputValue: 0
  },
  bjInput: function (e) {
    this.setData({
      bj: e.detail.value
    })
  },
  lxInput: function (e) {
    this.setData({
      lx: e.detail.value
    })
  },
  slInput: function (e) {
    this.setData({
      sl: e.detail.value
    })
  },
  jslx: function (e) {
    var value = this.data.bj;
    var lx = this.data.lx;
    var sl = this.data.sl;

    for (var i = 0; i < sl; i++) {
      value = value * (1 + (lx / 100))
    }

    this.setData({
      inputValue: value.toFixed(2)
    })
  },

  

  

  

  
  

  

  

  
})