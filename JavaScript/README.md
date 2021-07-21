# JavaScript数据结构与算法

## JavaScript对数组的定义

> 数组的标准定义是：一个存储元素的线性集合（collection），元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间存储位置的偏移量。几乎所有的编程语言都有类似的数据结构。然而JavaScript的数组却略有不同
>
> JavaScript中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型，这是因为JavaScript对象中的属性名必须是字符串。数组在JavaScript中只是一种特殊的对象，所以效率上不如其他语言中的数组高
>
> JavaScript中的数组，严格来说应该称作对象，是特殊的JavaScript对象，在内部被归类为数组。由于Array在JavaScript中被当作对象，因此它有许多属性和方法可以在编程时使用



### 创建数组

javascript 创建数组的几种方式

```js
var arr1 = [];
console.log("数组长度：", arr1.length); // 0

var arr2 = [1, 2, 3, 4, 5];
console.log("数组长度：", arr2.length); // 5

var arr3 = new Array();
console.log("数组长度：", arr3.length); // 0

var arr4 = new Array(5)
console.log("数组长度：", arr4.length); // 5

var arr5 = new Array(1, 2, 3, 4, 5)
console.log("数组长度：", arr5.length); // 5
```



#### 脚本语言的特性

> 在脚本语言里很常见的一个特性是，数组中的元素**不必是同一种数据类型**，这一点和很多编程语言不同

```js
var obj = [1, 'Test', true, null];
console.log(obj.length); // 4
```



#### *Array.isArray(obj)* 判断对象是否为数组

> 布尔类型返回值的方法，判断 *obj* 是否为数组

```js
var num = 3;
var obj = [1, 'Test', true, null];
console.log(Array.isArray(num)); // false
console.log(Array.isArray(obj)); // true
```



### 读写数组

#### 数组的浅拷贝

**直接使用 =** 的话会造成浅拷贝的问题，当我们**修改拷贝对象时**，**被拷贝对象也会被修改**，因为它们都指向同一个对象

```js
var nums = [1, 2, 3, 4, 5];
var copyNum = nums; // nums[0] = 1
copyNum[0] = 100;
console.log(nums[0]); // 100
```



#### 数组的深拷贝

将数组逐个元素进行赋值，就不会发生浅拷贝的问题

```js
/**
 * 深拷贝数组的方法
 * @param arr 被拷贝的数组
 * @param copyArr 拷贝后的数组
 */
function copy (arr, copyArr) {
    for (let num = 0; num < arr.length; num++) {
        copyArr[num] = arr[num]
    }
}

var arrTest = [1, 2, 3, 4, 5];
var arr2 = [];

copy(arrTest, arr2);

arr2[0] = 100;
console.log(arr2[0]); // 100 
console.log(arrTest[0]); // 1
```



#### js在控制台写入参数（题外话）

```js
const readline = require("readline"); // 引入对应模块

// 注入 readline 模块并引入 createInterface 方法
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("请输入：", function (msg) {
    console.log("输入的内容为: ", msg);
    rl.close();
})

// close 事件监听
rl.on("close", function () {
    process.exit(0); // 结束程序
})
```



### 查询数组

#### *indexOf()*

> 使用 *arr.indexOf(obj)*  返回数组所在索引；如果数组中包含多个相同的元素，indexOf()函数总是返回第一个与参数相同的元素的索引

```js
const readline = require("readline");

var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var names = ["Tony", "Jim", "张三", "李四", "Jack", "Jim", "张三"];

rl.question("请输入需要查找的名字：", function (name) {
    var position = names.indexOf(name);
    if (position >= 0) {
        console.log("查询到姓名[" + name + "]在数组的数组下标为[" + position + "]"); // 如果name为 张三 则返回 2
    } else {
        console.log("未查询到姓名：[" + name + "]");
    }
    rl.close();
})

rl.on("close", function () {
    process.exit(0);
})
```



#### *lastIndexOf()*

> 该函数返回相同元素中最后一个元素的索引，如果没找到相同元素，则返回-1

```js
var names = ["Tony", "Jim", "张三", "李四", "Jack", "Jim", "张三"];
...
var position = names.lastIndexOf(name);
if (position >= 0) {
    console.log("查询到姓名[" + name + "]在数组的数组下标为[" + position + "]"); // 如果name为 张三 则返回 6
} else {
    console.log("未查询到姓名：[" + name + "]");
}
...
```



### 数组的字符串化

> 数组转为字符串有两种方式：*jion()* 和 *toString()* ，两个方法都返回一个包含数组元素的字符串，各元素由逗号分开

```js
var arr = ["张三", "李四", "Jack", null, 1, 2, 3];

var arrStr1 = arr.join();
console.log(arrStr1); // 张三,李四,Jack,,1,2,3

var arrStr2 = arr.toString();
console.log(arrStr2); // 张三,李四,Jack,,1,2,3
```



### 由已有的数组创建新数组

> *concat()* 和 *splice()* 方法允许通过已有数组创建新数组

#### *concat()*

> concat方法可以合并多个数组创建一个新数组

```js
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 0];

var myArr = arr1.concat(arr2);
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

myArr = arr2.concat(arr1);
console.log(myArr); // [6, 7, 8, 9, 0, 1, 2, 3, 4, 5]
```



#### *splice()*

> splice()方法从现有数组里截取一个新数组。该方法的第一个参数是截取的起始索引，第二个参数是截取的长度；splice()方法还有其他用法，比如为一个数组增加或移除元素，具体请参见MozillaDeveloper Network页面（http://mzl.la/1gmmlQ5）

