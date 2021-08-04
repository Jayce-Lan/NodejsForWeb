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

