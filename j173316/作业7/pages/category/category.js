// pages/category/category.js
const app = getApp()
Page({
  data: {
    pagelist:{},
    id:0,
    title: "推荐文章",
    uhide: 0,
  },
  onLoad: function (options) {
    this.getData(options);
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.usite + '/cmsv1/apis/getPagelist.ashx?mlh=' + options.id,
      header: { 'content-type': 'applciation/json;charset=UTF-8' },
      method: 'GET',
      success: function (res) {
        var str2 = res.data.substr(1,res.data.length-2)
        console.log(str2);
        that.setData({
          pagelist: JSON.parse(str2),
        })
      },
      fail: function (err) {
        console.log(err)
      }
    });
    that.setData({
      id: options.id,
      title: options.title
    });
  },
  //点击切换隐藏和显示
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    console.log(itemId);
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