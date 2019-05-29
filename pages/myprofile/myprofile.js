const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo:false,
    icount:'0',
    zjf:'0',
    zcj:'0',
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
    }
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