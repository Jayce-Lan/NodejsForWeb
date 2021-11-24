/*
 * @Author: Jayce
 * @Date: 2021-11-09 17:41:38
 * @Description: 属性的类型
 *               属性分两种：数据属性和访问器属性
 */

/**
 * 数据属性
 * 
 * [[Configurable]] 表示对象属性能否被delete删除并重新定义，默认true
 * [[Enumerable]] 表示属性是否可以 for-in循环 默认true
 * [[Writable]] 表示属性的值是否可以被修改 默认true
 * [[Value]] 属性实际的值 默认undefined
 * 
 * 值得注意的是，调用 defineProperty 创建对象，以上的默认值均为 false！
 */
let person = {};
Object.defineProperty(person, "name", {
    configurable: true,
    // writable: true, // 对象值不可被修改
    value: "Jony", // 对象的值
});
console.log(person.name);
person.name = "Tony";
delete person.name;
console.log(person.name);


/**
 * 访问器属性
 * 
 * [[Configurable]] 表示对象属性能否被delete删除并重新定义，默认true
 * [[Enumerable]] 表示属性是否可以 for-in循环 默认true
 * [[Get]]：获取函数，在读取属性时调用。默认值为 undefined
 * [[Set]]：设置函数，在写入属性时调用。默认值为 undefined
 * 访问器属性是不能直接定义的，必须使用 Object.defineProperty()
 */
// 定义私有属性 _year 和公有属性 edition
let book = {
    _year: 2020,
    edition: 0
}

// 定义属性 year 为外部访问器，
Object.defineProperty(book, "year", {
    get() {
        return this._year;
    },
    set(newValue) {
        if (newValue > 2020) {
            this._year = newValue;
            this.edition += newValue - 2020;
        }
    }
});

