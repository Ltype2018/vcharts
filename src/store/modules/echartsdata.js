//用于echarts 的配置数据
const state = {


}


const getters = {
    /**
 * 分别取出前十国家和其他国家，并合并成一个数组
 * @param {*} state 
 * @param {*} getters 
 */
    tenCountryAndOtherCountryData(state, getters, rootState, rootGetters) {
        if (rootState.origindata.isDataGet) {
            let length = rootGetters['origindata/sortedGlobalData'].length
            let tenCountryData = rootGetters['origindata/sortedGlobalData'].slice(0, 10)
            let otherCountryDataTotal = rootGetters['origindata/sortedGlobalData'].slice(10, length).reduce((acc, { confirmedCount }) => { return acc + confirmedCount }, 0)
            let otherCountryData = { "countryName": '其他国家', "confirmedCount": otherCountryDataTotal }
            let mixData = tenCountryData
            mixData.push(otherCountryData)
            return mixData
        }
    }

}

export default {
    namespaced: true,
    state,
    getters
}





