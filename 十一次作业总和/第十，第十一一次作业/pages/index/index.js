//index.js
//获取应用实例
var postData = require("data/data.js");
Page({
  data: {
    // text:"这是一个页面"
    postList: postData.postList,
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
  
    ny: 'true',
    defen: 0
  },

  nextQuestion: function () {
    var that = this;
    if (that.data.index < postData.postList.length - 1) {
      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
      
      
        ny: 'true'

      });
    }
  },
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1
      });
    }
  },
  btnOpClick: function (e) {
    var that = this;
    var select = e.currentTarget.id;
    var jieg = postData.postList[that.data.index].daan;
    if (select == jieg) {
      if (that.data.index < postData.postList.length - 1) {
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
       
      
        that.nextQuestion();
        this.setData({
          defen: that.data.index * 2
        })
      }
      else {
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
      
      
        that.gotonext();
      }
    }
    else {
      if (select == 'A') {
        this.setData({ bcA: that.data.bc_wrong });
      }
      else if (select == 'B') {
        this.setData({ bcB: that.data.bc_wrong });
      }
    
    }
  },

  xianshi: function () {
    this.setData({
      ny: ''
    })
  }
})
