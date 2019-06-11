// components/Linkist/Linkist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    usite: {
      type: String,
      value: 'http://'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

    ItemList: [
      { "pagename": "问卷调查", "pagetext": "../liuyanban/liuyanban" },
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "扫码", "pagetext": "../wxapl/wxapl" },
      { "pagename": "选择题", "pagetext": "../myprofile/myprofile" }
    ],

  },
  attached() {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})

