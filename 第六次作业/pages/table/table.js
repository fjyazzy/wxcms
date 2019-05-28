Page({
  data: {
    jcs: ["时间","一二节", "三四节", "午休", "五六节", "七八节"],
    kcData: [
      ["周一","-","前沿技术课程","-","-","-"],
      ["周二", "微信开发", "-", "-", "-", "-"],
      ["周三", "JavaWeb", "JavaWeb", "-", "微信开发", "Web前端开发"],
      ["周四", "Web前端开发", "Web前端开发", "-", "JavaWeb", "JavaWeb"],
      ["周五", "Web前端开发", "Web前端开发", "-", "-", "-"],
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    
    //关闭本列表的红点
    wx.hideTabBarRedDot({
      index: 1,
    });
    
  }

})