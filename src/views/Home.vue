<template>
  <div class="homepage">
    <MyHeader></MyHeader>
    <fun-tabs v-model="value" :active-color="activeColor" :line-width="lineWidth" @change="changeTab">
      <fun-tab-item v-for="(item,index) in funTabList" :key="index"
          :name="item.index" :title="item.title"/>
    </fun-tabs>
    <section ref="wrap">
      <div>
        <div v-for="(item,index) in newData"
             :key="index"
        >
          <HomeSwiper v-if="item.type=='swiper'"
                      :swiperList="item.data"
          ></HomeSwiper>
          <HomeIcons v-if="item.type=='icon'"
                     :iconList="item.data"
          ></HomeIcons>
          <HomeRecommend v-if="item.type=='recommend'"
                         :recommendList="item.data"
          ></HomeRecommend>
          <GuessYouLike v-if="item.type=='like'"
                        :productList="item.data"
          ></GuessYouLike>
          <TeaAd v-if="item.type=='ad'"></TeaAd>
        </div>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>

import TabBar from "@/components/common/Tabbar";
import MyHeader from "@/components/home/Header";
import HomeSwiper from "@/components/home/Swiper";
import HomeIcons from "@/components/home/Icons"
import HomeRecommend from "@/components/home/Recommend"
import GuessYouLike from "@/components/home/Like"
import TeaAd from "@/components/home/Ad"
import { FunTabs, FunTabItem } from 'fun-tab';
import BScroll from "better-scroll";

export default {
  name: "HomeView",
  data(){
    return{
      value:0,
      activeColor:"#b0352f",
      lineWidth:40,
      funTabList:[],
      newData:[]
    }
  },
  components:{
    TabBar,
    MyHeader,
    FunTabs,
    FunTabItem,
    HomeSwiper,
    HomeRecommend,
    HomeIcons,
    GuessYouLike,
    TeaAd
  },
  methods:{
    changeTab(index){
      console.log(index)
    },
    async getData(){
      let url='/api/tabList/0/data/1';
      let res= await this.Axios.get(url);
      this.funTabList=Object.freeze(res.data.data.funTabList);
      this.newData=Object.freeze(res.data.data.data);
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    new BScroll(this.$refs.wrap,{
      movable:true,
      zoom:true
    })
  }
}
</script>

<style scoped>
@import 'fun-tab/dist/index.css';
.homepage{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
MyHeader{
  height: 1.173rem;
}
section{
  flex: 1;
  overflow: hidden;
}
TabBar{
  height: 1.6rem;
}
</style>