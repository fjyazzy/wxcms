// map.js
Page({
  data: {
    markers: [{
      iconPath: '/images/car.png',
      id: 0,
      latitude: 23.099994,
      longitude: 118.550,
      width: 40,
      height: 60
    }],
    polyline: [{
      points: [{
        longitude: 118.400,
        latitude: 23.10229
      }, {
          longitude: 118.550,
        latitude: 23.21229
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
        top: 290 - 50,
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