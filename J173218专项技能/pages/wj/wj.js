// pages/wj/wj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionnaireArray: [
      {
        "type": "MCQ",
        "content": {
          "description": "你当前只要在玩什么网络游戏？",
          "options":
            [
              { "id": 1, "name": "角色扮演大型游戏（英雄联盟，魔兽，传奇）", "isSelected": false },
              { "id": 2, "name": " 休闲竞技类游戏（QQ飞车，QQ炫舞，穿越火线）", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "你听过英雄联盟这款游戏吗？",
          "options":
            [
              { "id": 1, "name": "没有", "isSelected": false },
              { "id": 2, "name": "知道", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "英雄联盟这款游戏给你的感觉？",
          "options":
            [
              { "id": 1, "name": "技术性强", "isSelected": false },
              { "id": 2, "name": "团队意识流的", "isSelected": false },
              { "id": 3, "name": " 娱乐流行的", "isSelected": false },
              { "id": 4, "name": "其他", "isSelected": false }
            ]
        }
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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

  },

  goBack: function () {
    console.log('to task page')
    wx.switchTab({
      url: '../task/task',
    })
  },

  getTempFatherIndex: function (input) {
    var tempFatherIndex = input.currentTarget.dataset.id;
    //console.log('currentFatherIndex: ' + tempFatherIndex);
    this.setData({
      currentFatherIndex: tempFatherIndex,
    });
  },

  radioChangeSCQ: function (input) {
    var tempFatherIndex = this.data.currentFatherIndex;
    var tempArray = this.data.questionnaireArray;
    for (var i in tempArray[tempFatherIndex].content.options) {
      if (tempArray[tempFatherIndex].content.options[i].name == input.detail.value) {
        tempArray[tempFatherIndex].content.options[i].isSelected = true;
      }
      else {
        tempArray[tempFatherIndex].content.options[i].isSelected = false;
      }
    }
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  checkboxChangeMCQ: function (input) {
    // console.log(input.detail.value);
    var flag = false;
    var tempFatherIndex = this.data.currentFatherIndex;
    var tempArray = this.data.questionnaireArray;
    for (var i in tempArray[tempFatherIndex].content.options) {
      flag = false;
      for (var j in input.detail.value) {
        if (tempArray[tempFatherIndex].content.options[i].name == input.detail.value[j]) {
          flag = true;
        }
      }
      if (flag == true) {
        tempArray[tempFatherIndex].content.options[i].isSelected = true;
      }
      else {
        tempArray[tempFatherIndex].content.options[i].isSelected = false;
      }
    }
    this.setData({
      questionnaireArray: tempArray,
    });
  },


  complete: function () {
    console.log(this.data.questionnaireArray);
  },
})
