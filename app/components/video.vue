<style scoped lang='stylus'>
.video {
    video {
        width: 100%;
    }
    .kongzhiqi {
        .play {
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
        .current {
            width: 200px;
            height: 40px;
            position: relative;
            top: 19px;
            span.currentTime {
                display: block;
                height: 2px;
                width: 100%;
                background: red;
                position: relative;
                span.duration {
                    height: 2px;
                    width: 0%;
                    background: green;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }
        .volume {
            width: 100px;
            position: relative;
            top: 10px;
            left: 5px;
            input {
                width: 100%;
            }
        }
    }
}

</style>
<template>
    <div>
        <div class="video">
            <video :src="item.src" :id="item.id"></video>
        </div>
        <div class="kongzhiqi ovh">
            <span class="fl play" @click="play(item)">{{item.cur}}</span>
            <p class="current fl">
                <span class="currentTime" @click="goTime(item,$event)">
                	<!-- 设置样式  :style="{width:currentTime / duration * 100 + '%'}" -->
					<span class="duration" :style="{width:currentTime / duration * 100 + '%'}"></span>
                </span>
            </p>
            <p class="volume fl">
                <input type="range" min="0" max="1" step="0.1" v-model="item.volume" @change="changeVolume(item)">
            </p>
        </div>
        <div class="time">
            <span>{{currentTime | zhuanhuan}}</span>----<span>{{duration | zhuanhuan}}</span>
        </div>
    </div>
</template>
<script>
export default {
    // http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
    props: ["item"],
    data() {
        return {
            duration: 0,
            currentTime: 0
        }
    },
    filters: {//过滤器
    	// http://blog.csdn.net/chritina/article/details/69397810
    	// 时分秒转换器
        zhuanhuan(s) {//s这个参数就是currentTime
            var t;
            if (s > -1) {
                var hour = Math.floor(s / 3600);
                var min = Math.floor(s / 60) % 60;
                var sec = s % 60;
                if (hour < 10) {
                    t = '0' + hour + ":";
                } else {
                    t = hour + ":";
                }

                if (min < 10) { t += "0"; }
                t += min + ":";
                if (sec < 10) { t += "0"; }
                t += ~~(sec)
            }
            return t;
        }
    },
    methods: {
        play(item) {
            var vm = this;
            if (item.cur == "播放") {
                item.cur = "暂停"
                $("#" + item.id)[0].play()
                // 设置总时常
                this.duration = $("#" + item.id)[0].duration

                var timer = setInterval(function() {
                    // 每一秒设置一次当前时常
                    vm.currentTime = $("#" + item.id)[0].currentTime;
                }, 1000)
            } else if (item.cur == "暂停") {
                item.cur = "播放"
                $("#" + item.id)[0].pause()
            }
        },
        goTime(item, $event) {
        	// 点击跳转至当前位置
            var during = event.offsetX / 200
            $("#" + item.id)[0].currentTime = during * $("#" + item.id)[0].duration//从哪里开始播放$("#" + item.id)[0].duration视频总时长
        },
        changeVolume(item) {
        	// 设置音量
            $("#" + item.id)[0].volume = item.volume//volume音量0最小声满的的是最大声
        }
    }
}

</script>
