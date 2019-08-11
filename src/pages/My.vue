<template>
    <div class="my">
        <ul class="my-nav">
            <li>
                <span class="iconfont icon-yinyue"></span>
                <div class="nav-name">本地音乐</div>
            </li>
            <li>
                <span class="iconfont icon-zuijinbofang-xuanting"></span>
                <div class="nav-name">最近播放</div>
            </li>
            <li>
                <span class="iconfont icon-xiazai"></span>
                <div class="nav-name">下载管理</div>
            </li>
            <li>
                <span class="iconfont icon-diantai"></span>
                <div class="nav-name">我的电台</div>
            </li>
            <li>
                <span class="iconfont icon-wodeshoucang"></span>
                <div class="nav-name">我的收藏</div>
            </li>
        </ul>
        <div class="my-create">
            <div class="nav" @click="slide">
                <div class="nav-left">
                    <span class="iconfont icon-jiantouxia"></span>
                    <h1>创建的歌单</h1>
                    <span>({{createnum}})</span>
                </div>
                <div class="nav-right">
                    <span class="iconfont icon-addTodo-nav"></span>
                    <span class="iconfont icon-sandian1"></span>
                </div>
            </div>
            <MyList :lists="createlist" v-show="isShow"/>
        </div>
        <div class="my-collect">
            <div class="nav" @click="slidec">
                <div class="nav-left">
                    <span class="iconfont icon-jiantouxia"></span>
                    <h1>收藏的歌单</h1>
                    <span>({{collectnum}})</span>
                </div>
                <div class="nav-right">
                    <span class="iconfont icon-sandian1"></span>
                </div>
            </div>
            <MyList :lists="collectlist" v-show="show"/>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
import MyList from  '../components/MyList'
export default {
    data() {
        return {
            "isShow":true,
            "show":true
        }
    },
    computed: {
        ...mapState([
            "createnum",
            "collectnum",
            "createlist",
            "collectlist"
        ])
    },
    methods: {
        ...mapActions([
            "getsubcount",
            "getuserlist"
        ]),
        slide(){
            this.isShow=!this.isShow
        },
        slidec(){
            this.show=!this.show
        }
    },
    mounted() {
        this.getsubcount();
        this.getuserlist();
    },
    components:{
        MyList
    }
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324779_eqteax7voav.css");
.my {
    padding-top: 1.851852rem;
}
.my .my-nav {
    list-style: none;
    margin: 0;
    padding-left: .740741rem;
    border-bottom: .222222rem solid #f5f5f5;
}
.my .my-nav li {
    height: 1.37037rem;
    line-height: 1.37037rem;
    display: flex;
    justify-content: left;
}
.my .my-nav .iconfont {
    font-size: .611111rem;
    font-weight: bold;
    color: #4d4d4d;
    margin-right: .759259rem;
}
.my .my-nav .nav-name{
    width: 7.898148rem;
    border-bottom: 1px solid #e6e6e6;
}
.my-nav li:nth-last-of-type(1) .nav-name{
    border: 0;
}
.nav {
    line-height: 1.166667rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.518519rem 0 0.462963rem;
}
.nav .iconfont {
    font-size: .416667rem;
    color: #4d4d4d;
}
.nav h1 {
    font-size: .388889rem;
    margin-left: .203704rem;
}
.nav .nav-left {
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.nav .icon-addTodo-nav {
    margin-right: .574074rem;
}
</style>
