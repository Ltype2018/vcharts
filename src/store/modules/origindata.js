import { getData } from '@/api'

const state = {
    countriesData: [],
    isDataGet:false
}


const getters = {
    /**
     * 将中国详情数据从其中取出,返回数组
     * @param {*} state 
     */

    chinaDetailData(state) {
        if (state.isDataGet) {
            let tempDetailData = state.countriesData.filter(({ countryEnglishName }) => countryEnglishName === 'China')
            return tempDetailData
        }
    },

    /**
     * 中国的统计总和数据（数据中的最大值）
     * @param {*} state 
     * @param {*} getters 
     */
    chinaData(state, getters) {
        if(state.isDataGet){
            return [getters.chinaDetailData.sort((a, b) => b.confirmedCount - a.confirmedCount)[0]]
        }
        

    },

    /**
     * 除中国外的数据,返回值为数组
     * @param {*} state 
     */
    exceptChinaData(state) {
        if (state.isDataGet) {
            let tempExceptChinaData = state.countriesData.filter(({ countryEnglishName }) => countryEnglishName !== 'China')
            return tempExceptChinaData
        }
    },

    /**
     * 合并筛选过后的中外数据
     * @param {}} state 
     * @param {*} getters 
     */
    globalData(state, getters) {
        if(state.isDataGet){
            return [...getters.chinaData, ...getters.exceptChinaData]
        }
        
    },

    /**
     * 对全球数据降序排列，返回数组
     * @param {*} state 
     * @param {*} getters 
     */
    sortedGlobalData(state, getters) {
        if(state.isDataGet){
            return getters.globalData.sort((a, b) => b.confirmedCount - a.confirmedCount)
        }
        
    }
}


const mutations = {
    UPDATE_COUNTRIES_DATA(state, countriesData) {
        state.countriesData = countriesData
        state.isDataGet = true
    }
}


const actions = {
    /**
     * 获取接口数据
     * @param {}} param0 
     */
    getCountriesData({ commit }) {
        getData().then(res => commit('UPDATE_COUNTRIES_DATA', res.data.results))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
