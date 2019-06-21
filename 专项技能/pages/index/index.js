//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },


  //测试代码开始
  sma: function () {
    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })

    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },
 //测试代码结束

  onLoad: function () {
    
  },

})
