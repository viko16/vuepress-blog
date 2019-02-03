---
title: markdown 里面写表格
date: 2015-08-05
---

## 前言
- markdown 是很简单，但也不是万能的，比如说它那个奇葩的表格语法。
- 尤其是 hexo 对 markdown 表格的支持极差，`<br> bug` 简直不能忍。
- 而且我是从 Microsoft Word 里面做出来的表格，要放到 markdown 简直头疼。


## 解决方案
解决思路：
> 既然 markdown 原生的表格支持不好，但它兼容 html，可以使用 _万能_ 的 html 作为中和


1. [Convert Word DOC to HTML](http://www.textfixer.com/html/convert-word-to-html.php)，将带格式的表格转为 html
2. 将输出的 html [代码压缩](http://tool.oschina.net/jscompress?type=2) 成一行 （避免了 hexo 的 `<br> bug`）
3. Done
