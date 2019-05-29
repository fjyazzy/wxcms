// pages/myscore/myscore.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xh: '',
    zf: '',
    zy1: '',
    zy2: '',
    zy3: '',
    zy4: '',
    zy5: '',
    zy6: '',
    zy7: '',
    zy8: '',
    zy9: '',
    zy10: '',
    zy11: '',
    zy12: '',
    zy13: '',
    zy14: '',
    zy15: '',
    zy16: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.usite + '/cmsv1/apis/getscore.ashx?xh=J173301',
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          xh: res.data.xh,
          zf: res.data.zf,
          zy1: res.data.zy1,
          zy2: res.data.zy2,
          zy3: res.data.zy3,
          zy4: res.data.zy4,
          zy5: res.data.zy5,
          zy6: res.data.zy6,
          zy7: res.data.zy7,
          zy8: res.data.zy8,
          zy9: res.data.zy9,
          zy10: res.data.zy10,
          zy11: res.data.zy11,
          zy12: res.data.zy12,
          zy13: res.data.zy13,
          zy14: res.data.zy14,
          zy15: res.data.zy15,
          zy16: res.data.zy16
        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})