const app = getApp()

Page({
  data: {
    shuju: {
    }
  },
  onLoad: function () {
    var user = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getcompanyinfo.ashx ',
      success: function (data) {
        wx.setStorageSync('user', data)
      }
    })
    var user = wx.getStorageSync('user')
    JSON.stringify(user);
    this.setData({
      shuju: user
    })
  }
})