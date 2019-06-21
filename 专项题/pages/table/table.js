//table.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    menuList: {},
    animationData: {},
    startPoint: {},
    dotPoint: {},
    startAngle: 0,
    tempAngle: 0,
    downTime: 0,
    upTime: 0,

  },
  showName: function (e) {
    var name = e.currentTarget.dataset.name;

    console.log(name);
  },
  onLoad: function () {
    var that = this

    app.getUserInfo(function (userInfo) {
    
      that.setData({
        userInfo: userInfo,
      })
    })
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth * 0.5;
        that.setData({
         
          dotPoint: { clientX: windowWidth, clientY: 250 }
        })
      }
    })
  },
  onReady: function (e) {
    var that = this;
    app.menuConfig = {
      menu: [
        { 'table': 0, 'menu': '我的账户', 'src': '/images/account.png' },
        { 'table': 1, 'menu': '信用卡', 'src': '/images/card.png' },
        { 'table': 2, 'menu': '投资理财', 'src': '/images/investment.png' },
        { 'table': 3, 'menu': '现金贷款', 'src': '/images/loan.png' },
        { 'table': 4, 'menu': '特色服务', 'src': '/images/service.png' },
        { 'table': 5, 'menu': '转账汇款', 'src': '/images/transfer.png' }
      ]
    }
    
    var menuConfig = app.menuConfig.menu,
      len = menuConfig.length,
      menuList = [],
      degNum = 360 / len  
    for (var i = 0; i < len; i++) {
      menuList.push({ deg: i * degNum, menu: menuConfig[i].menu, src: menuConfig[i].src });
      console.log("menu:" + menuConfig[i].menu)
    }
    that.setData({
      menuList: menuList
    });
  },
  
  buttonStart: function (e) {
    this.setData({
      startPoint: e.touches[0]
    })
    var x = this.data.startPoint.clientX - this.data.dotPoint.clientX;
    var y = this.data.startPoint.clientY - this.data.dotPoint.clientY;
    var startAngle = Math.asin(y / Math.hypot(x, y)) * 180 / Math.PI;
    this.setData({
      startAngle: startAngle
    })

  },
  buttonMove: function (e) {

    var downTime = Date.now();
    this.setData({
      downTime: downTime
    })
    var that = this;
    var endPoint = e.touches[e.touches.length - 1]
    
    var x = endPoint.clientX - this.data.dotPoint.clientX;
    var y = endPoint.clientY - this.data.dotPoint.clientY;
    var moveAngle = Math.asin(y / Math.hypot(x, y)) * 180 / Math.PI
    var quadrant = 1;
    if (x >= 0) {
      quadrant = y >= 0 ? 4 : 1;
    } else {
      quadrant = y >= 0 ? 3 : 2;
    }
    var tempAngle = 0;
   
    if (quadrant == 1 || quadrant == 4) {
      tempAngle += moveAngle - this.data.startAngle;
    } else
   
    {
      tempAngle += this.data.startAngle - moveAngle;
    }
    var menuConfig = app.menuConfig.menu;
    var menuList = [];
    for (var i = 0; i < this.data.menuList.length; i++) {
      menuList.push({ deg: this.data.menuList[i].deg + tempAngle, menu: menuConfig[i].menu, src: menuConfig[i].src });
    }
    this.setData({
      menuList: menuList
    })
  
    this.setData({
      startPoint: e.touches[e.touches.length - 1]
    })
    var endX = this.data.startPoint.clientX - this.data.dotPoint.clientX;
    var endY = this.data.startPoint.clientY - this.data.dotPoint.clientY;
    var startAngle = Math.asin(endY / Math.hypot(endX, endY)) * 180 / Math.PI;
    this.setData({
      startAngle: startAngle,
      tempAngle: tempAngle
    })
  },
  buttonEnd: function (e) {
    
    var that = this;
    var upTime = Date.now();
    var angleSpeed = this.data.tempAngle * 1000 / (upTime - this.data.downTime);
    if (Math.abs(angleSpeed) < 100) {
     
      return
    } else {
      
      if (angleSpeed > 0) {
        if (angleSpeed > 500) angleSpeed = 500
        var animationRun = wx.createAnimation({
          duration: 2000,
        
          timingFunction: 'ease-out'
        })
        that.animationRun = animationRun
        animationRun.rotate(angleSpeed).step()
        that.setData({
          animationData: animationRun.export(),
        })
      }
      else {
        if (angleSpeed < -500) angleSpeed = -500
        angleSpeed = Math.abs(angleSpeed);
        var animationRun = wx.createAnimation({
          duration: 2000,
         
          timingFunction: 'ease-out'
        })
        that.animationRun = animationRun
        animationRun.rotate(-angleSpeed).step()
        that.setData({
          animationData: animationRun.export(),
        })
      }
    }
  }
})


