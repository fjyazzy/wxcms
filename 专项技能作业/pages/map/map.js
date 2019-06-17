// map.js
Page({
  data: {
    TopMove: [{
      
      name: "我的电影"
    },
    {
      name: "从来无意写实，"
    },
    {
      name: "它们是镜子，"
    },
    {
      name: "是现实的片断，"
    },
    {
      name: "几乎跟梦一样"
    },
    {
      name: "我的电影"
    },
    {
      name: "从来无意写实，"
    },
    {

      name: "它们是镜子，"
    },
    {
      name: "是现实的片断，"
    },
    
    ],
    
    markers: [{
      iconPath: '/images/23.png',
      id: 0,
      latitude: 25.95138,
      longitude: 118.36518,
      width: 40,
      height: 60
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/23.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 25.94138,
        longitude: 117.36518,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 25.94138,
        longitude: 117.36518,
      }, {
          latitude: 25.94138,
        longitude: 117.36518,
      }]
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
