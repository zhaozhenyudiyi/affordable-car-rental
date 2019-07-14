import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        num: 100,
    },
    mutations: {
        add(state, v) {
            state.num += v;
        }
    }
})