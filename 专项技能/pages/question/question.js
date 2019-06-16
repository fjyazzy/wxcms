// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFatherIndex: 0,
    questionnaireArray: [
      {
        "type": "SCQ",
        "content": {
          "description": "您的性别是？",
          "options":
            [
              { "id": 1, "name": "男", "isSelected": false },
              { "id": 2, "name": "女", "isSelected": false },
            ]
        }
      }, {
        "type": "SCQ",
        "content": {
          "description": "网购是否是您的主要购物方式？",
          "options":
            [
              { "id": 1, "name": "是", "isSelected": false },
              { "id": 2, "name": "偶尔", "isSelected": false },
              { "id": 2, "name": "不是", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "您选择网购的理由（多选）?",
          "options":
            [
              { "id": 1, "name": "价格便宜", "isSelected": false },
              { "id": 2, "name": "方便快捷", "isSelected": false },
              { "id": 3, "name": "商品种类齐全", "isSelected": false },
              { "id": 3, "name": "跟的上时代潮流", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      }, {
        "type": "MCQ",
        "content": {
          "description": "若网购不是您的主要购物方式，原因是（多选）?",
          "options":
            [
              { "id": 1, "name": "网络交易现金不安全", "isSelected": false },
              { "id": 2, "name": "看不到实物", "isSelected": false },
              { "id": 3, "name": "商品质量差", "isSelected": false },
              { "id": 3, "name": "价钱与实体店无较大差别", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      }, {
        "type": "MCQ",
        "content": {
          "description": "您网购是通常选择的网站是（多选）?",
          "options":
            [
              { "id": 1, "name": "淘宝网", "isSelected": false },
              { "id": 2, "name": "京东商城", "isSelected": false },
              { "id": 3, "name": "聚美优品", "isSelected": false },
              { "id": 3, "name": "苏宁易购", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "请输入您的名字",
          "answer": ""
        }
      }
    ],
  }, 
  complete : function(){
    wx.showToast({
      title: '提交成功',
      icon:'success',
    })
  }
})
