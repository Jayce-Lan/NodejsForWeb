{
    let symbol1 = Symbol();
    let symbol2 = Symbol();
    let fooSymbol1 = Symbol("foo");
    let fooSymbol2 = Symbol("foo");
    console.log(symbol1 == symbol2); // false
    console.log(fooSymbol1 == fooSymbol2); // false
    console.log(symbol1); // Symbol()
    console.log(typeof symbol2); // symbol
    console.log(fooSymbol1); // Symbol(foo)
    console.log(typeof fooSymbol2); // symbol
}

{
    // let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
    let mySymbol = Symbol();
    let myWrappedSymbol = new Object(mySymbol);
    console.log(myWrappedSymbol); // [Symbol: Symbol()]
    console.log(typeof myWrappedSymbol); // object
}

{
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
    // console.log(Symbol.keyFor(123)); // TypeError: 123 is not a symbol
}

{
    console.log("============使用符号作为属性===========");
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
}

{
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

    // asyncCount();
}

{
    console.log("=================Symbol.hasInstance================")
    function Foo() {}
    let a = new Foo();
    console.log(a instanceof Foo); // true
    console.log(Foo [Symbol.hasInstance](a)); // true

    class Bar {}
    let b = new Bar();
    console.log(b instanceof Bar); // true
    console.log(Bar [Symbol.hasInstance](b)); // true

    class Baz extends Bar{
        static [Symbol.hasInstance]() {
            return false;
        }
    }

    let baz = new Baz();

    console.log(Baz [Symbol.hasInstance](baz)); // false
    console.log(Bar [Symbol.hasInstance](baz)); // true
}