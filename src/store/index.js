import Vue from 'vue'
import Vuex from 'vuex'
import {getData} from '@/api'

Vue.use(Vuex)

const state = {
    countriesData: []
}


const getters = {
    /**
     * 将中国详情数据从其中取出
     * @param {*} state 
     */
    chinaDetailData(state){
        let tempDetailData = state.countriesData.filter(({countryEnglishName}) => countryEnglishName==='China')
        return tempDetailData
    },

    /**
     * 中国的统计总和数据（数据中的最大值）
     * @param {*} state 
     * @param {*} getters 
     */

    chinaData(state, getters){
     return getters.chinaDetailData.sort((a, b) =>a.confirmedCount < b.confirmedCount)[0]
  
    },

    exceptChinaData(state){
        let tempExceptChinaData = state.countriesData.filter(({countryEnglishName}) => countryEnglishName!=='China')
        return tempExceptChinaData
    },

    globalData(state, getters){
        return [...getters.chinaData, ...getters.exceptChinaData]
    }
}

const mutations = {
    UPDATE_COUNTRIES_DATA(state, countriesData) {
        state.countriesData = countriesData
    }
}


const actions = {
    getCountriesData({ commit }) {
        getData().then(res => commit('UPDATE_COUNTRIES_DATA', res.data.results))
    }
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store
