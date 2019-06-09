
Page({
  data: {
    a: '',
    lx: '',
    jq: '',
    still: [],


  },
  a: function (e) {
    this.setData({
      a: e.detail.value
    })
  },
  lxInput: function (e) {
    this.setData({
      lx: e.detail.value
    })
  },
  jq: function (e) {
    this.setData({
      jq: e.detail.value,
    })
  },
  jisuan: function (e) {
    var a = this.data.a;
    var lx = this.data.lx;
    var jq = this.data.jq;
    var still = new Array();
    var still = this.data.still;
    for (var i = 0; i < jq; i++) {
      a = (a * (lx / 100)) + a * 1;
      still[i] = a;
    }
    this.setData({
      still: still
    })
  }
})
