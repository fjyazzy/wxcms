Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:2,
    da:0,
    inputValue:"",
  },
  daInput:function(e){
    this.setData({
      da: e.detail.value
    })
  },
  tjda:function(e){
    var a =this.data.a;
    var value=this.data.da;
    console.log(value);
    var jgstr=""
    
    if(value>a){
      jgstr="大了";
    }else if(value<a){
      jgstr="小了"
    }else{
      jgstr="答对了！"
    }
    this.setData({
      inputValue:jgstr,
    })
  }
})