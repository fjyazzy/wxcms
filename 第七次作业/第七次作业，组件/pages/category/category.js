// pages/category/category.js
const app = getApp()
Page({
  data: {
    pagelist:{},
  },
  onLoad: function (options) {
    this.getData(options);
    console.log("mlh:" + options.id)
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.site + '/cmsv1/apis/getPagelist.ashx?mlh=' + options.id,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        var str2 = res.data.substr(1,res.data.length-2)
        console.log(str2);
        that.setData({
          pagelist: JSON.parse(str2),
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }

})