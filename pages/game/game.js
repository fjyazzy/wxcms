Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: Math.ceil(Math.random() * 10),
    ts: 0,
    inputValue: "",
   
  },
  
  tsInput: function (e) {
    this.setData({
      ts: e.detail.value
      
    })
  },
  tjda: function (e) {
    var a = this.data.a;
    var value = this.data.ts;
    console.log(value);
    var list = ""
  if(value > a){
  list = "你输入的数字太大";
}else if (value < a) {
  list = "你输入的数字太小";
} else{
  list = "正确！";
}
this.setData({
  inputValue: list,
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