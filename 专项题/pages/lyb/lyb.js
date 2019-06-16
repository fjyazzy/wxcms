//index.js
var numAi = 0
var timer
Page({
  data: {
    btnState: false,
    winNum: 0,
    gameOfPlay: '',
    imageUserScr: '/images/wenhao.png',
    imageAiScr: '',
    srcs: [
      '/images/shitou.png',
      '/images/jiandao.png',
      '/images/bu.png'
    ]
  },
  onLoad: function () {
    var oldWinNum = wx.getStorageSync('winNum');
    if (oldWinNum != null && oldWinNum != '') {
      this.data.winNum = oldWinNum;
    }
    this.timerGo();
  },

  changeForChoose(e) {
    console.log();
    if (this.data.btnState == true) {
      return;
    }

    this.setData({
      imageUserScr: this.data.srcs[e.currentTarget.id]
    });

    clearInterval(timer);

    var user = this.data.imageUserScr;
    var ai = this.data.imageAiScr;
    var num = this.data.winNum;
    var str = '0.0~\nYou Lost!';


    if (user == "/images/shitou.png" && ai == "/images/jiandao.png") {
      num++;
      str = 'Ho~\nYou Win!';
      wx.setStorageSync('winNum', num);
    };
    if (user == "/images/jiandao.png" && ai == "/images/bu.png") {
      num++;
      str = 'Ho~\nYou Win!';
      wx.setStorageSync('winNum', num);
    };
    if (user == "/images/bu.png" && ai == "/images/shitou.png") {
      num++;
      str = 'Ho~\nYou Win!';
      wx.setStorageSync('winNum', num);
    };

    if (user == ai) {
      str = 'Game Draw!';
    }

    this.setData({
      winNum: num,
      gameOfPlay: str,
      btnState: true
    });
  },

  timerGo() {
    timer = setInterval(this.move, 100);
  },

  move() {
    if (numAi >= 3) {
      numAi = 0;
    }
    this.setData({
      imageAiScr: this.data.srcs[numAi],
    })
    numAi++;
  },

  again() {
    if (this.data.btnState == false) {
      return;
    }
    this.timerGo();
    this.setData({
      btnState: false,
      gameOfPlay: '',
      imageUserScr: '/images/wenhao.png'
    });
  }
})


