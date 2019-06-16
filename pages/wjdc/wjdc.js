// pages/wjdc/wjdc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSubmit: false,
    xuanxiang: "B",
    xuanxiang1: "A",
    questionnaire_data: [
      {
        ques: "你的年龄()",
        ans1: "18岁以下",
        ans2: "19-30岁",
        ans3: "31-45岁",
        ans4: "46以上"
      },
      {
        ques: "你的收入()",
        ans1: "2000以下",
        ans2: "2000-4000",
        ans3: "4000-8000",
        ans4: "8000以上"
      }, {
        ques: "你的兴趣爱好()",
        ans1: "读书",
        ans2: "打游戏",
        ans3: "打篮球",
        ans4: "打豆豆"
      }, {
        ques: "你的学习成绩怎么样()",
        ans1: "优秀",
        ans2: "良好",
        ans3: "一般",
        ans4: "及格"
      }
    ]

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let{xuanxiang,xuanxiang1} = e.datail.value;
    this.setData({
      warn:"",
      isSubmit:true,
      xuanxiang,
      xuanxiang1
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