// map.js
Page({
  result: '',
  data: {
    markers: [{
      iconPath: '/images/car.png',
      id: 0,
      latitude: 25.9304278481,
      longitude: 117.3627955657,
      width: 40,
      height: 60
    }],
     TopMenuList: [{
      "mlno": "01",
      "mlname": "船长",
      "mltext": "海贼王路飞"
    }, {
      "mlno": "02",
      "mlname": "副船长",
      "mltext": "世界第一剑豪索隆"
    }, {
      "mlno": "03",
      "mlname": "厨师",
      "mltext": "找到All Blue山治"
    }, {
      "mlno": "04",
      "mlname": "狙击手",
      "mltext": "勇敢的海上战士乌索普"
    }, {
      "mlno": "05",
      "mlname": "航海士",
      "mltext": "绘制世界地图娜美"
    }, {
      "mlno": "06",
      "mlname": "船医",
      "mltext": "制作出万能药，帮助所有需要帮助的人乔巴"
    }, {
      "mlno": "07",
      "mlname": "考古学家",
      "mltext": "解开历史正文，找到关于三大武器的秘密罗宾"
    }, {
      "mlno": "08",
      "mlname": "船匠",
      "mltext": "乘坐自己制作的梦想之船绕伟大航线一周弗兰奇"
    }, {
      "mlno": "09",
      "mlname": "音乐家",
      "mltext": "与拉布汇合布鲁克"
    }, {
      "mlno": "10",
      "mlname": "舵手",
      "mltext": "帮助路飞成为海贼王，让鱼人族获得真正的自由甚平"
    }],
    imgList: [{
      imagePath: "/images/1.jpg",
      pagePath: "../lxjsq/lxjsq"
    }, {
      imagePath: "/images/5.png",
      pagePath: "../lyb/lyb"
    }, {
      imagePath: "/images/3.png",
      pagePath: "../map/map"
    }, {
      imagePath: "/images/5.png",
      pagePath: "../table/table"
    }],
    ItemList: [
      {
        "pagename": "海贼王新资讯",
        "pagetext": "../index/index"
      },
      {
        "pagename": "路飞船员的上船时间和地点",
        "pagetext": "../czm/czm"
      },
      {
        "pagename": "路飞船员的悬赏金",
        "pagetext": "../map/map"
      }],
    polyline: [{
      points: [{
        longitude: 117.3627955657,
        latitude: 25.9304278481
      }, {
        longitude: 117.3627955657,
        latitude: 25.9304278481
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/car.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }, onLoad: function () {

  },

  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        _this.setData({
          result: result,
        })
      }
    })
  }
})