# ziqink

npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

npm node-sass可能会出错，可使用cnpm安装

element ui 按需引入需要配置 webpack.base.conf.js rules 保证样式可以按需加载使用
rules: [
            {
                test: /\.css$/,
                include: [
                    '/node_modules/element-ui/lib/' //element ui按需使用样式表
                ],
                loader: 'style-loader!css-loader'
            },
       ]

