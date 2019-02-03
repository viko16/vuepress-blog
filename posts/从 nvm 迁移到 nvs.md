---
title: 从 nvm 迁移到 nvs
date: 2018-01-23
---



> 最近从 nvm "出逃" 到了 nvs ，以下是我的一些记录



## 前置介绍

- [nvm](https://github.com/creationix/nvm): 一个 Node.js 版本管理器，使用 bash 实现，几乎是业内最有名
- [nvs](https://github.com/jasongin/nvs): 同样是一个的 Node.js 版本切换器，使用 JavaScript 实现，跨平台



## 为什么要迁移

nvm 有太多我不能忍受的地方，例如：

- nvm 对 `prefix` 支持不好  ( [issue](https://github.com/creationix/nvm/issues/606) )，切换版本后需要重新安装全局模块 ( [docs](https://github.com/creationix/nvm#migrating-global-packages-while-installing) ) ️️️️❗️❗️
- 启动太慢 ( ["nvm slow startup"](https://www.google.com/search?q=nvm+slow+startup) ) ❗️
- 还有很多不兼容的地方.. ( [docs](https://github.com/creationix/nvm#important-notes) )



## 迁移步骤

### 备份现有全局模块列表

```shell
$ npm ls -g --depth=0 # 列出当前装了多少全局模块，手动备份一下~
```

depth 代表显示层级

### 移除已有 node 版本

```shell
$ nvm list # 查看当前装了多少 node 版本
$ nvm uninstall <version>
```

其实可以不删除，只是强迫症

### 卸载 nvm

卸载 nvm 本身倒是挺简单，[How to uninstall nvm](https://github.com/creationix/nvm/issues/298)

```bash
$ rm -rf ~/.nvm
```

然后删除 `~/.bashrc` / `~/.profile` / `~/.zshrc` 里面 nvm 相关的语句即可。

### 安装 nvs

按照官方说明，直接 git clone 到本地，然后执行 install 就好

```shell
$ export NVS_HOME="$HOME/.nvs" # 安装到 ~/.nvs 目录下
$ git clone https://github.com/jasongin/nvs "$NVS_HOME"
$ . "$NVS_HOME/nvs.sh" install
```

`install` 命令会自动注入 nvs 配置到 `~/.bashrc` / `~/.profile` / `~/.zshrc` 里去

### 设置国内镜像

我只用到 node 所以就只设置了 node 的镜像地址，感谢淘宝~~

```shell
$ nvs remote node https://npm.taobao.org/mirrors/node/
```

列出所有下载的 base URI

```shell
$ nvs remote
```

### 安装 node

安装个最新的 lts 版本压压惊

```shell
$ nvs add lts
```

懒得每次都切换就把加上这句

```shell
$ echo 'nvs use latest' >> ~/.zshrc
```

查看已经安装的版本

```shell
$ nvs ls
```

### 设置 prefix

```shell
$ npm config set prefix ~/.npm-global
$ echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
$ source ~/.zshrc
```

### 安装全局模块

然后就可以愉快的重新安装需要的全局模块啦~~

以下是我的安装脚本，仅供参考：

```bash
#!/bin/bash

modules=(
  create-react-app
  eslint
  node-dev
  pm2
  standard
  standard-version
  typescript
  vue-cli
  webpack
  yo
)

echo "Installing global node modules..."
npm install -g ${modules[@]}
```

### 验证

```shell
$ node -v
$ npm -v
```



## 总结

nvs 的优势

- 功能上不输 nvm，启动比 nvm 快 (个人感觉)
- 切换版本后，全局模块也可以直接使用（当然像 `node-sass` 那种还是得重新安装的）
- 使用 JavaScript 实现，~~有亲切感~~
- 扔一个 `.node-version` 文件到项目里，开启 `nvs auto on` 后可以自动切换版本 ( [文档](https://github.com/jasongin/nvs#automatic-switching-per-directory) )，连 `use` 都不用写
- [VS Code support](https://github.com/jasongin/nvs/blob/master/doc/VSCODE.md)



## 相关链接

- https://github.com/jasongin/nvs/blob/master/doc/SETUP.md
- https://github.com/xizhibei/blog/issues/38

