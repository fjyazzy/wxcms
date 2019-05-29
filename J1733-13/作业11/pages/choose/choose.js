// pages/choose/choose.js
Page({
  data: {
    study: {

    },
    pt: true,
    answers: true
  },
  onLoad: function () {
    var theme = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success: function (data) {
        wx.setStorageSync('theme', data)
      }
    })
    theme = wx.getStorageSync('theme')
    this.setData({
      study: theme
    })
  },
  danswers: function () {
    this.setData({
      answers: false
    })
  },
  onpt: function () {
    this.setData({
      pt: false
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
  