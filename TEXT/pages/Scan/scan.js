const app = getApp()

Page({
  data: {
    result: ''

  },

  onLoad: function () {

  },

  getScancode: function () {
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