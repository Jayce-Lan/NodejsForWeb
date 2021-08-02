# JavaScript

## 语言基础

### 数据类型

> ECMAScript有6种简单数据类型（也称为原始类型）: Undefined、Null、Boolean、Number、String和Symbol。Symbol（符号）是ECMAScript 6新增的。还有一种复杂数据类型叫Object（对象）。Object是一种无序名值对的集合。因为在ECMAScript中不能定义自己的数据类型，所有值都可以用上述7种数据类型之一来表示。只有7种数据类型似乎不足以表示全部数据。但ECMAScript的数据类型很灵活，一种数据类型可以当作多种数据类型来使用

#### *typeof* 操作符

```js
let msg = "String msg";
let booleanValue = true;
let num = 90;

let obj = {
    name: "Tom",
    age: 10,
    show: function (msg) {
        return "Hello, " + this.name;
    }
}

console.log("msg", typeof msg);
console.log("booleanValue", typeof booleanValue);
console.log("num", typeof num);
console.log("obj", typeof obj); // object
console.log("obj", typeof obj.show); // function
```



#### *Undefined* 类型

> Undefined类型只有一个值，就是特殊值undefined。当使用var或let声明了变量但没有初始化时，就相当于给变量赋予了undefined值
>
> 即使未初始化的变量会被自动赋予undefined值，但我们仍然建议在声明变量的同时进行初始化。这样，当typeof返回"undefined"时，你就会知道那是因为给定的变量尚未声明，而不是声明了但未初始化

```js
{
    let msg;
    console.log(msg === undefined); // true

    msg = undefined;
    console.log(msg === undefined); // true
}

{
    let msg;
    console.log(msg); // undefined
    console.log(age); // 报错age is not defined
}

{
    let msg;
    if (msg) {
        console.log("这里不会被执行");
    }
    if (!msg) {
        console.log("这里会被执行");
    }
    if (age) {
        console.log("这里会报错");
    }
}
```



#### *Null* 类型

> Null类型同样只有一个值，即特殊值null。逻辑上讲，null值表示一个空对象指针，这也是给typeof传一个null会返回"object"的原因

```js
console.log(typeof null); // object
```

- 在定义将来要保存对象值的变量时，建议使用null来初始化，不要使用其他值。这样，只要检查这个变量的值是不是null就可以知道这个变量是否在后来被重新赋予了一个对象的引用
- undefined值是由null值派生而来的，因此ECMA-262将它们定义为表面上相等
- 用等于操作符（==）比较null和undefined始终返回true。但要注意，这个操作符会为了比较而转换它的操作数

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
```



#### *Boolean* 类型

> Boolean 有两个字面值：true和false。这两个布尔值不同于数值，因此true不等于1，false不等于0
>
> 布尔值字面量true和false是区分大小写的，因此True和False（及其他大小混写形式）是有效的标识符，但不是布尔值

```js
let flag = true;
    // let flag2 = True; // True is not defined
```

##### *Boolean()*

| 数据类型  | 转为true的值          | 转为false的值  |
| --------- | --------------------- | -------------- |
| Boolean   | true                  | false          |
| String    | 非空字符串            | ""（空字符串） |
| Number    | 非0对象（包括无穷值） | 0，NaN         |
| Object    | 任意对象              | null           |
| Undefined | N/A（不存在）         | undefined      |

```js
console.log("boolean",Boolean(true)); // true
console.log("boolean",Boolean(false)); // false

let stringValue = "";
console.log("string",Boolean(stringValue)); // false
stringValue = "Hello";
console.log("string", Boolean(stringValue)); // true

console.log("number", Boolean(0)); // false
console.log("number", Boolean(NaN)); // false
console.log("number", Boolean(1)); // true

let obj = null;
console.log("obj", Boolean(obj)); // false
obj = {};
console.log("obj", Boolean(obj)); // true
obj.name = "Tome";
console.log("obj", Boolean(obj)); // true

console.log("undefined", Boolean(undefined)); // false
```



#### *Number* 类型

> Number类型使用IEEE754格式表示整数和浮点值（在某些语言中也叫双精度值）。不同的数值类型相应地也有不同的数值字面量格式

```js
let intNum = 55;
console.log("intNum", intNum);

let num = 0o70; // 八进制
console.log("num", num); // 56

num = 1.; // 小数点后没有数字，当作1处理
console.log("num", num); // 1
```



##### *Number* 的精度问题

- 浮点值的精确度最高可达17位小数，但在算术计算中远不如整数精确。例如，0.1加0.2得到的不是0.3，而是0.30000000000000004
- 因此永远不要测试某个特定的浮点值

```js
console.log(.1 + .2); // 0.30000000000000004
console.log(.15 + .15); // 0.3
console.log((.1 * 100 + .2 * 100) / 100); // .3
```



##### 取值范围（*isFinite()*）

> 如果计算返回正Infinity或负Infinity，则该值将不能再进一步用于任何计算。这是因为Infinity没有可用于计算的数值表示形式。要确定一个值是不是有限大（即介于JavaScript能表示的最小值和最大值之间），可以使用isFinite()函数

```js
let num = Number.MAX_VALUE;
let maxNum = num * 2;
console.log(num + 1);
console.log(isFinite(num)); // true
console.log(isFinite(maxNum)); // false

