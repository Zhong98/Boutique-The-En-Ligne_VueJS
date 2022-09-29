<template>
  <ul class="icons">
    <li v-for="(item,index) in iconList"
    :key="index">
      <img :src="item.imgURL" alt="">
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeIcons",
  props:{
    iconList:Array
  }
}
</script>

<style scoped>
  .icons{
    display: flex;
    justify-content: space-around;
    margin: 0.4rem 0;
  }
  .icons li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.867rem;
    height: 2rem;
  }
  .icons li img{
    width: 1rem;
    height: 1rem;
  }
  .icons li span{
    margin-top: .3rem;
    font-size: .4rem;
  }
</style>