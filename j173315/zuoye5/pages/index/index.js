Page({
  data: {
    benjin: '',
    lixi: '',
    mon: '',
    huan: [],

  },
  BenjinInput: function (e) {
    this.setData({
      benjin: e.detail.value
    })
  },
  LixiInput: function (e) {
    this.setData({
      lixi: e.detail.value
    })
  },
  Mon: function (e) {
    this.setData({
      mon: e.detail.value,
    })
  },
  jisuan: function (e) {
    var benjin = this.data.benjin;
    var lixi = this.data.lixi;
    var mon = this.data.mon;
    var huan = new Array();
    for (var i = 0; i < mon; i++) {
      benjin = (benjin * (lixi / 100)) + benjin * 1;
      huan[i] = benjin;
    }
    this.setData({
      huan: huan
    })
  }
})