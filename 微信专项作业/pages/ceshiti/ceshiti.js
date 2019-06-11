Page({
  data: {
    items: [
      { name: 'xx1', value: '1个' },
      { name: 'xx2', value: '2个' },
      { name: 'xx3', value: '3个' },
      { name: 'xx4', value: '4个' },
    ],
      xianshi:true
  },
  ts:function(){
    this.setData({
      xianshi:false
    })
    console.log("xianshi");
  }
})
