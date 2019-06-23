// pages/wjdc/wjdc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentFatherIndex: 0,
    questionnaireArray: [
      {
        "type": "SCQ",
        "content": {
          "description": "你喜欢去图书馆看书吗?",
          "options":
            [
              { "id": 1, "name": "一周一次", "isSelected": false },
              { "id": 2, "name": "几乎不去", "isSelected": false },
              { "id": 3, "name": "偶尔去", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "你喜欢你们学校吗?",
          "options":
            [
              { "id": 1, "name": "喜欢", "isSelected": false },
              { "id": 2, "name": "一般", "isSelected": false },
              { "id": 3, "name": "不喜欢", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "你会去逛你们的校园吗?",
          "options":
            [
              { "id": 1, "name": "喜欢", "isSelected": false },
              { "id": 2, "name": "一般", "isSelected": false },
              { "id": 3, "name": "不喜欢", "isSelected": false }
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "你认为你们食堂的饭菜好吃吗?",
          "options":
            [
              { "id": 1, "name": "好吃", "isSelected": false },
              { "id": 2, "name": "一般", "isSelected": false },
              { "id": 3, "name": "不好吃", "isSelected": false }
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "你经常去锻炼身体吗?",
          "options":
            [
              { "id": 1, "name": "经常", "isSelected": false },
              { "id": 2, "name": "偶尔", "isSelected": false },
              { "id": 3, "name": "几乎不去", "isSelected": false }
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

  bindblurAnswerOfSAQ: function (input) {
    var tempIndex = input.currentTarget.dataset.id;
    var tempArray = this.data.questionnaireArray;
    tempArray[tempIndex].content.answer = input.detail.value;
    // console.log(tempArray[tempIndex].content);
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  complete: function () {
    console.log(this.data.questionnaireArray);
  },
})
