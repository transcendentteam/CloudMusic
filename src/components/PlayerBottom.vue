<template>
    <div class="player"  v-show="playlist.length>0">
        <transition name="normal">
            <div class="normal" v-show="fullScreen">
                <div class="play" 
                    :style="{background:'url('+currentSong.album.blurPicUrl+') center top'}">
                </div>

                <div class="gai">
                    <!-- 头部 -->
                    <div class="title">
                        <div class="left">
                            <span class="iconfont icon-arrowleft" @click="back"></span>
                            <div class="info">
                                <h1>{{currentSong.name}}</h1>
                                <p>{{currentSong.artists | atrFormat }}<span class="iconfont icon-iconfontyoujiantou-copy"></span></p>
                            </div>
                        </div>
                        <span class="iconfont icon-fenxiang"></span>
                    </div>
                    <!-- 封面 -->
                    <div class="cover" :style="{'animation-play-state':animationShow}" v-show="isShow">
                        <img :src="currentSong.album.blurPicUrl">
                    </div>
                    <!-- 歌词 -->
                    <div class="lyric" v-show="!isShow">
                        <h1>歌词歌词歌词</h1>
                    </div>
                    <!-- 收藏评论 -->
                    <div class="manu">
                        <span class="iconfont icon-xinaixinfuzhi"></span>
                        <span class="iconfont icon-xiazai"></span>
                        <span class="iconfont icon-jingyunyinxiaopt"></span>
                        <span class="iconfont icon-xiaoxi"></span>
                        <span class="iconfont icon-gengduosandian"></span>
                    </div>
                    <!-- 播放区 -->
                    <div class="bofang">
                        <!-- 进度条 -->
                        <div class="jdt">
                            <span class="start">{{currentTime | timeFormat}}</span>
                            <div class="tiao" ref="progressBar">
                                <span class="dian" ref="progressBtn"></span>
                                <div class="move-bar" ref="progress"></div>
                            </div>
                            <span class="total">{{currentSong.bMusic.playTime | format}}</span>
                        </div>
                        <!-- 播放暂停 -->
                        <div class="bofangqu">
                            <span class="iconfont icon-xunhuan1"></span>
                            <span @click="prev" class="iconfont icon-shangyige"></span>
                            <span :class="playIcon" @click="toggleplaying"></span>
                            <span @click="next" class="iconfont icon-xiayige"></span>
                            <span class="iconfont icon-liebiao"></span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
       
        <div class="mini" v-show="!fullScreen">
            <div class="left">
                <div class="cover" @click="normalShow" :style="{'animation-play-state':animationShow}">
                    <img :src=currentSong.album.blurPicUrl>
                </div>
                <div class="name">
                    <h2>{{currentSong.name}}</h2>
                    <p>横滑可以切换上下首哦</p>
                </div>
            </div>
            <div class="manu">
                <span @click="toggleplaying" :class="playIcon"></span>
                <el-button type="text" 
                           @click="centerDialogVisible = true" 
                           class="playlists iconfont icon-menu">
                           </el-button>
            </div>
            <el-dialog
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <div class="title">
                    <div class="lef">
                        <span class="iconfont icon-xunhuan1"></span>
                        <span class="xh">列表循环</span>
                        <span>({{playlist.length}})</span>
                    </div>
                    <div class="right">
                        <span class="el-icon-folder-add"></span>
                        <span class="coll">收藏全部</span>
                        <span class="el-icon-delete"></span>
                    </div>
                </div>
                <span></span>
                <span slot="footer" class="dialog-footer">
                    <ul class="playlist">
                        <li v-for="p,i in playlist" :key="p.id" 
                            @click="active(i)" >
                            <div :class="[ num == i ? 'active':'song-info']">
                                <span class="iconfont icon-laba" v-if="num == i ? true:false"></span>
                                <span class="song-name">{{p.name}}</span>
                                <span class="artists">-{{getplayartists[i].join("/")}}</span>
                            </div>
                            <div class="manu">
                                <span class="origin" v-if="num == i ? true:false">播放来源</span>
                                <span class="iconfont icon-delete"></span>
                            </div>
                        </li>
                    </ul> 
                </span>
            </el-dialog>
        </div>
        
        <audio :src="getmusicurl" ref="audio" @timeupdate="updateTime" @ended="end"></audio>

    </div>
    
