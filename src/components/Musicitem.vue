<template>
    <ul class="newMusicList">
        <router-link v-for="item in newMusicList" :key="item.id" tag="li" to="/">
        <div class="left">
            <div>{{item.name}}</div>
            <p>{{item.song.artists[0].name}}--{{item.name}}</p>
        </div>
        <div class="right">
            <span></span>
        </div>
        </router-link>
    </ul>
</template>
<script>
export default {
    name:'Musicitem',
    props:{
        newMusicList:Array
    }
}
</script>
<style lang="less" scoped>
.newMusicList{
    li{
        display: flex;
        margin-top:10px ;
        padding-left: 10px;
        div.left{
            flex: 1;
            text-align: left;
            border-bottom:1px solid #ddd ;
            div{
                font-size: 17px;
                color: black;
            }
            p{
                font-size: 12px;
                color: #888;
                padding: 5px 0px;
            }
        }
        div.right{
            border-bottom:1px solid #ddd ;
            padding: 0 5px;
            display: flex;
            align-items: center;
            span{
                display: inline-block;
                width: 22px;
                height: 22px;
                background-image: url(../assets/05.png);
                background-position: -24px 0px;
                background-size: 166px 97px;
                margin-right: 3px;
            }
        }
    }
}
</style>