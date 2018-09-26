<style scoped lang='stylus'>
.ovh {
    overflow: hidden;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.jingxuan {
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
    <div class="jingxuan" v-height="40">
        <div class="box" v-for="item in mapList">
            <div class="header ovh">
                <div class="touxiang fl">
                    <img :src="item.avatar" alt="">
                </div>
                <div class="username fl">
                    {{item.user_name}}
                </div>
                <span class="fr jubao">举报</span>
            </div>
            <div class="title" v-if="item.title">
                <span>{{item.title}}</span>
            </div>
            <div class="content">
            	<gif v-if="item.media_data[0].format == 'GIF'" :imgsrc="item.media_data[0]"></gif>
				<jpeg v-if="item.media_data[0].format == 'JPEG'" :imgsrc="item.media_data[0]"></jpeg>
				<png v-if="item.media_data[0].format == 'PNG'" :imgsrc="item.media_data[0]"></png>
                <!-- <img :src="item.media_data[0].wifi_img_url" alt=""> -->
            </div>
            <div class="footer ovh">
                <div class="like fl ovh">
                    <i></i>
                    <span>{{item.dislike_start + item._incrs.dislike}}</span>
                </div>
                <div class="dislike fl ovh">
                    <i></i>
                    <span>{{item.like_start + item._incrs.like}}</span>
                </div>
                <div class="comment fr ovh">
                    <i></i>
                    <span>{{item.comment_total}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gif from "../../components/gif.vue"
import jpeg from "../../components/jpeg.vue"
import png from "../../components/png.vue"
export default {
    data() {
        return {
            mapList: []
        }
    },
    created() {
        var vm = this;
        this.axios.get("../../../data/data.json").then((res) => {
            vm.mapList = res.data.mapList;
            console.log(res.data.mapList);
        })
    },
    directives: {
        height: {
            inserted(el, binding) {
              console.log($(window).height());
              console.log(binding.value);//binding获取指令绑定的值
                $(el).height($(window).height() - binding.value)//这个高永远都是窗口的高减去上面导航的高
            }
        }
    },
    components: {
        gif,
        jpeg,
        png
    }
}

</script>
