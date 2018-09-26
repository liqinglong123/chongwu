<style scoped>

</style>
<template>
    <div>
      <Lunbo1 :lunbo="arr"></Lunbo1>
      <wentu1 :luobo="arr1"></wentu1>
      <wentu2 :wentu="arr3"></wentu2>
      <wentu1 :luobo="arr4"></wentu1>
    </div>
</template>
<script>
  import Lunbo1 from "../../components/lunbo1.vue"
  import wentu1 from "../../components/wentu1.vue"
  import wentu2 from "../../components/wentu2.vue"
  export default {
    data(){
      return{
          arr:[],
          arr1:[],
          arr3:[],
          arr4:[]
      }
    },
    created(){
      var vm = this;
      this.axios.get("../../../data1/data1.json").then((res) => {
        console.log(res.data.result.toutiao);
        vm.arr=res.data.result.toutiao.slice(0,5);
        vm.arr1=res.data.result.toutiao.slice(1,6);
        vm.arr3=res.data.result.toutiao.slice(6,8);
        vm.arr4=res.data.result.toutiao.slice(9,14);
        console.log(vm.arr3)
      })
    },
    components:{
      Lunbo1,wentu1,wentu2
    }
  }
</script>
