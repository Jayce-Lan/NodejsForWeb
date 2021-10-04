# JavaScript

[TOC]

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



##### 模板字面量标签函数

> 模板字面量也支持定义标签函数（tag function），而通过标签函数可以自定义插值行为。标签函数会接收被插值记号分隔后的模板和对每个表达式求值的结果

```js
function simpleTag(string, num1, num2, sum) {
    console.log("string", string); //  [ '', ' + ', ' = ', '' ]
    console.log("num1", num1); // 5
    console.log("num2", num2); // 6
    console.log("sum", sum); // 11
    return "foobar";
}

let a = 5, b = 6;
let targetValue = simpleTag`${a} + ${b} = ${a + b}`;
console.log(targetValue);
```

因为表达式参数的数量是可变的，所以通常应该使用剩余操作符（rest operator）将它们收集到一个数组中

```js
function simpleTag(string, ...nums) {
    console.log("string", string);
    for (const num of nums) {
        console.log("nums", num);
    }
    return "foobar";
}

let a = 5, b = 6;
let targetValue = simpleTag`${a} + ${b} = ${a + b}`;
console.log(targetValue);
```

对于有n个插值的模板字面量，传给标签函数的表达式参数的个数始终是n，而传给标签函数的第一个参数所包含的字符串个数则始终是n+1。因此，如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以这样做

```js
function simpleTag(string, ...nums) {
    return string[0] + nums.map((item, index) => `${item} ${string[index + 1]}`).join("");
}
let a = 5, b = 6;
let targetValue = simpleTag`${a} + ${b} = ${a + b}`;
console.log(targetValue); // 5  + 6  = 11
```



##### 原始字符串（String.raw）

> 使用模板字面量也可以直接获取原始的模板字面量内容（如换行符或Unicode字符），而不是被转换后的字符表示

- 可以使用默认的*String.raw*标签函数
- 也可以通过标签函数的第一个参数，即字符串数组的*.raw*属性取得每个字符串的原始内容

###### *String.raw()*

```js
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`); // \u00A9

console.log(`第一行\n第二行`);
console.log(String.raw`第一行\n第二行`);
```

###### *.raw*

```js
function printRaw(strings) {
    console.log("未处理：")
    for (const string of strings) {
        console.log(string);
    }

    console.log("处理后");
    for (const rawString of strings.raw) {
        console.log(rawString);
    }
}

printRaw`\n${"and"}\u00A9`;
```



#### Symbol类型

> Symbol（符号）是ECMAScript 6新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险

##### 符号的基本用法

符号需要使用Symbol()函数初始化。因为符号本身是原始类型，所以typeof操作符对符号返回symbol

```js
let mySymbol = Symbol();
console.log(typeof mySymbol); // symbol
```



- 调用Symbol()函数时，也可以传入一个字符串参数作为对符号的描述（description），将来可以通过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关
- 符号没有字面量语法，这也是它们发挥作用的关键。按照规范，你只要创建Symbol()实例并将其用作对象的新属性，就可以保证它不会覆盖已有的对象属性，无论是符号属性还是字符串属性
- 最重要的是，Symbol()函数不能与new关键字一起作为构造函数使用。这样做是为了避免创建符号包装对象，像使用Boolean、String或Number那样，它们都支持构造函数且可用于初始化包含原始值的包装对象
- 如果确实想使用符号包装对象，可以借用Object()函数

```js
let symbol1 = Symbol();
let symbol2 = Symbol();
let fooSymbol1 = Symbol("foo");
let fooSymbol2 = Symbol("foo");
console.log(symbol1 == symbol2); // false
console.log(fooSymbol1 == fooSymbol2); // false
console.log(symbol1); // Symbol()
console.log(fooSymbol1); // Symbol(foo)

// let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
let mySymbol = Symbol();
let myWrappedSymbol = new Object(mySymbol);
console.log(myWrappedSymbol); // [Symbol: Symbol()]
console.log(typeof myWrappedSymbol); // object
```



##### 使用全局符号注册表（Symbol.for()）

- 如果运行时的不同部分需要共享和重用符号实例，那么可以用一个字符串作为键，在全局符号注册表中创建并重用符号
- Symbol.for()对每个字符串键都执行幂等操作
- 第一次使用某个字符串调用时，它会检查全局运行时注册表，发现不存在对应的符号，于是就会生成一个新符号实例并添加到注册表中
- 后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例
- 即使采用相同的符号描述，在全局注册表中定义的符号跟使用Symbol()定义的符号也并不等同
- 全局注册表中的符号必须使用字符串键来创建，因此作为参数传给Symbol.for()的任何值都会被转换为字符串。此外，注册表中使用的键同时也会被用作符号描述
- 还可以使用Symbol.keyFor()来查询全局注册表，这个方法接收符号，返回该全局符号对应的字符串键
  - 如果查询的不是全局符号，则返回undefined
  - 如果传给Symbol.keyFor()的不是符号，则该方法抛出TypeError

```js
let fooSymbol = Symbol.for("foo"); // 创建新符号
let otherFooSymbol = Symbol.for("foo"); // 重用已有符号
let newFooSymbol = Symbol("foo");
console.log(fooSymbol); // Symbol(foo)
console.log(typeof  otherFooSymbol); // symbol
console.log(fooSymbol === otherFooSymbol); // true
console.log(newFooSymbol === otherFooSymbol); // false

let unSymbol = Symbol.for();
console.log(unSymbol); // Symbol(undefined)

console.log(Symbol.keyFor(fooSymbol)); // foo
console.log(Symbol.keyFor(123)); // TypeError: 123 is not a symbol
```



##### 使用符号作为属性

> 凡是可以使用字符串或数值作为属性的地方，都可以使用符号。这就包括了对象字面量属性和Object.defineProperty()/Object.defineProperties()定义的属性。对象字面量只能在计算属性语法中使用符号作为属性

- 类似于Object.getOwnPropertyNames()返回对象实例的常规属性数组
- Object.getOwnProperty-Symbols()返回对象实例的符号属性数组
- 这两个方法的返回值彼此互斥
- Object.getOwnProperty-Descriptors()会返回同时包含常规和符号属性描述符的对象
- Reflect.ownKeys()会返回两种类型的键

```js
let s1 = Symbol("foo"),
    s2 = Symbol("bar"),
    s3 = Symbol("baz"),
    s4 = Symbol("qux");

let obj = {
    s1: "foo value"
}
// 类似于 obj.s1 = "foo value";
console.log(obj); // { Symbol(foo): 'foo value' }
Object.defineProperty(obj, s2, {
    value: "bar value"
});

console.log(obj);

console.log(Reflect.ownKeys(obj)); // [ 's1', Symbol(bar) ] 由于写入方式不同，因此返回的键不同
console.log(Object.getOwnPropertyNames(obj)); // [ 's1' ] 返回对象实例的常规属性数组
console.log(Object.getOwnPropertySymbols(obj)); // Symbol(bar) 返回对象实例的符号属性数组
```



##### *Symbol.asyncIterator*

> 根据ECMAScript规范，这个符号作为一个属性表示“一个方法，该方法返回对象默认的AsyncIterator。由for-await-of语句使用”。换句话说，这个符号表示实现异步迭代器API的函数

- for-await-of循环会利用这个函数执行异步迭代操作
- 循环时，它们会调用以Symbol.asyncIterator为键的函数，并期望这个函数会返回一个实现迭代器API的对象
- 很多时候，返回的对象是实现该API的AsyncGenerator

```js
class Emitter {
    constructor(max) {
        this.max = max
        this.asyncIdx = 0;
    }

    async * [Symbol.asyncIterator] () {
        while (this.asyncIdx < this.max) {
            yield new Promise(resolve => resolve(this.asyncIdx++)); // yield 关键字用来暂停和恢复一个生成器函数
        }
    }
}

async function asyncCount() {
    let emitter = new Emitter(5);
    for await (const x of emitter) {
        console.log(x);
    }
}

asyncCount();
```



##### *Symbol.hasInstance*

> 根据ECMAScript规范，这个符号作为一个属性表示“一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例

由instanceof操作符使用”，instanceof操作符可以用来确定一个对象实例的原型链上是否有原型

```js
function Foo() {}
let a = new Foo();
console.log(a instanceof Foo); // true

class Bar {}
let b = new Bar();
console.log(b instanceof Bar); // true
```

在ES6中，instanceof操作符会使用Symbol.hasInstance函数来确定关系。以Symbol. hasInstance为键的函数会执行同样的操作，只是操作数对调了一下

```js
function Foo() {}
let a = new Foo();
console.log(Foo [Symbol.hasInstance](a)); // true

class Bar {}
let b = new Bar();
console.log(Bar [Symbol.hasInstance](b)); // true
```

这个属性定义在Function的原型上，因此默认在所有函数和类上都可以调用。由于instanceof操作符会在原型链上寻找这个属性定义，就跟在原型链上寻找其他属性一样，因此可以在继承的类上通过静态方法重新定义这个函数

```js
class Bar {}

class Baz extends Bar{
    static [Symbol.hasInstance]() {
        return false;
    }
}

let baz = new Baz();

console.log(Baz [Symbol.hasInstance](baz)); // false
console.log(Bar [Symbol.hasInstance](baz)); // true
```



#### Object类型

> ECMAScript中的对象其实就是一组数据和功能的集合。对象通过new操作符后跟对象类型的名称来创建。开发者可以通过创建Object类型的实例来创建自己的对象，然后再给对象添加属性和方法

```js
let obj1 = new Object();
let obj2 = new Object; // 合法但是不推荐
```

##### Object的属性和方法

- *constructor*：用于创建当前对象的函数
- *hasOwnProperty(propertyName)*： 于判断当前对象实例（不是原型）上是否存在给定的属性；要检查的属性名必须是字符串（如o.hasOwnProperty("name")）或符号
- *isPrototypeOf(object)*：用于判断当前对象是否为另一个对象的原型
- *propertyIsEnumerable(propertyName)*：用于判断给定的属性是否可以使用for-in语句枚举；与hasOwnProperty()一样，属性名必须是字符串
- *toLocaleString()*：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境
- *toString()*：返回对象的字符串表示
- *valueOf()*：返回对象对应的字符串、数值或布尔值表示。通常与toString()的返回值相同

因为在ECMAScript中**Object是所有对象的基类，所以任何对象都有这些属性和方法**



### 操作符

#### 指数操作符（**）

> ECMAScript 7新增了指数操作符，Math.pow()现在有了自己的操作符＊＊，结果是一样的

```js
let num = Math.pow(3, 2);
console.log(num); // 9
num = 3 ** 2;
console.log(num); // 9
num = 16 ** .5;
console.log(num); // 4
```

不仅如此，指数操作符也有自己的指数赋值操作符＊＊=，该操作符执行指数运算和结果的赋值操作

```js
let num = 16;
num **= .5;
console.log(num); // 4
```



#### 加性操作符

> 加性操作符，即加法和减法操作符，一般都是编程语言中最简单的操作符。不过，在ECMAScript中，这两个操作符拥有一些特殊的行为

##### 加法操作符

- 如果有任一操作数是NaN，则返回NaN（常用于字符串拼接）
- 如果是Infinity加Infinity，则返回Infinity
- 如果是-Infinity加-Infinity，则返回-Infinity
- 如果是Infinity加-Infinity，则返回NaN
- 如果是+0加+0，则返回+0
- 如果是-0加+0，则返回+0
- 如果是-0加-0，则返回-0
- 如果有一个操作数是字符串，则要应用如下规则
  - 如果两个操作数都是字符串，则将第二个字符串拼接到第一个字符串后面
  - 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串拼接在一起
- 对于undefined和null，则调用String()函数，分别获取"undefined"和"null"

```js
console.log("null", 5 + null); // 5 null 会被转为0
console.log("undefined", 5 + undefined); // NaN
console.log("true", 5 + true); // 6
console.log("false", 5 + false); // 5
console.log("string", 5 + "5"); // "55"
```



##### 减法操作符

- 如果两个操作数都是数值，则执行数学减法运算并返回结果
- 如果有任一操作数是NaN，则返回NaN
- 如果是Infinity减Infinity，则返回NaN
- 如果是-Infinity减-Infinity，则返回NaN
- 如果是Infinity减-Infinity，则返回Infinity
- 如果是-Infinity减Infinity，则返回-Infinity
- 如果是+0减+0，则返回+0
- 如果是+0减-0，则返回-0
- 如果是-0减-0，则返回+0
- 如果有任一操作数是字符串、布尔值、null或undefined，则先在后台使用Number()将其转换为数值，然后再根据前面的规则执行数学运算。如果转换结果是NaN，则减法计算的结果是NaN
- 如果有任一操作数是对象，则调用其valueOf()方法取得表示它的数值
  - 如果该值是NaN，则减法计算的结果是NaN
  - 如果对象没有valueOf()方法，则调用其toString()方法，然后再将得到的字符串转换为数值

#### 关系操作符

> 在大多数比较的场景中，如果一个值不小于另一个值，那就一定大于或等于它。但在比较NaN时，无论是小于还是大于等于，比较的结果都会返回false

```js
console.log("a" > 3); // false
console.log("a" < 3); // false
console.log(NaN > 3); // false
console.log(NaN < 3); // false
```



#### 相等操作符

> 判断两个变量是否相等是编程中最重要的操作之一。在比较字符串、数值和布尔值是否相等时，过程都很直观。但是在比较两个对象是否相等时，情形就比较复杂了。ECMAScript中的相等和不相等操作符，原本在比较之前会执行类型转换，但很快就有人质疑这种转换是否应该发生。最终，ECMAScript提供了两组操作符。第一组是等于和不等于，它们在比较之前执行转换。第二组是全等和不全等，它们在比较之前不执行转换

##### 等于和不等于（== 和 !=）

- 如果任一操作数是布尔值，则将其转换为数值再比较是否相等。false转换为0, true转换为1
- 如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等
- 如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法取得其原始值，再根据前面的规则进行比较
- null和undefined相等
- null和undefined不能转换为其他类型的值再进行比较
- 如果有任一操作数是NaN，则相等操作符返回false，不相等操作符返回true。即使两个操作数都是NaN，相等操作符也返回false，因为按照规则，NaN不等于NaN
- 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回true。否则，两者不相等

```js
let obj = {
    valueOf() {
        return 0;
    }
}

let object = {
    name: "Jayce",
    job: "coder"
}

let obj1 = object,
    obj2 = object;

