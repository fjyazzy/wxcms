// pages/lxjsq/lxjsq.js
Page({
  data: {
    bj: '10000',
    lx: '10',
    sl: '0',
    still: [],
    still1: [],

  },
  userBenjinInput: function (e) {
    this.setData({
      benjin: e.detail.value
    })
  },
  userLixiInput: function (e) {
    this.setData({
      lixi: e.detail.value
    })
  },
  userSl: function (e) {
    this.setData({
      mon: e.detail.value,
    })
  },
  jisuan: function (e) {
    var benjin = this.data.benjin;
    var lixi = this.data.lixi;
    var sl = this.data.mon;
    var still1 = new Array();
    var still = new Array();
    var still = this.data.still;
    for (var i = 0; i < sl; i++) {
      benjin = (benjin * (lixi / 100)) + benjin * 1;
      still1[i] = benjin;
    }
    this.setData({

      still: still1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

