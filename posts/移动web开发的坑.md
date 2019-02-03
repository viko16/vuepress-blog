---
title: 移动web开发的坑
date: 2015-06-19
---

# CSS
去除点击时的阴影
`-webkit-tap-highlight-color:rgba(255,255,255,0)`

去除点击时的阴影
`-webkit-tap-highlight-color:rgba(255,255,255,0)`

去掉自带阴影
`-webkit-user-select:none`

禁用拖动效果
`-webkit-user-drag: none;`

解决 div > img 出现内边距
> 无解。div 手动设定宽高


# HTML
适应宽度，禁止缩放
```html
<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, user-scalable=no">
```

防止被百度抓取转码
```html
<meta http-equiv="Cache-Control" content="no-transform">
<meta http-equiv="Cache-Control" content="no-siteapp">
```
