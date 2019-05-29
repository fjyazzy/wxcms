//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hqsj: {

    },
    tishi: true,
    da: true
  },
  onLoad: function () {
    var timu = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success: function (data) {
        wx.setStorageSync('timu', data)
      }
    })
    timu = wx.getStorageSync('timu')
    this.setData({
      hqsj: timu
    })
  },
  djDa: function () {
    this.setData({
      da: false
    })
  },
  onTishi: function () {
    this.setData({
      tishi: false
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
