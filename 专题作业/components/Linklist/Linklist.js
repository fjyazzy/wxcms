// components/Linkist/Linkist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    usite:{
      type:String,
      value:'http://'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
   
   ItemList:[
     {"pagename":"利息计算器","pagetext":"../lxjsq/lxjsq"},
     {"pagename":"问卷调查","pagetext":"../liuyanban/liuyanban"},
     {"pagename":"猜字游戏", "pagetext": "../guess/guess" },
     {"pagename": "地图", "pagetext": "../map/map" },
     { "pagename": "扫一扫", "pagetext": "../saom/saom" }
   ],

  },
  attached(){

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
