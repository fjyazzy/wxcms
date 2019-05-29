//index.js
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    th: '1',
    option: '["1","2","3","4","5"]',
    ques: '猪有几只脚？',
    type: '0',
    ans: '4',
    ts: '你去猪圈看看就知道了！',
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
      url: app.globalData.usite + 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1' + app.globalData.openID,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          th: res.data.th,
          ques: res.data.ques,
          option: res.data.option,
          type: res.data.type,
          ans: res.data.ans,
          ts: res.data.ts
        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },

})