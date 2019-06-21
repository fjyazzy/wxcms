//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  scanone: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  xinxi:function(even){
    wx.navigateTo({
      url: '../xinxi/xinxi',
      success: function () {
        console.log("跳转post成功")
      },
      fail: function () {
        console.log("跳转post失败")
      },
      complete: function () {
        console.log("无论跳转post无论成功失败都会执行")
      }
    })
  }
})
