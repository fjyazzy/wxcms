
  Page({
    data: {
      bj173312:'',
      lx:'',
      jq:'',
      still: [],
      

    },
    bj173312:function(e){
    this.setData({
      bj173312: e.detail.value
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
    var bj173312 = this.data.bj173312;
    var lx = this.data.lx;
    var jq = this.data.jq;
    var still = new Array();
    var still = this.data.still;
    for (var i = 0; i < jq; i++) {
      bj173312 = (bj173312 * (lx / 100)) + bj173312 * 1;
      still[i] = bj173312;
    }
    this.setData({
      still: still
    })
  }
  })
 