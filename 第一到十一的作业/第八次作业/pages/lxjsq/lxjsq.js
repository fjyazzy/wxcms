Page({
  data: {
    a:1000,
    b:10,
    c:1,
    cs:[],
    cs1:[]
  },
  benjin:function(e) {
    this.setData({
      a: e.detail.value
    })
  },
  lixi: function(e) {
    this.setData({
      b: e.detail.value
    })
  },
  jie: function(e) {
    this.setData({
      c: e.detail.value
    })
  },
  bindButtonTap: function(e) {
    var benjin = this.data.a;
    var lilv = this.data.b;
    var jie = this.data.c;
    var cs = new Array();
    var cs1 = new Array();
    var cs = this.data.cs;
    for(var i = 0; i < jie ; i++){
      benjin = benjin + benjin * (lilv/100)
      cs1[i] = benjin
    }
    this.setData({
      cs : cs1
    })
  }
})