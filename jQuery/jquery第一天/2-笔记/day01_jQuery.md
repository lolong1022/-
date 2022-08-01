jQuery-01

> 学习目标：
>
> 能够简单使用 jQuery
>
> 能够说出 DOM 对象和 jQuery 对象的区别
>
> 能够写出常用的 jQuery 选择器 
>
> 能够操作 jQuery 样式
>
> 能够写出常用的 jQuery 动画


## 1.1. jQuery 介绍

### 1.1.1. JavaScript 库

​	JavaScript库：即 library，<span style="color:red;">**是一个封装好的特定的集合（方法和函数）**</span>。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show，比如获取元素等。

> 简单理解： <span style="color:red;">**就是一个JS 文件，里面对我们原生js代码进行了封装，存放到里面**</span>。这样我们可以快速高效的使用这些封装好的功能了。
>
> 比如 jQuery，就是为了快速方便的操作DOM，里面基本都是函数（方法）。

​	JavaScript库都是对原生 JavaScript 的封装，内部都是用 JavaScript 实现的。

### 1.1.2. jQuery的概念

​	jQuery总体概况如下 :

- jQuery 是一个<span style="color:red;">**快速、简洁的** **JavaScript 库**</span>，其设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。

- j 就是 JavaScript；   Query 查询； 意思就是查询js，<span style="color:red;">**把js中的DOM操作做了封装**</span>，我们可以快速的查询使用里面的功能。

- jQuery 封装了 JavaScript 常用的功能代码，<span style="color:red;">**优化了 DOM 操作、事件处理、动画设计和 Ajax 交互**</span>。

- 学习jQuery本质： 就是学习调用这些函数（方法）。

- jQuery 出现的目的是加快前端人员的开发速度，<span style="color:red;">**我们可以非常方便的调用和使用它，从而提高开发效率**</span>。

  ![jQuery概述](images/jQuery概述.jpg)

### 1.1.3. jQuery的优点

1. 轻量级(体积小)。核心文件才几十kb，不会影响页面加载速度。

2. 跨浏览器兼容，基本兼容了现在主流的浏览器。

3. 链式编程、隐式迭代。

4. 大大简化了DOM操作。

5. 支持插件扩展开发，有着丰富的第三方的插件。

5. 免费、开源。

   

## 1.2. jQuery 的基本使用

### 1.2.1. jQuery 的下载（了解）

注意：会下载即可！！！！！！

​	jQuery的官网地址： https://jquery.com/，官网即可下载最新版本。

>  各个版本的下载https://code.jquery.com/

​	版本介绍：

> 1x ：兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 2x ：不兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 3x ：不兼容 IE 678 等低版本浏览器， 是官方主要更新维护的版本

### 1.2.2. 体验jQuery

​	步骤：

- 引入jQuery文件，引入即可用
- $('div').hide() 可以隐藏盒子

```html
<style>
  div {
    width: 200px;
    height: 200px;
    background-color: rgb(212, 139, 50);
  }
</style>
<body>
  <div></div>
  <script>
    // document.querySelector('div').style.display="none"
    // 引入即可用
    $('div').hide() // dom
    // 入口函数
  </script>
</body>
```



### 1.2.3. jQuery的入口函数

​	作用：等页面dom元素加载完毕之后，再去执行js代码

​	jQuery中常见的两种入口函数：

```javascript
// 第一种: 繁琐，但是也可以实现
$(document).ready(function(){
   ...  //  此处是页面DOM加载完成的入口
});
// 第二种: 简单易用。 
$(function () {   
    ...  // 此处是页面 DOM 加载完成的入口
}) ; 
```

​	总结：

1. 等着 **DOM 结构渲染完毕即可执行内部代码**，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。
2. 相当于原生 js 中的 DOMContentLoaded。
3. 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css文件、图片加载完毕才执行内部代码。
4. 更推荐使用第二种方式，简单。

### 1.2.4. jQuery中的顶级对象$

