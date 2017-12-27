<template>
    <div class="video" style="height: 100vh">
        <!--<video class="zq-video" src="/static/video/video.mp4" autoplay controls></video>-->
        <iframe height=250 width=100% src='https://player.youku.com/embed/XMTc0MDU4ODQ3Mg==' frameborder=0 allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        data (){
            return {}
        },
        components: {},
        methods: {},
        mounted (){
        }
    }
</script>

<style>
    .zq-video{
        width: 100%;
    }
    .video{
        display: flex;
        align-items: center;
    }
</style>
