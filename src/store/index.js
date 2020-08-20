import service from '@/utils/http'
import base from '@/utils/base'
import Vue from 'vue'
import Vuex from 'vuex'
import {getOneCountryData} from '@/api'

const state = {
    countryDataList:[],
}

const getters = {
    countryData(state){
        const length = state.countryDataList[0].length
        const latestCountryData = state.countryDataList[0][length-1]
        return latestCountryData
    }
}

const mutations = {
    UPDATE_COUNTRYDATA_LIST(state, dataArray){
        state.countryDataList.push(dataArray)
    }
}


const actions = {
    getByOneCountryData({commit}){
        getOneCountryData('china').then(res =>{
            commit('UPDATE_COUNTRYDATA_LIST', res.data)
        })
    }
}