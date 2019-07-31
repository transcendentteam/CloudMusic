<template>
    <div class="recmv">
        <h1 class="title">推荐MV<span>MV广场</span></h1>

        <ul class="mv-show">
            <li class="mv-show-item" v-for="mv in mvs" :key="mv.id">
                <div class="img">
                    <img :src=mv.cover>
                </div>
                <p>{{mv.name}}</p>
                
            </li>
        </ul>

    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    methods: {
        ...mapActions(["getrecmv"])
    },
    mounted() {
        this.getrecmv();
    },
    computed: {
        ...mapState(["mvs"])
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.recmv {
    padding: 0 0.388889rem;
}
.title {
    line-height: 1;
    margin: 0.685185rem 0 0.518519rem 0;
    font-size: .444444rem;
}
.title>span {
    display: inline-block;
    font-weight: normal;
    width: 1.851852rem;
    height: .62963rem;
    border: 1px solid #e8e8e8;
    border-radius: .277778rem;
    font-size: .314815rem;
    color: #363636;
    text-align: center;
    line-height: .62963rem;
    float:right
    
}
.mv-show {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.mv-show-item {
    width: 2.851852rem;
    margin-bottom: .611111rem;
    
}
.mv-show-item img{
    width: 100%;
    vertical-align: top;
}
.mv-show-item .img {
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
.mv-show-item>p {
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
