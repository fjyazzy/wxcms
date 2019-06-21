// pages/houduan/houduan.js
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    name:'LeonWu',
    age:'',
    

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
      url: app.globalData.usite + 'http://132.232.88.15/cmsv1/apis/getcompanyinfo.ashx' + app.globalData.openID,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
         name: res.data.name,
          age: res.data.age,
        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },

})