console.log(null == undefined); // true
console.log(obj == 0); // true
console.log(NaN == NaN); // false
console.log(obj1 == obj2); // true
console.log(55 == "55"); // true
```



##### 全等和不全等（=== 和 !==）

> 全等和不全等操作符与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数

```js
console.log(null === undefined); // false
console.log(55 === "55"); // false
```



#### 逗号操作符

> 在一条语句中同时声明多个变量是逗号操作符最常用的场景。不过，也可以使用逗号操作符来辅助赋值。在赋值时使用逗号操作符分隔值，最终会返回表达式中最后一个值

```js
let num = (1, 2, 3, 4, 5, 6);
console.log(num); // 6
```

num将被赋值为6，因为6是表达式中最后一项。逗号操作符的这种使用场景并不多见，但这种行为的确存在



### 语句

> ECMA-262描述了一些语句（也称为流控制语句），而ECMAScript中的大部分语法都体现在语句中。语句通常使用一或多个关键字完成既定的任务。语句可以简单，也可以复杂。简单的如告诉函数退出，复杂的如列出一堆要重复执行的指令

#### *for-in* 语句（取键）

> for-in语句是一种严格的迭代语句，用于枚举对象中的非符号键属性

```js
for (const propName in window) {
    console.log(propName);
}
```

这个例子使用for-in循环显示了BOM对象window的所有属性。每次执行循环，都会给变量propName赋予一个window对象的属性作为值，直到window的所有属性都被枚举一遍。与for循环一样，这里控制语句中的const也不是必需的。但为了确保这个局部变量不被修改，推荐使用const

- ECMAScript中对象的属性是无序的，因此for-in语句不能保证返回对象属性的顺序。换句话说，所有可枚举的属性都会返回一次，但返回的顺序可能会因浏览器而异
- 如果for-in循环要迭代的变量是null或undefined，则不执行循环体



#### *for-of* 语句（取值）

> for-of语句是一种严格的迭代语句，用于遍历可迭代对象的元素

for-of循环会按照可迭代对象的next()方法产生值的顺序迭代元素

```js
let obj = {
    name: "Tom",
    age: 25,
    job: "coder",
    sex: "man"
}

let arr = [1, 2, 3, 4, 5, 6];

// for in 遍历对象的键
for (const key in obj) {
    console.log("for-in:", key);
}

for (const num in arr) {
    console.log("for-in: ", num); // 打印数组下标
}

// for of 遍历数组的元素
for (const item of arr) {
    console.log("for-of: ", item);
}
```



##### 关于对象的遍历

```js
let obj2 = [
        {
            name: "Tom",
            age: 25,
            job: "coder",
            sex: "man"
        },
        {
            name: "Tom",
            age: 24,
            job: "coder",
            sex: "man"
        },
        {
            name: "Tom",
            age: 23,
            job: "coder",
            sex: "man"
        },
        {
            name: "Tom",
            age: 22,
            job: "coder",
            sex: "man"
        }
    ]
for (const o of obj2) {
    console.log(typeof o);
    console.log(o);
}

// 遍历对象
for (const o of obj2) {
    for (const propName in o) {
        console.log(propName + ":" + o[propName]);
    }
}
```



#### 标签语句

在这个例子中，start是一个标签，可以在后面通过break或continue语句引用。标签语句的典型应用场景是嵌套循环

```js
start: for (let i = 0; i < 10; i++) {
    console.log(i);
}
```



#### break和continue语句

> break和continue语句为执行循环代码提供了更严格的控制手段

- break语句用于立即退出循环，**强制执行循环后的下一条语句**
- continue语句也用于立即退出循环，但会**再次从循环顶部开始执行**

```js
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue; // 跳过3
    }

    if (i == 7) {
        break; // 当i为7时，结束循环
    }
    console.log(i);
}

first: for (let i = 0; i < 10; i++) {
    second: for (let j = 0; j < 10; j ++) {
        if (i == 3) {
            continue second; // 跳出小循环
        }

        if (i == 4 && j == 4) {
            break first; // 结束整个大循环
        }
        console.log(j);
    }
    console.log("=================", i);
}
```



#### *switch* 语句

> switch语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类型（比如，字符串"10"不等于数值10）

```js
let num = 10;
switch (num) {
    case "10":
        console.log("10 == \"10\"");
        break;
    /*case 10:
        console.log("10 == 10");
        break;*/
    default:
        console.log("other");
} // other
```



## 变量、作用域与内存

### 原始值和引用值

> ECMAScript变量可以包含两种不同类型的数据：原始值和引用值。原始值（primitive value）就是最简单的数据，引用值（reference value）则是由多个值构成的对象
>
> 换句话说，原始值就是常量赋值；引用值就是对象

#### 动态属性

- 原始值和引用值的定义方式很类似，都是创建一个变量，然后给它赋一个值
- 不过，在变量保存了这个值之后，可以对这个值做什么，则大有不同
- 对于引用值而言，可以随时添加、修改和删除其属性和方法
- 原始值不能有属性，尽管尝试给原始值添加属性不会报错
- 原始类型的初始化可以只使用原始字面量形式
- 如果使用的是new关键字，则JavaScript会创建一个Object类型的实例，但其行为类似原始值

```js
// 引用值添加属性
{
    let person = new Object();
    person.name = "Jayce";
    console.log(person); // { name: 'Jayce' }
    console.log(person.name); // Jayce
}

// 原始值不能添加属性
{
    let person = "Jayce";
    person.age = 26;
    console.log(person); // Jayce
    console.log(person.age); // undefined
}

// 使用 new 关键字创建对象
{
    let name1 = "Jayce";
    let name2 = new String("Jayce");
    name1.age = 26;
    name2.age = 26;

    console.log(name1); // Jayce
    console.log(name2); // [String: 'Jayce'] { age: 26 }
    console.log(name2.toString()); // Jayce

    console.log(name1.age); // undefined
    console.log(name2.age); // 26
}
```



#### 复制值

- 除了存储方式不同，原始值和引用值在通过变量复制时也有所不同
- 在通过变量把一个原始值赋值到另一个变量时，原始值会被复制到新变量的位置
- 在把引用值从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置
- 区别在于，这里复制的值实际上是一个指针，它指向存储在堆内存中的对象
- 操作完成后，两个变量实际上指向同一个对象，因此一个对象上面的变化会在另一个对象上反映出来

复制变量

```js
let num1 = 5;
let num2 = num1;
num2 = 6;

console.log("num1", num1); // 5
console.log("num2", num2); // 6
```

复制前

|      |                 |
| ---- | --------------- |
| num1 | 5（Number类型） |

复制后

|      |                 |
| ---- | --------------- |
| num2 | 5（Number类型） |
| num1 | 5（Number类型） |

复制对象

```js
// 对象的浅拷贝
/*
在这个例子中，变量obj1保存了一个新对象的实例。然后，这个值被复制到obj2，此时两个变量都指向了同一个对象。在给obj1创建属性name并赋值后，通过obj2也可以访问这个属性，因为它们都指向同一个对象
*/
{
    let obj1 = new Object();
    let obj2 = obj1;
    obj2.name = "Jayce";

    console.log("obj1", obj1); // { name: 'Jayce' }
    console.log("obj2", obj2); // { name: 'Jayce' }
}

// 对象的深拷贝
{
    let obj1 = new Object();
    let obj2 = JSON.parse(JSON.stringify(obj1));

    obj2.name = "Jayce";

    console.log("obj1", obj1); // {}
    console.log("obj2", obj2); // { name: 'Jayce' }

    console.log("obj1", typeof obj1);
    console.log("obj2", typeof obj2);
}
```



#### 传递参数

> ECMAScript中所有函数的参数都是按值传递的。这意味着函数外的值会被复制到函数内部的参数中，就像从一个变量复制到另一个变量一样。如果是原始值，那么就跟原始值变量的复制一样，如果是引用值，那么就跟引用值变量的复制一样

```js
function addNum(num) {
    num += 10;
    return num;
}

let num = 20;
let addNumValue = addNum(num);
console.log("num", num); // 20
console.log("addNumValue", addNumValue); // 30

function setName(obj, str) {
    obj.name = str
}

let obj = new Object();
console.log("obj", obj); // {}
setName(obj, "Jayce");
console.log("obj", obj); // { name: 'Jayce' }
```

将obj重新定义为一个有着不同name的新对象。当obj传入setName()时，其name属性被设置为"Jayce"。然后变量obj被设置为一个新对象且name属性被设置为"Tome"。如果obj是按引用传递的，那么obj应该自动将指针改为指向name为"Tome"的对象。可是，当我们再次访问obj.name时，它的值是"Jayce"，这表明函数中参数的值改变之后，原始的引用仍然没变。当obj在函数内部被重写时，它变成了一个指向本地对象的指针。而那个本地对象在函数执行结束时就被销毁了

```js
function setName(obj) {
    obj.name = "Jayce";
    obj = new Object();
    obj = "Tome";
}

let obj = new Object();
console.log("obj", obj); // {}
setName(obj);
console.log("obj", obj); // { name: 'Jayce' }
```



#### 确定类型

##### *typeof*

- typeof操作符最适合用来判断一个变量是否为原始类型
- 它是判断一个变量是否为字符串、数值、布尔值或undefined的最好方式
- 如果值是对象或null，那么typeof返回"object"

```js
let str = "Hello";
let _number = 22;
let _boolean = true;
let booleanObj = new Boolean();
let _undefined;
let _null = null;
let obj = new Object();

console.log("str", typeof str); // str
console.log("number", typeof _number); // number
console.log("boolean", typeof _boolean); // boolean
console.log("booleanObj", typeof booleanObj); // object
console.log("undefined", typeof _undefined); // undefined
console.log("null", typeof _null); // object
console.log("obj", typeof obj); // object
```



##### *instanceof*

> typeof虽然对原始值很有用，但它对引用值的用处不大。我们通常不关心一个值是不是对象，而是想知道它是什么类型的对象。为了解决这个问题，ECMAScript提供了instanceof操作符

- 如果变量是给定引用类型（由其原型链决定）的实例，则instanceof操作符返回true
- 所有引用值都是Object的实例，因此通过instanceof操作符检测任何引用值和Object构造函数都会返回true
- 类似地，如果用instanceof检测原始值，则始终会返回false，因为原始值不是对象

```js
let num = 22;
let numObj = new Number(22);

console.log("num", num instanceof Number); // false
console.log("num", num instanceof Object); // false
console.log("numObj", numObj instanceof Number); // true
console.log("numObj", numObj instanceof Object); // true
console.log(num == numObj); // true
```



### 执行上下文与作用域

#### 标识符查找

- 当在特定上下文中为读取或写入而引用一个标识符时，必须通过搜索确定这个标识符表示什么
- 搜索开始于作用域链前端，以给定的名称搜索对应的标识符
- 如果在局部上下文中找到该标识符，则搜索停止，变量确定；如果没有找到变量名，则继续沿作用域链搜索
  - 注意，作用域链中的对象也有一个原型链，因此搜索可能涉及每个对象的原型链
- 这个过程一直持续到搜索至全局上下文的变量对象
- 如果仍然没有找到标识符，则说明其未声明

在这个例子中，调用函数getColor()时会引用变量color。为确定color的值会进行两步搜索。第一步，搜索getColor()的变量对象，查找名为color的标识符。结果没找到，于是继续搜索下一个变量对象（来自全局上下文），然后就找到了名为color的标识符。因为全局变量对象上有color的定义，所以搜索结束

```js
var color = "blue";
function getColor() {
    return color;
}

console.log(getColor()); // blue
```

对这个搜索过程而言，引用局部变量会让搜索自动停止，而不继续搜索下一级变量对象。也就是说，如果局部上下文中有一个同名的标识符，那就不能在该上下文中引用父上下文中的同名标识符

```js
var color = "blue";
function getColor() {
    let color = "red";
    return color;
}

console.log(getColor()); // red
```

使用块级作用域声明并不会改变搜索流程，但可以给词法层级添加额外的层次

```js
var color = "blue";
function getColor() {
    let color = "red";
    {
        let color = "yellow";
        return color;
    }
}

console.log(getColor()); // yellow
```



### 垃圾回收

> JavaScript是使用垃圾回收的语言，也就是说执行环境负责在代码执行时管理内存

#### 标记清理

> JavaScript最常用的垃圾回收策略是标记清理（mark-and-sweep）

- 当变量进入上下文，比如在函数内部声明一个变量时，这个变量会被加上存在于上下文中的标记
- 而在上下文中的变量，逻辑上讲，永远不应该释放它们的内存，因为只要上下文中的代码在运行，就有可能用到它们
- 当变量离开上下文时，也会被加上离开上下文的标记
- 到了2008年，IE、Firefox、Opera、Chrome和Safari都在自己的JavaScript实现中采用标记清理（或其变体），只是在运行垃圾回收的频率上有所差异



#### 引用计数

> 另一种没那么常用的垃圾回收策略是引用计数（reference counting）

- 其思路是对每个值都记录它被引用的次数。声明变量并给它赋一个引用值时，这个值的引用数为1
- 如果同一个值又被赋给另一个变量，那么引用数加1
- 类似地，如果保存对该值引用的变量被其他值给覆盖了，那么引用数减1
- 当一个值的引用数为0时，就说明没办法再访问到这个值了，因此可以安全地收回其内存了
- 垃圾回收程序下次运行的时候就会释放引用数为0的值的内存。



#### 性能

- 垃圾回收程序会周期性运行，如果内存中分配了很多变量，则可能造成性能损失，因此垃圾回收的时间调度很重要。尤其是在内存有限的移动设备上，垃圾回收有可能会明显拖慢渲染的速度和帧速率
- 开发者不知道什么时候运行时会收集垃圾，因此最好的办法是在写代码时就要做到：无论什么时候开始收集垃圾，都能让它尽快结束工作
- 现代垃圾回收程序会基于对JavaScript运行时环境的探测来决定何时运行
- 探测机制因引擎而异，但基本上都是根据已分配对象的大小和数量来判断的



#### 内存管理

##### 通过const和let声明提升性能

- ES6增加这两个关键字不仅有助于改善代码风格，而且同样有助于改进垃圾回收的过程
- 因为const和let都以块（而非函数）为作用域，所以相比于使用var，使用这两个新关键字可能会更早地让垃圾回收程序介入，尽早回收应该回收的内存
- 在块作用域比函数作用域更早终止的情况下，这就有可能发生



##### 隐藏类和删除操作

避免JavaScript的“先创建再补充”（ready-fire-aim）式的动态属性赋值，并在构造函数中一次性声明所有属性。这样，两个实例基本上就一样了（不考虑hasOwnProperty的返回值），因此可以共享一个隐藏类，从而带来潜在的性能提升

```js
function Foo(_author) {
    this.title = "一个类";
    this.author = _author;
}

let obj1 = new Foo();
let obj2 = new Foo("Jayce");

