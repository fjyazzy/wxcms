//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: '',
    result: '',
    user1: Math.floor(Math.random() * 10000),
  },
  user1: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  submit: function (e) {
    var user1 = this.data.user1;
    var result = this.data.result;
    var user = this.data.user;
    console.log(user1);
    console.log(user);
    if (user > user1) {
      result = '你输入的数字偏大了';
      console.log(result)
    } else if (user < user1) {
      result = '你输入的数字偏小了';
      console.log(result)
    } else {
      result = '恭喜你答对啦';
    }
    this.setData({
      result: result,
    })
  }
})