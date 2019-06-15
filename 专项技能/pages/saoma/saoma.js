// pages/saoma/saoma.js
//获取应用实例
// 允许从相机和相册扫码
const app = getApp()

Page({
  data: {
    result: '',
    charSet: '',
    scanType: '',
    path: ''
  },
  onLoad: function () {

  },
  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        var scanType = res.scanType;
        var charSet = res.charSet;
        var path = res.path;
        _this.setData({
          result: result,
          scanType: scanType,
          charSet: charSet,
          path: path
        })
      }
    })
    // 只允许从相机扫码
    // wx.scanCode({
    //   onlyFromCamera: true,
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

  }
})