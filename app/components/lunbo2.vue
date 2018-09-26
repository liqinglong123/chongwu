<style scoped>
  .wai2{
    height: 150px;
    overflow: hidden;
    padding-left:10px;
    padding-right:10px;
    padding-top:3px;
  }
  .wai2 .van-swipe{
    height: 150px;
  }
  .wai2 .van-swipe .van-swipe__track{
    height: 150px!important;
  }
  .van-swipe img{
    width: 100%;
    height: 150px;
  }
</style>
<template>
  <div>
    <div class="wai2">
      <van-swipe :autoplay="3000" vertical>
        <van-swipe-item v-for="(item, index) in lunbo2" :key="index">
          <img :src="item.thumbnail_pic_s" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>

</template>
<script>
  import { Swipe, SwipeItem } from 'vant';
  export default {
    props:["lunbo2"],
    data(){
      return{

      }
    },
    created(){
      console.log(this.lunbo2)
    },
    components:{
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
    }
  }
</script>
