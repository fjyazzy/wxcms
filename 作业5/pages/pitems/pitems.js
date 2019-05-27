// pages/pitems/pitems.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xid:1,
    title: "",
    nr:"",
    fbsj:"2019.4.4",
    zz:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      xid: 1,
      title: "这里有一篇好文章1111",
      nr:"&nbsp;好文章是号文章就是看不到内容<br>所以选择rich-text",
      fbsj:"2019.4.4",
      zz:"it's me",     
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