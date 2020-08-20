import service from '@/utils/http'
import base from '@/utils/base'


/**
 * 获取所有国家统计
 */
const getGlobalStats =() => service({
    url:base.world,
    method:"get"
})



const getOneCountryData = (params) =>service({
    url:`${base.countrydata}/${params}`,
    method:"get"
})

/*
for(let i = 0; i<arr.length;i++){
    let brr = []
   brr.push(getOneCountryData(arr[i].Country)) 
}
Promise.all(brr).then()

function factory(fn, obj) {
    let arr = []
    return function(){
    arr =  obj.map(item =>fn.apply(null, arguments))
    return arr
    }
}

Promise.all(arr).then()
*/
export {getGlobalStats , getOneCountryData}