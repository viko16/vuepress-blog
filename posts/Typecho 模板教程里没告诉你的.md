---
title: Typecho 模板教程里没告诉你的
date: 2015-10-15
---

## 循环里的第几个

比如想要第一篇文章特殊处理

``` php
<?php while ($this->next()): ?>
    <?php if ($this->sequence == 1) : ?>
        啦啦啦我是第一篇
    <?php endif; ?>
<?php endwhile; ?>
```

## 人性化时间输出

输出”16小时前“这样的人性化时间

`<?php $this->dateWord(); ?>`

## 按字数生成摘要

无格式的正文摘要，第一个参数为多少个字符，第二个参数为后置字符

`<?php $this->excerpt(250, '...'); ?>`

## 更多

> 2015年10月16日 更新： 

<http://www.wysafe.com/2011/1114/1054.html>

^ 发现这里有更多的小技巧
