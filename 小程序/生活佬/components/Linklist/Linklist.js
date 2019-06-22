// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename": "生活方式", "pagetext": "../one/one" },
      { "pagename": "饮食习惯", "pagetext": "../two/two" },
      { "pagename": "运动方式", "pagetext": "../three/three" },
      { "pagename": "美食菜谱", "pagetext": "../four/four" },
      { "pagename": "长寿习惯", "pagetext": "../five/five" },
      { "pagename": "减肥方法", "pagetext": "../six/six" }
    ],
  },
  attached() {
  },
  methods: {


  }
})