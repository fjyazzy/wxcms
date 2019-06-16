Page({

  /**
   * 页面的初始数据
   */
  data: {
    priceIcon: "",
    currentFatherIndex: 0,
    questionnaireArray: [
      {
        "type": "SCQ",
        "content": {
          "description": "你最喜欢吃的水果是什么?",
          "options":
            [
              { "id": 1, "name": "苹果", "isSelected": false },
              { "id": 2, "name": "香蕉", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "你使用的手机系统是?",
          "options":
            [
              { "id": 1, "name": "iOS", "isSelected": false },
              { "id": 2, "name": "安卓", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "你最喜欢的颜色是什么?",
          "options":
            [
              { "id": 1, "name": "红色", "isSelected": false },
              { "id": 2, "name": "蓝色", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "你喜欢什么运动?(多选)",
          "options":
            [
              { "id": 1, "name": "篮球", "isSelected": false },
              { "id": 2, "name": "足球", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "你对你的生活满意吗?",
          "answer": "写下你的感想"
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
  // fun : function(){
  //   var q = {
  //     test: this.data.test,
  //     test2: this.data.test2
  //   }
  //   wx.cloud.callFunction({
  //     name: 'release_questionnaire',
  //     data: {
  //       content: JSON.stringify(q)
  //     },
  //     success: res => {
  //       // test = JSON.stringify(res)
  //       // this.setData({
  //       //   test : JSON.stringify(res.result.results.data[0].description)
  //       // })
  //       console.log('success')
  //     }
  //   })
  // },

  // fun2 : function(){
  //   wx.cloud.callFunction({
  //     name: 'get_all_questionnaire',
  //     success: res => {
  //       console.log(res)
  //       var last = res.result.results.data[8].content
  //       this.setData({
  //         test: JSON.parse(last).test
  //       })
  //       console.log('success')
  //     }
  //   })
  // }
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
