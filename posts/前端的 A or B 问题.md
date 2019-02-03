---
title: 前端的 A or B 问题
date: 2015-09-06
---

## 前言
其实不止前端，很多地方都有不同的选择让我们陷入两难局面，我就简单总结一下我遇到的，不一定正确，只是作为以后自己的一个参考。

## "POST/GET" or "post/get"

> 平时遇上了会觉得很纠结，作为字符串究竟写大写还是写小写呢？

解决：
- `<form method="post">` 表单中使用小写
- `$.ajax({type: "POST"})` jQuery 中使用大写

参考：
- <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form#attr-method>
- <http://api.jquery.com/jQuery.ajax/>


## End
如果你发现有其他 A or B 的话，欢迎补充。
