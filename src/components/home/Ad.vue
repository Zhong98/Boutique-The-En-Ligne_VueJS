<template>
  <div>
    <img src="/images/tgy.jpg">
    <GuessYouLike></GuessYouLike>
  </div>
</template>

<script>
import GuessYouLike from '@/components/home/Like'
export default {
  name: "TeaAd",
  props:{
    dhp:Object
  },
  components:{
    GuessYouLike
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 3.333rem;
}
</style>