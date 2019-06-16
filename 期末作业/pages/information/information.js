const app = getApp()
var openid = wx.getStorageSync("openid");
Page({
  data: {
    hasUserInfo: openid == ""
  },
  doAuthorization: function (e) {
    var that = this;
    console.log("调用了 doAuthorization 授权");
    // console.log(e);
    if (e.detail.userInfo == null) { //为null  用户拒绝了授权
      //coding。。。。
      console.log("用户拒绝授权");
    } else {
      //授权
      wx.login({
        success: function (res) {
          console.log('login:code', res.code)
          //发送请求
          wx.request({
            url: app.globalData.userInterfaceUrl + 'record/' + res.code, //接口地址
            method: 'GET',
            header: {
              'content-type': 'application/json' //默认值
            },
            success: function (res) {
              console.log("record  成功", res.data)
              var res = res.data;
              if (res.error) { //发生错误
                console.log("错误：", res.msg);
              } else { //返回成功
                try {
                  wx.setStorageSync('openid', res.data.openid)
                  openid = wx.getStorageSync("openid");
                } catch (e) {
                  console.log("wx.login 错误", e);
                }
                //加载用户信息
                that.loadUserInfo();
                that.setData({ //设置变量
                  hasUserInfo: false
                });
              }
            },
            fail: function (err) {
              console.log("record  失败", err);
            }
          })
        }
      })
    }

  },
  loadUserInfo: function () {
    var that = this;
    if (openid != "") {
      wx.getUserInfo({
        success: res => {
          console.log("wx获得用户信息:", res);
          var data = {
            "openid": openid,
            "user": res.userInfo
          }
          //发送信息给服务器获得用户信息
          wx.request({
            url: app.globalData.userInterfaceUrl + 'login',
            dataType: "json",
            method: "POST",
            data: data,
            success: function (res) {
              console.log("loadUserInfo（服務器返回） success", res.data);
              if (!res.data.error) {
                app.globalData.userInfo = res.data.data;
                that.setData({
                  userInfo: app.globalData.userInfo
                })
              } else {
                console.log("服务器获取用戶信息失敗");
                //TODO：用户信息获取错误
              }
            },
            fail: function (e) {
              console.log("loadUserInfo（服务器返回）error", e);
              //TODO:错误
            },
            complete: function (e) {
              //完成
            }
          })
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(res)
          }
        }
      })
    }
  },

  // 事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    var that = this;
    console.log("openid:", openid);
    that.loadUserInfo();
  }
})