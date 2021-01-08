<template>
    <ul class="topnav">
        <li><router-link tag="a" to="/">推荐音乐</router-link></li>
        <li><router-link tag="a" to="/hot">热歌榜</router-link></li>
        <li><router-link tag="a" to="/search">搜索</router-link></li>
    </ul>
</template>
<script lang="ts">
export default {
    name:'TopNav'
};
</script>
<style lang="less" scoped>
.topnav{
    display: flex;
    border-bottom:1px solid #ddd ;
    li{
        flex: 1 1 auto;
        font-size: 15px;
        line-height: 40px;
        padding-right: 15px;
        a{
            display: inline-block;
            text-decoration: none;
            color: #000;
            padding: 0 6px;
            &.router-link-exact-active{
                color: #D43C33;
                border-bottom:2px solid #dd4433 ;
            }
        }
    }
}
</style>