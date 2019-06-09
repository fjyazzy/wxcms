
Page({
  data: {
    bj173314: '',
    lx: '',
    jq: '',
    still: [],


  },
  bj173314: function (e) {
    this.setData({
      bj173314: e.detail.value
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
    var bj173314 = this.data.bj173314;
    var lx = this.data.lx;
    var jq = this.data.jq;
    var still = new Array();
    var still = this.data.still;
    for (var i = 0; i < jq; i++) {
      bj173314 = (bj173314 * (lx / 100)) + bj173314 * 1;
      still[i] = bj173314;
    }
    this.setData({
      still: still
    })
  }
})
