Component({
  /**   * 组件的初始数据   */
  data: {
    newList: [{
        title: "主流推送:",
        text: "调查问卷",
        pagePath:"/pages/wjdc/wjdc"
      },{
        title: "热门事件:",
        text: "游戏圈的十大排名",
        pagePath: "/pages/lxjsq/lxjsq"
      },{
        title: "道具购买:",
        text: "游戏商城-新英雄上线啦",
        pagePath: "/pages/table/table" 
      }
    ]
    
  },
  attached() {
  },
  methods: {
  }
})