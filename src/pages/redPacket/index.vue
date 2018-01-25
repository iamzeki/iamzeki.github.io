<template>
    <div class="red-packet" @click="get">
        点击一下试试？
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
                }()
            }
        },
        components: {},
        methods: {
            get (){
                if (this.isMobile) {
                    /*mqq.ui.openUrl({
                        target: 2,
                        url: "alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode=http://kks.me/axBA6"
                    });*/
                    window.location.href = 'https://render.alipay.com/p/f/fd-j6lzqrgm/guiderofmklvtvw.html?shareId=2088402719289833&campStr=p1j%2BdzkZl018zOczaHT4Z5CLdPVCgrEXq89JsWOx1gdt05SIDMPg3PTxZbdPw9dL&sign=go00ZqD4UqV5vokqDpHDqRVNfQwlo%2BQMRrRxYd1ZF8c%3D&scene=offlinePaymentNewSns';
                }else{
                    alert('请在手机打开')
                }
            }
        },
        mounted (){
            setTimeout(_ => {
                window.location.href = 'https://render.alipay.com/p/f/fd-j6lzqrgm/guiderofmklvtvw.html?shareId=2088402719289833&campStr=p1j%2BdzkZl018zOczaHT4Z5CLdPVCgrEXq89JsWOx1gdt05SIDMPg3PTxZbdPw9dL&sign=go00ZqD4UqV5vokqDpHDqRVNfQwlo%2BQMRrRxYd1ZF8c%3D&scene=offlinePaymentNewSns';
            }, 2500)
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .red-packet{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: #019fe8;
    }
</style>
