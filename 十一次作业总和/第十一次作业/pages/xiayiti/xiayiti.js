const app = getApp()

Page({
  data: {
    sj: {

    },
    ts: true,
    daan: true

  },
  onLoad: function () {
    var timu = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=2',
      success: function (data) {
        wx.setStorageSync('timu', data)
      }
    })
    timu = wx.getStorageSync('timu')
    this.setData({
      sj: timu
    })
  },
  onTs: function () {
    this.setData({
      ts: false
    })
  },
  onDaan: function () {
    this.setData({
      daan: false
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

