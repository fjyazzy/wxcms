// map.js
Page({
  data: {
    markers: [{
      id: 0,
      latitude: 39.903,
      longitude: 116.397,
      width: 40,
      height: 60
    }],
    polyline: [{
      points: [{
        longitude: 116.397,
        latitude: 39.903
      }, {
          longitude: 116.397,
          latitude: 39.903
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/car.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
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
