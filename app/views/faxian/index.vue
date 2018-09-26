<style scoped>

</style>
<template>
    <div>
      <Lunbo2 :lunbo2="arr"></Lunbo2>
      <wentu1 :luobo="arr1"></wentu1>
      <wentu2 :wentu="arr3"></wentu2>
      <wentu1 :luobo="arr4"></wentu1>
    </div>
</template>
<script>
  import Lunbo2 from "../../components/lunbo2.vue"
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
        console.log(res.data.result.yule);
        vm.arr=res.data.result.yule.slice(0,5);
        vm.arr1=res.data.result.yule.slice(1,6);
        vm.arr3=res.data.result.yule.slice(6,8);
        vm.arr4=res.data.result.yule.slice(9,14);
        console.log(vm.arr)
      })
    },
    components:{
      Lunbo2,wentu1,wentu2
    }
  }
</script>