console.log(isFinite(Number.NEGATIVE_INFINITY)); // 获取正无限大值 false
console.log(isFinite(Number.POSITIVE_INFINITY)); // 获取负无限大值 false
```



##### *NaN* 

> 有一个特殊的数值叫NaN，意思是“不是数值”（Not a Number），用于表示本来要返回数值的操作失败了（而不是抛出错误）

用0除任意数值在其他语言中通常都会导致错误，从而中止代码执行。但在ECMAScript中，0、+0或-0相除会返回NaN

```js
console.log("0", 0 / 0); // NaN
console.log("0", -0 / +0); // NaN
```

如果分子是非0值，分母是有符号0或无符号0，则会返回Infinity或-Infinity

```js
console.log("无穷大", 5 / 0); // Infinity
console.log("无穷大", -5 / 0); // -Infinity
```

###### NaN几个独特的属性（isNaN）

- 任何涉及NaN的操作始终返回NaN（如NaN/10），在连续多步计算时这可能是个问题
- NaN不等于包括NaN在内的任何值

```js
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false 可以转化为数值10
console.log(isNaN(true)); // false 可以转为数字1
console.log(isNaN("11a")); // true
console.log(isNaN("Hello")); // true
```



##### 数值转换

> 有3个函数可以将非数值转换为数值：Number()、parseInt()和parseFloat()。Number()是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值。对于同样的参数，这3个函数执行的操作也不同

###### *Number()*

- 布尔值：true 转化为 1， false 转化为 0
- 数值：直接返回
- null：返回 0
- undefined：返回 NaN
- 字符串：使用如下规则
  - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值
  -  如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值
  - 如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值
  - 如果是空字符串（不包含字符），则返回0
  -  如果字符串包含除上述情况之外的其他字符，则返回NaN
- 对象：调用valueOf()方法，并按照上述规则转换返回的值。如果转换结果是NaN，则调用toString()方法，再按照转换字符串的规则转换

```js
console.log("boolean", Number(true)); // 1
console.log("boolean", Number(false)); // 0
console.log("null", Number(null)); // 0
console.log("undefined", Number(undefined)); // NaN
console.log("string", Number("-11")); // -11
console.log("string", Number(".8")); // 0.8
console.log("string", Number("0xf")); // 15
console.log("string", Number("11C")); // NaN
console.log("string", Number("")); // 0
console.log("string", Number("String")); // NaN
let obj = {name: "Tome"} 
console.log("obj", Number(obj)); // NaN
```



###### *parseInt()*

> 考虑到用Number()函数转换字符串时相对复杂且有点反常规，通常在需要得到整数时可以优先使用parseInt()函数

- parseInt()函数更专注于字符串是否包含数值模式
- 字符串最前面的空格会被忽略，从第一个非空格字符开始转换
- 如果第一个字符不是数值字符、加号或减号，parseInt()立即返回NaN
- 假设字符串中的第一个字符是数值字符，parseInt()函数也能识别不同的整数格式（十进制、八进制、十六进制）
  - 如果字符串以"0x"开头，就会被解释为十六进制整数
  - 如果字符串以"0"开头，且紧跟着数值字符，在非严格模式下会被某些实现解释为八进制整数
- 不同的数值格式很容易混淆，因此parseInt()也接收第二个参数，用于指定底数（进制数）[parseInt(number, 进制)]

```js
console.log("string", parseInt("1234CCC")); // 1234
console.log("string", parseInt("CCC1234")); // NaN
console.log("string", parseInt("70")); // 70
console.log("string", parseInt("")); // NaN
console.log("null", parseInt(null)); // NaN
console.log("十六进制", parseInt("0xA")); // 10
console.log("number", parseInt(22.5)); // 22

console.log("二进制", parseInt(10, 2)); // 2
console.log("八进制", parseInt(10, 8)); // 8
console.log("十进制", parseInt(10, 10)); // 10
console.log("十六进制", parseInt(10, 16)); // 16
```



###### *parseFloat()*

- parseFloat()函数的工作方式跟parseInt()函数类似，都是从位置0开始检测每个字符
- 它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略
- parseFloat()函数的另一个不同之处在于，它始终忽略字符串开头的零

```js
console.log("string", parseFloat("123CCC")); // 123
console.log("string", parseFloat("CCC123")); // NaN
console.log("string", parseFloat("0xA")); // 0
console.log("string", parseFloat("22.5")); // 22.5
console.log("number", parseFloat("22.6.7")); // 22.6
console.log("number", parseFloat("0980.777")); // 980.777
console.log("number", parseFloat("3.125e7")); // 31250000
```



#### *String* 类型

> String（字符串）数据类型表示零或多个16位Unicode字符序列。字符串可以使用双引号（"）、单引号（'）或反引号（`）标示

##### 字符字面变量

