Page({
  	data: {
  		carArray: [
  			{
  				carImage: '../../images/j.jpg',
          carTitle: '太阳刺绣真丝衬衫',
          carPrice: '¥10,500.00',
  				carNum: 1,
  				carShow: true
  			},
  			{
          carImage: '../../images/j.jpg',
          carTitle: '太阳刺绣真丝衬衫',
          carPrice: '¥10,500.00',
  				carNum: 1,
  				carShow: true
  			},
  			{
          carImage: '../../images/j.jpg',
          carTitle: '太阳刺绣真丝衬衫',
          carPrice: '¥10,500.00',
  				carNum: 1,
  				carShow: true
  			}
  		]
  	},
  	carAdd: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var con = that.data.carArray[index].carNum + 1;
  		var key = 'carArray['+index+'].carNum';
  		var obj = {};
  		obj[key] = con;
  		this.setData(obj);
  	},
  	carReduce: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var con = that.data.carArray[index].carNum;
  		var key = 'carArray['+index+'].carNum';
  		var obj = {};
  		if(con <= 1){
  			obj[key] = 1;
  			that.setData(obj);
  		}
  		else {
  			con--;
  			obj[key] = con;
  			that.setData(obj);
  		}
  	},
  	carRemove: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var key = 'carArray['+index+'].carShow';
  		var obj = {};
  		obj[key] = false;
  		this.setData(obj);
  	},
    toPay: function(){
        wx.navigateTo({
          url: '../pay/pay'
        })
    }
})