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
          "imgurl":"../../images/lie1.jpg",
          "useDate":"2019-7-7",
          "cx":"亲子乐游迪士尼+江南水乡乌镇园林",
          "time":"6天5夜",
          "feiyong":"2623元起/人"
        },
        {
          "id": 2,
          "imgurl":"../../images/lie2 .jpg",
          "useDate":"2019-7-22",
          "cx":"宋城千古情演出+三大夜景",
          "time":"6天5夜",
          "feiyong":"2020元起/人"
        },
        {
          "id": 3,
          "imgurl":"../../images/lie3.jpg",
          "useDate":"2019-8-05",
          "cx":"千岛湖海外海假日酒店",
          "time":"两天一夜",
          "feiyong":"1447元起"
        },
        {
          "id": 4,
          "imgurl":"../../images/lie4.jpg",
          "useDate":"2019-12-22",
          "cx":"三大夜景+千古情+西湖普陀",
          "time":"8天",
          "feiyong":"2930元起/人"
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