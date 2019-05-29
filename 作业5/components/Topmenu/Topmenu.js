// Topmenu/Topmenu.js
Component({
  properties: {
    uname: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '游客', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数
        // 新版本基础库不推荐使用这个字段，而是使用 Component 构造器的 observer 字段代替
        //（这样会有更强的功能和更好的性能）
      }
    },
  },

  data: {
    TopMenuList: [{
      pagePath: "/pages/orders/orders?id=1",
      text: "文章推荐"
    }, {
      pagePath: "/pages/orders/orders?id=2",
        text: "经典代码"
      }, {
        pagePath: "/pages/orders/orders?id=3",
        text: "应用案例"
      }, {
        pagePath: "/pages/orders/orders?id=4",
        text: "服务购买"
      }, {
        pagePath: "/pages/orders/orders?id=5",
        text: "环境配置"
      }
    ],
  },
  attached() {
  },
  methods: {
  }
})
