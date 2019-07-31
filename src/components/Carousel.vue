<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="slideChangeEnd">
            <!-- slides --> 
            <div class="swiper-slide banner" v-for="banner in banners" :key="banner.bannerId">
                <img :src=banner.pic>
                <div class="tag" :style="{background:banner.titleColor}">{{banner.typeTitle}}</div>
            </div>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapActions,mapState} from "vuex"
export default {
    data() {
      return {
        swiperOption: {
            //操作
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: false,
            },
             autoplay: {
                 
                delay: 2500,
                disableOnInteraction: false,
                loop: true,

            },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      ...mapState(["banners"])
    },
    mounted() {
        this.getbanner()
    },
    methods: {
        slideChangeEnd(){
            // console.log('slideChangeEnd')
        },
        ...mapActions(["getbanner"])
    },
    components:{
        swiper,
        swiperSlide
    }
};
</script>

<style scoped>
.swiper-slide {
    height: 3.425926rem;
    background: #ccc;
}
.banner {
    border-radius: 0.277778rem;
    overflow: hidden;
}
.banner img {
    width:100%;
    border-radius: 0.277778rem;
}
.tag {
    position:absolute;
    right: 0;
    bottom: 0;
    width: 1.388889remy;
    height: .611111rem;
    border-radius: 0.277778rem 0 0 0;
    text-align: center;
    line-height: .611111rem;
    font-size: .259259rem;
    color:#fff;

}
</style>
