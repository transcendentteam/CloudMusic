import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex)

import {playMode} from "./js/config"

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
        play:[],
        lists:[],
        listdetail:{},
        listuser:{},
        listsong:[],
        isLoading:true,
        playing:false,
        fullScreen:false,
        playlist:[],
        sequenceList:[],
        mode:playMode.sequence,
        currentIndex:-1,
        jxblist:[{"coverImgUrl":""}],
        officiallist:[],
        recommendlist:[],
        globallist:[],
        morelist:[],
        createnum:0,
        collectnum:0,
        createlist:[],
        collectlist:[]

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
        add(state,song){
            // state.animationShow="running"
            // console.log(song);
            //设置一个Bool,循环遍历play数组，如果过找到了与添加歌曲Id相同的歌曲，就不加入播放列表数组，即play
            //查看添加的歌曲
            // console.log(song);
            let index = state.playlist.indexOf(song);
            if (index == -1){
                state.playlist.unshift(song);
                state.currentIndex=0

            }else {
                state.currentIndex=index
            }
            
        },
        playaudio(state){
            if(state.animationShow=="running"){
                state.animationShow="paused"
            }else{
                state.animationShow="running"
            }
        },
        getlist(state,list){
            state.lists=list;
        },
        listdetail(state,li){
            state.listdetail=li;
        },
        getuser(state,user){
            state.listuser=user
        },
        getlistsong(state,song){
            state.isLoading = false;
            state.listsong=song;
        },
        setCurrentIndex(state,index){
            state.currentIndex = index
        },
        playall(state,songs){
            // state.playlist = state.playlist.concat(songs)
            state.playlist.unshift(...songs)
            state.playlist = Array.from(new Set([...state.playlist]))
            state.currentIndex = 0;
        },
        getboard(state,list){
            // console.log(list)
            state.jxblist=list.slice(4,5)
            state.officiallist=list.slice(0,4)
            state.recommendlist = list.slice(5,11)
            state.globallist = list.slice(11,17)
            state.morelist = list.slice(17)
            // console.log(state.officiallist)
        },
        setsubcount(state,count){
            state.createnum = count.createdPlaylistCount;
            state.collectnum = count.subPlaylistCount
        },
        setuserlist(state,list){
            state.createlist = list.slice(0,21);
            state.collectlist = list.slice(21);
            // console.log(state.collectlist)
        }
    },
    actions:{
        getdailysongs(store){
            Vue.axios({url:"http://120.27.243.6:3000/login/cellphone?phone=13118306468&password=smj15284753294"})
           .then(res =>{
                Vue.axios({url:"http://120.27.243.6:3000/recommend/songs",withCredentials:true})
                .then(res =>{
                    // console.log(res.data.recommend);
                    store.commit("getdailysongs",res.data.recommend)
                })
            })
        },
        getuser(store,id){
            // console.log(id);
            Vue.axios.get(`http://120.27.243.6:3000/user/detail?uid=${id}`)
            .then(res =>{
                // console.log(res.data.profile);
                store.commit("getuser",res.data.profile)
            })
        },
        getlist(store){
            Vue.axios.get("http://120.27.243.6:3000/top/playlist")
            .then(res =>{
                // console.log(res.data.playlists);
                store.commit("getlist",res.data.playlists)
            })
        },
        listdetail(store,id){
            Vue.axios.get(`http://120.27.243.6:3000/playlist/detail?id=${id}`)
            .then(res =>{
                // console.log(res.data.playlist);
                store.commit("listdetail",res.data.playlist)

                let sonIds = res.data.playlist.trackIds
                let arr = []
                for(var i in sonIds){
                    arr.push(sonIds[i].id)
                }
                // console.log(arr);
                let query = arr.join(",")
                // console.log(query);
                Vue.axios.get(`http://120.27.243.6:3000/song/detail?ids=${query}`)
                .then(result => {
                    // console.log(result.data.songs)
                    //因为与每日推荐里面歌曲的数据属性名不同，所以可以通过以下方法修改对象的属性
                    var bbb= JSON.parse(JSON.stringify(result.data.songs).replace(/al/g,"album")
                    .replace(/picUrl/g,"blurPicUrl")
                    .replace(/ar/g,"artists")
                    .replace(/dt/g,"bMusic"));
                    for(var i in bbb) {
                        bbb[i].bMusic={"playTime":bbb[i].bMusic}
                    }
                    store.commit("getlistsong",bbb)
                    

                })
            })
        },
        getbanner(store){
            Vue.axios.get("http://120.27.243.6:3000/banner?type=1")
            .then(res =>{
                // console.log(res.data.banners);
                store.commit("getbanner",res.data.banners)
            })
        },
        getreclist(store){
            Vue.axios.get("http://120.27.243.6:3000/personalized")
            .then(res =>{
                // console.log(res.data.result);
                store.commit("getreclist",res.data.result)
            })
        },
        getnewcd(store){
            Vue.axios.get("http://120.27.243.6:3000/top/album?offset=0&limit=30")
            .then(res =>{
                // console.log(res.data.albums);
                store.commit("getnewcd",res.data.albums)
            })
        },
        getrecmv(store){
            Vue.axios.get("http://120.27.243.6:3000/mv/exclusive/rcmd")
            .then(res =>{
                // console.log(res.data.data);
                store.commit("getrecmv",res.data.data)
            })
        },
        //排行榜
        getboard(store) {
            Vue.axios.get("http://120.27.243.6:3000/toplist/detail")
            .then(res => {
                // console.log(res);
                store.commit('getboard',res.data.list)
            })
        },
        //获取用户信息 , 歌单，收藏，mv, dj 数量
        getsubcount(store) {
            Vue.axios({url:"http://120.27.243.6:3000/login/cellphone?phone=13118306468&password=smj15284753294"})
           .then(res =>{
                Vue.axios({url:"http://120.27.243.6:3000/user/subcount",withCredentials:true})
                .then(res =>{
                    store.commit("setsubcount",res.data)
                })
            })
        },
        //获取用户歌单
        getuserlist(store) {
            Vue.axios({url:"http://120.27.243.6:3000/login/cellphone?phone=13118306468&password=smj15284753294"})
           .then(res =>{
                Vue.axios({url:"http://120.27.243.6:3000/user/playlist?uid=78801737",withCredentials:true})
                .then(res =>{
                    store.commit("setuserlist",res.data.playlist)
                })
            })
        }
       
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
            for (var i=0;i<state.playlist.length;i++){
                let arr2=[];
                for(var j=0;j<state.playlist[i].artists.length;j++){
                    arr2.push(state.playlist[i].artists[j].name);
                }
                arr1.push(arr2);
            }
            // console.log(arr1);
            return arr1
        },
        currentSong(state){
            if(state.currentIndex === -1){
                return {
                    "id": null,
                    "album":{"blurPicUrl": ""},
                    "name":"",
                    "artists":[{"name":""},{"name":""}],
                    "bMusic":{"playTime":null}
                }
            }else {
                return state.playlist[state.currentIndex]
            }
        }, 
        getmusicurl(state){
            if(state.currentIndex == -1){
                //最开始没有歌的时候
                return "https://music.163.com/song/media/outer/url?id=.mp3"
            }else {
                return "https://music.163.com/song/media/outer/url?id="+state.playlist[state.currentIndex].id+".mp3"

            }

        },
    }
})


export default store;