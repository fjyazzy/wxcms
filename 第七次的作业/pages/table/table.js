// pages/table/table.js
Page({

  /**
   * 页面的初始数据
   */
  onLoad: function () {
    console.log('onLoad')

    //关闭本列表的红点
    wx.hideTabBarRedDot({
      index: 1,
    });

  }
})