// map.js
Page({
  data: {
    markers: [{
      iconPath: '/images/car.png',
      id: 0,
      latitude: 25.934410000,
      longitude: 117.3628170000,
      width: 40,
      height: 60
    }],
    polyline: [{
      points: [{
        longitude: 117.3628170000,
        latitude: 25.934410000
      }, {
          longitude: 117.3628170000,
          latitude: 25.934410000
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