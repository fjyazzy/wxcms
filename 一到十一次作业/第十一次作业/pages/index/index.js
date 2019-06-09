//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   shuju:{

   },
   tihao:1,
   tishi:true,
   daan:true
  },
  onLoad: function () {
    var timu = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success:function(data){
       wx.setStorageSync('timu', data)
      }
    })
    timu = wx.getStorageSync('timu')
    this.setData({
      shuju : timu
    })
  },
  onTshi: function () {
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
