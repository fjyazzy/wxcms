//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: '',
    result: '',
    suijishu: Math.floor(Math.random() * 50),
  },
  usershuzi: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  sub: function (e) {
    var suijishu = this.data.suijishu;
    var result = this.data.result;
    var user = this.data.user;
    console.log(suijishu);
    console.log(user);
    if (user > suijishu) {
      result = '输入的数太大啦';
      console.log(result)
    } else if (user < suijishu) {
      result = '输入的数太小啦';
      console.log(result)
    } else {
      result = '答对啦真棒';
    }
    this.setData({
      result: result,
    })
  }
})