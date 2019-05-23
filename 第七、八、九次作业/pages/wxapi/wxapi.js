// pages/wxapi/wxapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
getflist:function(){
  wx.getSavedFileList({
    success(res) {
      console.log(res.fileList)
    }
  })
},

getlocation:function(){
  wx.getLocation({
    type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
    success(res) {
      const latitude = res.latitude
      const longitude = res.longitude
      wx.openLocation({
        latitude,
        longitude,
        scale: 18
      })
    }
  })
},

showmenu:function(e){
  wx.showActionSheet({
    itemList: ['A', 'B', 'C', 'D'],  /*按钮的文字数组，数组长度最大为 6*/
    success(res) {
      console.log(res.tapIndex)
    },
    fail(res) {
      console.log(res.errMsg)
    }
  })
},

loaddata:function(e){
  wx.showLoading({
    title: '加载中',
  })
  setTimeout(function () {
    wx.hideLoading()
  }, 2000)
},
openmodel: function(e){
  wx.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading();

    wx.setNavigationBarTitle({
      title: '一个有关 API的页面'
    });

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    });

    wx.getSystemInfo({
      success(res) {
        wx.showToast({
          title: '获取成功',
          icon: 'success',
          duration: 2000
        })
        console.log(res.brand)
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    });

 
    wx.getStorageInfo({
      success(res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    });

    setTimeout(function () {
      wx.hideNavigationBarLoading()
    }, 5000);
    
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