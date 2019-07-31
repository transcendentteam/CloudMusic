<template>
    <div>
        <div class="subnav">
            <router-link to="/cloudhome/square">广场</router-link>
            <span></span>
            <router-link to="/cloudhome/dynamic">动态</router-link>
            
        </div>
        <router-view></router-view>
        
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
    a{
        display: inline-block;
        text-decoration: none;
    }
    .subnav{
        display: flex;
        justify-content: center;
    }
    .subnav a{
        font: 700 .361111rem/1px "";
        color:#000;
        padding: .277778rem .351852rem;
    }
    .subnav span{
        display: inline-block;
        width:1.268519rem;
    }
    .subnav .router-link-active{
        color: #ff3839;
        border-bottom:5px solid #ff3839;
    }
</style>
