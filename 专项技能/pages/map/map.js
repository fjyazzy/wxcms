// pages/map/map.js
Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/images/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/images/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('Map'),
    // 改为手动定位
    // this.mapCtx.moveToLocation(),
    console.log('函数执行完成')
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
})

