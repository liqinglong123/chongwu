<style scoped lang='stylus'>


.video {
    background: #e1e1e1;
    overflow-y: scroll;
    .box {
        background: #fff;
        padding: 10px;
        background-origin: content-box;
        background-clip: content-box;
        .header {
            padding: 16px 18px;
            width: 100%;
            color: #888;
            .touxiang {
                width: 30px;
                height: 30px;
                border-radius: 999px;
                overflow: hidden;
                img{
                	width: 100%;
                }
            }
            .username {
                height: 30px;
                line-height: 30px;
                padding-left: 10px;
            }
            .jubao {
                border: 1px solid #888;
                border-radius: 3px;
                padding: 2px;
                font-size: 12px;
                margin-top: 4px;
            }
        }
        .title {
            padding: 0 12px 15px 12px;
        }
        .content {
            img {
                width: 100%;
            }
        }
        .footer {
            width: 100%;
            padding: 10px 20px;
            div {
                margin-top: 2px;
                margin-right: 8px;
            }
            i {
                display: inline-block;
                width: 20px;
                height: 20px;
                float: left;
            }
            span {
                display: block;
                margin-left: 5px;
                height: 20px;
                line-height: 20px;
                float: left;
            }
            .like {
                i {
                    background: url(../../../assets/26_03.png) 0 0 /100% 100% no-repeat;
                }
            }
            .dislike {
                i {
                    background: url(../../../assets/26_05.png) 0 0 /100% 100% no-repeat;
                }
            }
            .comment {
                margin-right: 0;
                i {
                    background: url(../../../assets/26_07.png) 0 0 /100% 100% no-repeat;
                }
            }
        }
    }
}

</style>
<template>
    <div class="video" v-height="40">
        <div class="box" v-for="item in videoList">
            <div class="header ovh">
                <div class="touxiang fl">
                    <img src="http://image.uc.cn/s/uae/g/0q/product/q-v-a.jpg" alt="">
                </div>
                <div class="username fl">
                    12345
                </div>
                <span class="fr jubao">举报</span>
            </div>
            <div class="title" >
                <span>{{item.title}}</span>
            </div>
            <div class="content">
            	<vui-video :item="item" ></vui-video>
            </div>
            <div class="footer ovh">
                <div class="like fl ovh">
                    <i></i>
                    <span>123</span>
                </div>
                <div class="dislike fl ovh">
                    <i></i>
                    <span>234</span>
                </div>
                <div class="comment fr ovh">
                    <i></i>
                    <span>345</span>
                </div>
            </div>
        </div>
         
    </div>
</template>
<script>
import VuiVideo from "../../components/video.vue"
export default {
    data() {
        return {
        	// 每一条数据 维持一个自己的状态 video的ID 当前的事件  音量大小 等等 通过props 传递进去的
            videoList:[{

				title:"帕帕帮",
				src:"http://files.blueairplus.com/iqiyi/%E3%80%8A%E5%B8%95%E5%B8%95%E5%B8%AE%E3%80%8B%E7%AC%AC182%E6%9C%9F.mp4",
				cur:"播放",
				id:"video01",
				currentTime:0,
				volume:0.2
			},{
				title:"帕帕帮",
				src:"http://files.blueairplus.com/iqiyi/%E3%80%8A%E5%B8%95%E5%B8%95%E5%B8%AE%E3%80%8B%E7%AC%AC182%E6%9C%9F.mp4",
				cur:"播放",
				id:"video02",
				currentTime:0,
				volume:0.2
			}]
        }
    },
    created() {
        
    },
    directives: {
        height: {
            inserted(el, binding) {
                $(el).height($(window).height() - binding.value)
            }
        }
    },
    components: {
         VuiVideo
    }
}

</script>
