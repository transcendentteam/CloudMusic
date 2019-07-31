import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        banners:[]
    },
    mutations:{
        getbanner(state,banner){
            state.banners=banner;
        }
    },
    actions:{
        getbanner(store){
            Vue.axios.get("http://localhost:3000/banner?type=1")
            .then(res =>{
                console.log(res.data.banners);
                store.commit("getbanner",res.data.banners)
            })
        }
       
    },
    getters:{

    }
})


export default store;