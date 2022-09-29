<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item,index) in routerList" :key="index"
        @click="changePath(item.path)"
      >
        <i :class='item.icon' :style='{color:$route.path.includes(item.path) ? "red" : "black"}'></i>
        <span :class='$route.path.includes(item.path) ? "active" : "" '>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data(){
    return{
      routerList:[
        {
          title:'首页',
          path:'/home',
          icon:'iconfont icon-shouye'
        },
        {
          title:'分类',
          path:'/list',
          icon:'iconfont icon-icon'
        },
        {
          title:'购物车',
          path:'/cart',
          icon:'iconfont icon-gouwuche'
        },
        {
          title:'我的',
          path:'/my',
          icon:'iconfont icon-wode'
        }
      ]
    }
  },
  methods:{
    changePath(path){
      this.$router.replace(path);
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/iconfont.css";
.tabbar{
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.6rem;
}
.tabbar ul{
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.tabbar ul li{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tabbar ul li i{
  text-align: center;
  font-size: 0.64rem;
}
.tabbar ul li span{
  font-size: 0.427rem;
}
.active{
  color: red;
}
</style>