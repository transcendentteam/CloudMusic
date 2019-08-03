<template>
    <div>
        <div class="play" :style="{background:'url('+playnow.album.blurPicUrl+') center top'}">
        </div>

        <div class="gai">
            <!-- 头部 -->
            <div class="title">
                <div class="left">
                    <span class="iconfont icon-arrowleft" @click="back"></span>
                    <div class="info">
                        <h1>{{playnow.name}}</h1>
                        <p>{{playnow.artists | atrFormat }}<span class="iconfont icon-iconfontyoujiantou-copy"></span></p>
                    </div>
                </div>
                <span class="iconfont icon-fenxiang"></span>
            </div>
            <!-- 封面 -->
            <div class="cover">
                <img :src=playnow.album.blurPicUrl>
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
                    <span class="start">
                    </span><div class="tiao"><span class="dian"></span>
                    </div><span class="total">{{playnow.bMusic.playTime/1000 | format}}</span>
                </div>
                <!-- 播放暂停 -->
                <div class="bofangqu">
                    <span class="iconfont icon-xunhuan1"></span>
                    <span class="iconfont icon-shangyige"></span>
                    <span :class=bfstyle @click="bofang"></span>
                    <span class="iconfont icon-xiayige"></span>
                    <span class="iconfont icon-liebiao"></span>
                </div>
                <audio :src=getmusicurl ref="au" loop></audio>
            </div>
        </div>
    </div>
    
</template>

<script>
import {mapState,mapGetters} from "vuex"
export default {
    data() {
        return {
            bfstyle:"iconfont icon-bofang",
            start:0
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        },
        bofang(){
            let audio = this.$refs.au
            //如果处于暂停状态则audio的paused为true
            console.log(audio.paused)
            if(audio.paused == true){
                audio.play();
                this.bfstyle= "iconfont icon-zanting"
            }else if (audio.paused == false) {
                audio.pause();
                this.bfstyle= "iconfont icon-bofang";
            }
            

        }
    },
    computed: {
        ...mapState(["playnow"]),
        ...mapGetters(["getmusicurl"]),
        
    },
    mounted() {
            // setInterval(()=>{
            //     console.log(parseInt(this.$refs.au.currentTime))
            // },1000)
    },
    // 歌手名字过滤器，加"/"
    filters:{
        atrFormat(des){
            let arr=[]
            for(var i in des){
                arr.push(des[i].name)
            }
            let str = arr.join("/")
            return str
        },
        format(des){
            let h = parseInt(des/60);
            let s = parseInt(des-h*60);

            return h+":"+s
        }
    }
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_o1qneik60zh.css");
.play {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    z-index: 3000;
    filter: blur(15px);
}
.gai {
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
.title {
    height: 1.481481rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: #fff;
}
.left{
    display: flex;
    align-items: center;

}
.left .icon-arrowleft{
    font-size: .592593rem;
    margin-right: .5rem;
}
.left h1 {
    font-size: .37037rem;
}
.left p {
    margin: 0;
    color:#909090;
    
}
.icon-iconfontyoujiantou-copy {
    font-size: 12px !important;
}
.icon-fenxiang {
    font-size: .5rem;
}
.cover {
    width: 6.518519rem;
    height:6.518519rem;
    border-radius: 50%;
    overflow:hidden;
    border: 0.138889rem solid #696a66;
    margin: 2.092593rem auto 2.722222rem auto;
}
.cover img {
    width: 100%
}
.manu {
    font-size: .574074rem;
    color: #c6c8c5;
    display: flex;
    justify-content: space-around;
    margin-bottom: .759259rem;
}
.start {
    color: #bbbcba;
}
.jdt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .759259rem;
}
.tiao {
    position: relative;
    width: 7.203704rem;
    height: 4px;
    background: #696968;
    margin: 0 auto;
    border-radius: 10px;
}
.dian {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 0;
    top: -2px;
}
.total {
    color: #62605b;
}
.bofangqu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.icon-xunhuan1 {
    font-size: .518519rem;
    color: #d6d7d5;
}
.icon-shangyige,.icon-xiayige {
    font-size: .574074rem;
    color: #d3d3d2;
}
.icon-bofang,.icon-zanting {
    font-size: 1.388889rem;
    color:#fff;

}
.icon-liebiao {
    font-size:.537037rem;
    color: #d5d4d3;
}
</style>
