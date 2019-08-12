<template>
    <div class="dynamic">
        <div v-for="m in dynamic" class="information">
            <h1>
                <div class="user">
                    <div class="zuo">
                        <img :src="m.user.avatarUrl">
                    </div>
                    <ul>
                        <li>{{m.user.nickname}}<span>分享：</span></li>
                        <li>{{m.rcmdInfo.userReason}}</li>
                    </ul>
                </div>
                <span><i class="iconfont icon-jia"></i> 关 注</span>
            </h1>
            <div class="img">
                <p>{{m.rcmdInfo.reason}}</p>
                <ul>
                    <li><img :src="m.user.backgroundUrl"></li>
                    <li><img :src="m.pics[0].squareUrl"></li>
                    <li><img :src="m.pics[0].rectangleUrl"></li>
                    <li><img :src="m.pics[0].pcSquareUrl"></li>
                    <li><img :src="m.pics[0].pcRectangleUrl"></li>
                    <li><img :src="m.pics[0].originUrl"></li>
                </ul>
                <footer>
                    <div>
                        <span><i class="iconfont icon-xunhuan"></i>{{m.info.commentCount}}</span>
                        <span><i class="iconfont icon-xiaoxi"></i>{{m.insiteForwardCount}}</span>
                        <span><i class="iconfont icon-zan"></i>{{m.info.likedCount}}</span>
                    </div>
                    <i class="iconfont icon-sandiancaidan"></i>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dynamic:[]
        }
    },
    mounted() {
        // getdailysongs(store){
            this.axios({url:"http://120.27.243.6:3000/login/cellphone?phone=13118306468&password=smj15284753294"})
           .then(res =>{
                this.axios({url:"http://120.27.243.6:3000/event?pagesize=30&lasttime=1556740526369",withCredentials:true})
                .then(res =>{
                    // console.log(res.data.event);
                    var arr=res.data.event;
                    for(var i=0;i<arr.length;i++){
                        // console.log(arr[i].rcmdInfo)
                        if(arr[i].rcmdInfo!=null){
                            // console.log(arr[i])
                            this.dynamic.push(arr[i])
                        }
                    }
                    // this.dynamic=res.data.event
                    // store.commit("getdailysongs",res.data.recommend)
                })
            })
        },
    // },
}
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_o1qneik60zh.css");
    html,body,h1,h2,h3,ul,li {
    margin: 0;
    padding: 0;
    }
    .dynamic .information{
        padding: 0 .435185rem;
        margin-top: .592593rem;
        border-bottom: 1px solid #f7f3f7;
    }
    .dynamic h1{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dynamic h1>span{
        display: inline-block;
        font-size: .287037rem;
        font-weight: 1;
        color:#fff;
        padding: 0 .277778rem;
        background: #ff3839;
        border-radius: 15px;
        height: .648148rem;
        vertical-align: middle;
        line-height: .648148rem;
    }
    .dynamic h1>span i{
        font-size: .287037rem;
        font-weight: 1;
    }
    .dynamic h1 .user{
        display: flex;
    }
    .dynamic h1 .user .zuo{
        width:1.018519rem;
        border-radius: 50%;
        margin-right: .25rem;
    }
    .dynamic h1 .user .zuo img{
        max-width: 100%;
        border-radius: 50%;
    }
    .dynamic ul{
        list-style: none;
    }
    .dynamic h1 .user ul li{
        font-size: .37037rem;
        font-weight: 1;
        color:#527dad;
    }
    .dynamic h1 .user ul li span{
        display: inline-block;
        color: #737173; 
        margin-left: .12963rem;
    }
    .dynamic h1 .user ul li:nth-of-type(2){
        color:#9c9a9c;
        font-size: .259259rem;
        font-weight: 1;
    }
    .dynamic .img{
        box-sizing: border-box;
        padding-left: 1.240741rem;
    }
    .dynamic .img>p{
        font-size: .37037rem;
        font-weight: 1;
        color: #000;
        
    }
    .dynamic .img>ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }
    .dynamic .img>ul li{
        width: 2.564815rem;
        height: 2.564815rem;
        margin-bottom: .092593rem;
    }
    .dynamic .img>ul li img{
        width: 100%;
        height:100%;
        border-radius: 6px;
    }
    .dynamic .img footer{
        display: flex;
        width:100%;
        justify-content: space-between;
        align-items: center;
        margin: .555556rem 0;
    }
    .dynamic .img footer div{
        display: flex;
    }
    .dynamic .img footer div span{
        display: flex;
        align-items: center;
        color: #9c9a9c;
        margin-right: 1.12037rem;
    }
    .dynamic .img footer div span .iconfont{
        color:#636563;
        font-size: .716667rem;
        font-weight: 1;
    }
    .dynamic .img footer .iconfont{
        font-size: .433333rem;
        font-weight: 1;
        color:#b5b2b5;
    }
</style>
