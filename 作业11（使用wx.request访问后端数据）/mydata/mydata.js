const app = getApp()
Page({
  data: {
   hr: '',
    qs: '',
    option: '',
    type: '',
    as: '',
    ds: '',
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
      url: app.globalData.usite + 'http://132.232.88.15/cmsv1/apis/getChoiceques.ashx?id=' + id,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          tr: res.data.tr,
          qs: res.data.qs,
          option: res.data.option,
          type: res.data.type,
          as: res.data.as,
          ds: res.data.ds

        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },

})