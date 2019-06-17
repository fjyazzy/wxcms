//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    typelist: [
      {
        pic: "notebook",
        id: 1,
        name: "键盘",
        goods: [
          {
            id: 1,
            title: "雷柏",
            pic: "../../image/04.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "外星人",
            pic: "../../image/05.jpg",
            price:299,
          },
          {
            id: 3,
            title: "茶轴",
            pic: "../../image/06.jpg",
            price: 399,
          },
          {
            id: 4,
            title: "背光耳机",
            pic: "../../image/07.jpg",
            price: 499,
          },
          {
            id: 1,
            title: "青轴",
            pic: "../../image/08.jpg",
            price: 599,
          },
          {
            id: 2,
            title: "牧马人",
            pic: "../../image/09.jpg",
            price: 699,
          },
          {
            id: 3,
            title: "黑轴",
            pic: "../../image/10.jpg",
            price: 799,
          },
          {
            id: 4,
            title: "红轴",
            pic: "../../image/11.jpg",
            price: 789,
          }
        ]
      },
      {
        pic: "ts",
        id: 2,
        name: "台式机",
        goods: [
          {
            id: 1,
            title: "外星人",
            pic: "../../image/12.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "联想",
            pic: "../../image/13.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "雷神",
            pic: "../../image/14.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "华硕",
            pic: "../../image/15.jpg",
            price: 169,
          }
        ]
      },
      {
        pic: "ws",
        id: 3,
        name: "电脑外设",
        goods: [
          {
            id: 1,
            title: "雷蛇",
            pic: "../../image/16.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "雷蛇北海",
            pic: "../../image/17.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "外星人",
            pic: "../../image/18.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "雷神",
            pic: "../../image/19.jpg",
            price: 169,
          }
        ]
      },
      {
        pic: "sjpj",
        id: 4,
        name: "手机配件",
        goods: [
          {
            id: 1,
            title: "探照灯",
            pic: "../../image/20.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "小灯泡",
            pic: "../../image/21.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "U盘",
            pic: "../../image/22.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "苹果U盘",
            pic: "../../image/23.jpg",
            price: 169,
          }
        ]
      },
      {
        pic: "sj",
        id: 5,
        name: "智能手机",
        goods: [
          {
            id: 1,
            title: "华为",
            pic: "../../image/24.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "苹果",
            pic: "../../image/25.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "荣耀",
            pic: "../../image/26.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "oppo",
            pic: "../../image/27.jpg",
            price: 169,
          }
        ]
      },
      {
        pic: "pcpj",
        id: 6,
        name: "pc配件",
        goods: [
          {
            id: 1,
            title: "雷柏v500 RGB机械键盘",
            pic: "../../image/28.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "雷柏v500 RGB机械键盘",
            pic: "../../image/29.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "雷柏v500 RGB机械键盘",
            pic: "../../image/30.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "雷柏v500 RGB机械键盘",
            pic: "../../image/31.jpg",
            price: 169,
          }
        ]
      },
      {
        pic: "shuma",
        id: 7,
        name: "数码",
        goods: [
          {
            id: 1,
            title: "Ricoh/理光 GR II 数码相机GR2 高清便携相机GRII",
            pic: "../../image/32.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "佳能m50微单相机女学生款Canon/佳能eos M50数码高清旅游vlog相机",
            pic: "../../image/33.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "索尼ILCE-6400L微单数码相机（16-50）A6400L新品 Vlog自拍套餐",
            pic: "../../image/34.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "Sony/索尼 ILCE-A6000L 微单 入门级 索尼相机 sony微单高清数码",
            pic: "../../image/35.jpg",
            price: 169,
          }
        ]
      },
      {
        pic: "znpd",
        id: 8,
        name: "智能穿戴",
        goods: [
          {
            id: 1,
            title: "【6期免息 赠无线蓝牙耳机】nubia/努比亚α 阿尔法柔性屏智能4G电话运动穿戴蓝牙手表腕机a",
            pic: "../../image/36.jpg",
            price: 169,
          },
          {
            id: 2,
            title: "microwear微穿戴L5智能手表男学生成人多功能圆屏触屏防水小米华米华为运动计步心率睡眠监测天气电子手环",
            pic: "../../image/37.jpg",
            price: 169,
          },
          {
            id: 3,
            title: "微穿戴智能手环男女测心率心电图血压监测小米oppo华为苹果防水睡眠计步器老年学生圆屏电子多功能运动手表",
            pic: "../../image/38.jpg",
            price: 169,
          },
          {
            id: 4,
            title: "智能彩屏运动手环蓝牙耳机二合一苹果安卓手机可通话手表男女智能穿戴腕表防丢计步器血压心率睡眠监测多功能",
            pic: "../../image/39.jpg",
            price: 169,
          } 
        ]
      },
    ]

  },
  onLoad: function () {
    console.log('onLoad')

  },
  onShareAppMessage: function (e) {
    return {
      title: "猴哥数码城",
      desc: "我的第一个小程序"
    }
  },
  navigateToShop: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log("navigateToShop--> ID:", id)
    wx.navigateTo({
      url: './good/good?typeId=' + id
    })
  },
  navigateToGood: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log("navigateToGood--> ID:", id)
    wx.navigateTo({
      url: './good/detail/detail?id=' + id
    })
  },
})