console.log("obj1", obj1); // { title: '一个类', author: undefined }
console.log("obj2", obj2); // { title: '一个类', author: 'Jayce' }
```

在代码结束后，即使两个实例使用了同一个构造函数，它们也不再共享一个隐藏类。动态删除属性与动态添加属性导致的后果一样。最佳实践是把不想要的属性设置为null。这样可以保持隐藏类不变和继续共享，同时也能达到删除引用值供垃圾回收程序回收的效果

```js
function Foo() {
    this.title = "一个类";
    this.author = "Jayce";
}

let obj1 = new Foo();
let obj2 = new Foo();

delete obj1.author;

console.log("obj1", obj1); // { title: '一个类' }
console.log("obj2", obj2); // { title: '一个类', author: 'Jayce' }
```



##### 内存泄漏

> JavaScript中的内存泄漏大部分是由不合理的引用导致的

意外声明全局变量是最常见但也最容易修复的内存泄漏问题

*此时，解释器会把变量name当作window的属性来创建（相当于window.name ='Jacye'）。可想而知，在window对象上创建的属性，只要window本身不被清理就不会消失。这个问题很容易解决，只要在变量声明前头加上var、let或const关键字即可，这样变量就会在函数执行完毕后离开作用域*

```js
function func() {
    name = "Jacye";
}
```

定时器也可能会悄悄地导致内存泄漏

*定时器的回调通过闭包引用了外部变量，只要定时器一直运行，回调函数中引用的name就会一直占用内存。垃圾回收程序当然知道这一点，因而就不会清理外部变量*

```js
let name = "Jayce";
setInterval(() => {
    console.log(name)
}, 100);
```

使用JavaScript闭包很容易在不知不觉间造成内存泄漏

*调用foo()会导致分配给name的内存被泄漏。以上代码执行后创建了一个内部闭包，只要返回的函数存在就不能清理name，因为闭包一直在引用着它。假如name的内容很大（不止是一个小字符串），那可能就是个大问题了*

```js
let foo = function () {
    let name = "Jayce";
    return function () {
        return name;
    }
}
```



##### 静态分配与对象池

> 为了提升JavaScript性能，最后要考虑的一点往往就是压榨浏览器了。此时，一个关键问题就是如何减少浏览器执行垃圾回收的次数。开发者无法直接控制什么时候开始收集垃圾，但可以间接控制触发垃圾回收的条件。理论上，如果能够合理使用分配的内存，同时避免多余的垃圾回收，那就可以保住因释放内存而损失的性能

这是一个计算二维矢量加法的函数

```js
function addVector (a, b) {
    let resultant = new Vector();
    resultant.x = a.x + b.x;
    resultant.y = a.y + b.y;
    return resultant;
}
```

调用这个函数时，会在堆上创建一个新对象，然后修改它，最后再把它返回给调用者。如果这个矢量对象的生命周期很短，那么它会很快失去所有对它的引用，成为可以被回收的值。假如这个矢量加法函数频繁被调用，那么垃圾回收调度程序会发现这里对象更替的速度很快，从而会更频繁地安排垃圾回收

该问题的解决方案是不要动态创建矢量对象，比如可以修改上面的函数，让它使用一个已有的矢量对象

```js
function addVector(a, b, resultant) {
    resultant.x = a.x + b.x;
    resultant.y = a.y + b.y;
    return resultant;
}
```

> 静态分配是优化的一种极端形式。如果你的应用程序被垃圾回收严重地拖了后腿，可以利用它提升性能。但这种情况并不多见。大多数情况下，这都属于过早优化，因此不用考虑



## 基本引用类型

> 引用值（或者对象）是某个特定引用类型的实例。在ECMAScript中，引用类型是把数据和功能组织到一起的结构，经常被人错误地称作“类”。虽然从技术上讲JavaScript是一门面向对象语言，但ECMAScript缺少传统的面向对象编程语言所具备的某些基本结构，包括类和接口。引用类型有时候也被称为对象定义，因为它们描述了自己的对象应有的属性和方法

- 对象被认为是某个特定引用类型的实例。新对象通过使用new操作符后跟一个构造函数（constructor）来创建
- 构造函数就是用来创建新对象的函数

### *Data*

> ECMAScript的Date类型参考了Java早期版本中的java.util.Date。为此，Date类型将日期保存为自协调世界时（UTC, Universal Time Coordinated）时间1970年1月1日午夜（零时）至今所经过的毫秒数。使用这种存储格式，Date类型可以精确表示1970年1月1日之前及之后285616年的日期

- 在不给Date构造函数传参数的情况下，创建的对象将保存当前日期和时间
- 要基于其他日期和时间创建日期对象，必须传入其毫秒表示（UNIX纪元1970年1月1日午夜之后的毫秒数）
- ECMAScript为此提供了两个辅助方法：Date.parse()和Date.UTC()

创建日期对象

```js
let now  = new Date();
```



#### *Data.parse()*

> Date.parse()方法接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数

- **月/日/年** 如 *"08/05/2021"*
- **月名 日, 年** 如 *"May 3, 2021"*
- **周几 月名 日 年 时:分:秒 时区** 如 *"Tue May 232019 00:00:00GMT-0700"*
- ISO 8601扩展格式 **YYYY-MM-DDTHH:mm:ss.sssZ** 如 *2021-08-05T12:00:49*（只适用于兼容ES5的实现）

```js
let _date = new Date();
console.log(_date); // 2021-08-05T04:01:56.294Z

_date = new Date(Date.parse("08/05/2021"));
console.log(_date); // 2021-08-04T16:00:00.000Z

_date = new Date(Date.parse("May 3, 2021"));
console.log(_date); // 2021-05-02T16:00:00.000Z
```



#### *Data.UTC()*

> Date.UTC()方法也返回日期的毫秒表示，但使用的是跟Date.parse()不同的信息来生成这个值

- 传给Date.UTC()的参数是年、零起点月数（1月是0,2月是1，以此类推）、日（1~31）、时（0~23）、分、秒和毫秒
- 这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为1日
- 其他参数的默认值都是0

```js
let _data = new Date(Date.UTC(2021, 8));
console.log(_data); // 2021-09-01T00:00:00.000Z

_data = new Date(Date.UTC(2021, 8, 4, 15, 1, 33));
console.log(_data); // 2021-09-04T15:01:33.000Z
```



#### *Date.now()*

> ECMAScript还提供了Date.now()方法，返回表示方法执行时日期和时间的毫秒数



#### 继承的方法

- 与其他类型一样，Date类型重写了toLocaleString()、toString()和valueOf()方法
- 但与其他类型不同，重写后这些方法的返回值不一样
- Date类型的toLocaleString()方法返回与浏览器运行的本地环境一致的日期和时间。这通常意味着格式中包含针对时间的AM（上午）或PM（下午），但不包含时区信息（具体格式可能因浏览器而不同）
- toString()方法通常返回带时区信息的日期和时间，而时间也是以24小时制（0~23）表示的

```js
let _data = new Date(2021, 7, 5); // 2021-08-04T16:00:00.000Z
console.log(_data);
```





#### 日期格式化方法

- *toDateString()* 显示日期中的周几、月、日、年（格式特定于实现）
- *toTimeString()* 显示日期中的时、分、秒和时区（格式特定于实现）
- *toLocaleDateString()* 显示日期中的周几、月、日、年（格式特定于实现和地区）
- *toLocaleTimeString()* 显示日期中的时、分、秒（格式特定于实现和地区）
- *toUTCString()* 显示完整的UTC日期（格式特定于实现）
- *toGMTString()* 这个方法跟toUTCString()是一样的，目的是为了向后兼容。不过，规范建议新代码使用toUTCString()

```js
let _data = new Date();

console.log("toDateString", _data.toDateString()); // Thu Aug 05 2021
console.log("toTimeString", _data.toTimeString()); // 17:35:47 GMT+0800 (中国标准时间)
console.log("toLocaleDateString", _data.toLocaleDateString()); // 2021/8/5
console.log("toLocaleTimeString", _data.toLocaleTimeString()); // 下午5:42:30
console.log("toLocaleString", _data.toLocaleString()); // 2021/8/5 下午5:42:54
console.log("toUTCString", _data.toUTCString()); // Thu, 05 Aug 2021 09:43:31 GMT
```



### *RegExp*（正则表达式）

> ECMAScript通过RegExp类型支持正则表达式。正则表达式使用类似Perl的简洁语法来创建

```js
let regExp = /pattern/flags;
```

这个正则表达式的pattern（模式）可以是任何简单或复杂的正则表达式，包括字符类、限定符、分组、向前查找和反向引用。每个正则表达式可以带零个或多个flags（标记），用于控制正则表达式的行为

#### 表示匹配模式的标记

- *g*：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束
- *i*：不区分大小写，表示在查找匹配时忽略pattern和字符串的大小写
- *m*：多行模式，表示查找到一行文本末尾时会继续查找
- *y*：粘附模式，表示只查找从lastIndex开始及之后的字符串
- *u*: Unicode模式，启用Unicode匹配
- *s*：dotAll模式，表示元字符．匹配任何字符（包括\n或\r）



#### 字面量形式

使用不同模式和标记可以创建出各种正则表达式

```js
// 匹配字符串的所有 “at”
let pattern1 = /at/g;
// 匹配第一个 “bat” 或 “cat” ，忽略大小写
let pattern2 = /[bc]at/i;
// 匹配所有以 “at” 结尾的三字组合，忽略大小写
let pattern3 = /.at/gi;
```

与其他语言中的正则表达式类似，所有**元字符**在模式中也必须转义

```js
( [ { \ ^ $ | } ] ) ? * + .
```

元字符在正则表达式中都有一种或多种特殊功能，所以要匹配上面这些字符本身，就必须使用反斜杠来转义

```js
// 匹配第一个 “bat” 或 “cat” ，忽略大小写
let pattern1 = /[bc]at/i;
// 匹配第一个 “[bc]at” ，忽略大小写
let pattern2 = /\[bc\]at/i;
// 匹配所有以 “at” 结尾的三字组合，忽略大小写
let pattern3 = /.at/gi;
// 匹配所有以 “.at” 结尾的三字组合，忽略大小写
let pattern4 = /\.at/gi;
```



#### *RegExp* 构造函数

> 它接收两个参数：模式字符串和（可选的）标记字符串。任何使用字面量定义的正则表达式也可以通过构造函数来创建

```js
let pattern1 = /[bc]at/i;
=>
let pattern2 = new RegExp("[bc]at", "i");
```

- 这里的pattern1和pattern2是等效的正则表达式
- RegExp构造函数的两个参数都是字符串
- 因为RegExp的模式参数是字符串，所以在某些情况下需要二次转义
  - 如\n（\转义后的字符串是\\\，在正则表达式字符串中则要写成\\\\\\\）

```js
let re3 = new RegExp("\[bc\]at", "g");
console.log(re3); // /[bc]at/g
re3 = new RegExp("\\[bc\\]at", "g");
console.log(re3); // /\[bc\]at/g
```



使用RegExp也可以基于已有的正则表达式实例，并可选择性地修改它们的标记

```js
const regExp = /cat/g;
console.log(regExp); // /cat/g
const re1 = new RegExp(regExp);
console.log(re1); // /cat/g
const re2 = new RegExp(regExp, "i");
console.log(re2); // /cat/i
```



#### *RegExp* 实例属性

每个RegExp实例都有下列属性

- global：布尔值，表示是否设置了g标记
- ignoreCase：布尔值，表示是否设置了i标记
- unicode：布尔值，表示是否设置了u标记
-  sticky：布尔值，表示是否设置了y标记
- lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从0开始
-  multiline：布尔值，表示是否设置了m标记
- dotAll：布尔值，表示是否设置了s标记
-  source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。



#### *RegExp* 实例方法

##### *exec()*

> RegExp实例的主要方法是exec()，主要用于配合捕获组使用

- 这个方法只接收一个参数，即要应用模式的字符串
- 如果找到了匹配项，则返回包含第一个匹配信息的数组；如果没找到匹配项，则返回null
- 返回的数组虽然是Array的实例，但包含两个额外的属性：index和input
  - index是字符串中匹配模式的起始位置，input是要查找的字符串
- 这个数组的第一个元素是匹配整个模式的字符串，其他元素是与表达式中的捕获组匹配的字符串
- 如果模式中没有捕获组，则数组只包含一个元素

```js
let text = "mom and dad and baby";
let regExp = /mom( and dad( and baby)?)?/gi;

let matches = regExp.exec(text);

console.log(matches.index); // 0
console.log(matches.input); // mom and dad and baby
console.log(matches[0]); // mom and dad and baby
console.log(matches[1]); //  and dad and baby
console.log(matches[2]); //  and baby
console.log(matches[3]); // undefined
```

在这个例子中，模式包含两个捕获组：最内部的匹配项" and baby"，以及外部的匹配项" and dad"或" and dad and baby"。调用exec()后找到了一个匹配项。因为整个字符串匹配模式，所以matchs数组的index属性就是0。数组的第一个元素是匹配的整个字符串，第二个元素是匹配第一个捕获组的字符串，第三个元素是匹配第二个捕获组的字符串

```js
let text = "cat, bat, sat, fat";
let regExp = /.at/y
let matches = regExp.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(regExp.lastIndex); // 3
```



##### *test()*

> 正则表达式的另一个方法是test()，接收一个字符串参数。如果输入的文本与模式匹配，则参数返回true，否则返回false。这个方法适用于只想测试模式是否匹配，而不需要实际匹配内容的情况

```js
let text = "000-00-0000";
let regExp = /\d{3}-\d{2}-\d{4}/;

if (regExp.test(text)) {
    console.log("success");
}
```



##### *toLocaleString()* 与 *toString()*

无论正则表达式是怎么创建的，继承的方法toLocaleString()和toString()都返回正则表达式的字面量表示

```js
let regExp2 = new RegExp("\\[bc\\]at", "g");
console.log("regExp", regExp.toString()); // /\d{3}-\d{2}-\d{4}/
console.log("regExp", regExp.toLocaleString()); // /\d{3}-\d{2}-\d{4}/
console.log("regExp2", regExp2.toString()); // /\[bc\]at/g
console.log("regExp2", regExp2.toLocaleString()); // /\[bc\]at/g
```



#### RegExp构造函数属性

> RegExp构造函数本身也有几个属性。（在其他语言中，这种属性被称为静态属性。）这些属性适用于作用域中的所有正则表达式，而且会根据最后执行的正则表达式操作而变化。这些属性还有一个特点，就是可以通过两种不同的方式访问它们。换句话说，每个属性都有一个全名和一个简写

| 全名         | 简写 | 说明                                      |
| ------------ | ---- | ----------------------------------------- |
| input        | $_   | 最后搜索的字符串（非标准特性）            |
| lastMatch    | $&   | 最后匹配的文本                            |
| lastParen    | $+   | 最后匹配的捕获组（非标准特性）            |
| leftContext  | $`   | input 字符串中出现在 lastMatch 前面的文本 |
| rightContext | $'   | input 字符串中出现在 lastMatch 后面的文本 |

