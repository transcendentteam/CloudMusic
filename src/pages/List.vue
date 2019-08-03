<template>
    <div class="list">
        <!-- 头部 -->
        <div class="top">
            <div class="left">
                <span class="iconfont icon-arrowleft" @click="back"></span>
                <div class="info">
                    <h1>歌单广场</h1>
                </div>
            </div>
        </div>
        <div class="nav">
            
            <ul>
                <li>推荐</li>
                <li>官方</li>
                <li>精品</li>
                <li>华语</li>
                <li>电子</li>
                <li>民谣</li>
                <li>摇滚</li>
                <li>轻音乐</li>

            </ul>
        </div>
        <ul class="list-show">
            <li class="list-show-item" v-for="l in lists" :key="l.id" @click="listdetail(l.id);to()">
                <div class="img">
                    <img :src=l.coverImgUrl>
                    <div class="playcount"><span class="iconfont icon-sanjiaoxings"></span>{{parseInt(l.playCount/10000)}}万</div>
                </div>
                <p>{{l.name}}</p>
                
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
// import betterscroll from "vue2-better-scroll"
export default {
    computed: {
        ...mapState(["lists"])
    },
    methods: {
        ...mapActions(["getlist","listdetail"]),
        back(){
            this.$router.go(-1)
        },
        to(){
            this.$router.push({path:'/discover/list/detail'})
        }
    },
    mounted() {
        this.getlist();
    },
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_o1qneik60zh.css");

ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.top {
    height: 1.481481rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: #303030;
    padding-left: .5rem;
}
.nav {
    /* width: 100%; */
    height: 1.055556rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;
}

.nav li {
    display: inline-block;
    width: 2.018519rem;
    text-align: center;
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
.list {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: #fff;
    overflow-y: scroll;

}
.list-show {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.962963rem 0.444444rem 2.277778rem 0.444444rem;
}
.list-show-item {
    width: 2.851852rem;
    margin-bottom: .611111rem;
    
}
.list-show-item .img {
    width: 100%;
    height: 2.851852rem;

}
.list-show-item img{
    width: 100%;
    vertical-align: top;
}
.list-show-item .img {
    position: relative;
    border-radius: .092593rem;
    overflow: hidden;
}
.playcount {
    font-size: .240741rem;
    text-align: right;
    color: #fff;
    /* font-weight: bold; */
    position: absolute;
    top: .12963rem;
    right: .148148rem;
}
.playcount .iconfont {
    margin-right: .055556rem;
    font-size: .222222rem;
}
.list-show-item>p {
    margin: 0.259259rem 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow:hidden;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;

}


</style>
