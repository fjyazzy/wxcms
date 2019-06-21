// pages/smiao/smiao.js
const app = getApp()

Page({
  data: {
    result: ''

  },

  onLoad: function () {

  },

  getScanCoDe: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

  }

})
