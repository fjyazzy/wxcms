// pages/company/company.js
Page({
  data: {

    company: {},
    age: "",
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getcompanyinfo.ashx',
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        var str2 = res.data.substr(1, res.data.length - 2)
        console.log('成功获取到数据'+str2);
        that.setData({
          company: JSON.parse(str2),
        })
      },
      fail: function (err) {
        console.log(err);
      },
      complete: function () { },

    });
  },
})