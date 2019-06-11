Component({
  properties:{

  },

  data:{
    TopMenuList: [{ "mlno": "01", "mlname": "门户", "mltext": "存放门户页面信息" }, { "mlno": "02", "mlname": "文章推荐", "mltext": "特色文章推荐在主界面上显示" }, { "mlno": "03", "mlname": "经典代码", "mltext": "包含WXML,CSS,javascript, vb.net等代码" }, { "mlno": "04", "mlname": "应用案例", "mltext": "各种实际应用系统结构和原理介绍" }, { "mlno": "05", "mlname": "服务购买", "mltext": "提供站点前能够提供的服务和报价" }, { "mlno": "06", "mlname": "环境配置", "mltext": "应用环境配置相关文章" }, { "mlno": "07", "mlname": "首页列表", "mltext": "首页列表管理" }, { "mlno": "08", "mlname": "滚动导航", "mltext": "滚动导航链接" }, { "mlno": "|", "mlname": "|", "mltext": "|"}],
  },

  attached(){
  },

  methods:{
    showpage: function () {
      var that = this;
      wx.request({
        url: that.data.usite + '/cmsv1/apis/getHomePagelist.ashx?mlh=07',
        header: { 'content-type': 'applciation/json;charset=UTF-8' },
        method: 'GET',
        success: function (res) {
          var str2 = res.data.substr(1, res.data.length - 2)
          console.log(str2);
          that.setData({
            ItemList: JSON.parse(str2),
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
  },
})