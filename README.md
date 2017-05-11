#nodeDemo

## 小相册 formidable 文件上传 ejs模板

```
# 安装

node app.js

## 代码结构

```shell
src
├── app.js            # app入口，无需修改
├── node_modules      # 需要的框架资源
│   └── ...
├── views
│   ├── album.ejs     # 单独相册
│   ├── err.ejs       # 错误页面
│   ├── index.ejs     # 主页
│   └── up.ejs        # 上传页面
├── controller        # 路由设置
├── public            # 静态资源
│   └── ...
├── temp              # 文件上传缓存路径
├── uploads
│   └── ...           # 文件的路径
└── models
    └── getFiles.js    # 读取文件的方法

```


