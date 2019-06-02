// pages/orders/orders.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl":"../../images/car.png",
          "useDate":"2017-12-22",
          "cx":"奇瑞EQ1",
          "time":"1小时",
          "feiyong":"20元"
        },
        {
          "id": 2,
          "imgurl":"../../images/car.png",
          "useDate":"2017-12-22",
          "cx":"奇瑞EQ1",
          "time":"1小时",
          "feiyong":"21元"
        },
        {
          "id": 3,
          "imgurl":"../../images/car.png",
          "useDate":"2017-12-22",
          "cx":"奇瑞EQ1",
          "time":"1小时",
          "feiyong":"22元"
        },
        {
          "id": 4,
          "imgurl":"../../images/car.png",
          "useDate":"2017-12-22",
          "cx":"奇瑞EQ1",
          "time":"1小时",
          "feiyong":"23元"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
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