```js
let text = "this has been a short summer";
let regExp = /(.)hort/g;

if (regExp.test(text)) {
    console.log(RegExp.input); // this has been a short summer
    console.log(RegExp.lastMatch); // short
    console.log(RegExp.leftContext); // this has been a 
    console.log(RegExp.rightContext); //  summer
    console.log(RegExp.lastParen); // s
}
```

- RegExp还有其他几个构造函数属性，可以存储最多9个捕获组的匹配项
- 这些属性通过***RegExp.$1~RegExp.$9***来访问，分别包含第1~9个捕获组的匹配项
- 在调用exec()或test()时，这些属性就会被填充



### 原始值包装类型

> 为了方便操作原始值，ECMAScript提供了3种特殊的引用类型：Boolean、Number和String
>
> 虽然不推荐显式创建原始值包装类型的实例，但它们对于操作原始值的功能是很重要的。每个原始值包装类型都有相应的一套方法来方便数据操作

#### *Boolean*

> Boolean是对应布尔值的引用类型。要创建一个Boolean对象，就使用Boolean构造函数并传入true或false
>

```js
let booleanObj = new Boolean(true);
```

- Boolean的实例会重写valueOf()方法，返回一个原始值true或false
- toString()方法被调用时也会被覆盖，返回字符串"true"或"false"
- 不过，Boolean对象在ECMAScript中用得很少
- 不仅如此，它们还容易引起误会，尤其是在布尔表达式中使用Boolean对象时

在这段代码中，我们创建一个值为false的Boolean对象。然后，在一个布尔表达式中通过&&操作将这个对象与一个原始值true组合起来。在布尔算术中，false &&true等于false。可是，这个表达式是对falseObject对象而不是对它表示的值（false）求值。所有对象在布尔表达式中都会自动转换为true，因此falseObject在这个表达式里实际上表示一个true值。那么true && true当然是true

```js
let falseObj = new Boolean(false);
console.log("falseObj", falseObj && true); // true
console.log("falseObj", typeof falseObj); // object
let falseValue = false;
console.log("falseValue", falseValue && true); // false
console.log("falseValue", typeof falseValue); // boolean
```



#### *Number*

> Number是对应数值的引用类型。要创建一个Number对象，就使用Number构造函数并传入一个数值s

- 与Boolean类型一样，Number类型重写了valueOf()、toLocaleString()和toString()方法
- valueOf()方法返回Number对象表示的原始数值，另外两个方法返回数值字符串
- toString()方法可选地接收一个表示基数的参数，并返回相应基数形式的数值字符串

```js
let num = 10;
console.log("toString()", num.toString()); // 10
console.log("toString(2)", num.toString(2)); // 1010
console.log("toString(8)", num.toString(8)); // 12
console.log("toString(10)", num.toString(10)); // 10
console.log("toString(16)", num.toString(16)); // a
```



除了继承的方法，Number类型还提供了几个用于将数值格式化为字符串的方法

##### *toFixed()*

> toFixed()方法返回包含指定小数点位数的数值字符串，原理是四舍五入

- toFixed()自动舍入的特点可以用于处理货币
- 不过要注意的是，多个浮点数值的数学计算不一定得到精确的结果
  - 比如，0.1 + 0.2 = 0.30000000000000004

```js
const PI = 3.141592653;
console.log(PI.toFixed()); // 3
console.log(PI.toFixed(2)); // 3.14
console.log(PI.toFixed(3)); // 3.142
```



##### *toExponential()*

> 另一个用于格式化数值的方法是toExponential()，返回以科学记数法（也称为指数记数法）表示的数值字符串。与toFixed()一样，toExponential()也接收一个参数，表示结果中小数的位数

```js
const NUM = 10;
console.log("toExponential()", NUM.toExponential()); // 1e+1
console.log("toExponential(1)", NUM.toExponential(1)); // 1.0e+1
```



##### *toPrecision()*

> toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式。这个方法接收一个参数，表示结果中数字的总位数（不包含指数）

```js
const NUM = 99;
// 首先要用1位数字表示数值99，得到"1e+2"，也就是100。
// 因为99不能只用1位数字来精确表示，所以这个方法就将它舍入为100，这样就可以只用1位数字（及其科学记数法形式）来表示了
console.log("toPrecision(1)", NUM.toPrecision(1)); // 1e+2
console.log("toPrecision(2)", NUM.toPrecision(2)); // 99
console.log("toPrecision(3)", NUM.toPrecision(3)); // 99.0
```



- 与Boolean对象类似，Number对象也为数值提供了重要能力
- 但是，考虑到两者存在同样的潜在问题，因此并不建议直接实例化Number对象
- 在处理原始数值和引用数值时，typeof和instacnceof操作符会返回不同的结果

```js
let numObj = new Number(10);
let numValue = 10;
console.log("numObj", typeof numObj); // object
console.log("numValue", typeof numValue); // number
console.log("numObj", numObj instanceof Number); // true
console.log("numValue", numValue instanceof Number); // false
```



##### *Number.isInteger()* 方法与安全整数

###### *Number.isInteger()*

> ES6新增了Number.isInteger()方法，用于辨别一个数值是否保存为整数。有时候，小数位的0可能会让人误以为数值是一个浮点值

```js
console.log(Number.isInteger(new Number(10))); // false
console.log(Number.isInteger(new Number(10.0))); // false
console.log(Number.isInteger(new Number(10.01))); // false
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(1.01)); // false
console.log(Number.isInteger(Number("1"))); // true
console.log(Number.isInteger(Number("1.0"))); // true
console.log(Number.isInteger(Number("1.01"))); // false
```



###### 安全整数（*Number.isSafeInteger()*）

> IEEE 754数值格式有一个特殊的数值范围，在这个范围内二进制值可以表示一个整数值

- 这个数值范围从Number.MIN_SAFE_INTEGER（-253+ 1）到Number.MAX_SAFE_INTEGER（253-1）
- 对超出这个范围的数值，即使尝试保存为整数，IEEE 754编码格式也意味着二进制值可能会表示一个完全不同的数值
- 为了鉴别整数是否在这个范围内，可以使用Number.isSafeInteger()方法

```js
console.log("isSafeInteger", Number.isSafeInteger(-1 * (2 ** 53))); // fals
console.log("isSafeInteger", Number.isSafeInteger(-1 * (2 ** 53) + 1)); // true
console.log("isSafeInteger", Number.isSafeInteger(2 ** 53)); // false
console.log("isSafeInteger", Number.isSafeInteger(2 ** 53 - 1)); // true
```



#### *String*

> String是对应字符串的引用类型。要创建一个String对象，使用String构造函数并传入一个数值

```js
let stringObj = new String("HelloWorld!");
```

- String对象的方法可以在所有字符串原始值上调用
- 3个继承的方法valueOf()、toLocaleString()和toString()都返回对象的原始字符串值
- 每个String对象都有一个length属性，表示字符串中字符的数量



*String* 类型提供了很多方法来解析和操作字符串

##### *JavaScript* 字符

> JavaScript字符串使用了两种Unicode编码混合的策略：UCS-2和UTF-16。对于可以采用16位编码的字符（U+0000~U+FFFF），这两种编码实际上是一样的



###### *length*

> JavaScript字符串由16位码元（code unit）组成。对多数字符来说，每16位码元对应一个字符。换句话说，字符串的length属性表示字符串包含多少16位码元

```js
let msg = "Hello World!";
console.log("length", msg.length); // 12 包含了空格
msg = `
`;
console.log("length", msg.length); // 1 回车
msg = '    '
console.log("length", msg.length); // 4 tab(设置为4)
```



###### *charAt()*

> charAt()方法返回给定索引位置的字符，由传给方法的整数参数指定。具体来说，这个方法查找指定索引位置的16位码元，并返回该码元对应的字符

```js
let msg = "Hello World!";
console.log("charAt", msg.charAt(1)); // e
```



###### *charCodeAt()*

>使用charCodeAt()方法可以查看指定码元的字符编码。这个方法返回指定索引位置的码元值，索引以整数指定

```js
let msg = "Hello World!";
console.log("charCodeAt", msg.charCodeAt(2)); // 108
console.log("十进制和十六进制对比", 99 === 0x63); // true
```



###### *String.fromCharCode()*

> String.fromCharCode()方法用于根据给定的UTF-16码元创建字符串中的字符。这个方法可以接受任意多个数值，并返回将所有数值对应的字符拼接起来的字符串

```js
console.log("fromCharCode", String.fromCharCode(189, 43, 190, 61)); // ½+¾=
console.log("fromCharCode", String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // abcde
console.log("fromCharCode", String.fromCharCode(97, 98, 99, 100, 101)); // abcde
```

- 对于U+0000~U+FFFF范围内的字符，length、charAt()、charCodeAt()和fromCharCode()返回的结果都跟预期是一样的
- 这是因为在这个范围内，每个字符都是用16位表示的，而这几个方法也都基于16位码元完成操作
- 只要字符编码大小与码元大小一一对应，这些方法就能如期工作
- 这个对应关系在扩展到Unicode增补字符平面时就不成立了
- 16位只能唯一表示65536个字符。这对于大多数语言字符集是足够了，在Unicode中称为基本多语言平面（BMP）
- 为了表示更多的字符，Unicode采用了一个策略，即每个字符使用另外16位去选择一个增补平面。这种每个字符使用两个16位码元的策略称为代理对



###### *codePointAt()*

- 为正确解析既包含单码元字符又包含代理对字符的字符串，**可以使用codePointAt()来代替charCodeAt()**
- 跟使用charCodeAt()时类似，codePointAt()接收16位码元的索引并返回该索引位置上的码点（code point）。码点是Unicode中一个字符的完整标识
- 与charCodeAt()有对应的codePointAt()一样，fromCharCode()也有一个对应的fromCodePoint()。这个方法接收任意数量的码点，返回对应字符拼接起来的字符串



##### *normalize()*方法

> 某些Unicode字符可以有多种编码方式。有的字符既可以通过一个BMP字符表示，也可以通过一个代理对表示

- 为解决这个问题，Unicode提供了4种规范化形式，可以将类似上面的字符规范化为一致的格式，无论底层字符的代码是什么
- 这4种规范化形式是：
  - NFD（Normalization Form D）
  - NFC（Normalization Form C）
  - NFKD（Normalization Form KD）
  - NFKC（Normalization Form KC）
- 可以使用normalize()方法对字符串应用上述规范化形式，使用时需要传入表示哪种形式的字符串："NFD"、"NFC"、"NFKD"或"NFKC"



##### 字符串操作方法

###### *concat()* 【尽量避免使用】

> 用于将一个或多个字符串拼接成一个**新字符串**（强烈建议使用赋值操作符（`+`, `+=`）代替 `concat` 方法）

```js
let str = "Hello";
let newStr = str.concat("World", "!")
console.log(str); // Hello
console.log(newStr); // HelloWorld!
```



ECMAScript提供了3个从字符串中提取子字符串的方法

- slice()
- substr()
- substring()



###### *slice()*

> 提取某个字符串的一部分，并返回一个新的字符串，且**不会改动原字符串**

```js
let str = "Hello World!";
console.log(str.slice(3)); // lo World!
console.log(str.slice(0, 3)); // Hel

console.log(str.slice(-3)); // ld!
console.log(str.slice(-5, -3)); // or
console.log(str.slice(4, -1)); // o World
```

隐藏手机号

```js
str = "13788996600";
console.log(str.slice(0, 3) + "****" + str.slice(-4)); // 137****6600
```



###### *substr()* 【尽量避免使用】

> 方法返回一个字符串中从指定位置开始到指定字符数的字符
>
> 尽管 `String.prototype.substr(…)` 没有严格被废弃 (as in "removed from the Web standards"), 但它被认作是遗留的函数并且可以的话应该避免使用。它并非JavaScript核心语言的一部分，未来将可能会被移除掉。如果可以的话，使用 `substring()` 替代它

```js
let str = "abcdefgh";
console.log(str.substr(3)); // defgh
console.log(str.substr(3, 4)); // defg
console.log(str.substr(-3)); // fgh
console.log(str.substr(-3, 2)); // fg
```



###### *substring()*

> 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集

- 如果 `indexStart` 等于 `indexEnd`，`substring` 返回一个空字符串。
- 如果省略 `indexEnd`，`substring` 提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 `NaN`，则被当作 0。
- 如果任一参数大于 `stringName.length`，则被当作 `stringName.length`。
- 如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数调换了一样

```js
let str = "abcdefg"
console.log(str.substring(3)); // defg
console.log(str.substring(3, 1)); // bc
console.log(str.substring(-3, 1)); // a
console.log(str.substring(3, -1)); // abc
```



###### *indexOf()* & *lastIndexOf()*

- 有两个方法用于在字符串中定位子字符串
  - indexOf()和
  - lastIndexOf()
- 这两个方法从字符串中搜索传入的字符串，并返回位置（如果没找到，则返回-1）
- 两者的区别在于
  - indexOf()方法从字符串开头开始查找子字符串
  - lastIndexOf()方法从字符串末尾开始查找子字符串
- 这两个方法都可以接收可选的第二个参数，表示开始搜索的位置
  - indexOf()会从这个参数指定的位置开始向字符串末尾搜索，忽略该位置之前的字符
  - lastIndexOf()则会从这个参数指定的位置开始向字符串开头搜索，忽略该位置之后直到字符串末尾的字符

```js
let msg = "Hello, World!";
console.log("indexOf", msg.indexOf("o")); // 4
console.log("lastIndexOf", msg.lastIndexOf("o")); // 8
console.log("indexOf", msg.indexOf("o", 7)); // 8
console.log("lastIndexOf", msg.lastIndexOf("o", 7)); // 4
```

关于 *undefined* 

```js
console.log('undefined'.indexOf()); // 0(搜索undefined)
console.log('undefine'.indexOf()); // -1
// 以上等价与 str.indexOf(undefined)
```



##### 字符串包含方法

> ECMAScript 6增加了3个用于判断字符串中是否包含另一个字符串的方法：startsWith()、endsWith()和includes()

###### *startsWith()、endsWith()和includes()*

- *startsWith()* 检查开始于索引0的匹配项
- *endsWith()* 检查开始于索引(string.length -substring.length)的匹配项
- *includes()* 检查整个字符串

```js
let msg = "foobazbar";
console.log("startsWith", msg.startsWith("foo")); // true
console.log("startsWith", msg.startsWith("baz")); // false
console.log("endsWith", msg.endsWith("bar")); // true
console.log("endsWith", msg.endsWith("baz")); // false
console.log("includes", msg.includes("oo")); // true
console.log("includes", msg.includes("baz")); // true
console.log("includes", msg.includes("baa")); // false
```



