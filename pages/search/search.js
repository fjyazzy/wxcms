var app = getApp()

Page({
  data: {
    focus: true,
    isHide: true,
    searchWord: "",
    diseaseItem: {},
    articleItem: {},
    diseasePageIndex: 1,
    articlePageIndex: 1,
    pageSize: 3,
    noSearchData: false,
    noSearchResult: false,
    isDisabled: true,
    hiddenLoading: true,
    isShowArticle : 0,
    p:0,
  },
  onLoad: function (option) {
    var that = this;
    var backNum = 0;
    if (option.q != null) {
      that.setData({
        searchWord: option.q,
        noSearchData: true,
        focus: false,
        isHide: false,
        hiddenLoading: false
      });
      /**
      //发送请求回去初始化数据
      wx.request({
        url: app.globalData.appHost + '/skydriveinterface',
        data: { name: option.q },
        method: 'GET',
        success: function (res) {
          //如果没有相关文章
          if (res.data.total == 0) {
            if (backNum != 0) {

            } else {
              that.setData({
                noSearchResult: true,
              })
            }
          } else {
            that.setData({
              noSearchResult: false,
            })
          }
          backNum++;
          //如果成功取得数据
          res.data.isShowDisease = res.data.total > 3;
          for (var i = 0; i < res.data.List.length; i++) {
            if (i == 0) {
              res.data.List[i].isHideContent = false;
              res.data.List[i].isHideDown = true;
              res.data.List[i].isHideUp = false;
            } else {
              res.data.List[i].isHideContent = true;
              res.data.List[i].isHideDown = false;
              res.data.List[i].isHideUp = true;
            }
          }
          that.setData({
            diseaseItem: res.data
          })
        },
      })**/


      wx.request({
        url: app.globalData.appHost,
        data: {
          jsonrpc: app.globalData.jsonrpc,
          "method": "Search.index",
          params: { "username": app.globalData.username, "password": app.globalData.password, "key": option.q, "p": 0},
          id: app.globalData.id,
           },
        method: 'POST',
        success: function (res) {
          //console.log(res.data.result)
          //如果没有相关文章
          if (res.data.result.total == 0) {
            if (backNum != 0) {

            } else {
              that.setData({
                noSearchResult: true,
                hiddenLoading: true,
              })
            }
          } else {
            that.setData({
              noSearchResult: false,
              hiddenLoading: true,
            })
          }
          backNum++;
          //如果成功取到相关文章
          //console.log(res.data.result.total)
          res.data.result.isShowArticle = res.data.result.total > 3;
          that.setData({
            articleItem: res.data.result,
            p: res.data.result.nextpage
          });

        },
      })
    }

  },

  getDetail: function (e) {
    //console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../detail/detail?s=' + encodeURIComponent(e.currentTarget.dataset.id) + '&k=' + e.currentTarget.dataset.title
    })
  },
  getMoreDisease: function (e) {
    var that = this
    //console.log(that.data.searchWord)
    wx.request({
      url: app.globalData.appHost + '/ColleagueCircle/Search/GetDieaseList',
      data: { name: that.data.searchWord },
      method: 'GET',
      success: function (res) {
        //如果成功取到相关疾病
        var pageCount = Math.ceil(res.data.total / that.data.pageSize);
        if (that.data.diseasePageIndex == pageCount) {
          //就说明到最后一页
          that.data.diseaseItem.isShowDisease = false;
        } else {
          that.data.diseaseItem.isShowDisease = true;
        }
        for (var i = 0; i < res.data.List.length; i++) {
          res.data.List[i].isHideContent = true;
          res.data.List[i].isHideDown = false;
          res.data.List[i].isHideUp = true;
        }
        that.data.diseaseItem.List.push(...res.data.List);
        that.setData({
          diseaseItem: that.data.diseaseItem
        })
      },
    })
  },
  getMoreArticle: function (e) {
    var that = this
    that.setData({
      hiddenLoading: false
    });
    wx.request({
      url: app.globalData.appHost,
      data: {
        jsonrpc: app.globalData.jsonrpc,
        "method": "Search.index",
        params: { "username": app.globalData.username, "password": app.globalData.password, "key": that.data.searchWord, "p": that.data.p },
        id: app.globalData.id,
      },
      method: 'POST',
      success: function (res) {

        var pageCount = Math.ceil(res.data.result.total / 15);
        if (res.data.result.nextpage == 'end') {
          //就说明到最后一页
          that.data.articleItem.isShowArticle = false;
        } else {
          that.data.articleItem.isShowArticle = true;
        }
    
        var arr = Object.keys(res.data.result.list).length;
        var itemleng = Object.keys(that.data.articleItem.list).length;
        
        for(var i = 0; i<arr;i++){
          that.data.articleItem.list[itemleng + i] = res.data.result.list[i]
        }
        
        //that.data.articleItem.List.push(res.data.List[1]);
        //console.log(that.data.articleItem.List)
        //that.data.articleItem.List.push(...res.data.List);
        that.setData({
          articleItem: that.data.articleItem,
          p: res.data.result.nextpage,
          hiddenLoading: true
        })
      },
    })
  },
  excuteSearch: function (e) {
    var that = this;
    var backNum = 0;
    //清空上次的search结果
    that.setData({
      noSearchResult: false,
      hiddenLoading: false,
    })

    if (that.data.searchWord == "") {
      //清除上次搜索结果
      that.setData({
        searchWord: "",
        diseaseItem: {},
        articleItem: {},
        diseasePageIndex: 1,
        articlePageIndex: 1,
        noSearchData: false,
        hiddenLoading: true,
      })
      wx.showToast({
        title: '请先输入关键字',
        icon: 'loading',
        duration: 1000
      });
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
      
    }

    //发送请求回去初始化数据
    /**
    wx.request({
      url: app.globalData.appHost + '/skydriveinterface',
      data: {name: that.data.searchWord },
      method: 'GET',
      success: function (res) {
        console.log(res);
        //如果没有相关文章
        if (res.data.total == 0) {
          if (backNum != 0) {

          } else {
            that.setData({
              noSearchResult: true,
            })
          }
        } else {
          that.setData({
            noSearchResult: false,
          })
        }
        backNum++;
        //如果成功取到相关疾病
        res.data.isShowDisease = res.data.total > 3;
        //循环赋值 
        for (var i = 0; i < res.data.List.length; i++) {
          if (i == 0) {
            res.data.List[i].isHideContent = false;
            res.data.List[i].isHideDown = true;
            res.data.List[i].isHideUp = false;
          } else {
            res.data.List[i].isHideContent = true;
            res.data.List[i].isHideDown = false;
            res.data.List[i].isHideUp = true;
          }
        }
        that.setData({
          diseaseItem: res.data,
        })
      },
    })
    **/
    wx.request({
      url: app.globalData.appHost,
      data: {
        jsonrpc: app.globalData.jsonrpc,
        "method": "Search.index",
        params: { "username": app.globalData.username, "password": app.globalData.password, "key": that.data.searchWord, "p": 0 },
        id: app.globalData.id,
      },
      method: 'POST',
      success: function (res) {
        //console.log(res);
        //如果没有相关文章
        if (res.data.result.total == 0) {
          if (backNum != 0) {

          } else {
            that.setData({
              noSearchResult: true,
              hiddenLoading: true,
            })
          }
        } else {
          that.setData({
            noSearchResult: false,
            hiddenLoading: true,
          })
        }
        backNum++;
        //如果成功取到相关文章
        //console.log(res.data.total);
        res.data.result.isShowArticle = res.data.result.total > 3;
        that.setData({
          articleItem: res.data.result,
          p: res.data.result.nextpage
        });
      },
    })
  },
  inputHandler: function (e) {
    this.setData({
      searchWord: e.detail.value
    })
    if (this.data.searchWord != "") {
      this.setData({
        isHide: false
      })
    } else {
      this.setData({
        isHide: true
      })
    }
  },
  focusHandler: function (e) {
    if (this.data.searchWord != "") {
      this.setData({
        isHide: false
      })
    }
  },
  blurHandler: function (e) {
    if (this.data.searchWord == "") {
      this.setData({
        isHide: true
      })
    }
  },
  clearInput: function (e) {
    if (this.data.searchWord != "") {
      this.setData({
        isHide: true,
        focus: false,
        searchWord: ""
      })
    }
  },
  rollUp: function (e) {
    var sub = e.currentTarget.dataset.sub;
    //变化当前item
    if (this.data.diseaseItem.List.length > 0) {
      this.data.diseaseItem.List[sub].isHideContent = true;
      this.data.diseaseItem.List[sub].isHideUp = true;
      this.data.diseaseItem.List[sub].isHideDown = false;
    }
    this.setData({
      diseaseItem: this.data.diseaseItem
    })

  },
  rollDown: function (e) {
    var sub = e.currentTarget.dataset.sub;
    //变化当前item
    if (this.data.diseaseItem.List.length > 0) {
      this.data.diseaseItem.List[sub].isHideContent = false;
      this.data.diseaseItem.List[sub].isHideUp = false;
      this.data.diseaseItem.List[sub].isHideDown = true;
    }
    this.setData({
      diseaseItem: this.data.diseaseItem
    })
  },
  onShareAppMessage: function () {
    return {
      title: '网盘搜索',
      desc: '网盘数据建搜。',
      path: '/pages/index/index'
    }
  }
})