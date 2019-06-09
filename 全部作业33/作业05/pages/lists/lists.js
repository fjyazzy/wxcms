Page({
  data:{
    benjin:'',
    lixi:'',
    mon:'',
    still:[],
    still1:[],

  },
  userBenjinInput:function(e){
    this.setData({
      benjin:e.detail.value
    })
  },
  userLixiInput:function(e){
    this.setData({
      lixi:e.detail.value
    })
  },
  userMon:function(e){
    this.setData({
      mon:e.detail.value,
    })
  },
  jisuan:function(e){
    var benjin = this.data.benjin;
    var lixi = this.data.lixi;
    var mon = this.data.mon;
    var still1 = new  Array();
    var still = new Array();
    var still = this.data.still;
    for (var i = 0; i <mon; i++) {
    benjin=(benjin * (lixi / 100)) + benjin * 1;
    still1[i]= benjin;
    }
    this.setData({
      still:still1
    })
  }
})