- startsWith()和includes()方法接收可选的第二个参数，表示开始搜索的位置
  - 如果传入第二个参数，则意味着这两个方法会从指定位置向着字符串末尾搜索，忽略该位置之前的所有字符
- endsWith()方法接收可选的第二个参数，表示应该当作字符串末尾的位置
  - 如果不提供这个参数，那么默认就是字符串长度
  - 如果提供这个参数，那么就好像字符串只有那么多字符一样

```js
console.log("startsWith", msg.startsWith("foo", 3)); // fals
console.log("startsWith", msg.startsWith("baz", 3)); // true
console.log("includes", msg.includes("baz"), 3); // true
console.log("includes", msg.includes("baz", 4)); // false
console.log("endsWith", msg.endsWith("bar", 6)); // false
console.log("endsWith", msg.endsWith("baz", 6)); // true
```



##### *trim()*

- ECMAScript在所有字符串上都提供了trim()方法。这个方法会创建字符串的一个副本，删除前、后所有空格符，再返回结果
- 由于trim()返回的是字符串的副本，因此原始字符串不受影响，即原本的前、后空格符都会保留
- 另外，trimLeft()和trimRight()方法分别用于从字符串开始和末尾清理空格符

```js
let msg = " Hello World! ";
let trimMsg = msg.trim();
console.log("trim", msg); // " Hello World! "
console.log("trim", trimMsg); // "Hello World!"
console.log("trim", msg.trimLeft()); // "Hello World! "
console.log("trim", msg.trimRight()); // " Hello World!"
console.log("trim", msg.trimStart()); // "Hello World! "
console.log("trim", msg.trimEnd()); // " Hello World!"
```



##### *repeat()*

> ECMAScript在所有字符串上都提供了repeat()方法。这个方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果

```js
let msg = "hello ";
console.log(msg.repeat(0)); // ""
console.log(msg.repeat(6)); // 复制6次
console.log(msg.repeat(3.5)); // 会自动转换为整数 复制3次
// console.log(msg.repeat(-1)); // RangeError: Invalid count value
```



##### *padStart() & padEnd()*

- padStart()和padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件
- 这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格（U+0020）

```js
let msg = "Script";
console.log("padStart", msg.padStart(10, "Java")); // JavaScript
console.log("padStart", msg.padStart(10, "Type")); // TypeScript
console.log("padStart", msg.padStart(10, "Something")); // Some
console.log("padStart", msg.padStart(3)); // Script

msg = "Java";
console.log("padEnd", msg.padEnd(10, "Script")); //JavaScript
console.log("padEnd", msg.padEnd(10, "Something")); //JavaSometh
console.log("padEnd", msg.padEnd(3)); //Java
```



修改手机号码

```js
msg = "13988669900";
console.log(msg.slice(0, 3) + msg.slice(-4).padStart(8, "*"));
```



##### 字符串迭代与解构（*iterator*）

> 字符串的原型上暴露了一个 *@@iterator* 方法，表示可以迭代字符串的每个字符

```js
let msg = "Hello";
let stringIterator = msg[Symbol.iterator]();

console.log(typeof stringIterator); // object
console.log(stringIterator.next()); // { value: 'H', done: false }
console.log(stringIterator.next()); // { value: 'e', done: false }
console.log(stringIterator.next()); // { value: 'l', done: false }
console.log(stringIterator.next()); // { value: 'l', done: false }
console.log(stringIterator.next()); // { value: 'o', done: false }
console.log(stringIterator.next()); // { value: undefined, done: true }
```



有了这个迭代器之后，字符串就可以通过解构操作符来解构了。比如，可以更方便地把字符串分割为字符数组

```js
let msg = "Hello";

for (const c of msg) {
    console.log(c);
}
```



##### 字符串大小写转换

- 下一组方法涉及大小写转换，包括4个方法：
  - toLowerCase()
  - toLocaleLowerCase()
  - toUpperCase()
  - toLocaleUpperCase()
- toLowerCase()和toUpperCase()方法是原来就有的方法，与java.lang.String中的方法同名
- toLocaleLowerCase()和toLocaleUpperCase()方法旨在基于特定地区实现



##### 字符串模式匹配方法

> String类型专门为在字符串中实现模式匹配设计了几个方法

###### *match()*

> 这个方法本质上跟RegExp对象的exec()方法相同。match()方法接收一个参数，可以是一个正则表达式字符串，也可以是一个RegExp对象

match()方法返回的数组与RegExp对象的exec()方法返回的数组是一样的：第一个元素是与整个模式匹配的字符串，其余元素则是与表达式中的捕获组匹配的字符串（如果有的话）

```js
let msg = "Hello, Jayce Lan";
let regExp = /[A-Z]/g;

console.log("exec", regExp.exec(msg)); // ["H", 0, "Hello, Jayce Lan", undefined]
console.log("match", msg.match(regExp)); // ["H", "J", "L"]
```



###### *search()*

- 这个方法唯一的参数与match()方法一样：正则表达式字符串或RegExp对象
- 这个方法返回模式第一个匹配的位置索引，如果没找到则返回-1
- search()始终从字符串开头向后匹配模式

```js
let msg = "Hello, Jayce Lan";
let regExp = /[A-Z]/g;

console.log("search", msg.search(regExp)); // 0
```



###### *replace()*

> 为简化子字符串替换操作，ECMAScript提供了replace()方法

- 这个方法接收两个参数，第一个参数可以是一个RegExp对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数
  - 如果第一个参数是字符串，那么只会替换第一个子字符串
  - 要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记

```js
let msg = "bat cat pat bar";
let regExp = /at/g;
console.log("replace", msg.replace("at", "od")); // bod cat pat bar
console.log("replace", msg.replace(regExp, "od")); // bod cod pod bar
```



第二个参数是字符串的情况下，有几个特殊的字符序列，可以用来插入正则表达式操作的值

| 字符序列 | 替换文本                                                   |
| -------- | ---------------------------------------------------------- |
| $$       | $                                                          |
| $&       | 匹配整个模式的子字符串，与 *RegExp.lastMatch* 相同         |
| $'       | 匹配的子字符串之前的字符串，与 *RegExp.rightContext* 相同  |
| $`       | 匹配的子字符串之后的字符串，与 *RegExp.leftContext* 相同   |
| $n       | 匹配第n个捕获的字符串，n=0~9，如果没有捕获，则为空字符串   |
| $nn      | 匹配第n个捕获的字符串，n=01~99，如果没有捕获，则为空字符串 |



##### *localeCompare()*

> 这个方法比较两个字符串，返回如下3个值中的一个

- 如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值（通常是-1，具体还要看与实际值相关的实现）
- 如果字符串与字符串参数相等，则返回0
- 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值（通常是1，具体还要看与实际值相关的实现）
- localeCompare()的独特之处在于，实现所在的地区（国家和语言）决定了这个方法如何比较字符串
- 在美国，英语是ECMAScript实现的标准语言，localeCompare()区分大小写，大写字母排在小写字母前面
- 但其他地区未必是这种情况

```js
let msg = "yellow";
console.log(msg.localeCompare("blue")); // 1
console.log(msg.localeCompare("yellow")); // 0
console.log(msg.localeCompare("Yellow")); // -1
console.log(msg.localeCompare("zoo")); // -1
```



##### *HTML* 方法

> 早期的浏览器开发商认为使用JavaScript动态生成HTML标签是一个需求。因此，早期浏览器扩展了规范，增加了辅助生成HTML标签的方法。下表总结了这些HTML方法。不过，这些方法基本上已经没有人使用了，因为结果通常不是语义化的标记。

```js
let msg = "标签内的内容";
console.log(msg.anchor("name")); // <a name="name">标签内的内容</a>
```



| 方法（String为 "str"）  | 输出                             |
| ----------------------- | -------------------------------- |
| String.anchor(name)     | \<a name="name">str\</a>         |
| String.big()            | \<big>str\</big>                 |
| String.bold()           | \<b>str\</b>                     |
| String.fixed()          | \<tt>str\</tt>                   |
| String.fontcolor(color) | \<font color="color">str\</font> |
| String.fontsize(size)   | \<font size="size">str\</font>   |
| String.italics()        | \<i>str\</i>                     |
| String.link(url)        | \<a url="url">str\</a>           |
| String.small()          | \<small>str\</small>             |
| String.strike()         | \<strike>str\</strike>           |
| String.sub()            | \<sub>str\</sub>                 |
| String.sup()            | \<sup>str\</sup>                 |



### 单例内置对象

> ECMA-262对内置对象的定义是“任何由ECMAScript实现提供、与宿主环境无关，并在ECMAScript程序开始执行时就存在的对象”。这就意味着，开发者不用显式地实例化内置对象，因为它们已经实例化好了

前面所接触到的内置对象：

- Object
- Array
- String

单例内置对象：

- Global
- Math



#### *Global*（全局）

- Global对象是ECMAScript中最特别的对象，因为代码不会显式地访问它
- ECMA-262规定Global对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法
- 事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成Global对象的属性

> 包括isNaN()、isFinite()、parseInt()和parseFloat()，实际上都是Global对象的方法。除了这些，Global对象上还有另外一些方法

##### URL编码方法

- *encodeURI()* 和 *encodeURIComponent()* 方法用于编码统一资源标识符（URI），以便传给浏览器
- 有效的URI不能包含某些字符，比如空格
- 使用URI编码方法来编码URI可以让浏览器能够理解它们，同时又以特殊的UTF-8编码替换掉所有无效字符
  - ecnodeURI()方法用于对整个URI进行编码，比如"www.wrox.com/illegalvalue.js"
  - 而encodeURIComponent()方法用于编码URI中单独的组件，比如前面URL中的"illegal value.js"
  - 这两个方法的主要区别是，encodeURI()不会编码属于URL组件的特殊字符，比如冒号、斜杠、问号、井号，而encodeURIComponent()会编码它发现的所有非标准字符

```js
let uri = "http://www.wrox.com/illegal value.js#start";

console.log("encodeURI", encodeURI(uri)); // http://www.wrox.com/illegal%20value.js#start
console.log("encodeURIComponent", encodeURIComponent(uri)); // http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start
```

- 与encodeURI()和encodeURIComponent()相对的是decodeURI()和decodeURIComponent()
- decodeURI()只对使用encodeURI()编码过的字符解码
- 例如，%20会被替换为空格，但%23不会被替换为井号（#），因为井号不是由encodeURI()替换的
- 类似地，decodeURIComponent()解码所有被encodeURIComponent()编码的字符，基本上就是解码所有特殊值

```js
let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";

console.log(decodeURI(uri)); // http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
console.log(decodeURIComponent(uri)); // http://www.wrox.com/illegal value.js#start
```



##### *eval()* 【不要使用】

> *eval()*方法可能是整个ECMAScript语言中最强大的了，这个方法就是一个完整的ECMAScript解释器，它接收一个参数，即一个要执行的ECMAScript（JavaScript）字符串

**MDN原话**

> `eval()` 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 `Function`就不容易被攻击

```js
console.log("Hello JavaScript"); // Hello JavaScript
// 互相等价
eval(console.log("Hello JavaScript")); // Hello JavaScript
```



- 通过eval()定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的
- 在严格模式下，在eval()内部创建的变量和函数无法被外部访问

```js
eval(function sayHi() {
    console.log("Hi!");
});
sayHi(); // Uncaught ReferenceError: sayHi is not defined
```



##### *Global* 对象属性

| 属性           | 说明                      |
| -------------- | ------------------------- |
| undefined      | 特殊值 undefined          |
| NaN            | 特殊值 NaN                |
| Infinity       | 特殊值 Infinity           |
| Object         | Object 的构造函数         |
| Array          | Array 的构造函数          |
| Function       | Function 的构造函数       |
| Boolean        | Boolean 的构造函数        |
| String         | String 的构造函数         |
| Number         | Number 的构造函数         |
| Date           | Date 的构造函数           |
| RegExp         | RegExp 的构造函数         |
| Symbol         | Symbol 的构造函数         |
| Error          | Error 的构造函数          |
| EvalError      | EvalError 的构造函数      |
| RangeError     | RangeError 的构造函数     |
| ReferenceError | ReferenceError 的构造函数 |
| SyntaxError    | SyntaxError 的构造函数    |
| TypeError      | TypeError 的构造函数      |
| URIError       | URIError 的构造函数       |



##### *window* 对象

> 虽然ECMA-262没有规定直接访问Global对象的方式，但浏览器将window对象实现为Global对象的代理。因此，**所有全局作用域中声明的变量和函数都变成了window的属性**

```html
<script>
    var color = "yellow";
    function sayColor() {
        console.log(window.color);
    }
    window.sayColor(); // yellow
</script>
```

另一种获取全局属性的方式

```html
<script>
let global = function () {
    return this;
};
console.log(global());
</script>
```



#### *Math*

> ECMAScript提供了Math对象作为保存数学公式、信息和计算的地方。Math对象提供了一些辅助计算的属性和方法
>
> Math对象上提供的计算要比直接在JavaScript实现的快得多，因为Math对象上的计算使用了JavaScript引擎中更高效的实现和处理器指令。但使用Math计算的问题是精度会因浏览器、操作系统、指令集和硬件而异

##### *Math* 对象属性

> Math对象有一些属性，主要用于保存数学中的一些特殊值

| 属性         | 说明                  |
| ------------ | --------------------- |
| Math.E       | 自然对数的基数 e 的值 |
| Math.LN10    | 10 为底的自然对数     |
| Math.LN2     | 2 为底的自然对数      |
| Math.LOG2E   | 以 2 为底 e 的对数    |
| Math.LOG10E  | 以 10 为底 e 的对数   |
| Math.PI      | 圆周率的值            |
| Math.SQRT1_2 | 1/2 的平方根          |
| Math.SQRT2   | 2 的平方根            |



##### *min()* 和 *max()* 方法

> Math对象也提供了很多辅助执行简单或复杂数学计算的方法，min()和max()方法用于确定一组数值中的最小值和最大值。这两个方法都接收任意多个参数

```js
let max = Math.max(10, 59, 66, 8, 0, 9, -1);
console.log("max", max); // 66
let min = Math.min(10, 59, 66, 8, 0, 9, -1);
console.log("min", min); // -1

// 获取数组的最大最小值
let arr = [-1, 3, 9, 78, 66];
console.log("max", Math.max(...arr)); // 78
console.log("min", Math.min(...arr)); // -1
```



##### 舍入方法

- *Math.ceil()* 方法始终向上舍入为最接近的整数
- *Math.floor()* 方法始终向下舍入为最接近的整数
- *Math.round()* 方法执行四舍五入
- *Math.fround()* 方法返回数值最接近的单精度（32位）浮点值表示

```js
console.log("Math.ceil", Math.ceil(25.1)); // Math.ceil 26
console.log("Math.ceil", Math.ceil(25.4)); // Math.ceil 26
console.log("Math.ceil", Math.ceil(25.5)); // Math.ceil 26
console.log("Math.ceil", Math.ceil(25.9)); // Math.ceil 26

