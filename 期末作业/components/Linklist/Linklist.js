// Linklist/Linklist.js
Component({
  data: {
    ItemList: [ { 
       pagePath: "/pages/map/map",
      text: "地图"
      },{
        pagePath: "/pages/wenjuan/wenjuan",
        text: "问卷调查"
      }, {
        pagePath: "/pages/shuju/shuju",
        text: "后台消息"
      }
    ],
  },
  attached() {
  },
  methods: {
  }
})
