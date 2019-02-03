---
title: CSS 的一点布局技巧
date: 2015-08-12
---

## 页面自适应屏幕高度

> 目标：当页面不超过屏幕高度，占满全屏

本来是写 JS 去适应的

```javascript
document.body.style.minHeight = document.documentElement.clientHeight + 'px';
```

然而微信内置浏览器下各种延迟导致闪一下，还是 css 控制比较好

```css
body, html{
	margin:0;
	height:100%;
}
```


## 元素在页面垂直居中
> 让某个元素在整个页面垂直居中

没什么技术含量但又兼容性极好的 `display: table` 方法

```css
body {
	display: table;
	margin: 0 auto;
}

.main {
	display: table-cell;
	vertical-align: middle;
}
```

## 图片在 div 中垂直居中
> 让图片在 div 里面垂直居中

利用vertical-align实现垂直，决定行高的是行内最高的元素的值

```css
div {
	/* 要有固定的宽高 */
}

div span {
	height: 100%;
	display: inline-block;
	vertical-align: middle;
}

div img {
	width: 300px;
	vertical-align: middle;
}
```

## 参考
- <http://www.cnblogs.com/mizzle/archive/2011/07/19/2110453.html>
- <http://jingyan.baidu.com/article/19192ad832d26de53e570738.html>
