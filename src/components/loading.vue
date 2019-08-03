<template>
    <div class="loading">
        <img src="../assets/loading.gif">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.loading {
    position: fixed;
    top: 50%;
    margin-top: -50px;
    left:50%;
    margin-left:-50px;
    z-index: 3000;
    border: 1px solid #999;
}
.loading img {
    width: 100px;
    height: 100px;
}
</style>
