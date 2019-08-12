<template>
    <div class="video">
        <div v-for="v in video">
            <div class="share">
                <video :src="v.data.urlInfo.url" controls width="100%" :poster="v.data.coverUrl"></video>
                <p>{{v.data.title}}</p>
            </div>
            <div class="user">
                <i></i>
                <h1>
                    <i><img :src="v.data.creator.avatarUrl"></i>
                    <span>{{v.data.creator.nickname}}</span>
                </h1>
                <p>
                    <span><i class="iconfont icon-zan"></i><span>{{v.data.shareCount}}</span></span>
                    <span><i class="iconfont icon-xiaoxi"></i><span>{{v.data.commentCount}}</span></span>
                    <i class="iconfont icon-sandiancaidan"></i>
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex)
export default {
    data(){
        return{
            video:[]
        }
    },
    mounted() {
        // Vue.axios.get(`http://120.27.243.6:3000/video/group?id=9104`)
        //     .then(res =>{
        //         // console.log(res.data.profile);
        //         // store.commit("getuser",res.data.profile)
        //         console.log(res.data.datas)
        //         this.video=res.data.datas;
        //     })
        this.axios.get("http://120.27.243.6:3000/video/group?id=9104").then((res) => {
            // console.log(response.data.playlists)
            this.video=res.data.datas;
        })
    },
    
};
</script>

<style scoped>
    @import url("http://at.alicdn.com/t/font_1324850_kwsyguixr6s.css");
        html,body,h1,h2,h3,ul,li,p {
        margin: 0;
        padding: 0;
    }
    .video{
        margin-top: 1.851852rem;
        background: #f7f3f7;
    }
    .video .share{
        padding: .277778rem .444444rem 0;
        
        background: #fff;
    }
    .video .share:nth-of-type(1){
        border-top: 1px #e7e7e7 solid;
    }
    .video .share video{
        object-fit: fill;
        
        vertical-align: middle;
    }
    .video .share p{
        font: .388889rem/1.231481rem "";
        margin: 0;
    }
    .video .user{
        width: 100%;
        display: flex;
        padding: 0 .185185rem;
        margin-bottom: .231481rem;
        justify-content: space-between;
        background: #fff;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;

    }
    .video .user>i{
        display: inline-block;
        width: 100%;
        height: 1px;
        background: #e7e7e7;
    }
    .video .user h1{
        display: flex;
        align-items: center;
    }
    .video .user h1 i{
        margin: .277778rem .212963rem .277778rem .37037rem;

    }
    .video .user h1 i img{
        width: .833333rem;
        border-radius: 50%;
        vertical-align: top;
    }
    .video .user h1 span{
        font: .37037rem/1 "";
        color: #000;
    }
    .video .user p i{
        font-size: .5rem;
        color: #636563;
    }
    .video .user p>i{
        margin: 0 .166667rem 0 1.064815rem;
    }
    .video .user p>span:nth-of-type(1){
        margin-right: .768519rem;
    }
    .video .user p>span{
        position: relative;
    }
    .video .user p>span>span{
        display: block;
        position: absolute;
        background: #fff;
        top: -0.231852rem;
        left: .301852rem;
        color: #636563;
    }
</style>
