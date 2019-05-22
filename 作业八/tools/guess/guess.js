// pages/lxjsq/lxjsq.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    a: 0,
    da: "",
    inputValue: ""
  },
  daInput: function (e) {
    this.setData({
      da: e.detail.value
    })
  },
  tjda: function (e) {
    var a = this.data.a;
    var value = this.data.da;
    console.log(value);
    var jgstr = " ";

    if (value < a) {
      jgstr = "你输入的数值太小"
    } else if (value > a) {
      jgstr = "你输入的数值太大"
    } else {
      jgstr = "恭喜你答对！"
    }
    this.setData({
      inputValue: jgstr,
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