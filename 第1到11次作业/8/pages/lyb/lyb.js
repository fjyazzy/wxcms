//index.js
//实现函数
Page({

  data: {
    inputVal: "",//留言框内的数据
    msgData: [],//所有留言数据
    msgData1: ""
  },
  changeInputVal(ev) {
    this.setData({
      inputVal: ev.detail.value//将留言框的数据存储到inputVal中，方便添加留言时获取
    });
  },
  addMsg() {
    //console.log(this.data.inputVal);
    var list = this.data.msgData;//获取所有留言
    list.push({//向list中添加当前添加的留言
      msg: this.data.inputVal
    });
    this.setData({//将所有留言更新到msgData中。
      msgData: list,
      inputVal: ""//清空留言框内的内容
    });
    /*获取storage中的所有数据*/
    var list1 = this.data.msgData1;
    for (var i = 0; i < list.length; i++) {
      list1.push({
        msg: list[i].msg
      });
    }
    /*把新添加的数据添加到要存入stroage的数组中*/
    wx.setStorage({
      key: 'msgData1',
      data: list1,
    })
    /**把数据存至stroage */
    var that = this;
    wx.getStorage({
      key: 'msgData1',
      success: function (res) {
        that.setData({
          msgData1: res.data
        });
      },
    })

  },
  deleMsg(ev) {
    var list = this.data.msgData;
    var n = ev.target.dataset.index;//获取当前留言的index
    list.splice(n, 1);//删除索引号为n的数据
    this.setData({//将所有留言更新到msgData中
      msgData: list
    });
  },
  deleMsg1(ev) {
    var list = this.data.msgData1;
    var n = ev.target.dataset.index;//获取当前留言的index
    list.splice(n, 1);//删除索引号为n的数据
    this.setData({//将所有留言更新到msgData中
      msgData1: list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**把storage中的内容取出并赋值给msgData1 */
    var that = this;
    wx.getStorage({
      key: 'msgData1',
      success: function (res) {
        that.setData({
          msgData1: res.data
        });
      },
    })
  },
})
