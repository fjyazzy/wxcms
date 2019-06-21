// pages/schooltimetables/schooltimetables.js
var util = require('../../utils/util.js')
var d = require('date.js')
var CN_Date = require('getCNDate.js');
var app = getApp()
var t = new Date();

Page({
  data: {
    MONTH_EN: ['JAN ', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    monthNum: t.getMonth() + 1,
    yearNum: t.getFullYear(),
    MonthDayArray: [],
    toDate: t.getDate(),
    toMonth: t.getMonth() + 1,
    toYear: t.getFullYear(),
    fromToday: '今天',
    nongliDetail: CN_Date(t.getFullYear(), t.getMonth() + 1, t.getDate()),
  },

  dateClick: function (e) {
    var eId = e.currentTarget.id;
    var MonArray = this.data.MonthDayArray;
    var data = this.data;
    for (var i = 0; i < MonArray.length; i++) {
      for (var j = 0; j < MonArray[i].length; j++) {
        if (typeof (MonArray[i][j]) == 'string') {
          continue;
        }
        if (MonArray[i][j].num == eId) {
          MonArray[i][j].isShowDayInfo = !MonArray[i][j].isShowDayInfo;
        }
      }
    }

    for (var i = 0; i < MonArray.length; i++) {
      for (var j = 0; j < MonArray[i].length; j++) {
        if (typeof (MonArray[i][j]) == 'string' || MonArray[i][j].num == eId) {
          continue;
        }
        MonArray[i][j].isShowDayInfo = false;
      }
    }

    this.setData({
      MonthDayArray: MonArray,
      toYear: data.yearNum,
      toMonth: data.monthNum,
      toDate: eId,
      fromToday: d.getFromTodayDays(eId, data.monthNum - 1, data.yearNum),
      nongliDetail: CN_Date(data.yearNum, data.monthNum, eId),
    })
  },

  monthTouch: function (e) {
    var beginX = e.target.offsetLeft;
    var endX = e.changedTouches[0].clientX;
    console.log(beginX - endX);
    if (beginX - endX > 100) {
      this.nextMonth_Fn();
    }
    else if (beginX - endX < -100) {
      this.lastMonth_Fn();
    }
  },

  nextMonth_Fn: function () {
    var n = this.data.monthNum;
    var y = this.data.yearNum;
    console.log(n);
    if (n == 12) {
      this.setData({
        monthNum: 1,
        yearNum: y + 1,
      });
    }
    else {
      this.setData({
        monthNum: n + 1,
      });
    }
    this.calcMonthDayArray();
  },

  lastMonth_Fn: function () {
    var n = this.data.monthNum;
    var y = this.data.yearNum;
    console.log(n);
    if (n == 1) {
      this.setData({
        monthNum: 12,
        yearNum: y - 1,
      });
    }
    else {
      this.setData({
        monthNum: n - 1,
      });
    }
    this.calcMonthDayArray();
  },

  onShow: function () {
    console.log('onShow');
    this.calcMonthDayArray();
  },

  calcMonthDayArray: function () {
    var data = this.data;
    var nSpace = d.getMonthFirstDay(data.monthNum - 1, data.yearNum);
    var totalDate = d.getMonthTotalDate(data.monthNum, data.yearNum);
    var dateArray = [];
    var trArray = [];
    for (var i = 1; ; i++) {
      if (i <= nSpace) {
        trArray.push('');
      }
      else if (i <= totalDate + nSpace) {
        var nl = CN_Date(data.yearNum, data.monthNum, i - nSpace);
        trArray.push({
          num: i - nSpace,
          isShowDayInfo: false,
          nongli: nl.slice(nl.length - 2),
          nongliInfo: CN_Date(data.yearNum, data.monthNum, i - nSpace),
          isToday: (data.monthNum == t.getMonth() + 1 && i - nSpace == t.getDate() && data.yearNum == t.getFullYear()) ? true : false,
        });
      }
      else {
        var l = trArray.length;
        for (var j = 0; j + l < 7; j++) {
          trArray.push('');
        }
        dateArray.push(trArray);
        break;
      }
      if (trArray.length == 7) {
        dateArray.push(trArray);
        trArray = [];
      }
    }

    //如果不是当年当月，自动选中1号
    var notToday = (data.monthNum != t.getMonth() + 1 || data.yearNum != t.getFullYear());
    if (notToday) {
      for (var i = 0; i < dateArray[0].length; i++) {
        if (dateArray[0][i].num == 1) {
          dateArray[0][i].isShowDayInfo = true;
        }
      }
    }

    this.setData({
      MonthDayArray: dateArray,
      toYear: notToday ? this.data.yearNum : t.getFullYear(),
      toMonth: notToday ? this.data.monthNum : t.getMonth() + 1,
      toDate: notToday ? 1 : t.getDate(),
      fromToday: notToday ? d.getFromTodayDays(1, data.monthNum - 1, data.yearNum) : '今天',
      nongliDetail: notToday ? CN_Date(data.yearNum, data.monthNum, 1) : CN_Date(t.getFullYear(), t.getMonth() + 1, t.getDate()),
    })
  }

})