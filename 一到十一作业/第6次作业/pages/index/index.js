//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    user:'',
    result:'',
    suijishu:Math.floor(Math.random()*100),
  },
  usershuzi: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  sub:function(e){
    var suijishu = this.data.suijishu;
    var result = this.data.result;
    var user = this.data.user;
    console.log(suijishu);
    console.log(user);
    if(user>suijishu){
      result='你输入的数字太大了';
      console.log(result)
    }else if(user<suijishu){
      result ='你输入的数字太小了';
        console.log(result)
    }else{
      result = 'biu~恭喜你猜对了';
      suijishu=Math.floor(Math.random() * 100);
      this.setData({
        suijishu: suijishu,
      })
    }
    this.setData({
      result:result,
    })
  }
})
