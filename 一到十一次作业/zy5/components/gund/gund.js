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
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    Gund: [{
      name:"阿华"
    },
      {
        name:"输入商家"
      },
      {
        name: "输入商家店铺"
      },
      {
        name: "记得输入商家店铺"
      },
      {
        name: "利息计算器"
      },
      {
        name: "存放门户页面信息"
      },
      {
        name: "环境配置"
      },
      {
        name: "首页列表"
      },
      {
        name: "猜猜猜"
      },
    ],
  },

  attached() {
  },
})