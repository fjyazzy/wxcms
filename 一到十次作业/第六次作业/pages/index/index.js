//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
      a: 3,
      dan: 0,
      inputValue: "",
    },
    danInput: function (e) {
      this.setData({
        dan: e.detail.value
      })
    },
    tjdan: function (e) {
      var a = this.data.a;
      var value = this.data.dan;
      console.log(value)
      var jgstr=""

      if(value>a){
        jgstr="你输入的数字太大了";
      }else if(value<a){
        jgstr="你输入的数字太小了";
      }else{
        jgstr="回答正确";
      }

      this.setData({
        inputValue:jgstr,
      })
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
