// pages/orders/orders.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    title:"推荐文章",
    uhide: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.title);
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl":"/images/car.png",
          "title":"微信小程序开发技巧1111",
          "wzgs":"微信小程序开发技巧一微信小程序开发技巧一微信小程序开发技巧一微信小程序开发技巧一",
          "cate": "推荐文章",          
          "fbsj":"2019.4.2",
          "purl":"/pages/orders/orders"
        },
        {
          "id": 2,
          "imgurl": "/images/car.png",
          "title": "微信小程序开发技巧222222",
          "wzgs": "微信小程序开发技巧一微信小程序开发技巧一微信小程序开发技巧一微信小程序开发技巧一",
          "cate": "推荐文章",         
          "fbsj": "2019.4.2",
          "purl": "/pages/orders/orders"
        },
        {
          "id": 3,
          "imgurl": "/images/car.png",
          "title": "微信小程序开发技巧333333",
          "wzgs": "微信小程序开发技巧一微信小程序开发技巧一微信小程序开发技巧一微信小程序开发技巧一",
          "cate": "推荐文章",   
          "fbsj": "2019.4.2",
          "purl": "/pages/orders/orders"
        },
      ]
    };
    //设置车辆展示信息
    that.setData({
      messInfoData: data.datas,
      id: options.id,
      title: options.title
    })
  },
  //点击切换隐藏和显示
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
  }
})