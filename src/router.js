import VueRouter  from "vue-router"

import My from "./pages/My.vue";
import Discover from "./pages/Discover.vue";
import CloudHome from "./pages/CloudHome.vue";
import Video from "./pages/Video.vue";

const router = new VueRouter({
    routes:[
        {path:"/",redirect:'/discover'},
        { path:"/my",component:My},
        { path:"/discover",component:Discover},
        { path:"/cloudhome",component:CloudHome},
        { path:"/video",component:Video},
    ]
})


export default router