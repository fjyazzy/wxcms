Page({
  data: {
    a: Math.floor(Math.random() * 100),
    b: 0,
    sc: " ",
    sc1: " ",
    a: 1000,
    b: 10,
    c: 1,
    cs: [],
    cs1: [],
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
      }
    ],
  },
  shuzi: function (e) {
    this.setData({
      b: e.detail.value
    })
  },
  ss: function (e) {
    var a = this.data.a;
    var b = this.data.b;
    var sc1 = "";
    var sc = this.data.sc;
    if (a == b) {
      sc1 = "恭喜你猜对了"
    } else if (a > b) {
      sc1 = "你猜的数字小了"
    } else {
      sc1 = "你猜的数字大了"
    }
    this.setData({
      sc: sc1
    })
  },
  benjin: function (e) {
    this.setData({
      a: e.detail.value
    })
  },
  lixi: function (e) {
    this.setData({
      b: e.detail.value
    })
  },
  jie: function (e) {
    this.setData({
      c: e.detail.value
    })
  },
  bindButtonTap: function (e) {
    var benjin = this.data.a;
    var lilv = this.data.b;
    var jie = this.data.c;
    var cs = new Array();
    var cs1 = new Array();
    var cs = this.data.cs;
    for (var i = 0; i < jie; i++) {
      benjin = benjin + benjin * (lilv / 100)
      cs1[i] = benjin
    }
    this.setData({
      cs: cs1
    })
  }
})