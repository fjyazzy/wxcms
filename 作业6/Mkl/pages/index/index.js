// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
Page({
  data: {
    a: Math.floor(Math.random() * 100),
    b: "",
    sk: " ",
    sk1: " "
  },
  shuzi: function (e) {
    this.setData({
      b: e.detail.value
    })
  },
  bindButtonTap: function (e) {
    var a = this.data.a;
    var b = this.data.b;
    var sk = "";
    var sk1 = "";
    var sk = this.data.sk;
    if (a == b) {
      sk1 = "恭喜你猜对了"
    } else if (a > b) {
      sk1 = "你猜的数字小了"
    } else {
      sk1 = "你猜的数字大了"
    } console.log(a);
    this.setData({
      sk: sk1
    })
  }
})