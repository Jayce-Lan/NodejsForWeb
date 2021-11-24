/*
 * @Author: Jayce
 * @Date: 2021-11-09 17:28:37
 * @Description: 生成对象的两种方式
 */
let person1 = new Object();
person1.name = "Jayce";
person1.age = 26;
person1.job = "Engineer";
person1.logMessage = function () {
  console.log(`My name is ${this.name}, I'm a ${this.job}`);
};

person1.logMessage();

// 等价的创建方式
let person2 = {
  name: "Jony",
  age: 27,
  job: "Teacher",
  logMessage() {
    console.log(`My name is ${this.name}, I'm a ${this.job}`);
  },
};

person2.logMessage();
