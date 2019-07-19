import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
    state:{
        option:'郑州',
        option2:'上海',
        dir:''
    },
    mutations:{
        chengshi(state ,val){
            state.dir = val;
        },
        chen(state,a){
            if(state.dir == 'option'){
                state.option = a;
            }else{
                state.option2 = a;
            }
        }
    }
})