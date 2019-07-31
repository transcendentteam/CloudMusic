import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        banners:[],
        reclists:[],
        cds:[],
        mvs:[],
        dailysongs:[],
    },
    mutations:{
        getbanner(state,banner){
            state.banners=banner;
        },
        getreclist(state,reclist){
            var arr=[];
            state.reclists=[];
            //生成6个不重复的随机数
            while(arr.length<6){
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
        },
        getnewcd(state,cd){
            var arr=[];
            state.cds=[];
            //生成3个不重复的随机数
            while(arr.length<3){
               let random = parseInt(Math.random()*(29-0+1));
               arr.push(random);
               arr=[...new Set(arr)]
            }
            // console.log(arr);
            //把获取的数据中下标为数组中的数的元素存入state中
            for(var i=0;i<arr.length;i++){
                state.cds.push(cd[arr[i]]);
            }
        },
        getrecmv(state,mv){
            var arr=[];
            state.mvs=[];
            //生成3个不重复的随机数
            while(arr.length<6){
               let random = parseInt(Math.random()*(9-0+1));
               arr.push(random);
               arr=[...new Set(arr)]
            }
            //把获取的数据中下标为数组中的数的元素存入state中
            for(var i=0;i<arr.length;i++){
                state.mvs.push(mv[arr[i]]);
            }
            // console.log(state.mvs);
        },
        getdailysongs(state,recommend){
            state.dailysongs=recommend;
        },
        
    },
    actions:{
        getdailysongs(store){
            Vue.axios({url:"http://localhost:3000/login/cellphone?phone=13118306468&password=smj15284753294"})
            .then(res =>{
                Vue.axios({url:"http://localhost:3000/recommend/songs",withCredentials:true})
                .then(res =>{
                    console.log(res.data.recommend);
                    store.commit("getdailysongs",res.data.recommend)
                })
            })
        },
        getbanner(store){
            Vue.axios.get("http://localhost:3000/banner?type=1")
            .then(res =>{
                // console.log(res.data.banners);
                store.commit("getbanner",res.data.banners)
            })
        },
        getreclist(store){
            Vue.axios.get("http://localhost:3000/personalized")
            .then(res =>{
                // console.log(res.data.result);
                store.commit("getreclist",res.data.result)
            })
        },
        getnewcd(store){
            Vue.axios.get("http://localhost:3000/top/album?offset=0&limit=30")
            .then(res =>{
                // console.log(res.data.albums);
                store.commit("getnewcd",res.data.albums)
            })
        },
        getrecmv(store){
            Vue.axios.get("http://localhost:3000/mv/exclusive/rcmd")
            .then(res =>{
                // console.log(res.data.data);
                store.commit("getrecmv",res.data.data)
            })
        },

       
    },
    getters:{
        
    }
})


export default store;