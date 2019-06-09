const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    th: "",
    ques: "",
    option: [],
    type: "",
    ans: "",
    ts: "",
    id: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(1);
  },
  getData: function (id) {
    var that = this;
    wx.request({
      url:'http://132.232.88.15/cmsv1/apis/getChoiceques.ashx?id=' + id,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          th: res.data.th,
          ques: res.data.ques,
          option: res.data.option,
          type: res.data.type,
          ans: res.data.ans,
          ts: res.data.ts
        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }, 
  nextt: function () {
    var xid;
    xid = this.data.id;
    xid = xid + 1;
    this.setData({
      id: xid,
    });
    this.getData(xid);
  },
  tsclick: function () {
    wx.showModal({
      title: '答题提示',
      content: this.data.ts,
      showCancel: false,
      success(res) {
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
})// pages/quesChoice/quesChoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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