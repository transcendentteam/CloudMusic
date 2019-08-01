<template>
    <div class="recommend">
        <div class="play">
            <h1><span class="iconfont icon-bofang"></span>播放全部</h1>
            <h3><span class="iconfont icon-menu"></span>多选</h3>
        </div>    
        <div class="sonbox">
            <div class="song" v-for="s in dailysongs" :key="s.id">
                <img :src=s.album.blurPicUrl>
                <div class="info">
                    <h2>{{s.name}}</h2>
                    <p><span v-for="a in s.artists" :key="a.id">{{a.name}}</span>-{{s.name}}</p>
                </div>
            </div>
        </div>
        

    </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from "vuex"
export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(["getdailysongs"]),
        
    },
    mounted() {
        this.getdailysongs();
    },
    computed: {
        ...mapState(["dailysongs"]),
    },
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_l9q1hm51hbo.css");

.recommend {
    position:relative;
    z-index: 1000;
    background: #fff;
    padding: 0.407407rem 0.444444rem
}
.play {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: .703704rem;
}
.play>h1 {
    font-size: .351852rem;
    color: #353535;
}
.play .icon-bofang {
    font-size: .555556rem;
    color: #4d4d4d;
    margin-right: .277778rem;
    vertical-align: middle
}
.play>h3 {
    font-size: .277778rem;
    color: #353535;
}
.play .icon-menu {
    font-size: .277778rem;
    color: #4d4d4d;
    margin-right: .185185rem;
}
.song {
    display: flex;
    margin-bottom: .555556rem;
}
.song>img{
    width: 1.111111rem;
    height: 1.111111rem;
    border-radius: .277778rem;
    margin-right: .277778rem;
}
.info>h2 {
    font-size: .314815rem;
    color: #333;
    line-height: 1;
    margin: .203704rem 0;
}
.info>p {
    width:5.925926rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    font-size: .240741rem;
    color: #808080;
}
</style>
