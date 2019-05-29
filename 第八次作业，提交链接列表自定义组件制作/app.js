//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          var that = this;
          wx.request({
            url: that.globalData.usite + '/cmsv1/apis/getOpenid.ashx', 
            method: "GET",
            data: {"code": res.code },
            header: { 'content-type': 'application/json' },
            success: function (res) {
              console.info(res.data.openid);
              that.globalData.openID = res.data.openid;
            },
            fail: function (error) {
              console.info("获取用户openId失败");
              this.globalData.openID = "失败2";
              console.info(error);
            },
            complete: function (openIdRes) {
            }
          })
        }

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  globalData: {
    userInfo: null,
    selected: 0,
    openID:'',
    usite:"http://132.232.88.15",
    //usite: "http://localhost",
  }
})