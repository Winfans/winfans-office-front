# winfans-office-front

> 这是一个云办公系统的前端项目。它是基于vue-cli4.0构建的vue前后端分离项目，其包含了 vue & axios & element-ui & vue-admin-template & vuex

[后端项目](https://github.com/Winfans/winfans-office-back)

[线上地址](http://office.wffanshao.top)

目前版本为 `v1.0.0`，仅用于学习使用，注意线上首页只是导航页，方便用户寻找，并非平台首页

## 项目描述
1.该项目是作者本人大学的期末作业，为了方便大家参考和学习，便在此开源，但由于时间关系`v1.0.0`仅实现了部分功能。

2.该项目是基于vue-cli4构建的vue项目，遵循restful开发规范，前后端之间通过json数据进行交互。

3.云办公系统实现了基本的用户登录注册功能，有系统管理员、普通用户、团队成员、团队管理员四种角色（普通用户、团队成员、团队管理员统称用户）。用户和管理员有相对应的系统，没有对应权限的角色无法通过后端的拦截而进行资源访问，用户系统中包含了CRM系统、团队管理系统，管理员系统中仅实现了用户管理系统。

## 项目启动

```bash
# 克隆项目
git clone https://github.com/Winfans/winfans-office-front.git

# 进入门户项目目录
cd winfans-office-front/office-front

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve

# 进入后台管理项目目录
cd winfans-office-front/office-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve
```



