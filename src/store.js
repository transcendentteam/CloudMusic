import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        banners:[],
        reclists:[]
    },
    mutations:{
        getbanner(state,banner){
            state.banners=banner;
        },
        getreclist(state,reclist){
            var arr=[];

            //生成9个不重复的随机数
            while(arr.length<9){
               let random = parseInt(Math.random()*(29-0+1));
               arr.push(random);
               arr=[...new Set(arr)]
            }
            // console.log(arr);
            //把获取的数据中下标为数组中的数的元素存入state中
            for(var i=0;i<arr.length;i++){
                state.reclists.push(reclist[arr[i]]);
            }
            // console.log(state.reclists);
        }
    },
    actions:{
        getbanner(store){
            Vue.axios.get("http://localhost:3000/banner?type=1")
            .then(res =>{
                console.log(res.data.banners);
                store.commit("getbanner",res.data.banners)
            })
        },
        getreclist(store){
            Vue.axios.get("http://localhost:3000/personalized")
            .then(res =>{
                // console.log(res.data.result);
                store.commit("getreclist",res.data.result)
            })
        }
       
    },
    getters:{

    }
})


export default store;