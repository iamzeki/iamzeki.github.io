import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/index'
import toBase64 from 'pages/to-base64/index'
import video from 'pages/video/index'
import redPacket from 'pages/redPacket/index'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/toBase64',
            name: 'toBase64',
            component: toBase64
        },
        {
            path: '/video',
            name: 'video',
            component: video,
            meta: {
                title: '易橙国际数码商城'
            }
        },
        {
            path: '/red-packet',
            name: 'red-packet',
            component: redPacket,
            meta: {
                title: 'red packet'
            }
        }
    ]
})

// 设置页面title
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '集群车宝';
    next();
});

export default router;