1.  $是 jQuery 的别称，在代码中可以使用 jQuery 代替，但一般为了方便，通常都直接使用 $ 。
2.  \$是jQuery的顶级对象，相当于原生JavaScript中的 window。把元素利用$包装成jQuery对象，就可以调用jQuery 的方法。

```javascript
// 1.$是 jQuery 的别称(外号)
// $(function () {
//   alert(11)
// })
jQuery(function () {
    // alert(11)
    jQuery('div').hide();
})
// 2.$是jQuery的顶级对象,相当于原生JavaScript中的 window
console.dir($)
console.dir(jQuery)
console.log($===jQuery)
```



### 1.2.5.  jQuery 对象和 DOM 对象

​	使用 jQuery 方法和原生JS获取的元素是不一样的，总结如下 : 

1. 用原生 JS 获取来的对象就是 DOM 对象。

2. jQuery 方法获取的元素就是 jQuery 对象。

3. jQuery 对象本质是： 利用$对DOM 对象包装后产生的对象（伪数组形式存储）。


> 注意
>
> 只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。

```html
<div></div>
<span id="myspan">123123</span>
<span>asdas</span>
<script>
    // 1. Dom对象： 用原生js获取的就是Dom对象
    var mydiv = document.querySelector('div')
    console.log(mydiv)
    console.dir(mydiv)
    var myspan= document.getElementById('myspan') // dom 对象
    console.dir(myspan)
    // 2. jQuery对象： 用jQuery获取的就是 jQuery对象 
    // 本质：？？？ 对dom对象的包装， 伪数组
    console.log($('div')); // jq 对象
    console.log($('span'));

    // 3. dom对象和jq对象 的 方法，属性可以互相使用吗 ？？？？不可以
    // mydiv.style.display = 'none'
    //  $('div').style.display = 'none' error
    // $('div').hide()
    mydiv.hide()
</script>
```



![jQuery对象和DOM对象](images/jQuery对象和DOM对象.png)

### 1.2.6.  jQuery 对象和 DOM 对象转换

​	DOM 对象与 jQuery 对象之间是可以相互转换的。因为原生js 比 jQuery 更大，原生的一些属性和方法 jQuery没有给我们封装. 要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用。

```javascript
// jquery对象和dom对象的相互转换
//$('video').play(); // play 是原生里的方法，jq没有

// 1.DOM对象转换成jQuery对象，方法只有一种
var box = document.getElementById('box');  // 获取DOM对象
var jQueryObject = $(box);  // 把DOM对象转换为 jQuery 对象

// 2.jQuery 对象转换为 DOM 对象有两种方法：
//   2.1 jQuery对象[索引值]
var domObject1 = $('div')[0]

//   2.2 jQuery对象.get(索引值)
var domObject2 = $('div').get(0)
 
```

总结：实际开发比较常用的是把DOM对象转换为jQuery对象，这样能够调用功能更加强大的jQuery中的方法。

## 1.3. jQuery 选择器

​	原生 JS 获取元素方式很多，很杂，而且兼容性情况不一致，因此 jQuery 给我们做了封装，使获取元素统一标准。

### 1.3.1. 基础选择器

```js
$("选择器")   //  里面选择器直接写 CSS 选择器即可，但是要加引号 
```

​	

| 名称       | 用法            | 描述                     |
| ---------- | --------------- | ------------------------ |
| ID选择器   | $("#id")        | 获取指定ID的元素         |
| 全选选择器 | $("*")          | 匹配所有元素             |
| 类选择器   | $(".class")     | 获取同一类 class 的元素  |
| 标签选择器 | $("div")        | 获取同一类标签的所有元素 |
| 并集选择器 | $("div, p, li") | 选取多种元素             |
| 交集选择器 | $("li.current") | 交集元素                 |

### 1.3.2. 层级选择器

​	层级选择器最常用的两个分别为：后代选择器和子代选择器。

