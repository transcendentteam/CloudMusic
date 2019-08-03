<template>
    <div>
        <!-- 头部导航栏 -->
        <div class="headernav">
            <span class="iconfont icon-list"></span>
            <router-link class="nav" to="/my">我的</router-link>
            <router-link class="nav" to="/discover">发现</router-link>
            <router-link class="nav" to="/cloudhome">云村</router-link>
            <router-link class="nav" to="/video">视频</router-link>
            <span class="iconfont icon-fangdajing"></span>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    
</template>

<script>
export default {
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324779_by9ogjjalir.css");
.headernav {
    width: 100%;
    display:flex;
    height: 1.851852rem;
    align-items: center;
    /* padding: 0 0.388889rem; */
    justify-content: space-between;
    padding: 0 0.388889rem;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 99;
    box-sizing: border-box;

}
.nav {
    text-decoration: none;
    color:#7b7b7b;
    font-size: .407407rem;
    display: inline-block;
    line-height: 1
}
.iconfont {
    display: inline-block;
    font-size: .37037rem;
    color:#303030;
    font-weight: bold;
}
.iconfont::before {
    display: inline-block;
    line-height: 1;
}
.router-link-active {
    font-size: .425926rem;
    color: #353535;
    font-weight: bold;
}
</style>
