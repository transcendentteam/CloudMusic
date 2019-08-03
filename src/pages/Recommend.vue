<template>
    <div class="recmmendbox">
        <div class="banner">
            <div class="title">
                <span class="iconfont icon-arrowleft" @click="back"> 每日推荐</span>
                <span class="iconfont icon-wenhao"></span>
            </div>
            <div class="day">
                <span>{{ri | dateFormat}}</span><span>/{{Month | dateFormat}}</span>
            </div>
            <div class="friend">
                <p>根据你的音乐口味，为你推荐好音乐，好朋友</p><span class="iconfont icon-iconfontyoujiantou">></span>
            </div>
        </div>
        <div class="recommend">
            <div class="playall">
                <h1><span class="iconfont icon-bofang"></span>播放全部</h1>
                <h3><span class="iconfont icon-duoxuan"></span>多选</h3>
            </div>    
            <div class="sonbox">
                <div class="song" v-for="s,i in dailysongs" :key="i">
                    <img :src=s.album.blurPicUrl>
                    <div class="info" @click="add(s);">
                        <h2>{{s.name}}</h2>
                        <!-- 给歌曲中有多个歌手的，在歌手中间加"/" -->
                        <p><span>{{getartists[i].join("/")}}</span>-{{s.name}}</p>
                    </div>
                    <span class="play iconfont icon-bofang1"></span>
                    <span class="more iconfont icon-sandiancaidan"></span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {mapActions,mapState,mapMutations,mapGetters} from "vuex"
import PlayerBottom from "@/components/PlayerBottom.vue"
export default {
    data() {
        return {
            Month:0,
            ri:0,
        }
    },
    methods: {
        ...mapActions(["getdailysongs"]),
        ...mapMutations(["add"]),
        getdate(){
            let obj=new Date();
            this.Month=obj.getMonth()+1;
            this.ri=obj.getDate()
        },
        back(){
            this.$router.push({path:"/discover"});
        },
        
    },
    mounted() {
        this.getdailysongs();
        this.getdate();
        // console.log()
        
        
    },
    computed: {
        ...mapState(["dailysongs","css","animationShow"]),
        ...mapGetters(["getartists"])
    },
    filters:{
        dateFormat(data){
            if(data<10){
                return "0"+data
            }
        }
    },
    components:{
    }
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_kc2gmo3hcjs.css");
.recmmendbox {
    position:relative;
    z-index: 1000;
}
.banner {
    height: 4.314815rem;
    background: #ca7d79;
    padding: 0.425926rem 0.5rem;
    
}
.banner .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top:0;
    left: 0;
    padding: 0.425926rem 0.5rem;
    box-sizing: border-box;
    background: #ca7d79;

}
.icon-arrowleft,.icon-wenhao{
    font-size: .5rem;
    color:#fff;
}
.day {
    margin-top: 2.5rem;
    font-weight: bold;
}
.day>span:nth-of-type(1){
    font-size: .8rem;
    color: #fff;
    margin-right: .148148rem;
}
.day>span:nth-of-type(2){
    font-size: .6rem;
    color: #fff;
}
.friend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#e2e2e2;
}
.recommend {
    background: #fff;
    padding: 0.407407rem 0.444444rem;
}
.playall {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: .703704rem;
}
.playall>h1 {
    font-size: .351852rem;
    color: #353535;
}
.playall .icon-bofang {
    font-size: .555556rem;
    color: #4d4d4d;
    margin-right: .277778rem;
    vertical-align: middle
}
.playall>h3 {
    font-size: .277778rem;
    color: #353535;
}
.playall .icon-duoxuan {
    font-size: .277778rem;
    color: #4d4d4d;
    margin-right: .185185rem;
}
.song {
    display: flex;
    justify-content: space-between;
    margin-bottom: .555556rem;
}
.song>img{
    width: 1.111111rem;
    height: 1.111111rem;
    border-radius: .277778rem;
    margin-right: .277778rem;
}
.info>h2 {
    font-size: .314815rem;
    color: #333;
    line-height: 1;
    margin: .203704rem 0;
}
.info>p {
    width:5.925926rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    font-size: .240741rem;
    color: #808080;
}
.play,.more {
    margin-top: .314815rem;
    font-size: .5rem;
    color: #b3b3b3;
}
</style>
