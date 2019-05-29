//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "xs": [],
    "th": "1.",
    "ques": "猪有几只脚?",
    "items": [
      { o: "a.1" },
      { o: "b.2" },
      { o: "c.3" },
      { o: "d.4" },
      { o: "e.5" },
      { o: "f.6" }
    ],
    "type": "0",
    "ans": "4",
    "ts": "你去猪圈看看就知道了！",
  },
  bindButtonTap: function (e) {
    var fz = this.data.ts;
    var xs = new Array();
    this.setData({
      xs: fz
    })
  }
})
