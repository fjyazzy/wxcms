// pages/pitems/pitems.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nrlist: {},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
    console.log("pageno:" + options.id)
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.site + '/cmsv1/apis/getPage.ashx?pageno=' + options.id,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        var str2 = res.data.substr(1, res.data.length - 2)
        console.log(str2);
        that.setData({
          nrlist: JSON.parse(str2),
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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