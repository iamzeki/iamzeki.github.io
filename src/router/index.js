import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/index'
import toBase64 from 'pages/to-base64/index'
import video from 'pages/video/index'

Vue.use(Router)

export default new Router({
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
            component: video
        }
    ]
})
