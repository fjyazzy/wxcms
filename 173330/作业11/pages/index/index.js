const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    icount: '0',
    zjf: '0',
    zcj: '0',
    items: [
      { name: 'A', value: 'A：合法来源凭证',checked: 'true' },
      { name: 'B', value: 'B：临时行驶车号牌' },
      { name: 'C', value: 'C：借用的机动车号牌' },
      { name: 'D', value: 'D：法人单位证明' },

    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if(name==A){
       
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.getData(options);
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.usite + '/cmsv1/apis/getProfiles.ashx?openid=' + app.globalData.openID,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          icount: res.data.icount,
          zjf: res.data.zjf,
          zcj: res.data.zcj
        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },

})