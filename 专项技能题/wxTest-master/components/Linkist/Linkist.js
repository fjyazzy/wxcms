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
     { "pagename": "wxml系统学习", "pagetext": "../tools/tools" },
     {"pagename":"利息计算器","pagetext":"../lxjsq/lxjsq"},
     {"pagename":"问卷调查","pagetext":"../liuyanban/liuyanban"},
     {"pagename":"猜字游戏", "pagetext": "../caizi/caizi" },
     { "pagename": "用户地图", "pagetext": "../map/map" },
     { "pagename": "扫码", "pagetext": "../wxapl/wxapl" },
     { "pagename": "选择题", "pagetext": "../choice/choice" },
     
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
