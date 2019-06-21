// // map.js
// Page({
//   data: {
//     markers: [{
//       iconPath: '/resources/others.png',
//       id: 0,
//       latitude: 23.099994,
//       longitude: 113.324520,
//       width: 50,
//       height: 50
//     }],
//     polyline: [{
//       points: [{
//         longitude: 113.3245211,
//         latitude: 23.10229
//       }, {
//         longitude: 113.324520,
//         latitude: 23.21229
//       }],
//       color: '#FF0000DD',
//       width: 2,
//       dottedLine: true
//     }],
//     controls: [{
//       id: 1,
//       iconPath: '/resources/location.png',
//       position: {
//         left: 0,
//         top: 300 - 50,
//         width: 50,
//         height: 50
//       },
//       clickable: true
//     }]
//   },
//   regionchange(e) {
//     console.log(e.type)
//   },
//   markertap(e) {
//     console.log(e.markerId)
//   },
//   controltap(e) {
//     console.log(e.controlId)
//   }
// })
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
      iconPath: '../images/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '../images/location.png'
    }]
  },
  onReady: function (e) {
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
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
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
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})
