<template>
    <div class="list">
        <HotReview/>
        <ul>
            <li v-for="m in playlists" :key="m.id">
                <div>
                    <img :src="m.coverImgUrl">
                    <span><i>#</i>{{m.name}}</span>
                </div>
                <p>{{m.creator.nickname}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import HotReview from '../components/HotReview.vue';

export default {
    data(){
        return{
            playlists:[]
        }
    },
    mounted() {
        this.axios.get("http://localhost:3000/top/playlist?limit=10&order=new").then((response) => {
            console.log(response.data.playlists)
            this.playlists=response.data.playlists;
        })
    },
    components:{
        HotReview
    }
    
}
</script>

<style scoped>
    @import url("http://at.alicdn.com/t/font_1324850_l9q1hm51hbo.css");
    html,body,h1,h2,h3,ul,li {
    margin: 0;
    padding: 0;
    }
    .list{
        background: #f7f3f7;
        padding: .287037rem .444444rem 0;
    }
    .list>div{
        margin-bottom: .277778rem;
    }
    .list ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        width: 100%;
        justify-content: space-between;
    }
    .list ul li{
        margin-bottom: .277778rem;
        width: 4.416667rem;
        background:#fff;
    }
    .list ul li div{
        position: relative;
    }
    .list ul li img{
        max-width: 100%;
        vertical-align: top;
    }
    .list ul li div span{
        display: inline-block;
        color: #fff;
        font: .296296rem/1 "";
        padding: .138889rem .185185rem;
        background: rgba(0, 0,0, .5);
        border-radius: 6px;
        position: absolute;
        left:.25rem;
        bottom: .138889rem;
        max-width: 3.37963rem;
        overflow: hidden;
        white-space: pre;
        text-overflow: ellipsis;
    }
    .list ul li div span i{
        margin-right: .166667rem;
    }
    .list ul li p{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0 .222222rem;
    }
</style>

