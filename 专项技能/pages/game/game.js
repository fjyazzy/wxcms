//index.js
Page({
  data: {
    a: 2,
    da: 0,
    inputValue: "",
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
      jgstr = "你输入的数值太大";
    } else if (value < a) {
      jgstr = "你输入的数值太小";
    } else {
      jgstr = "恭喜你答对了";
    }
    this.setData({
      inputValue: jgstr,
    })
  },

  onLoad: function (options) {
    var random = Math.floor(Math.random() * 10);
    console.log(random);
    this.setData({
      a: random,
    })

  },

  onReady: function () {

  },

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
  onShareAppMessage: function () {

  }

})