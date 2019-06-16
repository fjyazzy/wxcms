//index.js
//获取应用实例
const app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperNav: {　　
      i: 0,
      　　arr: [　　　{
        v: 0,
        txt: "推荐专区"
      }, 　　　 {
        v: 1,
        txt: "进口商品"
      }, 　　　 {
        v: 2,
        txt: "饮料冲调"
      }, 　　　 {
        v: 3,
        txt: "休闲零食"
      }, 　　　 {
        v: 4,
        txt: "生鲜"
      }, 　　　 {
        v: 5,
        txt: "速食调味"
      }　　]　
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //显示登陆时间
    var time = util.formatTime(new Date())
    //为页面中time赋值
    this.setData({
      time: time
    })
    console.log(time)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  QrCodeScan: function() {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  // 横向导航点击时css效果
  swiperNav: function(e) {
    console.log(e);
    this.setData({
      'swiperNav.i': e.target.dataset.i
    })
  },
  // 横向导航自动滚动效果
  swiperNav: function(e) {
    console.log(e);
    var w = wx.getSystemInfoSync().windowWidth;
    var leng = this.data.swiperNav.arr.length;
    var i = e.target.dataset.i;
    var disX = (i - 1) * w / leng;
    if (i != this.data.swiperNav.i) {
      this.setData({
        'swiperNav.i': i
      })
    }
    this.setData({
      'swiperNav.x': disX
    })
  },
  // 链接导航，点击可以跳转
  urlGoTo: function(options) {
    wx.switchTab({
      url: '../map/map'
    })
  },
})