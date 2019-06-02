//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   one:{

   },
   tihao:1,
   tishi:true,
   daan:true
  },
  onLoad: function () {
    var two = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success:function(data){
        wx.setStorageSync('two', data)
      }
    })
    two = wx.getStorageSync('two')
    this.setData({
      one: two
    })
  },
  onTiShi: function () {
    this.setData({
      tishi: false
    })
  },
  onDaan: function () {
    this.setData({
      daan: false
    })
  },
  onTijiao:function(){
    this.setData({
     tihao: 2
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
