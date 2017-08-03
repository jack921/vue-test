import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);


const state = {
    tabValue: 'JACK',
    top250:null,
    weekly:null,
    usmovie:null
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
