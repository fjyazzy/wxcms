//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    user: '',
    result: '',
    suijishu: 5,
  },
  usershuzi: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  sub: function (e) {
    var suijishu = Math.floor(Math.random() * 5);
    var result = this.data.result;
    var user = this.data.user;
    console.log(suijishu);
    console.log(user);
    if (user > suijishu) {
      result = '你输入的数字太大咯';
      console.log(result)
    } else if (user < suijishu) {
      result = '你输入的数字也太小了吧';
      console.log(result)
    } else {
      result = '恭喜你不是笨蛋';
    }
    this.setData({
      result: result,
    })
  }
})
