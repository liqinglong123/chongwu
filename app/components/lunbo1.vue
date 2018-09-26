<style scoped>
  .van-swipe{
    width: 100%;
  }
  .van-swipe img{
    width: 100%;
    height: 150px;
  }
  .wai3{
    padding-left:10px;
    padding-right:10px;
    padding-top:3px;
  }
</style>
<template>
    <div class="wai3">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in lunbo" :key="index">
          <img v-lazy="item.thumbnail_pic_s" />
        </van-swipe-item>
      </van-swipe>
    </div>
</template>
<script>
  import { Swipe, SwipeItem } from 'vant';
  export default {
    props:["lunbo"],
    data(){
      return{

      }
    },
    created(){
      console.log(this.lunbo)
    },
    components:{
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
    }
  }
</script>
