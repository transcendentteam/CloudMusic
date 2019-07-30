import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueBetterScroll from 'vue2-better-scroll'
import ElementUI from 'element-ui';


import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"
import store from './store';

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);




new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
