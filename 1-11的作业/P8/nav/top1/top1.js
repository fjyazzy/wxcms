// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    TopMenuList: [{
      "mlno": "01",
      "mlname": "首页",
      "mltext": "首页"
    }, {
      "mlno": "02",
      "mlname": "限时特优",
      "mltext": "限时优惠"
    },
    {
      "mlno": "03",
      "mlname": "疯狂抢购",
      "mltext": "疯狂抢购"
    },],

    imgList: [{
      imagePath: "../../images/轮播图1.jpg",
      pagePath: "/pages/calc/calc"
    }, {
      imagePath: "../../images/轮播图2.jpg",
      pagePath: "/pages/lxjsq/lxjsq"
    }, {
      imagePath: "../../images/轮播图3.jpg",
      pagePath: "/pages/lxjsq/lxjsq"
    }
    ]

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