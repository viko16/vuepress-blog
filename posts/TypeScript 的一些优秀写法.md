---
title: TypeScript 的一些优秀写法
date: 2019-05-17T21:19:59+08:00
---

> 最近写 ts 比较多，记下一些用法
> 
> 慢慢补充，用到多少写多少。。

[[toc]]

## 多用 const enum

const enum 跟直接 enum 用起来差不多，区别是：

1. const enum 编译时会把实际用到的枚举成员替换成常量值：

```ts
// const-enum.ts
const enum Color {
  Red,
  Green,
  Blue
}
console.log(Color.Red)

// output.js
console.log(0 /* Red */);
```

2. 而 enum 会编译成运行时的一个对象：

```ts
// enum.ts
enum Color {
  Red,
  Green,
  Blue
}
console.log(Color.Red)

// output.js
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
```



所以，如果使用的时候只是简单字符串/数组比较，尽量用 const enum，编译后代码少点

但只能是静态值时可以用，动态获取的不行

```ts
const enum Color {
  Red,
  Green,
  Blue
}

// 这样可以
console.log(Color.Blue)

// 这样不行!!
const key = 'Blue'
console.log(Color[key])
```

但是如果是写第三方库的时候，由于不知道用户会怎么用，还是应该老老实实用 enum



## 初始化类属性

> 每次写类属性 + 构造函数都觉得是重复劳动怎么办？

简洁写法

```ts
class Student {
    constructor(public name: string, private age: number) {}
}
```

相当于

```ts
class Student {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

也就是在构造函数的参数前面加可见性的修饰符的话，可以自动创建对应的字段，并初始化



## 从 API 结果生成 interface/type

> 后端给一堆 API 文档过来，我要转成 ts 的类型怎么办？

方法1，在线生成，把 json 贴进去就好

[http://json2ts.com/](http://json2ts.com/)



方法2，用 typeof

```ts
const post = {
  id: '123',
  title: 'title',
  content: 'title',
  interact: {
    like_count: 100,
    view_count: 200,
  },
};

type Post = typeof post;
// 这样 Post 就相当于拿到了 post 实例的数据解构定义了
```



## 自动找 `typings`

在使用那些没有自带 `d.ts` 的库时，我经常要手动去搜一下有没有对应的 `@types/package`，这个体验太奇葩了。

现在最终找到一个小工具来替代，它会在 package.json 里寻找依赖，自动跑一次上面的流程，最后帮我写入 package.json，多爽！

<https://www.npmjs.com/package/typesync>

