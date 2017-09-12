<template>
    <el-menu theme="dark"
             :default-active="default_active"
             mode="horizontal"
             @select="handleSelect">
        <el-menu-item :index="item.index"
                      :key="item.index"
                      v-for="item in menu_item">{{item.text}}
        </el-menu-item>
    </el-menu>
</template>

<script>
    import Vue from 'vue'
    import {Menu, MenuItem} from 'element-ui'

    Vue.use(Menu)
    Vue.use(MenuItem)

    export default {
        data (){
            return {
                default_active: this.$route.name || 'home',
                menu_item: [{
                    index: 'home',
                    text: '首页'
                },{
                    index: 'toBase64',
                    text: 'base64'
                },{
                    index: 'video',
                    text: 'video'
                }]
            }
        },
        components: {},
        methods: {
            // 切换导航
            handleSelect(key, keyPath) {
                this.$router.push({name: key})
            }
        },
        mounted (){
        }
    }
</script>

<style>
</style>
