// pages/lxjsq/lxjsq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bj:10000,
    lx:10,
    sl:1,
    inputValue:0,
    ghlist:""
  },
  bjInput: function (e) {
    this.setData({
      bj: e.detail.value
    })
  },
  lxInput: function (e) {
    this.setData({
      lx: e.detail.value
    })
  },
  slInput: function (e) {
    this.setData({
      sl: e.detail.value
    })
  },
  jslx: function (e) {
    var value = this.data.bj;
    var lx = this.data.lx;
    var sl = this.data.sl;
    var ghstr="";

    for (var i = 0; i < sl; i++){
      value = value * (1 + (lx / 100));
      ghstr = ghstr + "第" + (i + 1) + "月：" + value.toFixed(2) +"元\n"
      console.log(value)
    }
    this.setData({
      inputValue: value.toFixed(2),
      ghlist: ghstr
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