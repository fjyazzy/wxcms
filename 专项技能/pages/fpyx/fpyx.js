// pages/fpyx/fpyx.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    newArr: [{
      id: 1,
      showA: 'block',
      showB: 'none',
    },
    {
      id: 2,
      showA: 'block',
      showB: 'none',
    },
    {
      id: 3,
      showA: 'block',
      showB: 'none',
    }, {
      id: 4,
      showA: 'block',
      showB: 'none',
    }
    ],
    firstClickId: 0
  },
  //点击切换卡片
  change: function (e) {
    var id = e.currentTarget.dataset.id;
    this.data.firstClickId = id;
    var newArr = this.data.newArr;
    //得到当前的卡片
    var currentData = newArr[id - 1];
    if (currentData.showA == 'block') {
      currentData.showA = 'none';
      currentData.showB = 'block';
      newArr[id - 1] = currentData;
      this.setData({
        newArr: newArr
      })
    } else {
      currentData.showA = 'block';
      currentData.showB = 'none';
      newArr[id - 1] = currentData;
      this.setData({
        newArr: newArr
      })

    }
  },
})