console.log("Math.floor", Math.floor(25.1)); // Math.floor 25
console.log("Math.floor", Math.floor(25.4)); // Math.floor 25
console.log("Math.floor", Math.floor(25.5)); // Math.floor 25
console.log("Math.floor", Math.floor(25.9)); // Math.floor 25

console.log("Math.round", Math.round(25.1)); // Math.round 25
console.log("Math.round", Math.round(25.4)); // Math.round 25
console.log("Math.round", Math.round(25.5)); // Math.round 26
console.log("Math.round", Math.round(25.9)); // Math.round 26

console.log("Math.fround", Math.fround(.1)); // Math.fround 0.10000000149011612
console.log("Math.fround", Math.fround(.4)); // Math.fround 0.4000000059604645
console.log("Math.fround", Math.fround(.5)); // Math.fround 0.5
console.log("Math.fround", Math.fround(.9)); // Math.fround 0.8999999761581421
```



##### *random()*

> Math.random()方法返回一个0~1范围内的随机数，其中包含0但不包含1。对于希望显示随机名言或随机新闻的网页，这个方法是非常方便的

```js
// 取 1-10 的整数
let randomNum = Math.floor
console.log(randomNum);

// 取 2-10 的整数
randomNum = Math.floor(Mat
console.log(randomNum);
```



###### *window.crypto. getRandomValues()*

**注意**：如果是为了加密而需要生成随机数（传给生成器的输入需要较高的不确定性），那么建议使用***window.crypto. getRandomValues()***

```html
<script>
    let arr = new Uint32Array(10)
    window.crypto.getRandomValues(arr);
    for (let item of arr) {
        console.log(item);
    }
</script>
```



##### 其他方法

| 方法                | 说明                                |
| ------------------- | ----------------------------------- |
| Math.abs(x)         | 返回 x 的绝对值                     |
| Math.exp(x)         | 返回 Math.E 的 x 次幂               |
| Math.expm1(x)       | 返回 x 的自然数                     |
| Math.log(x)         | 返回 x 的自然对数                   |
| Math.log1p(x)       | 等于 1 + Math.log(x)                |
| Math.pow(x, power)  | 返回 x 的 power 次幂                |
| Math.hypot(...nums) | 返回 nums 中每个数平方和的平方根    |
| Math.clz32(x)       | 返回32位证书 x 的前置 0 的数量      |
| Math.sign(x)        | 返回表示 x 的整数部分，删除所有小数 |
| Math.trunc(x)       | 返回 x 的整数部分，删除所有小数     |
| Math.sqrt(x)        | 返回 x 的平方根                     |
| Math.cbrt(x)        | 返回 x 的立方根                     |
| Math.acos(x)        | 返回 x 的反余弦                     |
| Math.acosh(x)       | 返回 x 的反双曲余弦                 |
| Math.asin(x)        | 返回 x 的反正弦                     |
| Math.asinh(x)       | 返回 x 的反双曲正弦                 |
| Math.atan(x)        | 返回 x 的反正切                     |
| Math.atanh(x)       | 返回 x 的双曲反正切                 |
| Math.tan2(y, x)     | 返回 y/x 的反正切                   |
| Math.cos(x)         | 返回 x 的余弦                       |
| Math.sin(x)         | 返回 x 的正弦                       |
| Math.tan(x)         | 返回 x 的正切                       |



## 集合引用类型

- 对象
- 数组与定型数组
- Map、WeakMap、Set以及WeakSet类型

### *Object*

> Object是ECMAScript中最常用的类型之一。虽然Object的实例没有多少功能，但很适合存储和在应用程序间交换数据



#### 显式地创建Object实例的两种方式

##### 使用new操作符和Object构造函数

```js
{
    let obj = new Object();
    obj.name = "Jayce";
    obj.age = 25;
    obj.job = "coder";
    console.log(obj); // {name: "Jayce", age: 25, job: "coder"}

    let obj2 = {}; // 等效于 new Object();
    obj2.name = "Jayce";
    obj2.age = 25;
    obj2.job = "coder";
    console.log(obj2); // { name: 'Jayce', age: 25, job: 'coder' }
}
```



##### 对象字面量（object literal）

> 虽然使用哪种方式创建Object实例都可以，但实际上开发者更倾向于使用对象字面量表示法。这是因为对象字面量代码更少，看起来也更有封装所有相关数据的感觉。事实上，对象字面量已经成为给函数传递大量可选参数的主要方式

```js
{
    let obj = {
        name: "Jayce",
        age: 25,
        job: "coder",
    }

    console.log(obj); // { name: 'Jayce', age: 25, job: 'coder' }
}
```



##### 存取属性

###### 点语法

```js
let obj = {
    name: "Jayce",
    age: 25
}
console.log(obj.name);
```



###### 中括号

> 虽然属性一般是通过点语法来存取的，这也是面向对象语言的惯例，但也可以使用中括号来存取属性

- 在使用中括号时，要在括号内使用属性名的字符串形式
- 从功能上讲，和点语法存取属性的方式没有区别
- 使用中括号的主要优势就是可以通过变量访问属性
- 如果属性名中包含可能会导致语法错误的字符，或者包含关键字/保留字时，也可以使用中括号语法

```js
let obj = {
    name: "Jayce",
    age: 25,
    "last name": "Lan",
}
console.log(obj["last name"]); // Lan
let objAge = "age"
console.log(obj[objAge]); // 25
```



### *Array*

> 除了Object, Array应该就是ECMAScript中最常用的类型了。ECMAScript数组跟其他编程语言的数组有很大区别。跟其他语言中的数组一样，ECMAScript数组也是一组有序的数据，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。这意味着可以创建一个数组，它的第一个元素是字符串，第二个元素是数值，第三个是对象。ECMAScript数组也是动态大小的，会随着数据添加而自动增长



#### 创建数组

##### 使用 *Array* 构造函数

```js
let arr = new Array(); // 创建一个空数组
console.log(typeof arr); // object
```

- 如果知道数组中元素的数量，那么可以给构造函数传入一个数值，然后length属性就会被自动创建并设置为这个值
- 也可以给Array构造函数传入要保存的元素
- 创建数组时可以给构造函数传一个值
- 这时候会出现以下问题：
  - 因为如果这个值是数值，则会创建一个长度为指定数值的数组
  - 而如果这个值是其他类型的，则会创建一个只包含该特定值的数组
- 在使用Array构造函数时，也可以省略new操作符

```js
 let arr3 = new Array(3); // Array(3) []
 console.log(arr3);
 let arr4 = new Array(3, 4,); // Array(2) [3, 4]
 console.log(arr4);
 let arr5 = new Array("item"); // Array(1) ["item"]
 console.log(arr5);
 let arr6 = Array("item", 3); // Array(2) ["item", 3]
 console.log(arr6);
```



##### 数组字面量（array literal）

- 数组字面量是在中括号中包含以逗号分隔的元素列表
- 与对象一样，在使用数组字面量表示法创建数组不会调用Array构造函数

```js
let arr = [];
console.log(typeof arr); // object
let arr1 = [];
console.log(arr1);
let arr2 = [1, 2,]; // Array(2) [1, 2]
console.log(arr2);
let arr3 = ["item1", "item2", 3]; // Array(3) ["item1", "item2", 3]
console.log(arr3);
```



##### ES6新增的用于创建数组的静态方法

###### *Array.from()*

> Array.from()方法从一个类似数组或可迭代对象创建一个新的，**浅拷贝**的数组实例

- Array.from()的第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个length属性和可索引元素的结构
- Array.from()还接收第二个可选的映射函数参数。这个函数可以直接增强新数组的值，而无须像调用Array.from().map()那样先创建一个中间数组
- 还可以接收第三个可选参数，用于指定映射函数中this的值。但这个重写的this值在箭头函数中不适用

```js
// 将字符串拆分为数组
console.log("string", Array.from("Test Array")); //  Array(10) ["T", "e", "s", "t", " ", "A", "r", "r", "a", "y"]

// 将集合和映射转换为新数组
const map = new Map();
map.set(1, 2)
    .set(3, 4)
    .set(5, 6);
const set = new Set();
set.add(1)
    .add(2)
    .add(3)
    .add(4);
console.log("map", Array.from(map)); // Array(3) [[1, 2], [3, 4], [5, 6]]
console.log("set", Array.from(set)); // Array(4) [1, 2, 3, 4]

// 对已有数组进行浅拷贝
const arr1 = [1, 2, 3, 4];
const arr2 = Array.from(arr1);
console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(arr2); // [ 1, 2, 3, 4 ]
arr2[2] = 6;
console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(arr2); // [ 1, 2, 6, 4 ]

// 可以使用任何可迭代对象
const iter = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};
console.log(iter); // {Symbol(Symbol.iterator): Function}
console.log(typeof iter); // Object
console.log(Array.from(iter)); // Array(4) [1, 2, 3, 4]

// arguments 对象可以被转为数组
function getArgsArray(...args) {
    return Array.from(args);
}
console.log(getArgsArray(1, 2, 3, 4, 5)); // Array(5) [1, 2, 3, 4, 5]

// 带有必要属性的自定义对象
const obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}
console.log(Array.from(obj)); // Array(4) [1, 2, 3, 4]

// 传入多个参数
let a1 = [1, 2, 3, 4];
let a2 = Array.from(a1, item => item ** 2);
console.log("传入两个参数", a2); // Array(4) [1, 4, 9, 16]
let a3 = Array.from(a1, function (item) {
    return item ** this.exponent
}, {exponent: 3});
console.log("传入三个参数", a3); // Array(4) [1, 8, 27, 64]
```



###### *of()*

> of()用于将一组参数转换为数组实例；这个方法用于替代在ES6之前常用的Array.prototype. slice.call(arguments)，一种异常笨拙的将arguments对象转换为数组的写法

```js
console.log(Array.of(1, 2, 3, 4)); // Array(4) [1, 2, 3, 4]
console.log(Array.of(undefined)); // Array(1) [undefined]
```



#### 数组空位

> 使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。ECMAScript会将逗号之间相应索引位置的值当成空位，ES6规范重新定义了该如何处理这些空位

```js
const arr = [, , , , ,];
console.log(arr.length); // 5
console.log(arr); // [ <5 empty items> ]
```

- ES6新增的方法和迭代器与早期ECMAScript版本中存在的方法行为不同
- ES6新增方法普遍将这些空位当成存在的元素，只不过值为undefined
- ES6之前的方法则会忽略这个空位，但具体的行为也会因方法而异
- 由于行为不一致和存在性能隐患，因此实践中要避免使用数组空位
- 如果确实需要空位，则可以显式地用undefined值代替

```js
function itemIsUndefined(arr) {
    for (const item of arr) {
        console.log("item 为空：", item === undefined);
    }
}

const arr = [1, , , , 5];
itemIsUndefined(arr); // false true true true false

const arr2 = Array.from([, , ,]);
itemIsUndefined(arr2); // true * 3

console.log("map", arr.map(item  => item ** 2)); // map() 会直接忽略空位
console.log("join", arr.join("-")); // join 会将空位视为空字符串
```



#### 数组索引

> 要取得或设置数组的值，需要使用中括号并提供相应值的数字索引

```js
let colors = ["red", "yellow", "blue", "green"];
console.log(colors[0]); // red
colors[2] = "black"; // 修改数组
colors[4] = "brown"; // 修改数组
console.log(colors); // Array(5) ["red", "yellow", "black", "green", "brown"]
```



- 数组中元素的数量保存在length属性中，这个属性始终返回0或大于0的值
- 数组length属性的独特之处在于，它不是只读的
- 通过修改length属性，可以从数组末尾删除或添加元素
- 使用length属性可以方便地向数组末尾添加元素

```js
let colors = ["red", "yellow", "blue", "green"];
let names = [];
console.log(colors.length); // 4
console.log(names.length); // 0
colors.length = 2;
console.log(colors[2]); // undefined
console.log(colors); // Array(2) ["red", "yellow"]

colors = ["red", "yellow", "blue"];
colors.length = 4;
console.log(colors[3]); // undefined

colors = ["red", "yellow", "blue"];
colors[colors.length] = "black";
colors[colors.length] = "brown";
console.log(colors); // Array(5) ["red", "yellow", "blue", "black", "brown"

colors = ["red", "yellow", "blue"];
colors[99] = "black";
// 这中间的所有元素，即位置3~98，实际上并不存在，因此在访问时会返回undefined
console.log(colors); // Array(100) ["red", "yellow", "blue", "black"]
```



##### 最大索引

- 数组最多可以包含 4294967295 个元素，这对于大多数编程任务应该足够了
- 如果尝试添加更多项，则会导致抛出错误
- 以这个最大值作为初始值创建数组，可能导致脚本运行时间过长的错误



#### 检测数组（*instanceof* & *Array.isArray()*）

- 在只有一个网页（因而只有一个全局作用域）的情况下，使用 *instanceof* 操作符就足矣
  - 使用instanceof的问题是假定只有一个全局执行上下文
- 如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两个不同版本的Array构造函数
- 如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组
  - 为解决这个问题，ECMAScript提供了Array.isArray()方法
  - 这个方法的目的就是确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的
- 当检测Array实例时, `Array.isArray` 优于 `instanceof`,因为Array.isArray能检测`iframes`

```js
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, undefined, null, "Test"];
let str = "test";
console.log("instanceof", arr instanceof Array); // instanceof true
console.log("instanceof", arr2 instanceof Array); // instanceof true
console.log("instanceof", str instanceof Array); // instanceof false

console.log("Array.isArray", Array.isArray(arr)); // Array.isArray true
console.log("Array.isArray", Array.isArray(arr2)); // Array.isArray true
console.log("Array.isArray", Array.isArray(str)); // Array.isArray false
```



#### 迭代器方法（*keys()*, *values()*, *entries()*）

> 在ES6中，Array的原型上暴露了3个用于检索数组内容的方法：keys()、values()和entries()
>
> 虽然这些方法是ES6规范定义的，但在2017年底的时候仍有浏览器没有实现它们

- keys() 返回数组索引的迭代器
- values() 返回数组元素的迭代器
- entries() 返回索引/值对的迭代器

```js
let arr = ["item1", "item2", "item3", "item4"];

console.log("keys>>>>>", Array.from(arr.keys())); // Array(4) [0, 1, 2, 3]
console.log("values>>>>>", Array.from(arr.values())); // Array(4) ["item1", "item2", "item3", "item4"]
console.log("entries>>>>>", Array.from(arr.entries())); // Array(4)  [ [ 0, 'item1' ], [ 1, 'item2' ], [ 2, 'item3' ], [ 3, 'item4' ] ]

