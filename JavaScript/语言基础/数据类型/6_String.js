{
    let str = "This is \u03a3"; // \u03a3 只表示单个字符
    console.log(str);
    console.log(str.length); // 9

    str = "我将打出一个双引号：\"\"";
    console.log(str);
}

{
    let lang = "Java";
    console.log("lang: ", lang);
    lang = lang + "Script";
    console.log("lang: ", lang);
}

{
    console.log("==============================字符串转换================================");
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
}

{
    console.log("==============================字符串转换================================");
    console.log("null", String(null)); // null
    console.log("undefined", String(undefined)); // undefined
    console.log("boolean", String(true)); // true
    console.log("number", String(.5)); // 0.5
}

{
    console.log("==============================模板字面量================================");
    let multiLineString = "首行\n第二行";
    console.log(multiLineString);

    let multiLineTemplateLiteral = `首行
第二行`;
    console.log(multiLineTemplateLiteral);
}

{
    console.log("==============================字符拼接================================");
    let num = 5;
    let str = "×";
    console.log("普通拼接：", num + str + num + " = " + (num * num));
    console.log("字符串插值：", `${num + str + num} = ${num * num}`);

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
}

{
    console.log("==============================标签函数================================");
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
}

{
    console.log("==============================标签函数================================");
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
}

{
    console.log("==============================标签函数================================");
    function simpleTag(string, ...nums) {
        return string[0] + nums.map((item, index) => `${item} ${string[index + 1]}`).join("");
    }
    let a = 5, b = 6;
    let targetValue = simpleTag`${a} + ${b} = ${a + b}`;
    console.log(targetValue); // 5  + 6  = 11
}

{
    console.log("=============================原始字符串===============================");
    console.log(`\u00A9`); // ©
    console.log(String.raw`\u00A9`); // \u00A9

    console.log(`第一行\n第二行`);
    console.log(String.raw`第一行\n第二行`);
    
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
}