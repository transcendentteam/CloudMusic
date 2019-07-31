<template>
    <div class="reclist">
        <h1 class="title">推荐歌单<span>歌单广场</span></h1>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    methods: {
        ...mapActions(["getreclist"])
    },
    mounted() {
        this.getreclist();
    },
};
</script>

<style scoped>
.reclist {
    padding: 0 0.388889rem;
}
.title {
    line-height: 1;
    margin: 0.685185rem 0 0.518519rem 0;
    font-size: .444444rem;
}
.title>span {
    display: inline-block;
    font-weight: normal;
    width: 1.851852rem;
    height: .62963rem;
    border: 1px solid #e8e8e8;
    border-radius: .277778rem;
    font-size: .314815rem;
    color: #363636;
    text-align: center;
    line-height: .62963rem;
    float:right;
    
}
</style>
