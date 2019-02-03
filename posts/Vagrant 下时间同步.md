---
title: Vagrant 下时间同步
date: 2015-10-16
---

## 起因

看 log 的时候以为写入错误，排查了几次才发现是系统时间不对，这里记录一下解决过程

##  手动同步时间

1. `yum install ntpdate`

1. `sudo ntpdate ntp.sjtu.edu.cn`  # 上海交大的 ntp 服务器

1. `date -R`  # 查看当前时区的时间

搞掂！


## VirtualBox 自动同步时间

> 后来发现不对啊，我这是在虚拟鸡里面使用，不是应当虚拟鸡帮我同步宿主机时间的咩？

Google 寻找到 __VirtualBox 时间同步__ 的解决方案：

>  只要安装了 tools 就会自动同步时间

可惜我这是 Vagrant，不知道怎么装，再次 Google 之

__最后的解决方案__ ：

```bash
#List vms
$ VBoxManage list vms

#get status of time sync
$ VBoxManage getextradata <vm-name> VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled 

#enable time sync
$ VBoxManage setextradata <vm-name> VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled 0

```
然后 `vagrant reload` 好了

## 参考
- <http://segmentfault.com/a/1190000002547183#articleHeader4>
