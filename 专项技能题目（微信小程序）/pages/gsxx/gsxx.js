
Page({
  /**
   * 页面的初始数据
   */
  data: {

  company:{},
  age:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getcompanyinfo.ashx',
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      // dataType: 'json',
      // responseType: 'text',
      success: function(res) {
        var str2 = res.data.substr(1, res.data.length - 2)
        console.log(str2);
        that.setData({
        company: JSON.parse(str2),
        })
      },
      fail: function(err) {
        console.log(err);
      },
      complete: function() {},
 
    });
  },
})