| 名称       | 用法       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| 子代选择器 | $("ul>li") | 使用>号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素 |
| 后代选择器 | $("ul li") | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等   |

**基础选择器和层级选择器案例代码**

```html
<body>
    <div>我是div</div>
    <div class="nav">我是nav div</div>
    <p>我是p</p>
    <ul>
        <li>我是ul 的</li>
        <li>我是ul 的</li>        
        <li>我是ul 的</li>
    </ul>
    <script>
        $(function() {
            console.log($(".nav"));
            console.log($("ul li"));
        })
    </script>
</body>
```

### 1.3.3. 隐式迭代

遍历内部 DOM 元素（伪数组形式存储）的过程就叫做**隐式迭代。**

简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，

方便我们调用。

```javascript
 $('div').css('background', 'red') // 给页面上所有的代码 设置了红色的背景颜色
```



### 1.3.4. 筛选选择器

​	筛选选择器，顾名思义就是在所有的选项中选择满足条件的进行筛选选择。常见如下 :

| 语法       | 用法          | 描述                                                 |
| ---------- | ------------- | ---------------------------------------------------- |
| :first     | $("li:first") | 获取第一个li元素                                     |
| :last      | $("li:last")  | 获取最后一个li元素                                   |
| :eq(index) | $("li:eq(2)") | 获取到的li元素中，选择索引号为2的元素，索引号从0开始 |
| :odd       | $("li:odd")   | 获取到的li元素中，选择索引号为奇数的元素             |
| :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素             |

**案例代码**

```html
<body>
    <ul>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
    </ul>
    <ol>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
    </ol>
    <script>
        $(function() {
            $("ul li:first").css("color", "red");
            $("ul li:eq(2)").css("color", "blue");
            $("ol li:odd").css("color", "skyblue");
            $("ol li:even").css("color", "pink");
        })
    </script>
</body>
```

### 1.3.5. 筛选选择方法

| 语法               | 用法                           | 说明                                 |
| ------------------ | ------------------------------ | ------------------------------------ |
| parent()           | $("li").parent()               | 查找父级                             |
| children(selector) | $("ul").children("li")         | 相当于$("ul>li")，最近一级（亲儿子） |
| find(selector)     | $("ul").find("li")             | 相当于$("ul li")，后代选择器         |
| siblings(selector) | $(".first").siblings("li")     | 查找兄弟节点，不包括自己             |
| nextAll()          | $(".first").nextAll()          | 查找当前元素之后的所有同级元素       |
| preveAll()         | $(".first").preveAll()         | 查找当前元素之前的所有同级元素       |
| hasClass()         | $("div").hasClass("protected") | 检查当前元素是否有指定类，返回布尔值 |
| eq(index)          | $("li").eq(2)                  | 相当于$("li:eq(2)")，索引从0开始     |

```javascript
// parent 亲爸爸
console.log($('.son').parent(), $('.son').parent().parent());
// children 亲儿子
$('.nav').children('p').css('color', 'red')
// find 后代
$('.nav').find('p').css('color', 'red')


// siblings 兄弟
$('.item').siblings('li').css('color', 'red')
// eq 索引
var index = 2
$('ol li').eq(index).css('color', 'pink')
// $('ol li:eq('+index+')').css('color', 'pink') // 不推荐
```



> 注意点：parent()   children()  find() siblings()  eq() hasClass()

### 1.3.6. 新浪案例巩固

> 思路分析
>
> 鼠标经过（mouseover），对应的列表展示出来
>
> 鼠标离开（mouseout），对应的列表隐藏起来

注意点： 在jQuery中，如何获取触发事件的元素：  $(this) 

```javascript
// 鼠标经过，获取当前元素，然后把对应的ul给展示出来
// 鼠标离开，获取当前元素，然后把对应的ul给隐藏起来
$(function () {
    $('.nav > li').mouseover(function() {
        console.log($(this)); // 获取当前元素 
        $(this).children('ul').show();
    })
    $('.nav').children('li').mouseleave(function () {
        $(this).find('ul').hide();
    })
})
```

