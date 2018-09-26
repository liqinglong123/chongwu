<style scoped>
  .van-swipe img {
    width: 100%;
    height: 120px;
  }
  .wai{
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 0.5px solid lightgray;
    margin-top: 10px;
    padding-left:10px;
    padding-right:10px;
    /*align-items:center;*/
  }
  .left{
    margin-right: 30px;
  }
  .left p:nth-child(2){
    margin-top: 15px;
    font-size: 13px;
    color:gray;
  }
  .right img{
    width: 100px;
    height: 80px;
  }
</style>
<template>
  <div>
    <div class="wai" v-for="(item,index) in luobo" :key="index">
      <div class="left">
          <p>{{item.title}}</p>
          <p>{{item.author_name}}</p>
      </div>
      <div class="right">
        <img :src="item.thumbnail_pic_s02" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:["luobo"],
    data(){
      return{

      }
    },
    created(){
      console.log(this.luobo)
    }
  }
</script>
