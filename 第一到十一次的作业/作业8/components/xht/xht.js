// components/xht/xht.js
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
    TopMenuList: [
        { "mlno": "01", "mlname": "吃饭", "mltext": "民以食为天" },
        { "mlno": "02", "mlname": "睡觉", "mltext": "睡觉觉" },
        { "mlno": "03", "mlname": "打豆豆", "mltext": "打豆豆是一大乐趣" },
      { "mlno": "04", "mlname": "听音乐", "mltext": "听音乐" },
      { "mlno": "05", "mlname": "打游戏", "mltext": "打游戏" },
        { "mlno": "06", "mlname": "喝奶茶", "mltext": "喝奶茶" },
      { "mlno": "07", "mlname": "兴趣", "mltext": "兴趣广泛" },
      { "mlno": "08", "mlname": "爱好", "mltext": "爱好贼多" },
        { "mlno": "|", "mlname": "|", "mltext": "|" }
      ]
  },

  attached() {
  },

  methods: {
    //显示页面代码
    
  },



})