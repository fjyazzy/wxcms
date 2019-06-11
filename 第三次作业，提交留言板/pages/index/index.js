//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    usite:"",
    uopenid:"sssss"
  },

  onReady: function () {
    this.setData({
      usite: app.globalData.usite,
      uopenid: app.globalData.openID,
    });
    this.Topmenu = this.selectComponent("#mytopmenu");
    this.Topmenu.showpage();
    this.linklist = this.selectComponent("#mylinklist");
    this.linklist.showpage();
    this.swipelist = this.selectComponent("#myswipelist");
    this.swipelist.showpage();
    
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
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

    /* wx.setTabBarStyle({
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      borderStyle: "black",
      backgroundColor: "#ffffff",
    }) */

    wx.showTabBarRedDot({
      index: 1,
    })
    wx.setTabBarBadge({
      index: 3,
      text: '5'
    })

  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
