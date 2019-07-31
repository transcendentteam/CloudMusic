<template>
    <div class="newcd">
        <div class="title">
            <div class="left"><h1>新碟</h1><span class="xinge">新歌</span></div><span>更多新碟</span>
        </div>
        <ul class="cd-show">
            <li class="list-show-item" v-for="cd in cds" :key="cd.id">
                <img :src=cd.picUrl>
                <p>{{cd.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    computed: {
        ...mapState(["cds"])
    },
    methods: {
        ...mapActions(["getnewcd"])
    },
    mounted() {
        this.getnewcd();
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.newcd {
    padding: 0.666667rem 0.388889rem 0 0.388889rem;
    border-bottom: .222222rem solid #f7f7f7;

}
.title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: .685185rem;
}
.title .left {
    display: flex;
    align-items: baseline;
    margin-left: .092593rem;
}
.title>.left>h1 {
    padding-right: .222222rem;
    border-right: 1px solid #e6e6e6;
    margin-right: .222222rem;

}
.title>.left>span {
    font-size: .37037rem;
    color: #848484;
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
}
.cd-show {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.list-show-item {
    width: 2.851852rem;
    margin-bottom: .611111rem;
    
}
.list-show-item img{
    width: 100%;
    vertical-align: top;
    border-radius: .092593rem;

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
