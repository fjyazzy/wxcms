const app = getApp()

Page({
  data: {
    haha: {

    },
    ts: true,
    daan: true
  },
  XYT() {
    wx.navigateTo({
      url: '/pages/xiayiti/xiayiti',
    })
  },
  onLoad: function () {
    var hh = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success: function (data) {
        wx.setStorageSync('hh', data)
      }
    })
    hh = wx.getStorageSync('hh')
    this.setData({
      haha: hh
    })
  },
  TS: function () {
    this.setData({
      ts: false
    })
  },
  DA: function () {
    this.setData({
      daan: false
    })
  }
})

