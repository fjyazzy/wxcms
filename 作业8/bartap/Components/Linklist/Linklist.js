// Components/Linklist/Linklist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    usite:{
      type:String,
      value:"http://",
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ItemList: [
      { "pagename": "这是一个假的链接", "pagetext": "pages/logs/logs" },
      { "pagename": "这也是一个假的链接", "pagetext": "pages/sd/sd" },
      { "pagename": "这还是一个假的链接", "pagetext": "pages/sys/sys" }
    ]
  },
  attached() {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
