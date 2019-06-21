var types = [
  {
    cate_id: 1,
    cate_name: "男装",
    children: [{
      child_id: 1,
      name: "围巾",
      img: "../../images/围巾.jpg"
    }, {
      child_id: 2,
      name: "呢大衣",
      img: "../../images/呢大衣.jpg"
    }, {
      child_id: 3,
      name: "棉服",
        img: "../../images/呢大衣.jpg"
    }, {
      child_id: 4,
      name: "呢大衣",
        img: "../../images/呢大衣.jpg"
    }, {
      child_id: 5,
      name: "呢大衣",
        img: "../../images/呢大衣.jpg"
    }]
  },
  {
    cate_id: 2,
    cate_name: "女装",
    children: [{
      type_id: 2,
      child_id: 1,
      name: "女包",
      img: "../../images/女包.jpg"
    }, {
      type_id: 2,
      child_id: 2,
        name: "女包",
        img: "../../images/女包.jpg"
    }, {
      type_id: 2,
      child_id: 3,
        name: "女包",
        img: "../../images/女包.jpg"
    }, {
      type_id: 2,
      child_id: 4,
        name: "女包",
        img: "../../images/女包.jpg"
    }]
  },
  {
    cate_id: 3,
    cate_name: "冬装",
    children: [{
      type_id: 3,
      child_id: 1,
      name: "羽绒服",
      img: "../../images/羽绒服.jpg"
    }, {
      type_id: 3,
      child_id: 2,
        name: "羽绒服",
        img: "../../images/羽绒服.jpg"
    }, {
      type_id: 3,
      child_id: 3,
        name: "羽绒服",
        img: "../../images/羽绒服.jpg"
    }]
  },
  {
    cate_id: 4,
    cate_name: "电器",
    children: []
  }];

Page({

  /* 页面的初始数据 */
  data: {
    /* 将types数组赋值给cateItems */
    cateItems: types,
    curNav: 1,
    /* 此变量用于判断该显示某个子item */
    curIndex: 1
  },

  /* 把点击到的某一项 设为当前curNav   */
  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
      curNav: id,
      curIndex: id
    })
  }
})
