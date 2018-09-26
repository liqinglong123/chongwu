<style scoped>
  .wai1{
    padding-bottom: 5px;
    border-bottom: 0.5px solid lightgray;
    margin-top: 10px;
    padding-left:6px;
    padding-right:6px;
  }
  .wai1 img{
    width: 100%;
    height: 150px;
    margin-top:3px;
  }
</style>
<template>
  <div>
    <div class="wai1"v-for="(item,index) in wentu" :key="index">
        <p>{{item.title}}</p>
        <img :src="item.thumbnail_pic_s02" alt="">
        <p>{{item.author_name}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props:["wentu"],
    data(){
      return{

      }
    },
    created(){
      console.log(this.luobo)
    }
  }
</script>
