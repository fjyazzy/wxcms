Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this;
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/4.gif"
        },
        {
          "id": 2,
          "imgurl": "../../images/10.gif"
        },
        {
          "id": 3,
          "imgurl": "../../images/11.gif"
        },
        {
          "id": 4,
          "imgurl": "../../images/12.gif"
        }
      ]
    };
    that.setData({
      lunboData: data.datas
    })
  }
})