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
          "description": "你的性别是？",
          "options":
            [
              { "id": 1, "name": "男", "isSelected": false },
              { "id": 2, "name": "女", "isSelected": false },
            ]
        }
      }, {
        "type": "SCQ",
        "content": {
          "description": "你的年级？",
          "options":
            [
              { "id": 1, "name": "大一", "isSelected": false },
              { "id": 2, "name": "大二", "isSelected": false },
              { "id": 2, "name": "大三", "isSelected": false }
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "你在学习过程中感觉如何（多选）?",
          "options":
            [
              { "id": 1, "name": "快乐", "isSelected": false },
              { "id": 2, "name": "充实", "isSelected": false },
              { "id": 3, "name": "没感觉", "isSelected": false },
              { "id": 3, "name": "枯燥乏味", "isSelected": false },
              { "id": 3, "name": "厌倦", "isSelected": false }
            ]
        }
      }, {
        "type": "SCQ",
        "content": {
          "description": "你认为学校的住宿环境好吗）?",
          "options":
            [
              { "id": 1, "name": "很好", "isSelected": false },
              { "id": 2, "name": "好", "isSelected": false },
              { "id": 3, "name": "一般", "isSelected": false },
              { "id": 3, "name": "不好", "isSelected": false },
              { "id": 3, "name": "很不好", "isSelected": false }
            ]
        }
      }, {
        "type": "SCQ",
        "content": {
          "description": "你认为学校的教学环境好吗",
          "options":
            [
              { "id": 1, "name": "很好", "isSelected": false },
              { "id": 2, "name": "好", "isSelected": false },
              { "id": 3, "name": "一般", "isSelected": false },
              { "id": 3, "name": "不好", "isSelected": false },
              { "id": 3, "name": "很不好", "isSelected": false }
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