| 字面量 | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| \n     | 换行                                                         |
| \t     | 制表                                                         |
| \b     | 退格                                                         |
| \r     | 回车                                                         |
| \f     | 换页                                                         |
| \\\    | 反斜杠（\）                                                  |
| \\'    | 单引号（'）                                                  |
| \\"    | 双引号（"）                                                  |
| \\`    | 反引号（`）                                                  |
| \xnn   | 以十六进制编码 nn 表示的字符，例如\x41等于“A”                |
| \unnnn | 以十六进制编码 nnnn 表示的 Unicode 字符，例如\u03a3等于希腊字符 ∑ |

```js
let str = "This is \u03a3"; // \u03a3 只表示单个字符
console.log(str);
console.log(str.length); // 9

str = "我将打出一个双引号：\"\"";
console.log(str);
```



##### 字符串的特点

> ECMAScript中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量

- 变量lang一开始包含字符串"Java"
- 紧接着，lang被重新定义为包含"Java"和"Script"的组合，也就是"JavaScript"
- 整个过程首先会分配一个足够容纳10个字符的空间，然后填充上"Java"和"Script"
- 最后销毁原始的字符串"Java"和字符串"Script"，因为这两个字符串都没有用了
- 所有处理都是在后台发生的，而这也是一些早期的浏览器（如Firefox 1.0之前的版本和IE6.0）在拼接字符串时非常慢的原因。这些浏览器在后来的版本中都有针对性地解决了这个问题

```js
let lang = "Java";
console.log("lang: ", lang);
lang = lang + "Script";
console.log("lang: ", lang);
```



##### 转换为字符串

###### *toString()* 

> 使用几乎所有值都有的toString()方法。这个方法唯一的用途就是返回当前值的字符串等价物

- toString()方法可见于数值、布尔值、对象和字符串值（字符串值也有toString()方法，该方法只是简单地返回自身的一个副本）
- null和undefined值没有toString()方法
- toString()的参数
  - 多数情况下，toString()不接收任何参数
  - 在对数值调用这个方法时，toString()可以接收一个底数参数，即以什么底数来输出数值的字符串表示
  - 默认情况下，toString()返回数值的十进制字符串表示
  - 通过传入参数，可以得到数值的二进制、八进制、十六进制，或者其他任何有效基数的字符串表示

```js
let value = true;
console.log("boolean", value.toString()); // true
// value = undefined;
// console.log("undefined", value.toString()); // TypeError: Cannot read property 'toString' of undefined
// value = null;
// console.log("null", value.toString()); // TypeError: Cannot read property 'toString' of null
value = 3.141592653;
console.log("number", value.toString()); // 3.141592653

let num = 10;
console.log("二进制", num.toString(2)); // 1010
console.log("八进制", num.toString(8)); // 12
console.log("十进制", num.toString(10)); // 10
console.log("十六进制", num.toString(16)); // a
```



###### *String()*

> 如果你不确定一个值是不是null或undefined，可以使用String()转型函数，它始终会返回表示相应类型值的字符串

- 如果值有toString()方法，则调用该方法（不传参数）并返回结果
- 如果值是null，返回"null"
- 如果值是undefined，返回"undefined"

```js
console.log("null", String(null)); // null
console.log("undefined", String(undefined)); // undefined
console.log("boolean", String(true)); // true
console.log("number", String(.5)); // 0.5
```



###### 用加号操作符给一个值加上一个空字符串

> 用加号操作符给一个值加上一个空字符串""也可以将其转换为字符串



##### 模板字面量

- ECMAScript 6新增了使用模板字面量定义字符串的能力
- 与使用单引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符串
- 由于模板字面量会保持反引号内部的空格，因此在使用时要格外注意。格式正确的模板字符串看起来可能会缩进不当

```js
let multiLineString = "首行\n第二行";
console.log(multiLineString);

let multiLineTemplateLiteral = `首行
第二行`;
console.log(multiLineTemplateLiteral);
```



##### 字符串插值

> 模板字面量最常用的一个特性是支持字符串插值，也就是可以在一个连续定义中插入一个或多个值

```js
let num = 5;
let str = "×";
console.log("普通拼接：", num + str + num + " = " + (num * num));
console.log("字符串插值：", `${num + str + num} = ${num * num}`);
```

- 所有插入的值都会使用toString()强制转型为字符串，而且任何JavaScript表达式都可以用于插值
- 将表达式转换为字符串时会调用toString()
- 在插值表达式中可以调用函数和方法
- 模板也可以插入自己之前的值

```js
// 将表达式转换为字符串时会调用toString()
let foo = {toString: ()=> "World!"};
console.log(`Hello, ${foo}`); // Hello, World!

// 调用函数和方法
function capitalize(word) {
    return `${word[0].toUpperCase() + word.slice(1)}`;
}

console.log("capitalize", `${capitalize("hello")}, ${capitalize("world")} !`); // Hello, World !

// 插入自己之前的值
let value = "";
function append() {
    value = `${value}abc`;
    console.log(value);
}

append(); // abc
append(); // abcabc
append(); // abcabcabc
```

