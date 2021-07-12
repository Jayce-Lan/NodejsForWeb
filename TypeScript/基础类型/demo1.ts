// any 声明为any的变量可以赋予任意类型的值
let anyStr:any = "Hello";
console.log("anyStr:", anyStr);
anyStr = 10;
console.log("anyStr:", anyStr);

// 数字类型 number
let numStr: number = 10_000;
console.log("numStr:", numStr);

// string 类型
let stringStr: string = "Test";
console.log("string:", stringStr);

// boolean 布尔类型
let booleanStr: boolean = true;
console.log("booleanStr:", booleanStr);

// 数组类型的两种写法
//在元素后面加上[]
let arr1: number[] = [1, 2, 3, 4];
console.log("arr1:", arr1);

let arr2: Array<string> = ["a", "b", "c"];
console.log("arr2:", arr2);

//元组
let arrMax: [string, number];
arrMax = ["a", 1];
// arrMax = [1, "a"]; // 会发生报错
console.log("arrMax:", arrMax);

// 枚举类型
enum COLOR {RED, GREEN, BLUE}
let _color: COLOR = COLOR.RED;
console.log("_color:", _color);

// 标识方法返回值
function foo1 (): void {
    console.log("foo1:  void type function");
}

foo1();

/**
 * 设置了返回值的方法
 * @param num1
 * @param num2
 */
function foo2(num1: number, num2: number): number {
    return num1 + num2;
}

console.log("foo2:", foo2(1, 2));

// null 表示值缺失， undefined 初始化未定义的变量
let testStr1: number;
testStr1 = 1;
// testStr1 = null; // 运行错误
// testStr1 = undefined; // 运行错误
console.log("testStr1:", testStr1);

let testStr2: number | null | undefined;
testStr2 = 1;
testStr2 = null;
testStr2 = undefined;
console.log("testStr2:", testStr2);

// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
let neverStr:never;

// neverStr = (() => {throw new Error("exception")})();
// console.log("neverStr:", neverStr);