for (const [index, item] of arr.entries()) {
    console.log("index", index);
    console.log("item", item);
}
```



#### 复制和填充方法（*copyWithin()* & *fill()*）

> ES6新增了两个方法：批量复制方法copyWithin()，以及填充数组方法fill()。这两个方法的函数签名类似，都需要指定既有数组实例上的一个范围，包含开始索引，不包含结束索引。使用这个方法不会改变数组的大小



##### *fill()*

> 使用fill()方法可以向一个已有的数组中插入全部或部分相同的值

- 开始索引用于指定开始填充的位置，它是可选的。如果不提供结束索引，则一直填充到数组末尾

- 负值索引从数组末尾开始计算

- 也可以将负索引想象成数组长度加上它得到的一个正索引

- fill()静默忽略超出数组边界、零长度及方向相反的索引范围


```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.fill(6)); // Array(5) [6, 6, 6, 6, 6]
console.log(arr); // Array(5) [6, 6, 6, 6, 6]

arr = [1, 2, 3, 4, 5];

// 填充索引 >= 3 的元素
console.log(arr.fill(6, 3)); // Array(5) [1, 2, 3, 6, 6]

arr = [1, 2, 3, 4, 5];

// 填充 索引 1 - 3 （不包括3）的元素
console.log(arr.fill(6, 1, 3)); // Array(5) [1, 6, 6, 4, 5]

arr = [1, 2, 3, 4, 5];

/*
填充索引 1 - 4（不包括4）的元素
1 = 5 - 4
4 = 5 - 1
 */
console.log(arr.fill(6, -4, -1)); // Array(5) [1, 6, 6, 6, 5]

arr = [1, 2, 3, 4, 5];
// 忽略数组越界，索引过低以及反向问题
console.log(arr.fill(6, -1, -4)); // Array(5) [1, 2, 3, 4, 5]
console.log(arr.fill(6, 4, 10)); // Array(5) [1, 2, 3, 4, 6]
```



##### *copyWithin()*

> `copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

- copyWithin()会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置
- 开始索引和结束索引则与fill()使用同样的计算方法
- copyWithin()静默忽略超出数组边界、零长度及方向相反的索引范围

```js
let ints,
    reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();

// 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// 在索引或目标索引达到数组边界时停止
ints.copyWithin(5);
console.log(ints); // Array(10) [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

reset();
ints.copyWithin(3);
console.log(ints); // Array(10) [0, 1, 2, 0, 1, 2, 3, 4, 5, 6]

// 从ints中复制索引5开始的内容，插入到索引0开始的位置
reset();
ints.copyWithin(0, 5);
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]

// 复制索引 0-3（不包括3） 的内容，插入到索引 4 开始的位置
reset();
ints.copyWithin(4, 0, 3);
console.log(ints); // Array(10) [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
```



#### 转换方法（*toLocaleString()、toString()和 valueOf()*）

> 所有对象都有toLocaleString()、toString()和valueOf()方法

- toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串。也就是说，对数组的每个值都会调用其toString()方法，以得到最终的字符串
- valueOf()返回的还是数组本身

```js
let arr = [1, 2, 3, null, undefined, "test"];

console.log("toString>>>", arr.toString()); // 1,2,3,,,test
console.log("toString>>>", typeof arr.toString()); // string
console.log("valueOf>>>", arr.valueOf()); // [ 1, 2, 3, null, undefined, 'test' ]
console.log("valueOf>>>", typeof arr.valueOf()); // object
```



- toLocaleString()方法也可能返回跟toString()和valueOf()相同的结果，但也不一定
- 在调用数组的toLocaleString()方法时，会得到一个逗号分隔的数组值的字符串
- 它与另外两个方法唯一的区别是，为了得到最终的字符串，会调用数组每个值的toLocaleString()方法，而不是toString()方法

```html
<script>
    let person1 = {
        toString() {
            return "Jayce";
        },
        toLocaleString() {
            return "Jayce Lan";
        }
    }

    let person2 = {
        toString() {
            return "Eason";
        },
        toLocaleString() {
            return "Eason Chan";
        }
    }

    let persons = [person1, person2];
    alert(persons); // Jayce,Eason
    alert(persons.toString()); // Jayce,Eason
    alert(persons.toLocaleString()); // Jayce Lan,Eason Chan
</script>
```



- 这里定义了两个对象person1和person2，它们都定义了toString()和toLocaleString()方法，而且返回不同的值
- 然后又创建了一个包含这两个对象的数组persons
- 在将数组传给alert()时，输出的是"Jayce, Eason"，这是因为会在数组每一项上调用toString()方法（与下一行显式调用toString()方法结果一样）
- 而在调用数组的toLocaleString()方法时，结果变成了"Jayce Lan, Eason Chan"，这是因为调用了数组每一项的toLocaleString()方法



##### *join()*

> `join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符

```js
let arr = ["C", "Java", "JavaScript", "TypeScript"];

console.log(arr.join("")); // CJavaJavaScriptTypeScript
console.log(arr.join("-")); // C-Java-JavaScript-TypeScript
console.log(arr.join("||")); // C||Java||JavaScript||TypeScript

arr = [1, 2, 3, null, undefined, "test"];

// 如果数组中某一项是null或undefined，则在join()、toLocaleString()、toString()和valueOf()返回的结果中会以空字符串表示
console.log(arr.join("")); // 123test
console.log(arr.join("-")); // 1-2-3---test
console.log(arr.join("||")); // 1||2||3||||||test
```



##### 空字符串或 *undefined*

如果数组中某一项是null或undefined，则在join()、toLocaleString()、toString()和valueOf()返回的结果中会以空字符串表示



#### 栈方法

> ECMAScript给数组提供几个方法，让它看起来像是另外一种数据结构。数组对象可以像栈一样，也就是一种限制插入和删除项的数据结构。栈是一种后进先出（LIFO, Last-In-First-Out）的结构，也就是最近添加的项先被删除。数据项的插入（称为推入，push）和删除（称为弹出，pop）只在栈的一个地方发生，即栈顶

##### *push()*

> push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度

```js
let pushArr = new Array();
let countPush = pushArr.push("red", "yellow");
console.log(pushArr); // [ 'red', 'yellow' ]
console.log(countPush); // 2

let arr = ["black", "blue"];
countPush = pushArr.push(arr);
console.log(pushArr); // [ 'red', 'yellow', [ 'black', 'blue' ] ]
console.log(countPush); // 3
```



##### *pop()*

> pop()方法则用于删除数组的最后一项，同时减少数组的length值，返回被删除的项（当数组为空时返回 undefined ）

```js
let popArr = ["red", "blue", "yellow", "black"];
let popItem = popArr.pop();

console.log(popArr); // [ 'red', 'blue', 'yellow' ]
console.log(popItem); // black
```



#### 队列方法

> 队列以先进先出（FIFO, First-In-First-Out）形式限制访问。队列在列表末尾添加数据，但从列表开头获取数据

##### *shift()*

> `shift()` 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度

```js
let arr = new Array();
arr.push("red", "blue");
arr.push("yellow");
console.log(arr); // [ 'red', 'blue', 'yellow' ]

let item = arr.shift();

console.log(item); // red
console.log(arr); // Array(2) ["blue", "yellow"]
```



##### *unshift()*

> `unshift()` 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度(该**方法修改原有数组**)**

```js
let arr = ["red", "blue", "yellow"];

let count = arr.unshift("black");

console.log(count); // 4
console.log(arr); // Array(4) ["black", "red", "blue", "yellow"]
```



#### 排序方法

> 数组有两个方法可以用来对元素重新排序：reverse()和sort()

##### *reverse()*

> `reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。**该方法会改变原数组**

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Array(5) [1, 2, 3, 4, 5]

arr.reverse();

console.log(arr); // Array(5) [5, 4, 3, 2, 1]
```



##### *sort()*

- sort()会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面
- 为此，sort()会在每一项上调用String()转型函数，然后比较字符串来决定顺序
- 即使数组的元素都是数值，也会先把数组转换为字符串再比较、排序

```js
let arr = [1, 5, 8, 10, 2, 9];
arr.sort();
// 由于是匹配字符串，因此 '10' < '2'
console.log('10' < '2'); // true
console.log(arr); // Array(6) [1, 10, 2, 5, 8, 9]
```



- sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面
- 比较函数接收两个参数，如果第一个参数应该排在第二个参数前面，就返回负值
- 如果两个参数相等，就返回0
- 如果第一个参数应该排在第二个参数后面，就返回正值

```js
let arr,
    reset = () => arr = [1, 5, 8, 10, 2, 9];
reset();
/**
 * 比较两数大小，并传入sort中 使得数组由小到大排序
 * @param num1
 * @param num2
 * @returns {number}
 */
function compare(num1, num2) {
    if (num1 < num2) {
        return -1;
    }
    if (num1 > num2) {
        return 1;
    }
    return 0;
}

arr.sort(compare);
console.log("排序后", arr); // Array(6) [1, 2, 5, 8, 9, 10]
```



- 如果希望由大到小排序，则需要把函数返回值对调

```js
/**
 * 使得数组由大到小排序
 * @param num1
 * @param num2
 * @returns {number}
 */
function compareReset(num1, num2) {
    if (num1 < num2) {
        return -1;
    }
    if (num1 > num2) {
        return 1;
    }
    return 0;
}
```



- 使用箭头函数优化
- 比较函数就是要返回小于0、0和大于0的数值，因此减法操作完全可以满足要求

```js
let arr,
    reset = () => arr = [1, 5, 8, 10, 2, 9];
reset();
arr.sort(compare);
console.log("排序后", arr); // Array(6) [1, 2, 5, 8, 9, 10]

// 将方法写成箭头函数
reset();
arr.sort((num1, num2) => (num1 < num2) ? 1 : (num1 > num2) ? -1 : 0);
console.log(arr); // Array(6) [10, 9, 8, 5, 2, 1]

// 进一步简化
reset();
arr.sort((num1, num2) => num1 - num2);
console.log(arr); // Array(6) [1, 2, 5, 8, 9, 10]
```



- 处理对象

```js
let objs = [
    {name: "Jayce", age: 25},
    {name: "Eason", age: 47},
    {name: "Jack", age: 24}
];

objs.sort((a, b) => a.age - b.age);
for (const item of objs) {
    console.log(item);
}
```



#### 操作方法

##### *concat()*

>  `concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

```js
let arr = ["red", "blue", "yellow"];
let concatArr = arr.concat("black", ["brown", "pink"]);
console.log("arr", arr); // Array(3) ["red", "blue", "yellow"]
console.log("concatArr", concatArr); // Array(6) ["red", "blue", "yellow", "black", "brown", "pink"]
```



- 打平数组参数的行为可以重写，方法是在参数数组上指定一个特殊的符号：*Symbol.isConcatSpreadable*
- 这个符号能够阻止concat()打平参数数组
- 相反，把这个值设置为true可以强制打平类数组对象

```js
let colors = ["red", "green", "blue"];
let newColors = ["black", "brown"];
let moreNewColors = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: "pink",
    1: "cyan"
};

newColors[Symbol.isConcatSpreadable] = false;

// 强制不打平数组
let colors2 = colors.concat("yellow", newColors); // Array(5) ["red", "green", "blue", "yellow", Array(2)]
// 强制打平数组对象
let colors3 = colors.concat(moreNewColors); // Array(5) ["red", "green", "blue", "pink", "cyan"]
console.log("colors2", colors2);
console.log("colors3", colors3);
```



##### *slice()*

> `slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变

- 返回元素的开始索引和结束索引
- 如果只有一个参数，则slice()会返回该索引到数组末尾的所有元素
- 如果有两个参数，则slice()返回从开始索引到结束索引对应的所有元素，其中不包含结束索引对应的元素
- 这个操作不影响原始数组
- 如果slice()的参数有负值，那么就以数值长度加上这个负值的结果确定位置
  - 比如，在包含5个元素的数组上调用slice(-2, -1)，就相当于调用slice(3,4)
  - 如果结束位置小于开始位置，则返回空数组

```js
let arr = ["yellow", "red", "blue", "black", "pink"];
let newArr1 = arr.slice(1);
let newArr = arr.slice(1, 4);
console.log(newArr1); // Array(4) ["red", "blue", "black", "pink"]
console.log(newArr); // Array(3) ["red", "blue", "black"]

console.log(arr.slice(-3, -1)); // Array(2) ["blue", "black"] 等同于 arr.slice(2, 4)
console.log(arr.slice(4, 3)); // Array(0) []
console.log(arr.slice(-1, -2)); // Array(0) []
```



##### *splice()*

> 或许最强大的数组方法就属splice()了，使用它的方式可以有很多种
>
> **`splice()`** 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组

- **删除** 需要给splice()传2个参数：要删除的第一个元素的位置和要删除的元素数量。可以从数组中删除任意多个元素，比如splice(0, 2)会删除前两个元素
- **插入** 需要给splice()传3个参数：开始位置、0（要删除的元素数量）和要插入的元素，可以在数组中指定的位置插入元素。第三个参数之后还可以传第四个、第五个参数，乃至任意多个要插入的元素。比如，splice(2, 0, "red","green")会从数组位置2开始插入字符串"red"和"green"
- **替换** splice()在删除元素的同时可以在指定位置插入新元素，同样要传入3个参数：开始位置、要删除元素的数量和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量一致。比如，splice(2, 1, "red", "green")会在位置2删除一个元素，然后从该位置开始向数组中插入"red"和"green"

```js
let arr,
    reset = ()=> arr = [1, 2, 3, 4, 5];
reset();
console.log(arr);


// 删除元素
// 从索引 3 开始的位置删除2个元素
arr.splice(3, 2);
console.log(arr); // Array(3) [1, 2, 3]
reset();
arr.splice(-2, 1);
console.log(arr); // 从索引 -2 （length - 2）删除一个元素 Array(4) [1, 2, 3, 5]

// 无数组越界
reset();
arr.splice(3, 3);
console.log(arr);
reset();
arr.splice(5, 1);
console.log(arr);


// 插入元素
reset();
arr.splice(2, 0, "item1", "item2");
console.log(arr); // Array(7) [1, 2, "item1", "item2", 3, 4, 5] 从数组的 2索引处插入元素
reset();
const itemArr = [6, 7, 8];
arr.splice(2, 0, itemArr);
console.log(arr); // Array(6) [1, 2, Array(3), 3, 4, 5]


// 替换元素（其实可以理解为先删除后添加）
reset();
arr.splice(3, 2, 6, 7 ,8);
console.log(arr); // Array(6) [1, 2, 3, 6, 7, 8]
reset();
arr.splice(-3, 2, 6, 7 ,8);
console.log(arr); // Array(6) [1, 2, 6, 7, 8, 5]

