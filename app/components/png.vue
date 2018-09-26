<style scoped lang='stylus'>
	img {
        width: 100%;
    }
</style>
<template>
	<div>
		<span><img v-lazy="imgsrc.wifi_img_url" alt=""></span>
	</div>
</template>
<script>
	export default{
		props:['imgsrc'],
		data(){
			return{

			}
		}
	}
</script>