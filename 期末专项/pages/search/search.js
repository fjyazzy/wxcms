// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isclose: true,
    searchvalue: "",
    searchsubmit: true,
    searchreset: false,
    hotsearch1: [{ message: "黑色象牙咖啡" }, { message: "麝香猫咖啡" }, { message: "蓝山咖啡" }, { message: "阿里山玛翡" }, { message: "图兰朵咖啡" }, { message: "摩卡咖啡" }, { message: "夏威夷科纳" }, { message: "巴西咖啡" }, { message: "哥伦比亚咖啡" }, { message: "哈拉尔咖啡" }, { message: "拿铁咖啡" }, { message: "美式咖啡" }],
    falg: true,
    hotsearch2: [{ message: "卡布奇洛咖啡" }, { message: "白咖啡" }, { message: "焦糖玛琪朵咖啡" }, { message: "阿里山玛翡" }, { message: "图兰朵咖啡" }, { message: "摩卡咖啡" }, { message: "夏威夷科纳" }, { message: "巴西咖啡" }, { message: "哥伦比亚咖啡" }, { message: "哈拉尔咖啡" }, { message: "拿铁咖啡" }, { message: "美式咖啡" }],
    hotsearch3: [{ message: "维也纳咖啡" }, { message: "意大利咖啡咖啡" }, { message: "蓝山咖啡" }, { message: "阿里山玛翡" }, { message: "图兰朵咖啡" }, { message: "摩卡咖啡" }, { message: "夏威夷科纳" }, { message: "巴西咖啡" }, { message: "哥伦比亚咖啡" }, { message: "哈拉尔咖啡" }, { message: "拿铁咖啡" }, { message: "美式咖啡" }],
    historydata: [],
    historydatashow: false,
    searchresult: false,
    inputsearch: "",//输入框内的值,
    searchResult: [{ result: "摩卡咖啡" }, { result: "卡布奇洛" }, { result: "美式咖啡" }, { result: "蓝山咖啡" }, { result: "拿铁咖啡" }, { result: "意式咖啡" }, { result: "爱尔兰咖啡" }, { result: "猫屎咖啡" }, ]//虚拟的查询结果


  },
  /*输入框输入后触发，用于联想搜索和切换取消确认*/
  inputoperation: function (e) {
    this.setData({
      searchsubmit: false,
      searchreset: true,
      isclose: false,
      searchvalue: e.detail.value
      // searchvalue: this.data.searchvalue.concat(e.detail.value)
    })
  },
  //点击X
  resetinput: function () {
    this.setData({
      searchsubmit: true,
      searchreset: false,
      isclose: true,
      inputsearch: "",
      searchresult: false

      
    })
  },
  /*取消搜索 */
  cancelsearch: function () {
    wx.navigateBack({
      url: '../index/index'
    })
  },
  /*换一批操作 */
  changeother: function () {
    this.setData({
      falg: !this.data.falg
    })
  },
  /*点击搜索按钮触发*/
  searchbegin: function () {
    let that = this
    // wx.getStorage({
    //   key: 'historydata',
    //   success: function (res) {
    //     that.setData({
    //       historydata: res.data
    //     })
    //   }
    // })
    wx.setStorage({
      key: "historydata",
      data: that.data.historydata.concat(that.data.searchvalue)
    })
    console.log(that.data.historydata)
    //请求数据调页面
    // wx.navigateTo({
    //   url: '../detail/detail'
    // })
    this.setData({
      searchresult: true,
    })


  },
  //点击进入详情页
  gotodetail: function(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 历史搜索
    let that = this
    wx.getStorage({
      key: 'historydata',
      success: function (res) {
        console.log(res.data)
        that.setData({
          historydatashow: true,
          historydata: res.data
        })
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