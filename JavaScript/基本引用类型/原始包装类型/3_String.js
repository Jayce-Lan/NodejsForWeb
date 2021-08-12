// length
{
    let msg = "Hello World!";
    console.log("length", msg.length); // 12 包含了空格
    msg = `
`;
    console.log("length", msg.length); // 1 回车
    msg = '    '
    console.log("length", msg.length); // 4 tab(设置为4)
}

// charAt
{
    let msg = "Hello World!";
    console.log("charAt", msg.charAt(1)); // e
}

// charCodeAt()
{
    let msg = "Hello World!";
    console.log("charCodeAt", msg.charCodeAt(2)); // 108
    console.log("十进制和十六进制对比", 99 === 0x63); // true
}

// fromCharCode()
{
    console.log("fromCharCode", String.fromCharCode(189, 43, 190, 61)); // ½+¾=
    console.log("fromCharCode", String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // abcde
    console.log("fromCharCode", String.fromCharCode(97, 98, 99, 100, 101)); // abcde
}

{
    let msg = "ab😀cd";
    console.log("charAt", msg.charAt(1)); // b
    console.log("charAt", msg.charAt(2)); // <?>
    console.log("charAt", msg.charAt(3)); // <?>
    console.log("charAt", msg.charAt(4)); // c
}

{
    console.log("====================concat=================");

    let str = "Hello";
    let newStr = str.concat("World", "!");
    console.log(str); // Hello
    console.log(newStr); // HelloWorld!
}

{
    console.log("====================slice=================");
    let str = "Hello World!";
    console.log(str.slice(3)); // lo World!
    console.log(str.slice(0, 3)); // Hel
    console.log(str.slice(-3)); // ld!
    console.log(str.slice(-5, -3)); // or

    console.log(str.slice(4, -1)); // o World

    str = "13788996600";
    console.log(str.slice(0, 3) + "****" + str.slice(-4)); // 137****6600
}

{
    console.log("====================substr=================");

    let str = "abcdefgh";
    console.log(str.substr(3)); // defgh
    console.log(str.substr(3, 4)); // defg
    console.log(str.substr(-3)); // fgh
    console.log(str.substr(-3, 2)); // fg
}

{
    console.log("====================substring=================");

    let str = "abcdefg"
    console.log(str.substring(3)); // defg
    console.log(str.substring(3, 1)); // bc
    console.log(str.substring(-3, 1)); // a
    console.log(str.substring(3, -1)); // abc
}

{
    console.log("====================indexOf=================");

    let msg = "Hello, World!";

    console.log("indexOf", msg.indexOf("o")); // 4
    console.log("lastIndexOf", msg.lastIndexOf("o")); // 8

    console.log("indexOf", msg.indexOf("o", 7)); // 8
    console.log("lastIndexOf", msg.lastIndexOf("o", 7)); // 4

    console.log('undefined'.indexOf()); // 0(搜索undefined)
    console.log('undefine'.indexOf()); // -1
    // 以上等价与 str.indexOf(undefined)
}

{
    console.log("====================startsWith()、endsWith()和includes()=================");
    let msg = "foobazbar";
    console.log("startsWith", msg.startsWith("foo")); // true
    console.log("startsWith", msg.startsWith("baz")); // false
    console.log("endsWith", msg.endsWith("bar")); // true
    console.log("endsWith", msg.endsWith("baz")); // false
    console.log("includes", msg.includes("oo")); // true
    console.log("includes", msg.includes("baz")); // true
    console.log("includes", msg.includes("baa")); // false

    console.log("startsWith", msg.startsWith("foo", 3)); // false
    console.log("startsWith", msg.startsWith("baz", 3)); // true
    console.log("includes", msg.includes("baz"), 3); // true
    console.log("includes", msg.includes("baz", 4)); // false

    console.log("endsWith", msg.endsWith("bar", 6)); // false
    console.log("endsWith", msg.endsWith("baz", 6)); // true
}

{
    console.log("====================trim=================");

    let msg = " Hello World! ";
    let trimMsg = msg.trim();
    console.log("trim", msg); // " Hello World! "
    console.log("trim", trimMsg); // "Hello World!"
    console.log("trim", msg.trimLeft()); // "Hello World! "
    console.log("trim", msg.trimRight()); // " Hello World!"
    console.log("trim", msg.trimStart()); // "Hello World! "
    console.log("trim", msg.trimEnd()); // " Hello World!"
}

{
    console.log("===================repeat()==================");
    let msg = "hello ";
    console.log(msg.repeat(0)); // ""
    console.log(msg.repeat(6)); // 复制6次
    console.log(msg.repeat(3.5)); // 会自动转换为整数 复制3次
    // console.log(msg.repeat(-1)); // RangeError: Invalid count value
}

{
    console.log("===================padStart()和padEnd()==================");

    let msg = "Script";
    console.log("padStart", msg.padStart(10, "Java")); // JavaScript
    console.log("padStart", msg.padStart(10, "Type")); // TypeScript
    console.log("padStart", msg.padStart(10, "Something")); // Some
    console.log("padStart", msg.padStart(3)); // Script

    msg = "Java";
    console.log("padEnd", msg.padEnd(10, "Script")); //JavaScript
    console.log("padEnd", msg.padEnd(10, "Something")); //JavaSometh
    console.log("padEnd", msg.padEnd(3)); //Java

    msg = "13988669900";
    console.log(msg.slice(0, 3) + msg.slice(-4).padStart(8, "*"));
}

{
    console.log("=======================iterator===================");

    let msg = "Hello";
    let stringIterator = msg[Symbol.iterator]();
    console.log(typeof stringIterator); // object

    console.log(stringIterator.next()); // { value: 'H', done: false }
    console.log(stringIterator.next()); // { value: 'e', done: false }
    console.log(stringIterator.next()); // { value: 'l', done: false }
    console.log(stringIterator.next()); // { value: 'l', done: false }
    console.log(stringIterator.next()); // { value: 'o', done: false }
    console.log(stringIterator.next()); // { value: undefined, done: true }

    for (const c of msg) {
        console.log(c);
    }
}

{
    console.log("===============match===================");

    let msg = "Hello, Jayce Lan";
    let regExp = /[A-Z]/g;

    console.log("exec", regExp.exec(msg)); // ["H", 0, "Hello, Jayce Lan", undefined]
    console.log("match", msg.match(regExp)); // ["H", "J", "L"]
    console.log("search", msg.search(regExp)); // 0
}

{
    console.log("==================replace==============");

    let msg = "bat cat pat bar";

    let regExp = /at/g;

    console.log("replace", msg.replace("at", "od")); // bod cat pat bar
    console.log("replace", msg.replace(regExp, "od")); // bod cod pod bar
}

{
    console.log("==================localeCompare=====================");

    let msg = "yellow";
    console.log(msg.localeCompare("blue")); // 1
    console.log(msg.localeCompare("yellow")); // 0
    console.log(msg.localeCompare("Yellow")); // -1
    console.log(msg.localeCompare("zoo")); // -1
}

{
    console.log("==================HTML方法=====================");

    let msg = "标签内的内容";
    console.log(msg.anchor("url")); // <a name="url">标签内的内容</a>
}