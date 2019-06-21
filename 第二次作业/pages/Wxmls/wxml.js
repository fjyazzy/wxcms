// pages/Tools/tools.js
const app = getApp()
Page({
  data: {
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
    numberArray: [1, 2]

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
  },

})
