/*
 * @Author: Jayce
 * @Date: 2021-11-10 15:01:35
 * @Description: 定义多个属性
 */

let book = new Object();

Object.defineProperties(book, {
    _year: {
        value: 2020
    },
    edition: {
        value: 0
    },
    year: {
        get() {
            return this._year;
        },
        set(newValue) {
            if (newValue > 2020) {
                this._year = newValue;
                this.edition = newValue - 2020;
            }
        }
    }
});

// getOwnPropertyDescriptor 返回指定属性
let descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor); // { value: 2020, writable: false, enumerable: false, configurable: false }

descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor); //{ get: [Function: get], set: [Function: set], enumerable: false, configurable: false }  

// 返回对象的所有属性
console.log(Object.getOwnPropertyDescriptors(book));
/*
{
  _year: {
    value: 2020,
    writable: false,
    enumerable: false,
    configurable: false
  },
  edition: { value: 0, writable: false, enumerable: false, configurable: false },
  year: {
    get: [Function: get],
    set: [Function: set],
    enumerable: false,
    configurable: false
  }
}
*/