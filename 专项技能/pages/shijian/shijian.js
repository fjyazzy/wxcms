// pages/meishi/meishi.js
const util = require('../../utils/util.js')
let goodsList = [
  { actEndTime: '2019/07/05 12:45:56' },
  { actEndTime: '2019/08/30 15:00:23' },
  { actEndTime: '2019/09/13 17:00:22' },
  { actEndTime: '2019/10/01 19:00:44' },
  { actEndTime: '2019/10/07 21:00:34' },
  { actEndTime: '2019/12/22 09:00:37' },
  { actEndTime: '2019/12/25 05:00:59' },
  { actEndTime: '2020/01/02 05:00:23' },
  { actEndTime: '2020/02/24 03:00:11' }
]
Page({
  data: {
    countDownList: [],
    actEndTimeList: []
  },
  onLoad() {
    let endTimeList = [];
    // 将活动的结束时间参数提成一个单独的数组，方便操作
    goodsList.forEach(o => { endTimeList.push(o.actEndTime) })
    this.setData({ actEndTimeList: endTimeList });
    // 执行倒计时函数
    this.countDown();
  },
  timeFormat(param) {//小于10的格式化函数
    return param < 10 ? '0' + param : param;
  },
  countDown() {//倒计时函数
    // 获取当前时间，同时得到活动结束时间数组
    let newTime = new Date().getTime();
    let endTimeList = this.data.actEndTimeList;
    let countDownArr = [];

    // 对结束时间进行处理渲染到页面
    endTimeList.forEach(o => {
      let endTime = new Date(o).getTime();
      let obj = null;
      // 如果活动未结束，对时间进行处理
      if (endTime - newTime > 0) {
        let time = (endTime - newTime) / 1000;
        // 获取天、时、分、秒
        let day = parseInt(time / (60 * 60 * 24));
        let hou = parseInt(time % (60 * 60 * 24) / 3600);
        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        obj = {
          day: this.timeFormat(day),
          hou: this.timeFormat(hou),
          min: this.timeFormat(min),
          sec: this.timeFormat(sec)
        }
      } else {//活动已结束，全部设置为'00'
        obj = {
          day: '00',
          hou: '00',
          min: '00',
          sec: '00'
        }
      }
      countDownArr.push(obj);
    })
    // 渲染，然后每隔一秒执行一次倒计时函数
    this.setData({ countDownList: countDownArr })
    setTimeout(this.countDown, 1000);
  }
})

