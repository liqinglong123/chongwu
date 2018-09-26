<style scoped lang='stylus'>
div{
	position: relative;
}
	img {
        width: 100%;
    }
    .play{
    	width: 50px;height: 50px;position: absolute;text-align: center;line-height: 50px;color: #fff;
    	top: 50%;left: 50%;transform: translate(-50%,-50%);background: rgba(0,0,0,0.8);border-radius: 999px;
    }
</style>
<template>
	<div>
		 <!-- <span class="play" @click="play" v-show="showPlay">play</span> -->
		 <v-touch tag="span" class="play" @tap="play" v-show="showPlay">play</v-touch>
			<img v-lazy="imgsrc.wifi_img_url" alt="" ref="cbox">

	</div>
</template>
<script>
	export default{
		props:['imgsrc'],
		data(){
			return{
				showPlay:true
			}
		},
		methods:{
			play(){
				this.$refs.cbox.src = this.imgsrc.origin_img_url.origin_pic_url;
				this.showPlay = false
			}
		}
	}
</script>
