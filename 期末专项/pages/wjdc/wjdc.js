//index.js
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
          "description": "你经常喝咖啡吗？",
          "options":
            [
              { "id": 1, "name": "有", "isSelected": false },
              { "id": 2, "name": "偶尔", "isSelected": false },
              { "id": 2, "name": "没有", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "您喜欢喝的咖啡有（多选）?",
          "options":
            [
              { "id": 1, "name": "卡布奇洛", "isSelected": false },
              { "id": 2, "name": "摩卡咖啡", "isSelected": false },
              { "id": 3, "name": "拿铁咖啡", "isSelected": false },
              { "id": 3, "name": "美式咖啡", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      }, {
        "type": "MCQ",
        "content": {
          "description": "您认为喝咖啡的好处（多选）?",
          "options":
            [
              { "id": 1, "name": "消除疲劳", "isSelected": false },
              { "id": 2, "name": "具有解酒的功效", "isSelected": false },
              { "id": 3, "name": "有效预防胆结石，帮助人体减肥", "isSelected": false },
              { "id": 3, "name": "增强人体抗氧化功能", "isSelected": false },
              { "id": 3, "name": "其他", "isSelected": false }
            ]
        }
      }, {
        "type": "MCQ",
        "content": {
          "description": "您经常喝的咖啡有（多选）?",
          "options":
            [
              { "id": 1, "name": "卡布奇洛", "isSelected": false },
              { "id": 2, "name": "拿铁咖啡", "isSelected": false },
              { "id": 3, "name": "摩卡咖啡", "isSelected": false },
              { "id": 3, "name": "蓝山咖啡", "isSelected": false },
              { "id": 3, "name": "白咖啡", "isSelected": false }
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
})
