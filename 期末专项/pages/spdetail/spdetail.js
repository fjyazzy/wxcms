var WxAutoImage = require('../../js/detailImage.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            '../../images/kaff.jpg',
            '../../images/cafe.jpg',
            '../../images/kaff.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iscollect: true
    },
    collect: function(){
        this.setData({
            iscollect: !this.data.iscollect
        })
        console.log(this.data.iscollect);
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})