### 1.3.7. 排他思想

想要多选一效果，就可以用排他思想。

当前元素设置样式，其余的兄弟元素样式清。

```javascript
// 给当前元素设置背景颜色(自己)
$(this).css('color', 'pink')
// 其余兄弟去掉背景颜色 隐式迭代
$(this).siblings('button').css('color', '')
```

### 1.3.8. 链式编程

```javascript
// 链式编程是为了节省代码量，看起来更优雅。
$(this).css('color', 'red').sibling().css('color', ''); 
```

示例代码

```javascript
// 原生排他思想：干掉所有人，留下我自己
// 1.给按钮绑定了点击事件
// 2.当前元素设置背景颜色 $(this)
// 3.其他兄弟 去掉背景颜色 
$(function () {
    // 隐式迭代
    $('button').click(function () {
        // $(this).css('color', 'red');
        // $(this).siblings('button').css('color', '');
        // 链式编程  // return this
        $(this).css('color', 'red').siblings('button').css('color', '')
    })
})
```



### 1.3.9 案例：淘宝服饰精品案例



> 思路分析: 
> 1.核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相对应（某个）图片显示，其余的图片隐藏。
> 2.需要得到当前小li 的索引号，就可以显示对应索引号的图片
> 3.jQuery 得到当前元素索引号 $(this).index()
> 4.中间对应的图片，可以通过  eq(index) 方法去选择
> 5.显示元素 show()   隐藏元素 hide()

示例代码

```javascript
// 核心思路：鼠标经过左侧盒子某个小li，就让内容区盒子相对应（某个）图片显示，其余的图片隐藏。
$(function () {
    // 1.鼠标经过我们的li(mouseover);
    $('#left li').mousemove(function () {
        // 2.确定具体是哪一个小li; $(this) $(this).index()
        var index = $(this).index();
        console.log(index);
        // 3.让右侧根据index获取对应的图片显示出来 eq(index) ;
        //    $('#content div').eq(index).show();
        // 4.其余的图片(就是其他兄弟)隐藏起来;
        //    $('#content div').eq(index).siblings('div').hide();

        // 链式编程
        $('#content div').eq(index).show().siblings('div').hide()
    })
})
```



## 1.4.  jQuery 样式操作

​	jQuery中常用的样式操作有两种：css()和 设置类样式方法

### 1.4.1. 方法1: 操作 css 方法

​	jQuery 可以使用 css 方法来修改简单元素样式； 也可以操作类，修改多个样式。

​	常用以下三种形式 : 

```javascript
// 1.参数只写属性名，则是返回属性值
console.log($('div').css('width'));

// 2.  参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号
$('div').css('width', 1000)  // 数字类型 可以用数值
$('div').css('width', '1000px')

// 3.  参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开， 属性可以不用加引号
$('div').css({
    width: 400,
    height: '400px',
    'background-color': 'red',
    borderRadius: 40 // 推荐驼峰
})
```

​	注意：css() 多用于样式少时操作，多了则不太方便。

### 1.4.2. 方法2: 设置类样式方法

​	作用等同于以前的 classList，可以操作类样式， 注意操作类里面的参数不要加点。

​	常用的三种设置类样式方法：

```javascript
// 1.添加类
$("div").addClass("current");

// 2.删除类
$("div").removeClass("current");

// 3.切换类
$("div").toggleClass("current");

// 4.监测是否有此类名
$('div').hasClass('current');

```

​	注意：

1. 设置类样式方法比较适合样式多时操作，可以弥补css()的不足。
2. 原生 JS 中 className会覆盖元素原先里面的类名，jQuery 里面类操作只是对指定类进行操作，不影响原先的类名。

示例代码

```javascript
// className 和 类操作的区别
var one = document.querySelector('.one')
one.className = 'two' // 直接是赋值 会覆盖

// $('div').addClass('two') // 类似于数组push
$('div').removeClass('two')
// jQuery 里面类操作只是对指定类进行操作，不影响原先的类名
```



