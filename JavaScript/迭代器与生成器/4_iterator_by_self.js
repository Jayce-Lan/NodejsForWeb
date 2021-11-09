/*
 * @Author: Jayce
 * @Date: 2021-11-08 17:23:19
 * @Description: 自定义迭代器
 */

// 与 Iterable 接口类似，任何实现 Iterator 接口的对象都可以作为迭代器使用。下面这个例子中的 Counter 类只能被迭代一定的次数
class Counter {
  // Counter 的实例应该迭代 limit 次
  constructor(limit) {
    this.count = 1;
    this.limit = limit;
  }

  next() {
    if (this.count <= this.limit) {
      return {
        done: false,
        value: this.count++,
      };
    } else {
      return {
        done: true,
        value: undefined,
      };
    }
  }

  // 这样去实现 Iterator 接口会导致实例只能被迭代一次
  [Symbol.iterator]() {
    return this;
  }
}

let counter = new Counter(3);

for (let item of counter) {
  console.log(item);
}

for (let item of counter) {
  console.log(item); // 无输出
}

console.log("=========多次迭代==========");

// 多次迭代
/**
 * 为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器
 * 为此，可以把计数器变量放到闭包里，然后通过闭包返回迭代器
 */
class CounterMoreIterator {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;

    return {
      next() {
        if (count <= limit) {
          return {
            done: false,
            value: count++,
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  }
}

let counterMoreIterator = new CounterMoreIterator(3);

for (let item of counterMoreIterator) {
  console.log(item);
}

for (let item of counterMoreIterator) {
  console.log(item);
  if(item == 2) {
      break;
  }
}
