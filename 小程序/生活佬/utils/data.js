/**
 * banner数据
 */ 
function getBannerData(){
  var arr = ['../../images/1.jpg', '../../images/2.jpg', '../../images/3.jpg', '../../images/4.jpg']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/e.png",
                title:"美食"
            },
            {
                id:2,
                icon:"../../images/a.png",
                title:"出行",
                pagetext: "../book/book"
            },
            {
                id:3,
                icon:"../../images/b.png",
                title:"睡眠"
            },
            {
                id:4,
                icon:"../../images/c.png",
                title:"购物"
            },
            {
                id:5,
                icon:"../../images/d.png",
                title:"运动"
            }
        ]
    return arr
}

/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                []
                    
            ]
    return arr
}
/**
 *  数据
 * */ 
function getSkilledData(){
    var arr = [
               
            ]
    return arr
}

/**
 * 
 */ 
function getPickerData(){
    var arr =[
       
    ]
    return  arr
}
/**
 * 
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                
               
            }
    return arr
}
/**
 * 省
 * */ 
function provinceData(){
    var arr = [
       
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','福州市','厦门市','宁德市'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}