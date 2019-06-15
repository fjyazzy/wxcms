// pages/Tools/tools.js
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    buttontext: "扫一扫",
    buttontext2: "显示表格",
    count: 0,
    arr: ['part01', 'part02', 'part03'],
    show: 'part01',
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //测试代码开始
  scanone: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  add: function () {
    this.setData({
      count: this.data.count + 1,
      show: this.data.arr[this.data.count % 3]
    })
  },
  gotable: function () {
    wx.navigateTo({
      url: '../table/table'
    })
  },
  //测试代码结束

  onLoad: function () {

  },

})
