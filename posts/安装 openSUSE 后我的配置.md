---
title: 安装 openSUSE 后我的配置
date: 2016-10-11
---

> 终于入了大蜥蜴的坑..



## 系统配置

### 更新软件列表

```bash
sudo zypper ref
```

### 更新系统软件

```bash
sudo zypper up
```

### 安装字体

我最爱的 [Ubuntu Mono](http://font.ubuntu.com/) .

### 配置终端

自带的 Konsole

- 字体修改为 `Source Code Pro`，11 号
- 透明度 15%
- 隐藏滚动条

### 配置窗口

系统设置 - 应用程序风格 - 窗口装饰 - 边框大小：无侧边框




## 开发环境

### git

```bash
sudo zypper in git
```

### oh-my-zsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```bash
vim ~/.zshrc
# 开启 git, z 插件
source ~/.zshrc
```

```bash
# 设置 zsh 为默认
chsh -s /bin/zsh
```


### .vimrc

```bash
set nocompatible "关闭兼容VI模式

source $VIMRUNTIME/vimrc_example.vim
source $VIMRUNTIME/mswin.vim
"设置鼠标运行模式为WINDOWS模式
behave mswin

"开启语法高亮
syntax enable

"行号和标尺
set number
set ruler
set rulerformat=%15(%c%V\ %p%%%)
"设置相对行号
set relativenumber

" 状态栏显示目前所执行的指令
set showcmd

" 缩进
set autoindent
set smartindent

" 自动重新读入
set autoread

" 不产生临时文件
set nobackup
set nowritebackup
```

### git-extras

```bash
curl -sSL http://git.io/git-extras-setup | sudo bash /dev/stdin
```

### nvm

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```

### Node.js
```bash
nvm install stable
```

### ssh-key

```bash
ssh-keygen -t rsa -C "youremail@yourcompany.com"
cat ~/.ssh/id_rsa.pub
## 把公钥贴到 https://github.com/settings/keys
```

校验：

```bash
ssh -T git@github.com
```

### git-config

```bash
git config --global user.name "xxx"
git config --global user.email "xxx@xxx.com"
```




## 安装软件

### shadowsocks-qt5

http://software.opensuse.org/package/shadowsocks-qt5

### Google Chrome

这是不翻墙的装法，先添加软件库，
```bash
# dl.google.com 其实没被墙 - 20161011
sudo zypper ar http://dl.google.com/linux/chrome/rpm/stable/x86_64 Google-Chrome
```
再刷新软件库
```bash
sudo zypper ref
```
最后安装
```bash
sudo zypper in google-chrome-stable
```

### VSCode

http://code.visualstudio.com/Download

下载 .rpm，然后

```bash
sudo zypper in code*.rpm
```

### aria2

```bash
sudo zypper in aria2
```

### Spectacle

https://www.kde.org/applications/graphics/spectacle/

```bash
sudo zypper in spectacle
```
