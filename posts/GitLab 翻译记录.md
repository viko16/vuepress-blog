---
title: GitLab 翻译记录
date: 2015-04-19
---

## 翻译
GitLab 本来好像没考虑国际化的样子，翻译全靠自己去 Views 目录里面逐个文件修改，大坑！！

## 路径
GitLab 安装目录下的 `app/views/`
> 如果是一键安装包装的话，在 `/opt/gitlab/embedded/service/gitlab-rails/`

## 生效
直接修改完文件刷新貌似有缓存的样子，执行 `sudo gitlab-ctl restart` 重启一下服务就好了。
> 所以我自己的命令都是 
```php
sudo git pull && sudo gitlab-ctl restart
```

## 注意
GitLab 使用的 haml 模板语言是按照缩进来表达层次，所以连一个空格都不能错，不然会报 500 错误的