```js
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var testArr = arr3.splice(3, 2); // 该方法的第一个参数是截取的起始索引，第二个参数是截取的长度
console.log(testArr); // [4, 5]
console.log(arr3); // 截取后 原数组会剩下违背截取的元素 [1, 2, 3, 6, 7, 8, 9, 0]
```



### 可变函数

> JavaScript拥有一组可变函数，使用它们，可以不必引用数组中的某个元素，就能改变数组内容

#### 为数组添加元素

> 有两个方法可以为数组添加元素：push()和unshift()

##### *push()*

> 此方法会将一个元素添加到数组末尾

```js
// push
var numArr = [1, 2, 3, 4, 5];
console.log(numArr.toString()); // 1,2,3,4,5
numArr.push(6);
console.log(numArr.toString()); // 1,2,3,4,5,6

// push方法的实现：
function pushDemo(arr, obj) {
    arr[arr.length] = obj;
}

numArr = [1, 2, 3, 4, 5];
pushDemo(numArr, 6);
console.log(numArr.toString()); // 1,2,3,4,5,6
```



##### *unshift()*

> 将元素添加至数组的开头

```js
// unshift
numArr = [2, 3, 4, 5];
numArr.unshift(1);
console.log(numArr.toString());


// unshift方法实现
function unshiftDemo(arr, obj) {
    var N = arr.length;
    for (var i = N; i >= 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = obj
}
numArr = [2, 3, 4, 5];
unshiftDemo(numArr, 1);
console.log(numArr.toString());
```



#### 从数组中删除元素

##### *pop()*

> 使用 pop() 方法可以从数组末尾删除元素

```js
var numArr = [1, 2, 3, 4, 5];
numArr.pop();
console.log(numArr.toString()); // 1,2,3,4
```

##### *shift()*

> 删除数组的第一位元素，方法返回数组的第一个元素

```js
// 删除数组第一位元素的实现
function shiftDemo(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}

numArr = [1, 2, 3, 4, 5];
console.log(shiftDemo(numArr).toString()); // 2,3,4,5

numArr = [1, 2, 3, 4, 5];
numArr.shift();
console.log(numArr.toString()); // 2,3,4,5

numArr = [6, 1, 2, 3, 4, 5];
var first  = numArr.shift(); // 6
numArr.push(first);
console.log(numArr.toString()); // 1,2,3,4,5,6
```



#### 从数组的中间位置添加或删除元素(*splice()*)

> 删除数组中的第一个元素和在数组开头添加一个元素存在同样的问题——两种操作都需要将数组中的剩余元素向前或向后移，然而splice()方法可以帮助我们执行其中任何一种操作

所需参数

- 起始索引
- 需要删除元素的个数（添加时可以将其设为0）
- 需要添加的元素

##### 使用 *splice()* 为数组添加元素

```js
// splice
var nums = [1, 2, 3, 7, 8];
var addElement = [4, 5, 6];
nums.splice(3, 0, addElement);
console.log(nums.toString()); // 1,2,3,4,5,6,7,8
console.log(nums.length); // 6 由于插入的元素为数组，因此形成了一个二维数组

nums = [1, 2, 3, 7, 8];
nums.splice(3, 0, 4, 5, 6)
console.log(nums.toString()); // 1,2,3,4,5,6,7,8
console.log(nums.length); // 8
```



##### 使用 *splice()* 为数组删除元素

```js
// 删除数组元素
nums = [1, 2, 3, 7, 8, 4, 5];
nums.splice(3, 2);
console.log(nums.toString()); // 1,2,3,4,5
```



#### 为数组排序

##### 反转数组元素 *reverse()*

```js
// 反转数组
var numArr = [1, 2, 3, 4, 5];
numArr.reverse();
console.log(numArr.toString()); // 5,4,3,2,1
```

题外话：反转字符串

```js
var str = "Hello, World!"

function reverseStr (str) {
    var strArr = str.split("").reverse();
    var reverse_str = "";
    for (var i = 0; i < strArr.length; i++) {
        reverse_str += strArr[i];
    }
    return reverse_str;
}

console.log(reverseStr(str));
```



##### 对数组进行排序 *sort()*

> 对数组进行排序是经常会遇到的需求，如果元素是字符串类型，那么数组的可变方法sort()就非常好使
>
> 但是如果数组元素是数字类型，sort()方法的排序结果就不能让人满意了

*sort()* 对字符串进行排序

```js
// 数组排序
var srtArr = ["Zoom", "Davie", "Jim", "Jack", "Tim", "Willa"];
console.log(srtArr.sort()); // [ 'Davie', 'Jack', 'Jim', 'Tim', 'Willa', 'Zoom' ]
```



借助其他方法为数字

```js
// 排序数字
var nums = [1, 3, 2, 200, 6, 400, 4];
console.log(nums.sort().toString()); // 1,2,200,3,4,400,6
```

> 为了让sort()方法也能排序数字类型的元素，可以在调用方法时传入一个大小比较函数，排序时，sort()方法将会根据该函数比较数组中两个元素的大小，从而决定整个数组的顺序

```js
/**
 * 该函数可以是一个简单的相减操作，从一个数字中减去另外一个数字。
 * 如果结果为负，那么被减数小于减数；
 * 如果结果为0，那么被减数与减数相等；
 * 如果结果为正，那么被减数大于减数
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
function compare (num1, num2) {
    return num1 - num2;
}

nums = [1, 3, 2, 200, 6, 400, 4];
console.log(nums.sort(compare).toString());
```
