// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [],
  },
  attached() {
  },
  methods: {
    //显示页面代码
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
            ItemList:JSON.parse(str2),
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }

  }
})
