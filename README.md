# Global-Vue2.0
![](https://github.com/Cheese-Yu/Global-Vue2.0/raw/master/r1.png)
</br>
This is a website about Vue2.0 & Vue-router.</br>
The page is designed by [BuckyMaler](https://github.com/BuckyMaler/global).</br>
The original PSD is included and was provided by [Sergey Melnik](https://www.behance.net/SergeyMelnik).
### 简介
* 这是一个使用Vue2.0、Vue-cli、Vue-router完成的单页应用，可以正常在服务器中运行，[点击预览preview](http://www.cheeseyu.tk/)。</br>
(没有做过优化，可能打开有点慢。。。苦逼实习生只有笔记本，没做大屏幕适配，希望它一切正常(╥╯^╰╥))
### 目录结构
    ├── build                       // webpack相关配置文件
    │   ├── 
    │   ├── webpack.base.conf.js    //添加了抽离第三方库的方法           
    │   ├──         
    │   └── 
    ├── config                      // 修改了其中的index.js文件中的build配置
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
### 更新
* 图片路径问题已解决</br>
**解决方式**：项目build后，打开dist中的index.html发现一片空白，控制台提示各种路径错误。别担心，在D盘（随便哪个盘）中新建一个'global'文件夹（注意：一定要在根目录下），将dist中的文件复制到这个文件夹中，再打开index.html，发现一切正常了。<br/>
**解释**：我修改了config文件夹中的index.js文件的build部分的assetsPublicPath（'/'变成了'/global/'）。如果不改，dist中的文件必须放在某个盘的根目录下，所以你打算放在的文件夹叫什么名字，你就在'/'后面加上'name/'就好了。
### 小结
这算是自己第一个从配置到发布成功的小项目，又是研究服务器，又是研究webpack的各种配置，还有很多缺陷和不足。
### Contact
微博：[El-pescado](http://weibo.com/u/5146043042?refer_flag=1001030101_&is_all=1)
