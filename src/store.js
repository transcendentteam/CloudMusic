import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex)

// function storeLocalStore (state) {
//     window.localStorage.setItem("userMsg",JSON.stringify(state));
// }

const store = new Vuex.Store({
    state:{
        banners:[],
        reclists:[],
        cds:[],
        mvs:[],
        dailysongs:[],
        play:[{
            "id": 34916664,
            "album":{"blurPicUrl": "http://p2.music.126.net/mmDtqraSkaf8YEx9BfkCdQ==/3355709488826555.jpg"},
            "name":"Time Zone",
            "artists":[{"name":"周笔畅"},{"name":"Epik High"}]
            
        }],
        playnow:{
            "id": 34916664,
            "album":{"blurPicUrl": "http://p2.music.126.net/mmDtqraSkaf8YEx9BfkCdQ==/3355709488826555.jpg"},
            "name":"Time Zone",
            "artists":[{"name":"周笔畅"},{"name":"Epik High"}]
            
        },
        animationShow:"paused",
        css: "playandpause iconfont icon-bofang",
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
        play(state,song){
            // state.animationShow="running"
            console.log(song);
            //设置一个Bool,循环遍历play数组，如果过找到了与添加歌曲Id相同的歌曲，就不加入播放列表数组，即play
            state.playnow={};
            state.playnow=song;
            let bool = true;
            for(var i=0;i<state.play.length;i++){
                if((state.play)[i].id == song.id){
                    bool = false
                }
                
            }
            if(bool){
                state.play.push(song);
            }
            
            // console.log(state.play);
        },
        playaudio(state){
            if(state.animationShow=="running"){
                state.animationShow="paused"
            }else{
                state.animationShow="running"
            }
        },
        listplay(state,song){
            // state.animationShow="running"
            console.log(song);
            //设置一个Bool,循环遍历play数组，如果过找到了与添加歌曲Id相同的歌曲，就不加入播放列表数组，即play
            state.playnow={}
            state.playnow=song;
            
        },
        
    },
    actions:{
        getdailysongs(store){
            Vue.axios({url:"http://localhost:3000/login/cellphone?phone=13118306468&password=smj15284753294"})
           .then(res =>{
                Vue.axios({url:"http://localhost:3000/recommend/songs",withCredentials:true})
                .then(res =>{
                    // console.log(res.data.recommend);
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
        //每日推荐歌曲的歌手名
        getartists(state){
            let arr1=[];
            for (var i=0;i<state.dailysongs.length;i++){
                let arr2=[];
                for(var j=0;j<state.dailysongs[i].artists.length;j++){
                    arr2.push(state.dailysongs[i].artists[j].name)
                }
                arr1.push(arr2);
            }
            // console.log(arr1);
            return arr1
        },
        getplayartists(state){
            let arr1=[];
            for (var i=0;i<state.play.length;i++){
                let arr2=[];
                for(var j=0;j<state.play[i].artists.length;j++){
                    arr2.push(state.play[i].artists[j].name);
                }
                arr1.push(arr2);
            }
            // console.log(arr1);
            return arr1
        },
        getmusicurl(state){
            return "https://music.163.com/song/media/outer/url?id="+state.playnow.id+".mp3"

        },
        
    }
})


export default store;