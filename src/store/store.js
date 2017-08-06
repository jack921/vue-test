import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);


const state = {
    tabValue: 'JACK',
    top250:null,
    comingsoon:null,
    usmovie:null,
    movie:null
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
