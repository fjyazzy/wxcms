//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  scanCode: function(){
  wx.scanCode({
    success(res) {
      console.log(res)
    }
  })

// 只允许从相机扫码
wx.scanCode({
    onlyFromCamera: true,
    success(res) {
      console.log(res)
    }
  })
  },
  showA: function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      },
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

    wx.showTabBarRedDot({
      index: 1,
    });

    wx.showTabBar({
      index:1,
    });
  },
})