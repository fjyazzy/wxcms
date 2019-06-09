//index.js
//获取应用实例
const app = getApp()



data: {
  TopMenuList: [{ "mlno": "01", "mlname": "门户", "mltext": "存放门户页面信息" }, { "mlno": "02", "mlname": "文章推荐", "mltext": "特色文章推荐在主界面上显示" }, { "mlno": "03", "mlname": "经典代码", "mltext": "包含WXML,CSS,javascript，vb.net等代码" }, { "mlno": "04", "mlname": "应用案例", "mltext": "各种实际应用系统结构和原理介绍" }, { "mlno": "05", "mlname": "服务购买", "mltext": "提供站点能够提供的服务和报价。" }, { "mlno": "06", "mlname": "环境配置", "mltext": "应用环境配置相关文章" }, { "mlno": "07", "mlname": "首页列表", "mltext": "首页列表管理" }, { "mlno": "08", "mlname": "滚动导航", "mltext": "滚动导航链接" }, { "mlno": "|", "mlname": "|", "mltext": "|" }],



Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    
    proList:[{
      proName : "富安娜(FUANNA)",
      proPrice : 468.03
    }, {
      proName: "张安娜(FUANNA)",
      proPrice: 46
    }, {
      proName: "李安娜(FUANNA)",
      proPrice: 573.1
    }, {
      proName: "赵安娜(FUANNA)",
      proPrice: 8.09
    },{
      proName: "孙安娜(FUANNA)",
      proPrice: 99.4
    },{
      proName: "钱安娜(FUANNA)",
      proPrice: 1000.0
    }]
  }
})
