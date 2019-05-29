// pages/guess/guess.js

//获取应用实例
const app = getApp()

Page({
  data: {
    user: '',
    result: '',
    sjshu: Math.floor(Math.random() * 100),
  },
  shuzi: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  dq: function (e) {
    var sjshu = this.data.sjshu;
    var result = this.data.result;
    var user = this.data.user;
    console.log(sjshu);
    console.log(user);

    if (user > sjshu) {
      result = '你输入的数字有一点大了';
      console.log(result)
    } else if (user < sjshu) {
      result = '你输入的数字还是小了';
      console.log(result)
    } else {
      result = '恭喜答对了你是最棒的';
    }
    this.setData({
      result: result,
    })
  }
})
