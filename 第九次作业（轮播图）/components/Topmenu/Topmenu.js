Component({
  properties:{

  },
  data:{
    TopMenuList: [{
      "mlno": "01", "mlname": "门户-", "mltext": "存放门户页面信息"
    }, { "mlno": "02", "mlname": "文章推荐-", "mltext": "特色文章推荐在主页面显示" }, { "mlno": "03", "mlname": "经典代码-", "mltext": "包含wxml,css,javascript等代码" },{ "mlno": "04", "mlname": "应用案例-", "mltext": "各种实践应用系统结构和原理介绍" }, { "mlno": "05", "mlname": "购买服务-", "mltext": "提供服务和标价" }, { "mlno": "06", "mlname": "环境配置-", "mltext": "文章" }, { "mlno": "07", "mlname": "首页列表-", "mltext": "首页列表管理" }, { "mlno": "08", "mlname": "滚动导航-", "mltext": "滚动导航链接" }, { "mlno": "|", "mlname": "|", "mltext": "|" }],
  },
  attached(){

  },
  methods:{
showpage:function(){
  var that = this;
  wx.request({
    url:that.data.usite + '/cmsvl/apis/getcategory.ashx',
    header:{'content-type':'applciation/json;charset=UTF-8'},
    method:'GET',
    success:function(res){
      var str2 = res.data.substr(1, res.data.length - 2)
      console.log(str2);
      that.setData({
        TopMenuList:JSON.parse(str2),
      })
    },
    fail:function(err){
      console.log(err)
    }
  })
}
  },
})