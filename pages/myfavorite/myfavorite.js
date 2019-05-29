// pages/myfavorite/myfavorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    furls: []
  },
  onLoad: function () {
    var furls = wx.getStorageSync('furls') || []
    furls.unshift('/pages/index/index')
    wx.setStorageSync('furls', furls)

    this.setData({
      furls: wx.getStorageSync('furls'),
    })
    console.log(this.data.furls)
  },

  clearall:function(){
 
    wx.showModal({
      title: '提示',
      content: '是否清除所有收藏',
      success(res) {
        if (res.confirm) {

          wx.removeStorageSync('fuls');
          wx.clearStorage();
          this.setData({
            furls: wx.getStorageSync('furls'),
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})