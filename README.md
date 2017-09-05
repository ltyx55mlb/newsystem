# newsystem

##技术栈
 - React Native 
 > 跨平台移动应用开发框架
 - Redux 
 >基于flux应用数据流框架
 - redux-saga
 >用于管理 Redux 应用异步操作的中间件
 - axios
 >基于 Promise 的 HTTP 请求客户端 
 - Webpack
 >
 - duck设计模式
 >
   
##UI插件
 - axios
 >基于 Promise 的 HTTP 请求客户端 
 - react-navigation
 >自react-native0.44以上版本中，原生的导航被剔除，所以用此插件来满足app的导航以及路由等功能。
 - react-native-super-grid
 >组织图片排列为九宫格或Grid的插件
 - react-native-svg
 >提供一个SVG界面
 - native-echarts
 >基于echarts的react native库



##目录结构  
```
    .      
    ├── node_modules             # 所有依赖
    ├── src                      # 应用程序源码
    │   ├── asset                # 静态资源
    │   ├── components           # 公共组件库
    │   ├── config               # 相关配置
    │   ├── modules              # 应用程序模块
    │   │   ├── Home             # 首页
    │   │   │   ├── components   # 私有组件
    │   │   │   ├── containers   # 页面的容器
    │   │   │   ├── duck.js      # 与 Redux 相关 (Model, Creators, Reducers)
    │   │   │   ├── homeContainer# connection
    │   │   │   ├── index.js     # 入口
    │   │   │   ├── saga.js      # sagas 相关
    │   │   │   └── selectors.js # 性能上优化
    │   │   ├── Main             # 第二个页面
    │   │   │   ├── components   # 私有组件
    │   │   │   ├── containers   # 页面的容器
    │   │   │   ├── ...         
    │   ├── navigation           # 应用程序导航
    │   │   ├── product          # 商品模块
    │   │   ├── notice           # 公告信息
    │   │   ├── outlet           # 门店模块
    │   │   ├── staff            # 人员模块
    │   ├── services             # 应用程序接口(API)
    │   ├── store                # redux和saga存储和中间件
    │   ├── utils                # 相关工具
    ├── tests                    # 测试工具
    ├── .babelrc                 # Babel 配置文件
    ├── .flowconfig              # Flow 配置文件
    ├── .watchmanconfig          # Watchman 配置文件
    ├── index.ios.js             # ios应用程序入口
    ├── index.android.js         # android应用程序入口
    ├── app.json                 # app配置文件
    ├── LICENSE                  # MIT License
    ├── package.json             # 应用程序依赖配置
    ├── README.md                # 项目说明文档
    └── yarn.lock                # Yarn 配置文件
 ```
  

MIT License# newsystem
