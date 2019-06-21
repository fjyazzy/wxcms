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
    usite:{
      type: String,
      value:'http://',
    },
  },

  data: {
    TopMenuList: [{ "mlno": "01", "mlname": "门户", "mltext": "存放门户页面信息" }, { "mlno": "02", "mlname": "文章推荐", "mltext": "特色文章推荐" }, { "mlno": "03", "mlname": "经典代码", "mltext": "包含WXML,CSS,JavaScript等代码" }, { "mlno": "04", "mlname": "应用", "mltext": "各种实际应用系统结构和原理介绍" }, { "mlno": "05", "mlname": "购买服务", "mltext": "提供站点能够提供的服务和报价" }, { "mlno": "06", "mlname": "环境配置", "mltext": "应用环境配置相关文章" }, { "mlno": "07", "mlname": "首页列表", "mltext": "首页列表管理" }, { "mlno": "08", "mlname": "滚动导航", "mltext": "滚动导航链接" }, { "mlno": "|", "mlname": "|", "mltext": "|" }],
  },

  attached() {
  },

  methods: {
    
  },



})
