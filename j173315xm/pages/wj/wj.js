// pages/wj/wj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quest: [{
      id: 1,
      type: 1, //类型，1.单选，2.多选
      question: "1.你有女朋友吗？(单选)",
      answers: [{
        content: 'A.有'
      }, {
        content: 'B.没有'
      }]
    }, {
      id: 2,
      type: 1,
      question: "2.目前薪资在哪个范围？(单选)",
      answers: [{
        content: 'A.3-6k'
      }, {
        content: 'B.6-8k'
      }, {
        content: 'C.8-10k'
      }, {
        content: 'D.10k以上'
      }]
    }, {
      id: 3,
      type: 2,
      question: "3.你喜欢哪一种编程语言？(多选)",
      answers: [{
        content: 'A.Java'
      }, {
        content: 'B.C语言'
      }, {
        content: 'C.PHP'
      }, {
        content: 'D.Python'
      }, {
        content: 'E.JavaScript'
      }, {
        content: 'F.其他'
      }]
    }]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
