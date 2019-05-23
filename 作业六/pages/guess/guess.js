//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    a: 2,
    da: 0,
    inputvalue: "",
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
    var jgstr = ""

    if (value > a) {
      jgstr = "你输入的数字太大";
    }
    else if (value < a) {
      jgstr = "您输入的数字太小";
    } else if (value = a) {
      jgstr = "恭喜你回答正确";
    }
    this.setData({
      inputvalue: jgstr,
    })
  },
  onLoad: function (options) {
    var random = Math.floor(Math.random() * 10);
    console.log(random);
    this.setData({
      a: random,
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
  onHide: function () {

  },
  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})

