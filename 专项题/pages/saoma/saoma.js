// pages/saoma/saoma.js
let app = getApp();
Page({
  data: {
    img: "/images/1.jpg"
  },
  onLoad() {
  },
  scan() {
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果");
        console.log(res);
        this.setData({
          img: res.result
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  }
})