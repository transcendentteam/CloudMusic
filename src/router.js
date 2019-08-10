import VueRouter  from "vue-router"

import My from "./pages/My.vue";
import Discover from "./pages/Discover.vue";
import Recommend from "./pages/Recommend.vue";
import CloudHome from "./pages/CloudHome.vue";
import Video from "./pages/Video.vue";

import Square from "./pages/Square";
import Dynamic from "./pages/Dynamic";

// import Play from "./pages/Play.vue";
import List from "./pages/List.vue"
import ListDetail from "./pages/ListDetail.vue"

import Board from "./pages/Board"
const router = new VueRouter({
    routes:[
        {path:"/",redirect:'/discover'},
        {path:"/cloudhome",redirect:'/cloudhome/square'},
        { path:"/my",component:My},
        { path:"/discover",component:Discover},
        { path:"/cloudhome",component:CloudHome,
          children:[
            {path:"/cloudhome/square",component:Square},
            {path:"/cloudhome/dynamic",component:Dynamic}
          ]
    
    
        },
        { path:"/video",component:Video},
        {path:"/discover/recommend",component:Recommend},
        {path:"/discover/list",component:List},
        {path:"/discover/list/detail",component:ListDetail},
        {path:"/discover/board",component:Board}
        // {path:"/play",component:Play}
    ]
})


export default router