</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"

const progressBtnWidth = 16

export default {
    data() {
        return {
            centerDialogVisible: false,
            num:0,
            currentTime:0,
            isShow:true
        }
    },
    watch: {
        getmusicurl(){
            //加延时
            this.$nextTick(() => {
                this.$refs.audio.play()
            })
            this.$store.state.playing=true;

            this.num = this.$store.state.currentIndex;
        },
        //监听playing的变化
        playing(newPlaying){
            //加延时
            this.$nextTick(() => {
                const audio = this.$refs.audio
                newPlaying?audio.play():audio.pause()
            })
        },
        //监听歌曲播放百分比
        percent(newPercent) {
            // console.log(newPercent)
            if(newPercent >= 0) {
                //进度条的总长度
                const barwidth = this.$refs.progressBar.clientWidth - progressBtnWidth
                //小球的偏移
                const offsetWidth = newPercent * barwidth
                //变化的进度条的宽度
                this.$refs.progress.style.width = `${offsetWidth}px`
                //小点的left值
                this.$refs.progressBtn.style.left = `${offsetWidth}px`
            }
        }
    },
    methods: {
        ...mapMutations(["playaudio","listplay","setCurrentIndex","add"]),
        back(){
            this.$store.state.fullScreen = false;
        },
        toggleplaying(){
        //    console.log(this.$store.state.playing);
            
           this.$store.state.playing = !this.$store.state.playing;
        //    console.log(this.$store.state.playing);
        },
        //控制播放器全屏
        normalShow(){
            this.$store.state.fullScreen = true;
        },
        //播放列表active
        active(index){
            this.num = index;
            //点击播放列表的时候,将当前序号传递给currentIndex
            this.$store.state.currentIndex = index;
        },
        next(){
            // this.$store.state.playing=true;
            let index = this.$store.state.currentIndex + 1
            if(index === this.$store.state.playlist.length){
                index = 0
            }
            this.$store.state.currentIndex=index;
            
        },
        prev(){
            // this.$store.state.playing=true;
            let index = this.$store.state.currentIndex - 1
            if(index === -1){
                index = this.$store.state.playlist.length-1
            }
            this.$store.state.currentIndex=index;
        },
        //audio的timeupdate事件
        updateTime(e) {
            this.currentTime = e.target.currentTime;
            
        },
        //当前歌曲放完以后 序号+1
        end(){
            if(this.$store.state.currentIndex<this.$store.state.playlist.length){
                this.$store.state.currentIndex ++
            }else {
                this.$store.state.playing = false;
            }

        }
    },
    computed:{
        ...mapState([
            "playlist",
            "playnow",
            "fullScreen",
            "playing"]
        ),
        ...mapGetters([
            "getmusicurl",
            "getplayartists",
            "currentIndex",
            "currentSong"
        ]),
        //根据playing的状态切换播放图标
        playIcon(){
            return this.$store.state.playing?'iconfont icon-zanting':'iconfont icon-bofang'
        },
        //
        animationShow(){
            return this.$store.state.playing?'running':'paused'
        },
        percent() {
            return this.currentTime / (this.$store.getters.currentSong.bMusic.playTime/1000)
        }
    },
    mounted() {
    },
    filters:{
        //开始时间格式化
        timeFormat(des) {
            //向下取整
            des = des | 0
            let minute = des / 60  | 0
            let second = des % 60
            if(minute < 10){
                minute = '0'+minute
            }
            if(second < 10){
                second = '0'+second
            }

            return  `${minute}:${second}`
        },
        
        atrFormat(des){
            let arr=[]
            for(var i in des){
                arr.push(des[i].name)
            }
            let str = arr.join("/")
            return str
        },
        //总时长格式化
        format(des){
            des = des/1000 | 0
            let minute = des / 60  | 0
            let second = des % 60
            if(minute < 10){
                minute = '0'+minute
            }
            if(second < 10){
                second = '0'+second
            }

            return  `${minute}:${second}`
        }
    }
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
.normal .play {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    z-index: 3000;
    filter: blur(15px);
}
.normal .gai {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 3001;
    background: rgba(0, 0, 0, .8);
    padding: 0 0.388889rem 0 0.5rem;
    box-sizing: border-box;
}
.normal .title {
    height: 1.481481rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: #fff;
}
.normal .left{
    display: flex;
    align-items: center;

}
.normal .left .icon-arrowleft{
    font-size: .592593rem;
    margin-right: .5rem;
}
.normal .left h1 {
    width: 7rem;
    overflow: hidden;
    white-space: nowrap;
    font-size: .37037rem;
}
.normal .left p {
    margin: 0;
    color:#909090;
    
}
.normal .icon-iconfontyoujiantou-copy {
    font-size: 12px !important;
}
.normal .icon-fenxiang {
    font-size: .5rem;
}
.normal .cover {
    width: 6.518519rem;
    height:6.518519rem;
    border-radius: 50%;
    overflow:hidden;
    border: 0.138889rem solid #696a66;
    margin: 2.092593rem auto 2.722222rem auto;
    animation: access 30s infinite linear;

}
.normal .cover img {
    width: 100%
}
.normal .manu {
    font-size: .574074rem;
    color: #c6c8c5;
    display: flex;
    justify-content: space-around;
    margin-bottom: .759259rem;
}
.normal .start {
    color: #bbbcba;
}
.normal .jdt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .759259rem;
}
.normal .tiao {
    position: relative;
    width: 7.203704rem;
    height: 4px;
    background: #696968;
    border-radius: 10px;
}
.normal .dian {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 0;
    top: -6px;
}
.normal .move-bar {
    height: 4px;
    background: orange;
    position: absolute;
    left: 0;


}
.normal .total {
    color: #62605b;
}
.normal .bofangqu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.normal .icon-xunhuan1 {
    font-size: .518519rem;
    color: #d6d7d5;
}
.normal .icon-shangyige,.icon-xiayige {
    font-size: .574074rem;
    color: #d3d3d2;
}
.normal .icon-bofang,.icon-zanting {
    font-size: 1.388889rem;
    color:#fff;

}
.normal .icon-liebiao {
    font-size:.537037rem;
    color: #d5d4d3;
}
.mini {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index:3001;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.166667rem 0.2rem;
    box-sizing: border-box;

}
.mini .left {
    display: flex;
    justify-content: left;

}
.mini .cover {
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
.mini .cover img {
    width:100%;
}

.mini .name h2 {
    width: 6.481481rem;
    font-size: .277778rem;
    color:#333232;
    margin-bottom: .046296rem;
    overflow-x: hidden;
    white-space: nowrap;
}
.mini .name p {
    margin:0;
    font-size: .240741rem;
    color: #808080;
}
.mini .manu {
    display: flex;
    align-items: center;
}
.mini .icon-bofang,.mini .icon-zanting {
    font-size: .740741rem;
    color:#4d4d4d;
    margin-right: .5rem;
}
.mini .icon-menu {
    font-size: .537037rem;
    color:#4d4d4d;
}
.mini .el-icon-refresh-right, .el-icon-folder-add,.el-icon-delet{
    font-size: .444444rem;
    color:#999;
    margin-right: .203704rem;
}
.mini .title {
  padding: 0.5rem 0.277778rem 0.462963rem 0.277778rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}
.mini .coll {
   padding-right: .425926rem;     
   border-right: 1px solid #e6e6e6;
   margin-right: .277778rem;
}
.mini .playlist>li {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: .907407rem;
}
.mini .active {
    color:red;
    width:6.944444rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
}
.mini .song-info {
    width:6.944444rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    justify-content: left;
}
.mini .song-info .icon-laba {
    font-size: .37037rem;
    margin-right: .185185rem;
}
.mini .song-info .song-name {
    font-size: .314815rem;
    white-space: nowrap;

}
.mini .song-info .artists {
    font-size: .277778rem;
    
}
.mini .origin {
    display: block;
    width: 1.574074rem;
    height: .481481rem;
    border: 1px solid #e6e6e6;
    text-align: center;
    line-height: .481481rem;
    border-radius: .277778rem;
    margin-right: .62963rem;
}
.mini .icon-delete {
    font-size:.333333rem;
    color: #b3b3b3;
}
</style>
