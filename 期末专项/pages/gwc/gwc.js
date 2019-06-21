var app = getApp()
Page({
  data: {
    hidden: false,
    curNav: 1,
    curIndex: 0,
    cart: [],
    cartTotal: 0,
    navList: [
      {
        id: 1,
        name: '热销商品'
      },
      {
        id: 2,
        name: '蔬菜'
      },
      {
        id: 3,
        name: '水果'
      },
      {
        id: 4,
        name: '肉类'
      },
      {
        id: 5,
        name: '鲜花'
      },
    ],
    dishesList: [
      [
        {
          name: "樱桃",
          price: 38,
          num: 1,
          id: 1
        },
        {
          name: "优质绿萝",
          price: 15,
          num: 1,
          id: 29
        },
        {
          name: "牛肉",
          price: 30,
          num: 1,
          id: 2
        }
      ],
      [
        {
          name: "空心菜",
          price: 11,
          num: 1,
          id: 3
        },
        {
          name: "洋葱",
          price: 3,
          num: 1,
          id: 4
        }
      ],
      [
        {
          name: "苹果",
          price: 17,
          num: 1,
          id: 5
        },
        {
          name: "香蕉",
          price: 9,
          num: 1,
          id: 6
        }
      ],
      [
        {
        name: "牛肉",
        price: 30,
        num: 1,
        id: 2
      },
        {
          name: "五花肉",
          price: 13.5,
          num: 1,
          id: 8
        },
        {
          name: "瘦肉",
          price: 14,
          num: 1,
          id: 11
        }
      ],
      [
        {
        name: "21朵玫瑰花束",
        price: 188,
        num: 1,
        id: 8
      },
        {
          name: "满天星小花束",
          price: 99,
          num: 1,
          id: 9
        },
        {
          name: "康乃馨小花束",
          price: 99,
          num: 1,
          id: 10
        }
      ]
    ],
    dishes: []
  },
  loadingChange() {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 2000)
  },
  selectNav(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 选择菜品
  selectDish(event) {
    let dish = event.currentTarget.dataset.dish;
    let flag = true;
    let cart = this.data.cart;

    if (cart.length > 0) {
      cart.forEach(function (item, index) {
        if (item == dish) {
          cart.splice(index, 1);
          flag = false;
        }
      })
    }
    if (flag) cart.push(dish);
    this.setData({
      cartTotal: cart.length
    })
    this.setStatus(dish)
  },
  setStatus(dishId) {
    let dishes = this.data.dishesList;
    for (let dish of dishes) {
      dish.forEach((item) => {
        if (item.id == dishId) {
          item.status = !item.status || false
        }
      })
    }

    this.setData({
      dishesList: this.data.dishesList
    })
  },
  onLoad() {
    this.loadingChange()
  }
})