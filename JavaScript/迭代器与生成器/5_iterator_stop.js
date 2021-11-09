/*
 * @Author: Jayce
 * @Date: 2021-11-08 17:57:51
 * @Description: 提前终止迭代
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
      return() {
          console.log("Exiting early");
          return {done: true}
      }
    };
  }
}

let counterMoreIterator1 = new CounterMoreIterator(5);

for (let item of counterMoreIterator1) {
    if (item > 2) {
        break;
    } 
    console.log(item);
}

let counterMoreIterator2 = new CounterMoreIterator(5);
try {
    for (let item of counterMoreIterator2) {
        if (item > 2) {
            throw "err";
        }
        console.log(item);
    }   
} catch (error) {
    
}

// 如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如，数组的迭代器就是不能关闭的

let arr = [1, 2, 3, 4, 5];

let iter = arr[Symbol.iterator]();

iter.return = function () {
    console.log("提前退出");
    return {done: true}
}

for (let item of iter) {
    console.log(item);
    if (item > 2) {
        break;
    }
}

for (let item of iter) {
    console.log(item);
}
