<template>
    <div>
        <div class="playbottom">
            <div class="cover" :style="{'animation-play-state':animationShow}"><img :src=playnow.album.blurPicUrl></div>
            <div class="name">
                <h2>{{playnow.name}}</h2>
                <p>横滑可以切换上下首哦</p>
            </div>
            <div class="manu">
                <span :class=css @click="rotate();playaudio()"></span>
                <el-button type="text" @click="centerDialogVisible = true" class="playlists iconfont icon-menu"></el-button>
            </div>
            <audio :src=getmusicurl ref="myaudio"></audio>
            
        </div>
        <el-dialog
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <div class="title">
                    <div class="lef"><span class="iconfont icon-xunhuan1"></span><span class="xh">列表循环</span><span>({{play.length}})</span></div>
                    <div class="right"><span class="el-icon-folder-add"></span><span class="coll">收藏全部</span><span class="el-icon-delete"></span></div>
                </div>
                <span></span>
                <span slot="footer" class="dialog-footer">
                    <ul class="playlist">
                        <li v-for="p,i in play" :key="p.id" @click="listplay(p)">
                            <div class="song-info"><span class="iconfont icon-laba" v-if="false"></span><span class="song-name">{{p.name}}</span><span class="artists">-{{getplayartists[i].join("/")}}</span></div>
                            <div class="manu"><span class="origin">播放来源</span><span class="iconfont icon-delete"></span></div>
                        </li>
                    </ul> 
                </span>
        </el-dialog>
    </div>
    
</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"
export default {
    data() {
        return {
            // css:"playandpause iconfont icon-bofang",
            centerDialogVisible: false
        }
    },
    methods: {
        ...mapMutations(["playaudio","listplay"]),
        rotate(){
            // console.log(1);
            console.log(this.$store.state.animationShow)
            if(this.$store.state.animationShow=="paused"){
                this.$nextTick(() => {
                    this.$refs.myaudio.play();
                    this.$store.state.css="playandpause iconfont icon-zanting"
                })
                
            }else {
                this.$nextTick(() => {
                    this.$refs.myaudio.pause();
                    this.$store.state.css="playandpause iconfont icon-bofang"
                })
            }
            
        }
    },
    computed:{
        ...mapState(["play","playnow","animationShow","css"]),
        ...mapGetters(["getmusicurl","getplayartists"]),
        count(){
            return this.$store.state.animationShow//返回store实例的count状态
        }
    },
    mounted() {
        // console.log(this.$store.state.animationShow)
        // console.log(this.$store.state.css)
        
        if(this.$store.state.animationShow=="running"){
            this.$store.state.animationShow="paused"
            this.$refs.myaudio.pause();
            this.$store.state.css="playandpause iconfont icon-bofang"
        }
    },
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_o1qneik60zh.css");
ul{
    list-style: none;
    margin: 0;
    padding: 10px;
    background: #fff;
}
.playbottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index:1000;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.166667rem 0;

}
.cover {
    width: 1.037037rem;
    height: 1.037037rem;
    border-radius: 50%;
    overflow: hidden;
    align-items: center;
    margin-right: .185185rem;

    transform: rotate3d(0,0,0,0deg);
    animation: access 30s infinite linear;

    
}
@keyframes access {
    0% {
    transform: rotate3d(0,0,0,0deg);
    }
    to {
    transform: rotate3d(0,0,1,360deg);
    }
}
.cover img {
    width:100%;
}
.name {
    margin-right: 3.148148rem;
}
.name h2 {
    font-size: .277778rem;
    color:#333232;
    margin-bottom: .046296rem;
}
.name p {
    margin:0;
    font-size: .240741rem;
    color: #808080;
}
.manu {
    display: flex;
    align-items: center;
}
.playandpause {
    font-size: .740741rem;
    color:#4d4d4d;
    margin-right: .592593rem;
}
.icon-menu {
    font-size: .537037rem;
    color:#4d4d4d;
}
.el-icon-refresh-right, .el-icon-folder-add,.el-icon-delet{
    font-size: .444444rem;
    color:#999;
    margin-right: .203704rem;
}
.title {
  padding: 0.5rem 0.277778rem 0.462963rem 0.277778rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}
.coll {
   padding-right: .425926rem;     
   border-right: 1px solid #e6e6e6;
   margin-right: .277778rem;
}
.playlist>li {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: .907407rem;
}
.song-info {
    display: flex;
    justify-content: center;
}
.song-info .icon-laba {
    font-size: .37037rem;
    margin-right: .185185rem;
}
.song-info .song-name {
    font-size: .314815rem;

}
.song-info .artists {
    font-size: .277778rem;
    
}
.origin {
    display: block;
    width: 1.574074rem;
    height: .481481rem;
    border: 1px solid #e6e6e6;
    text-align: center;
    line-height: .481481rem;
    border-radius: .277778rem;
    margin-right: .62963rem;
}
.icon-delete {
    font-size:.333333rem;
    color: #b3b3b3;
}
</style>
