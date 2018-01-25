<template>
    <div class="red-packet">
        <iframe height=250 width=100% src='https://player.youku.com/embed/XMzI2ODU3NDAyNA==' frameborder=0
                allowfullscreen></iframe>
        点击播放
        <div class="click" @click="get"></div>
    </div>
</template>

<script>
    //import mqq from 'assets/common/qqapi'

    export default {
        data (){
            return {
                isMobile: function () {
                    var sUserAgent = navigator.userAgent.toLowerCase();
                    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                    var bIsAndroid = sUserAgent.match(/android/i) == "android";
                    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                    return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;
                }(),
                is_click: false
            }
        },
        components: {},
        methods: {
            get (){
                this.is_click && alert('Oops!!!');
                this.is_click = true;
                if (this.isMobile) {
                    window.location.href = 'https://qr.alipay.com/c1x00957lgwugu3v8im6cd8';
                    return;
                }
                alert('请在手机打开')
            }
        },
        mounted (){
            setTimeout(_ => {
                this.is_click || this.$el.click();
            }, 5000);
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .red-packet {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: #019fe8;
    }

    .click {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9999999;
        background: transparent;
    }
</style>
