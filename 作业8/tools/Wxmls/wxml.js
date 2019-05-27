// pages/Tools/tools.js
const app = getApp()
Page({
  data: {
    userInfo: {},
    message: 'Hello MINA!',
    array: [1, 2, 3],
    view: 'APP',
    count: 1,
    id:0,
    condition: true,
    flag:false,
    a:1,
    b:2,
    c:3,
    length:7,
    object: { key: 'Hello '},
    array: ['MINA','zzy'],
    array2: [{message: 'foo'}, {message:'bar'}],
    objectArray: [
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],

    numberArray: [1, 2],
    item1: { index: 0, msg: 'template', time: '2016-09-15' },
    item2: { index: 1, msg: 'template2', time: '2017-09-15' },
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
  },

  tapName(event) {
    console.log(event)
  },

  //添加add事件开始
  add(e) {
    this.setData({
      count: this.data.count + 1
    })
  },
   //添加add事件结束

   //体验wx:key
   //随机调整函数
  switch(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  //对象增加一项函数
  addToFront(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  //数组增加一项函数
  addNumberToFront(e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
 //体验wx:key

  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
    })
    
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter()
      wx.showModal({
        title: '提示',
        content: '当前微信版本支持蓝牙接口。'
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }


  },

})
