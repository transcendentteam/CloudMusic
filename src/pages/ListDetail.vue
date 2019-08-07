<template>
    <div class="listdetail">
        <div class="bg" >
            <img :src=listdetail.coverImgUrl >
            <div class="cover">
                <div class="title">
                    <div class="left"><span class="iconfont icon-arrowleft" @click="back"></span><span>歌单</span></div>
                    <div class="right"><span class="iconfont icon-fangdajing"></span><span class="iconfont icon-sandiancaidan"></span></div>
                </div>
                <div class="info">
                    <div class="cvimg">
                        <img :src=listdetail.coverImgUrl>
                    </div>
                    <div class="name">
                        <h1>{{listdetail.name}}</h1>
                        <div class="user">
                            <img :src="listuser.avatarUrl" alt=""><h2>{{listuser.nickname}}</h2><span class="iconfont icon-iconfontyoujiantou-copy"></span>
                        </div>
                        <p class="desc">{{listdetail.description}}</p><span class="iconfont icon-iconfontyoujiantou-copy"></span>
                    </div>
                </div>
                <div class="share">
                    <div><span class="iconfont icon-xiaoxi"></span><p>{{listdetail.commentCount}}</p></div>
                    <div><span class="iconfont icon-fenxiang"></span><p>{{listdetail.shareCount}}</p></div>
                    <div><span class="iconfont icon-xiazai"></span><p>下载</p></div>
                    <div><span class="el-icon-finished"></span><p>多选</p></div>
                </div>
                <!-- <div class="songbox">
                    <div v-for="item in listsong" :key="item.id" class="song">{{item.name}}</div>
                </div> -->
                <div class="all">
                    <div class="left">
                        <span class="iconfont icon-bofang"></span>
                        <h1>播放全部</h1><span class="all-number">共({{listsong.length}})首</span>
                    </div>
                    <div class="shoucang"><span class="iconfont icon-jia"></span>收藏({{listdetail.subscribedCount | dataFormat}})</div>
                </div>
                <main class="position-box">  <!-- 需要一个创建一个父容器 组件高度默认等于父容器的高度 -->
                    <vue-better-scroll class="wrapper"
                                        ref="scroll"
                                        :scrollbar="scrollbarObj"
                                        :pullDownRefresh="pullDownRefreshObj"
                                        :pullUpLoad="pullUpLoadObj"
                                        :startY="parseInt(startY)"
                                        @pullingDown="onPullingDown"
                                        @pullingUp="onPullingUp">
                        
                        <ul class="list-content songbox">
                            <li class="list-item song"
                                v-for="item,i in listsong" :key="item.id" @click="add(item);playingstate()" >
                                <div class="info">
                                    <span>{{i+1}}</span>
                                    <h1>{{item.name}}</h1>
                                </div>
                                <div class="manu">
                                    <span class="iconfont icon-bofang1"></span>
                                    <span class="iconfont icon-sandiancaidan"></span>
                                </div>
                                
                            </li>
                        </ul>
                    </vue-better-scroll>
                </main>
            </div>
            <loading v-if="isLoading"/>
        </div>
        
        
    </div>
</template>

<script>
import Vue from "vue"
import {mapState,mapActions,mapMutations} from "vuex"

import VueBetterScroll from "vue2-better-scroll";
import loading from "@/components/loading.vue"

export default {
    data() {
        return {
            // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
        scrollbarObj: {
          fade: true
        },
        // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        pullDownRefreshObj: {
          threshold: 90,
          stop: 40
        },
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
        pullUpLoadObj: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据了'
          }
        },
        startY: 0, // 纵轴方向初始化位置
        scrollToX: 0,
        scrollToY: 0,
        scrollToTime: 700,
        items: [],

        }
    },
    computed: {
        ...mapState(['listdetail','listuser',"listsong","isLoading"]),
        userState(){
            return this.$store.state.listdetail.userId
        }
    },
    watch: {
        userState(val) {
           this.userId=val
           this.$store.dispatch("getuser",val);

        }
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        ...mapActions(["getuser"]),
        ...mapMutations(["add"]),
        // 滚动到页面顶部
      scrollTo() {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
      },
      // 模拟数据请求
      getData() {
        
      },
      onPullingDown() {
        // 模拟下拉刷新
        console.log('下拉刷新')
        this.getData()
      },
      onPullingUp() {
        // 模拟上拉 加载更多数据
        console.log('上拉加载')
        this.getData()
        
      },
      playingstate(){
            this.$store.state.playing = true;
      }
        
    },
    mounted() {
        // this.onPullingDown()
    },
    components:{
        VueBetterScroll,
        loading
    },
    filters:{
        dataFormat(des){
            if(des>10000){
                return (des/10000).toFixed(1)+"万"
            }else if(des>100000000){
                return (des/100000000).toFixed(1)+"亿"
            }
        }
    }
};
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0 .555556rem;
    margin:0;
}
.listdetail {
    position: fixed;
    top: 0;
    width:100%;
    background: #fff;
    height: 100%;
    z-index: 1000;
}

.bg>img{
    width:100%;
    filter: blur(15px);
}
.cover {
    width: 100%;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, .6);
    color: #fff;
}
.title {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    height: 1.388889rem;
    font-size: .5rem;
    margin-bottom: .592593rem;
}

.title .left span:nth-of-type(2) {
    font-size: .37037rem;
    margin-left: .518519rem;
}
.icon-fangdajing {
    margin-right: .925926rem;
}
.info {
    display: flex;
    margin-bottom: .703704rem;
    padding: 0 0.574074rem 0 0.444444rem;

}
.info .cvimg {
    margin-right: .518519rem;
}
.info .cvimg img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: .277778rem;
}
.info h1 {
    font-size: .407407rem;
    margin-bottom: .314815rem;
}
.share {
    font-size: .537037rem;
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin-bottom: .5rem;
}
.share>div {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.share>div>p {
    margin: 0;
    margin-top:.185185rem;
    font-size: .240741rem;
}
.share .iconfont {
    font-size: .537037rem;

}
.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow:hidden;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
}
.name .user {
    display: flex;
    justify-content:left;
    align-items: center;
}
.name .user>img {
    width:.740741rem;
    height: .740741rem;
    border-radius: 50%;
    margin-right: .277778rem;
}
.name .user>h2 {
    font-size: .277778rem;
    color: #ebeae9;
    overflow: hidden;
	text-overflow: ellipsis;
    white-space: nowrap;


}
.all{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.388889rem;
    background: #fff;
    color: #333;
    padding: 0 0.148148rem 0 0.425926rem;
    box-sizing:border-box;
}
.all .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.all h1 {
    font-size: .333333rem;
}
.icon-bofang {
    font-size: .555556rem;
    margin-right: .444444rem;
}
.all-number {
    color: #999; 
}
.all .shoucang {
    background: #ff3a3a;
    text-align: center;
    color: #fff;
    padding: .37037rem .092593rem;
    border-radius: .740741rem;
}
.icon-jia {
    font-size: .277778rem;
    margin-right: .185185rem;
}
.position-box {
    width: 100%;
    position: absolute;
    height:11.111111rem;
}

.songbox {
    background: #fff;
    color: #333;
    padding-top: .277778rem;
}
.song {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .925926rem;
}
.song .info {
    padding: 0;
    margin: 0;
}
.song span {
    display: flex;
    align-items: center;
}
.song h1 {
    font-size: .37037rem;
    margin: 0;
    margin-left: .685185rem;

}
.song .manu {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
