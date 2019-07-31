<template>
    <div>
        <div class="middlenav">
            <!-- <div class="nav" @click="recommend">
                <div class="iconfont icon-rili"></div><span>每日推荐</span>
            </div> -->
            <router-link class="nav" to="/discover/recommend">
                <div class="iconfont icon-rili"></div><span>每日推荐</span>
            </router-link>
            <router-link class="nav" to="/discover/list">
                <div class="iconfont icon-yinpingedan"></div><span>歌单</span>
            </router-link>
            <router-link class="nav" to="/discover/board">
                <div class="iconfont icon-paixingbang"></div><span>排行榜</span>
            </router-link>
            <router-link class="nav" to="/discover/radio">
                <div class="iconfont icon-diantai"></div><span>电台</span>
            </router-link>
            <router-link class="nav" to="/discover/live">
                <div class="iconfont icon-youxi"></div><span>直播</span>
            </router-link>

        </div>
        <router-view></router-view>

    </div>
    
</template>

<script>
export default {
    methods: {
        //push方法
        // recommend(){
        //     this.$router.push({path:"/discover/recommend"})
        // }
    },
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_l9q1hm51hbo.css");

.middlenav {
    display: flex;
    justify-content: space-around;
    height: 2.907407rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
}
.nav {
    text-decoration: none;
    color:#373737;
    font-size: .277778rem;
    text-align: center;
}
.iconfont {
    width:1.240741rem;
    height: 1.240741rem;
    border-radius: 50%;
    background: #fd3528;
    color: #fff;
    font-size: .62963rem;
    line-height: 1.240741rem;
    text-align: center;
    margin-bottom: .259259rem;
}
</style>
