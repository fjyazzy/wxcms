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
      result='输入的数字过大';
      console.log(result)
    }else if(user<suijishu){
      result ='输入的数字过小';
        console.log(result)
    }else{
      result = '恭喜答对';
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