### 1.4.3. 案例：tab 栏切换

> 思路分析: 
> 1.点击上部的li，当前li 添加current类，其余兄弟移除类。
> 2.点击的同时，得到当前li 的索引号
> 3.让下部里面相应索引号的item显示，其余的item隐藏

```javascript
// 隐式迭代
$('.tab_list li').click(function() {
    // 1.点击上部li，当前li添加current类，其他兄弟移除类
    $(this).addClass('current').siblings().removeClass() // 排他
    
    // 2.点击li的同时，获取索引号 index
    var index = $(this).index(); // 索引号获取
    // 3.让下部里面相应索引号的item显示，其他的item隐藏
    $('.tab_con .item').eq(index).show().siblings('.item').hide();
})
```



## 1.5. jQuery 效果

​	jQuery 给我们封装了很多动画效果，最为常见的如下：

- 显示隐藏：show() / hide() / toggle() ;
- 滑入滑出：slideDown() / slideUp() / slideToggle() ; 
- 淡入淡出：fadeIn() / fadeOut() / fadeToggle() / fadeTo() ; 
- 自定义动画：animate() ;

> 注意：
>
> 动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。
>
> jQuery为我们提供另一个方法，可以停止动画排队：stop() ;

### 1.5.1. 显示隐藏

​	显示隐藏动画，常见有三个方法：show() / hide() / toggle() ;

​	语法规范如下:

![show](images/show.png)

![hide](images/hide.png)

![toggle](images/toggle.png)

**代码演示**

```html
<body>
    <button>显示</button>
    <button>隐藏</button>
    <button>切换</button>
    <div></div>
    <script>
        $(function() {
            $("button").eq(0).click(function() {
                $("div").show(1000, function() {
                    alert(1);
                });
            })
            $("button").eq(1).click(function() {
                $("div").hide(1000, function() {
                    alert(1);
                });
            })
            $("button").eq(2).click(function() {
              $("div").toggle(1000);
            })
            // 一般情况下，我们都不加参数直接显示隐藏就可以了
        });
    </script>
</body>
```

### 1.5.2. 滑入滑出

​	滑入滑出动画，常见有三个方法：slideDown() / slideUp() / slideToggle() ; 

​	语法规范如下:

![slideDown](images/slideDown.png)

![slideUp](images/slideUp.png)

![slideToggle](images/slideToggle.png)

**代码演示**

```html
<body>
    <button>下拉滑动</button>
    <button>上拉滑动</button>
    <button>切换滑动</button>
    <div></div>
    <script>
        $(function() {
            $("button").eq(0).click(function() {
                // 下滑动 slideDown()
                $("div").slideDown();
            })
            $("button").eq(1).click(function() {
                // 上滑动 slideUp()
                $("div").slideUp(500);
            })
            $("button").eq(2).click(function() {
                // 滑动切换 slideToggle()
                $("div").slideToggle(500);
            });
        });
    </script>
</body>
```

> 小案例：简洁版下拉菜单略（详情参看源码）。

### 1.5.3. 事件切换

​	jQuery中为我们添加了一个新事件 hover() ; 功能类似 css 中的伪类 :hover 。介绍如下

**语法**

```javascript
hover([over,]out)     // 其中over和out为两个函数
```

- over:鼠标移到元素上要触发的函数（相当于mouseenter）
- out:鼠标移出元素要触发的函数（相当于mouseleave）
- 如果只写一个函数，则鼠标经过和离开都会触发它

**hover事件案例**

