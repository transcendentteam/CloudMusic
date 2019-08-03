<template>
    <div class="reclist">
        <h1 class="title">推荐歌单<span @click="tolist">歌单广场</span></h1>

        <ul class="list-show">
            <li class="list-show-item" v-for="re in reclists" :key="re.id" @click="listdetail(re.id);to()">
                <div class="img">
                    <img :src=re.picUrl>
                    <div class="playcount"><span class="iconfont icon-sanjiaoxings"></span>{{re.playCount |  dataFormat}}</div>
                </div>
                <p>{{re.name}}</p>
                
            </li>
        </ul>

    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    methods: {
        ...mapActions(["getreclist","listdetail"]),
        to(){
            this.$router.push({path:'/discover/list/detail'})
        },
        tolist(){
            this.$router.push({path:'/discover/list'})

        }
    },
    mounted() {
        this.getreclist();
        
    },
    computed: {
        ...mapState(["reclists"])
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
    margin: 0;
    padding: 0;
}
.reclist {
    padding: 0 0.388889rem;
}
.title {
    line-height: 1;
    margin: 0.685185rem 0 0.518519rem 0;
    font-size: .444444rem;
}
.title>span {
    /* display: inline-block; */
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
.list-show {
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
