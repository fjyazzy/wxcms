// pages/setting/setting.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    gitno:"",
    bjname:"",
    xsno:"",
    xsname:"",
    usite: "",
    uopenid: "sssss"
  },
  gitInput: function (e) {
    this.setData({
      gitno: e.detail.value
    })
  },
  radioChange: function (e) {
    this.setData({
      bjname: e.detail.value
    })
  },
  xhInput: function (e) {
    this.setData({
      xsno: e.detail.value
    })
  },
  xmInput: function (e) {
    this.setData({
      xsname: e.detail.value
    })
  },
  submit: function () {
    var gitno = this.data.gitno;
    var xsno = this.data.xsno;
    var bjname = this.data.bjname;
    var xsname = this.data.xsname;

    if (gitno == '' || xsno == '') {
      wx.showToast({
        title: '必须输入git账号和学生号',
        icon: 'none'
      })
      return;
    }
    wx.request({
      url: app.globalData.usite + '/cmsv1/apis/setting.ashx',
      method: 'GET',
      data: { openId: app.globalData.openID, gitno: gitno, xsno: xsno, bjname: bjname, xsname: xsname },
      header: { 'Accept': 'application/json' },
      success: function (res) {
        if (res) {
          wx.showToast({
            title: '配置成功',
            icon: 'success'
          })
        }
        console.log(res)
      }
    })
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
    this.setData({
      usite: app.globalData.usite,
      uopenid: app.globalData.openID,
    });
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