// 添加
reset();
arr.splice(3, 0, 6, 7, 8);
console.log(arr); // Array(8) [1, 2, 3, 6, 7, 8, 4, 5]
```



#### 搜索和位置方法

> ECMAScript提供两类搜索数组的方法：按严格相等搜索和按断言函数搜索

##### 严格相等

> ECMAScript提供了3个严格相等的搜索方法：indexOf()、lastIndexOf()和includes()【es7】

- 这些方法都接收两个参数：要查找的元素和一个可选的起始搜索位置
- indexOf()和includes()方法从数组前头（第一项）开始向后搜索
- 而lastIndexOf()从数组末尾（最后一项）开始向前搜索
- 这些方法都接收两个参数：要查找的元素和一个可选的起始搜索位置
- indexOf()和includes()方法从数组前头（第一项）开始向后搜索
- 而lastIndexOf()从数组末尾（最后一项）开始向前搜索

```js
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// indexOf 正向查找
console.log("indexOf", arr.indexOf(2)); // 1
// 如果传入第二个参数，则从该索引开始查询，如果为负数，则从 arr.length + (负数) 开始查询
console.log("indexOf", arr.indexOf(2, 2)); // 7
console.log("indexOf", arr.indexOf(2, -2)); // 7

// lastIndexOf 逆向查找
console.log("lastIndexOf", arr.lastIndexOf(3)); // 6
// 如果该值大于或等于数组的长度，则整个数组会被查找。
// 如果为负值，将其视为从数组末尾向前的偏移。
// 即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找
console.log("lastIndexOf", arr.lastIndexOf(3, 3)); // 2 (相当于只有前三位被查询)
console.log("lastIndexOf", arr.lastIndexOf(3, -3)); // 6
console.log("lastIndexOf", arr.lastIndexOf(3, -5)); // 2
console.log("lastIndexOf", arr.lastIndexOf(3, -10)); // -1

// includes
console.log("includes", arr.includes(5)); // true
// 从索引 3 开始查找
console.log("includes", arr.includes(5, 3)); // true
// 从索引 arr.length - 3 开始查找
console.log("includes", arr.includes(5, -3)); // false
```



##### 断言函数

> ECMAScript也允许按照定义的断言函数搜索数组，每个索引都会调用这个函数。断言函数的返回值决定了相应索引的元素是否被认为匹配

- 断言函数接收3个参数：元素、索引和数组本身
- 其中元素是数组中当前搜索的元素，索引是当前元素的索引，而数组就是正在搜索的数组
- 断言函数返回真值，表示是否匹配
- find()和findIndex()方法使用了断言函数
- 这两个方法都从数组的最小索引开始
- find()返回第一个匹配的元素，findIndex()返回第一个匹配元素的索引
- 这两个方法也都接收第二个可选的参数，用于指定断言函数内部this的值
- 找到匹配项后，这两个方法都不再继续搜索

```js
let arr = [1, 2, 3, 10, 9, 8, 5];
// 返回实例
console.log("find", arr.find(el => el > 9)); // 10
// 返回索引
console.log("findIndex", arr.findIndex(el => el > 9)); // 3

// 用对象属性查找数组里的对象
let objs = [
    {name: "Jayce", age: 25},
    {name: "Jack", age: 26},
    {name: "Tom", age: 30}
]
function findAge(obj) {
    return obj.age > 25;
}
console.log("find", objs.find(findAge)); // Object {name: "Jack", age: 26}
console.log("findIndex", objs.findIndex(findAge)); // 1

// 这里会进行三次迭代，可以理解为 while(arr[i] === 3)
arr.find((el, index, array) => {
    console.log(el);
    console.log(index);
    console.log(array);
    return el === 3;
}); 
```



#### 迭代方法

> ECMAScript为数组定义了5个迭代方法。每个方法接收两个参数：以每一项为参数运行的函数，以及可选的作为函数运行上下文的作用域对象（影响函数中this的值）。传给每个方法的函数接收3个参数：数组元素、元素索引和数组本身。因具体方法而异，这个函数的执行结果可能会也可能不会影响方法的返回值



- every()：对数组每一项都运行传入的函数，如果对每一项函数都返回true，则这个方法返回true
- some()：对数组每一项都运行传入的函数，如果有一项函数返回true，则这个方法返回true
- filter()：对数组每一项都运行传入的函数，函数返回true的项会组成数组之后返回
- forEach()：对数组每一项都运行传入的函数，没有返回值
- map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组



> 除了抛出异常以外，没有办法中止或跳出 `forEach()` 循环

```js
let arr = [1, 2, 3, 4, 5];

console.log("every", arr.every(item => item > 2)); // false
console.log("every", arr.every(item => item > 0)); // true

console.log(arr.some(item => item > 3)); // true
console.log(arr.some(item => item > 5)); // false

console.log("filter", arr.filter(item => item >2)); // Array(3) [3, 4, 5]
console.log("filter", arr.filter(item => item >0)); // Array(5) [1, 2, 3, 4, 5]
console.log("filter", arr.filter(item => item >5)); // Array(0) []

arr.forEach(item => console.log(item)); // 遍历数组

let itemArr = new Array();
arr.forEach(item => itemArr.push(item + 3));
console.log(itemArr); // Array(5) [4, 5, 6, 7, 8]
console.log(arr); // Array(5) [1, 2, 3, 4, 5]

arr.filter(item => item >2).forEach(item => console.log(item)); // 处理后循环


let newArr = arr.map(item => item * 2);
console.log(arr); // Array(5) [1, 2, 3, 4, 5]
console.log(newArr); // Array(5) [2, 4, 6, 8, 10]

// 使用map重新格式化数组中的对象

let obj = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}];

let reformattedArray = obj.map(item => {
    let newObj = {};
    newObj[item.key] = item.value;
    return newObj;
});

/*
{ key: 1, value: 10 }
{ key: 2, value: 20 }
{ key: 3, value: 30 }
 */
obj.forEach(item => console.log(item));

/*
{ '1': 10 }
{ '2': 20 }
{ '3': 30 }
 */
reformattedArray.forEach(item => console.log(item));
```



#### 归并方法

> ECMAScript为数组提供了两个归并方法：reduce()和reduceRight()。这两个方法都会迭代数组的所有项，并在此基础上构建一个最终返回值

- *reduce()* 方法从数组第一项开始遍历到最后一项
- *reduceRight()* 从最后一项开始遍历至第一项
- 这两个方法都接收两个参数：对每一项都会运行的归并函数，以及可选的以之为归并起点的初始值
- 传给reduce()和reduceRight()的函数接收4个参数：上一个归并值、当前项、当前项的索引和数组本身
- 究竟是使用reduce()还是reduceRight()，只取决于遍历数组元素的方向。除此之外，这两个方法没什么区别

> reduce(acc, cur, idx, src)

1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((acc, cur, idx, src) => acc + cur)); // 15
console.log(arr.reduce((acc, cur) => acc + cur)); // 15 // 可以省略两位参数
console.log(arr.reduceRight((acc, cur, idx, src) => acc + cur)); // 15
```



### 定型数组

> 定型数组（typed array）是ECMAScript新增的结构，目的是提升向原生库传输数据的效率。实际上，JavaScript并没有“TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组
>
> Mozilla为解决这个问题而实现了CanvasFloatArray。这是一个提供JavaScript接口的、C语言风格的浮点值数组。JavaScript运行时使用这个类型可以分配、读取和写入数组。这个数组可以直接传给底层图形驱动程序API，也可以直接从底层获取到。最终，CanvasFloatArray变成了Float32Array，也就是今天定型数组中可用的第一个“类型”



#### *ArrayBuffer*

> Float32Array实际上是一种“视图”，可以允许JavaScript运行时访问一块名为ArrayBuffer的预分配内存。ArrayBuffer是所有定型数组及视图引用的基本单位

- ArrayBuffer()是一个普通的JavaScript构造函数，可用于在内存中分配特定数量的字节空间
- ArrayBuffer一经创建就不能再调整大小。不过，可以使用slice()复制其全部或部分到一个新实例中
- ArrayBuffer某种程度上类似于C++的malloc()，但也有几个明显的区别
  - malloc()在分配失败时会返回一个null指针。ArrayBuffer在分配失败时会抛出错误
  - malloc()可以利用虚拟内存，因此最大可分配尺寸只受可寻址系统内存限制。ArrayBuffer分配的内存不能超过Number.MAX_SAFE_INTEGER（253-1）字节
  - malloc()调用成功不会初始化实际的地址。声明ArrayBuffer则会将所有二进制位初始化为0
  - 通过malloc()分配的堆内存除非调用free()或程序退出，否则系统不能再使用。而通过声明ArrayBuffer分配的堆内存可以被当成垃圾回收，不用手动释放
- 不能仅通过对ArrayBuffer的引用就读取或写入其内容
- 要读取或写入ArrayBuffer，就必须通过视图
- 视图有不同的类型，但引用的都是ArrayBuffer中存储的二进制数据

```js
const buf = new ArrayBuffer(16); // 在内存分配16字节
console.log(buf);
/*
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
  byteLength: 16
}
 */
console.log(typeof buf); // object
console.log(buf instanceof Array); // false
console.log(buf.byteLength); // 16

buf.byteLength = 15;
console.log(buf.byteLength); // 16 一旦创建，无法改动
const buf2 = buf.slice(2, 10);
console.log(buf2.byteLength); // 8
```



#### *DataView*

> 第一种允许你读写ArrayBuffer的视图是DataView。这个视图专为文件I/O和网络I/O设计，其API支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView对缓冲内容没有任何预设，也不能迭代



### Map

> 作为ECMAScript 6的新增特性，Map是一种新的集合类型，为这门语言带来了真正的键/值存储机制。Map的大多数特性都可以通过Object类型实现，但二者之间还是存在一些细微的差异



#### 基本API

> 使用 new 关键字和 Map 构造函数创建一个空映射

```js
const map = new Map();
```

> 如果想在创建的同时初始化实例，可以给Map构造函数传入一个可迭代对象，需要包含键/值对数组。可迭代对象中的每个键/值对都会按照迭代顺序插入到新映射实例中

```js
const m1 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
])
console.log(m1.size);   // 3
console.log(m1.get("key1"));    // value1
```

> 期待的键值对/获取键值对

```js
const map = new Map();
const m1 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
])
const m2 = new Map([[]])
console.log(map.has(undefined)); // false
console.log(m1.has(undefined)); // false
console.log(m2.has(undefined)); // true
console.log(m1.has("key3")); // trues
console.log(m1.has("key4")); // false
console.log(m1.get(undefined)); // undefined
console.log(m2.get(undefined)); // undefined
```



- 初始化之后，可以使用set()方法再添加键/值对
- 可以使用get()和has()进行查询
- 可以通过size属性获取映射中的键/值对的数量
- 还可以使用delete()和clear()删除值

```js
const map = new Map();
console.log("赋值前", map.has("firstName")); // false
console.log("赋值前", map.get("firstName")); // undefined
console.log("赋值前", map.size); // 0

// 添加元素
map.set("firstName", "Jayce")
    .set("lastName", "Lan")
    .set("age", "26");

console.log("赋值后", map.has("firstName")); // true
console.log("赋值后", map.get("firstName")); // Jayce
console.log("赋值后", map.size); // 3

// 删除单个键值对
map.delete("firstName");

console.log("删除后", map.has("firstName")); // false
console.log("删除后", map.has("lastName")); // true
console.log("删除后", map.has("age")); // true
console.log("删除后", map.get("firstName")); // undefined
console.log("删除后", map.get("lastName")); // Lan
console.log("删除后", map.get("age")); // 26
console.log("删除后", map.size); // 2

// 清理所有键值对
map.clear()
console.log(map.size); // 0
```

- 与Object只能使用数值、字符串或符号作为键不同，Map可以使用任何JavaScript数据类型作为键
- Map内部使用SameValueZero比较操作（ECMAScript规范内部定义，语言中不能使用），基本上相当于使用严格对象相等的标准来检查键的匹配性
  - SameValueZero比较也可能导致意想不到的冲突！
- 与Object类似，映射的值是没有限制的



#### 顺序与迭代

> 与Object类型的一个主要差异是，Map实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作

- 映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组
- 可以通过entries()方法（或者Symbol.iterator属性，它引用entries()）取得这个迭代器

```js
const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

console.log(map.entries === map[Symbol.iterator]);  // true

for (let m of map.entries()) {
    console.log(m);
}

for (let m of map[Symbol.iterator]()) {
    console.log(m);
}
```



- 因为entries()是默认迭代器，所以可以直接对映射实例使用扩展操作，把映射转换为数组

```js
const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

// 直接扩展为数组
let mapArr = [...map];
console.log(mapArr); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
```



- 如果不使用迭代器，而是使用回调方式，则可以调用映射的forEach(callback,opt_thisArg)方法并传入回调，依次迭代每个键/值对
- 传入的回调接收可选的第二个参数，这个参数用于重写回调内部this的值

```js
map.forEach((item, key) => console.log(`${key} => ${item}`));
```



- keys()和values()分别返回以插入顺序生成键和值的迭代器

```js
for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}
```

- 键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改
- 当然，这并不妨碍修改作为键或值的对象内部的属性，因为这样并不影响它们在映射实例中的身份



#### 选择 *Map* 还是 *Object* 

> 对于多数Web开发任务来说，选择Object还是Map只是个人偏好问题，影响不大。不过，对于在乎内存和性能的开发者来说，对象和映射之间确实存在显著的差别

- 【内存占用】对于多数Web开发任务来说，选择Object还是Map只是个人偏好问题，影响不大。不过，对于在乎内存和性能的开发者来说，对象和映射之间确实存在显著的差别
- 【插入性能】向Object和Map中插入新键/值对的消耗大致相当，不过插入Map在所有浏览器中一般会稍微快一点儿。对这两个类型来说，插入速度并不会随着键/值对数量而线性增加。如果代码涉及大量插入操作，那么显然Map的性能更佳
- 【查找速度】与插入不同，从大型Object和Map中查找键/值对的性能差异极小，但如果只包含少量键/值对，则Object有时候速度更快。在把Object当成数组使用的情况下（比如使用连续整数作为属性），浏览器引擎可以进行优化，在内存中使用更高效的布局。这对Map来说是不可能的。对这两个类型而言，查找速度不会随着键/值对数量增加而线性增加。如果代码涉及大量查找操作，那么某些情况下可能选择Object更好一些
- 【删除性能】使用delete删除Object属性的性能一直以来饱受诟病，目前在很多浏览器中仍然如此。为此，出现了一些伪删除对象属性的操作，包括把属性值设置为undefined或null。但很多时候，这都是一种讨厌的或不适宜的折中。而对大多数浏览器引擎来说，Map的delete()操作都比插入和查找更快。如果代码涉及大量删除操作，那么毫无疑问应该选择Map
