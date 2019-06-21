
Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
     
    ],
    goods: {},
    refreshHeight: 0,//屏幕高度
    flag: true,
    searchLoading: true, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false,  //“没有数据”的变量，默认false，隐藏  
    _num: "1"//今秒杀数据切换
  },
  /*转发开始*/
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '梦想咖啡',
      path: '/page/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }, /*转发结束*/
  searchgoods: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }, dw: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  yg: function () {
    wx.navigateTo({
      url: '../gsxx/gsxx'
    })
  },
  dc: function () {
    wx.navigateTo({
      url: '../wjdc/wjdc'
    })
  },
  sma: function () {
    // 允许从相机和相册扫码
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

  
  demo: function (e) {
    let that = this
    that.setData({
      flag: false
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
  
})
