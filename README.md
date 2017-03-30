# Global-Vue2.0
![](https://github.com/Cheese-Yu/Global-Vue2.0/raw/master/r1.png)
</br>
This is a website about Vue2.0 & Vue-router.</br>
The page is designed by [BuckyMaler](https://github.com/BuckyMaler/global).</br>
The original PSD is included and was provided by [Sergey Melnik](https://www.behance.net/SergeyMelnik).
### 简介
* 这是一个使用Vue2.0、Vue-cli、Vue-router完成的单页应用，可以正常在服务器中运行，[点击预览preview](http://www.cheeseyu.tk/)。</br>
(没有做过优化，可能打开有点慢。。。苦逼实习生只有笔记本，没做大屏幕适配，希望它一切正常(╥╯^╰╥))
* Webpack 还没怎么研究过，对于图片引用路径存在一些问题。
### 目录结构
    ├── build                       // webpack相关配置文件
    │   ├── 
    │   ├── webpack.base.conf.js    // 主要是和dev/build有关的配置（我貌似只改了这一个文件）           
    │   ├──         
    │   └── 
    ├── config                      // 和dev有关的配置
    ├── dist                        // build后的文件在这里
    ├── src                         // 生产目录
    │   ├── assets
    │   │     ├── fonts
    │   │     └── 各种img 
    │   ├── components
    │   ├── router                   // vue-router路由页面
    │   │     ├── about.vue
    │   │     ├── contact.vue
    │   │     ├── home.vue
    │   │     ├── us.vue
    │   │     └── works.vue
    │   ├── App.vue
    │   ├── main.js                   // js入口文件
    │   └── router.js                 // 进行router配置
    ├── static
    ├── .babelrc
    ├── .editorconfig
    ├── .gitignore
    ├── .postcssrc.js
    ├── index.html                     // html文件
    ├── package.json                   // 项目依赖
    └── README.md
### 项目构建方法
    npm install vue-cli -g
    vue init webpack global
    -------------------------------
    ? Project name global
    ? Project description A Vue.js project
    ? Author CheeseYu
    ? Vue build standalone
    ? Install vue-router? Yes
    ? Use ESLint to lint your code? No
    ? Setup unit tests with Karma + Mocha? No
    ? Setup e2e tests with Nightwatch? No`
    -------------------------------
    cd global
    npm install
    npm insatll less less-loader file-loader --save
    npm run dev
### 相关环境依赖
* Vue: 2.2.1
* Vue-router: 2.2.0
* vue-loader: 11.1.4
* Webpack: 2.2.1
* Node 6.9.1
### 主要问题介绍
* 图片引用路径在html css js 中打包后的效果都不同。</br>
**解决方式**：将图片统一在css中加载，html中不放图片路径
* build后图片文件位置和引用的地址不匹配。</br>
**解决方式**：手动将图片文件挪到正确的位置。（略惨，有大神能指导一下不胜感激。）
* 第三方库文件过大，加载太慢。</br>
**解决方式**：在webpack的配置文件中抽离第三方库，不打包第三方库，然后在html头中引用。当然也可以放在自己的cdn上，然而我没买。。。
### 小结
这算是自己第一个从配置到发布成功的小项目，又是研究服务器，又是研究webpack的各种配置，还有很多缺陷和不足。
### Contact
Blog：[cheeseyu.cn](https://cheeseyu.cn)</br>
微博：[El-pescado](http://weibo.com/u/5146043042?refer_flag=1001030101_&is_all=1)
