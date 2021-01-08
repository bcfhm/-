<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link v-for="rem in recommendMusicList" :key="rem.id" to="/" tag="li">
        <div>
          <img :src="rem.picUrl" />
          <span>{{rem.playCount | formatNum}}</span>
          <p>{{rem.name}}</p>
        </div>
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <Musicitem :newMusicList='newMusicList'></Musicitem>
  </div>
</template>

<script>
import Title from "../components/Title";
import Musicitem from "../components/Musicitem";
export default {
  name: "Recommend",
  compoents: {
    Title,
    Musicitem,
  },
  data() {
    Musicitem;
    return {
      recommendMusicList: [],
      newMusicList: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$http.get("/personalized?limit=6").then((data) => {
        vm.recommendMusicList = data.data.result;
        // console.log(data);
      });
      vm.$http.get("/personalized/newsong").then((data) => {
        vm.newMusicList = data.data.result;
        console.log(data);
      });
    });
  },
  filters: {
    formatNum(value) {
      return (value / 10000).toFixed(1) + "万";
    },
    // substr(value,len){
    //   return value
    // }
  },
};
</script>
<style lang='less' scoped>
// .recommend{
//   background: #FCFCFD;
// }
ul.recommendList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 33%;
    margin-bottom: 15px;
    div {
      position: relative;
      span {
        top: 2px;
        right: 3px;
        position: absolute;
        color: white;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        font-size: 12px;
      }
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 6px 5px 0 6px;
      min-height: 30px;
      line-height: 1.2;
      font-size: 13px;
      text-align: left;
      margin-top: -5px;
    }
  }
}
</style>