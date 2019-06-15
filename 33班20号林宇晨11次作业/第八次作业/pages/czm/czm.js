Page({
  data: {
    a: Math.floor(Math.random() * 100),
    b: 0,
    sc: " ",
    sc1: " "
  },
  shuzi: function (e) {
    this.setData({
      b: e.detail.value
    })
  },
  bindButtonTap: function (e) {
    var a = this.data.a;
    var b = this.data.b;
    var sc = "";
    var sc1 = "";
    var sc = this.data.sc;
    if (a == b) {
      sc1 = "恭喜你猜对了"
    } else if (a > b) {
      sc1 = "你猜的数字小了"
    } else {
      sc1 = "你猜的数字大了"
    }
    this.setData({
      sc: sc1
    })
  }
})