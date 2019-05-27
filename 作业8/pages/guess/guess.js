
 //index.js
//获取应用实例
Page({
  data: {
    user: '',
    result: '',
    step: 0,
    rNumber: Math.floor(Math.random() * 10),
  },
  userNumber: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  sub: function (e) {
    var rNumber = this.data.rNumber;
    var result = this.data.result;
    var step = this.data.step;
    var user = this.data.user;
    step = step + 1;
    console.log(step);
    console.log(rNumber);
    if (user > rNumber) {
      result = '你输入的数字大了';
    } else if (user < rNumber) {
      result = '你输入的数字小了';
    } else {
      result = '恭喜你 猜对了！';
    }
    this.setData({
      result: result,
    })
    this.setData({
      step: step,
    })
  }
})