```html
<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul><li><a href="">私信</a></li><li><a href="">评论</a></li><li><a href="">@我</a></li></ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul><li><a href="">私信</a></li><li><a href="">评论</a></li><li><a href="">@我</a></li></ul>
        </li>
    </ul>
    <script>
        $(function() {
            // 鼠标经过
            // $(".nav>li").mouseover(function() {
            //     // $(this) jQuery 当前元素  this不要加引号
            //     // show() 显示元素  hide() 隐藏元素
            //     $(this).children("ul").slideDown(200);
            // });
            // // 鼠标离开
            // $(".nav>li").mouseout(function() {
            //     $(this).children("ul").slideUp(200);
            // });
            
            // 1. 事件切换 hover 就是鼠标经过和离开的复合写法
            // $(".nav>li").hover(function() {
            //     $(this).children("ul").slideDown(200);
            // }, function() {
            //     $(this).children("ul").slideUp(200);
            // });
            
            // 2. 事件切换 hover  如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
            $(".nav>li").hover(function() {
                // stop 方法必须写到动画的前面
                $(this).children("ul").slideToggle();
            });
        })
    </script>
</body>
```

### 1.5.4 停止动画排队

​	动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。

​	停止动画排队的方法为：stop() ; 

- stop() 方法用于停止动画或效果。
- stop() 写到动画或者效果的前面， 相当于停止结束上一次的动画。

​        总结: 每次使用动画之前，**先调用 stop() ,再调用动画**。

```javascript
$('.nav > li').hover(function () {
    // stop 方法必须写到动画的前面
    $(this).children("ul").stop().slideToggle();
})
```



### 1.5.5 淡入淡出

​	淡入淡出动画，常见有四个方法：fadeIn() / fadeOut() / fadeToggle() / fadeTo() ; 

​	语法规范如下:

![fadeIn](images/fadeIn.png)

![fadeOut](images/fadeOut.png)

![fadeToggle](images/fadeToggle.png)

![fadeTo](images/fadeTo.png)

**代码演示**

```html
<body>
    <button>淡入效果</button>
    <button>淡出效果</button>
    <button>淡入淡出切换</button>
    <button>修改透明度</button>
    <div></div>
    <script>
        $(function() {
            $("button").eq(0).click(function() {
                // 淡入 fadeIn()
                $("div").fadeIn(1000);
            })
            $("button").eq(1).click(function() {
                // 淡出 fadeOut()
                $("div").fadeOut(1000);
            })
            $("button").eq(2).click(function() {
                // 淡入淡出切换 fadeToggle()
                $("div").fadeToggle(1000);
            });
            $("button").eq(3).click(function() {
                //  修改透明度 fadeTo() 这个速度和透明度要必须写
                $("div").fadeTo(1000, 0.5);
            });
        });
    </script>
</body>
```

突出显示案例

```javascript
// 鼠标进入的时候，其他的li标签的透明度 0.5
// 鼠标离开的时候，其他的li标签的透明度 1
$('.wrap li').hover(function () {
    console.log('jinru');
    $(this).siblings('li').stop().fadeTo(200, 0.5)
}, function () {
    console.log('likai');
    $(this).siblings('li').stop().fadeTo(200, 1)
})
```



### 1.5.6 自定义动画

​	自定义动画非常强大，通过参数的传递可以模拟以上所有动画，方法为：animate() ;

​	语法规范如下:

![](images/animate.png)

**代码演示**

```html
<body>
    <button>动起来</button>
    <div></div>
    <script>
        $(function() {
            $("button").click(function() {
                $("div").animate({
                    left: 500,
                    top: 300,
                    opacity: .4,
                    width: 500,
                }, 500);
            })
        })
    </script>
</body>
```

### 1.5.7. 案例：王者荣耀手风琴效果

> 思路分析: 
> 1.鼠标经过某个小li 有两步操作：
> 2.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
> 3.其余兄弟小li宽度变为69px， 小图片淡入， 大图片淡出

```javascript
$('.king li').mouseover(function () {
    $(this).stop().animate({
        width: 224
    }).find('.small').stop().fadeOut().siblings('.big').stop().fadeIn();
    $(this).siblings('li').stop().animate({
        width:69
    }).find('.small').stop().fadeIn().siblings('.big').stop().fadeOut();
})
```



## 1.6. 今日总结

![总结](images/总结.png)
