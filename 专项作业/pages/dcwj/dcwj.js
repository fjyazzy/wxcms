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
          "description": "怎样看待大学生的正常恋爱关系?",
          "options":
            [
              { "id": 1, "name": "很正常，不谈读什么大学", "isSelected": false },
              { "id": 2, "name": "影响学习，最好不要谈", "isSelected": false },
              { "id": 3, "name": "有利于共同学习，共同进步", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "你对学校环境不适应的原因是?",
          "options":
            [
              { "id": 1, "name": "大学特殊的人际关系", "isSelected": false },
              { "id": 2, "name": "文化、习俗等社会环境因素 ", "isSelected": false },
              { "id": 3, "name": "气候等自然因素差异", "isSelected": false }
            ]
        }
      },
      {
        "type": "BCQ",
        "content": {
          "description": "你觉得什么能成为你努力的动力?",
          "options":
            [
              { "id": 1, "name": "朋友的关心", "isSelected": false },
              { "id": 2, "name": "女友的鼓励", "isSelected": false },
              { "id": 3, "name": "家人的支持", "isSelected": false }
            ]
        }
      },
      {
        "type": "ACQ",
        "content": {
          "description": "对未来的大学生活是否有目标与规划?",
          "options":
            [
              { "id": 1, "name": "有", "isSelected": false },
              { "id": 2, "name": "没有", "isSelected": false },
              { "id": 3, "name": "有但是模糊", "isSelected": false }
            ]
        }
      },
      {
        "type": "CCQ",
        "content": {
          "description": "在您追逐理想的路途中，有什么原因让你想放弃的呢?",
          "options":
            [
              { "id": 1, "name": "受到别人的嘲笑，害怕自己做法和别人不一样，怕被孤立", "isSelected": false },
              { "id": 2, "name": "总是失败，失去信心 ", "isSelected": false },
              { "id": 3, "name": "找来找去找不到启程的路口，选择等待机会自己到来", "isSelected": false }
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "你的名字是?",
          "answer": ""
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
