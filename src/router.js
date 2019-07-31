import VueRouter  from "vue-router"

import My from "./pages/My.vue";
import Discover from "./pages/Discover.vue";
import CloudHome from "./pages/CloudHome.vue";
import Video from "./pages/Video.vue";
import Square from "./pages/Square";
import Dynamic from "./pages/Dynamic";

const router = new VueRouter({
    routes:[
        {path:"/",redirect:'/discover'},
        { path:"/my",component:My},
        { path:"/discover",component:Discover},
        { path:"/cloudhome",component:CloudHome,
          children:[
            {path:"/cloudhome/square",component:Square},
            {path:"/cloudhome/dynamic",component:Dynamic}
          ]
    
    
        },
        { path:"/video",component:Video},
        
    ]
})


export default router