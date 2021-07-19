function Checking (amount) {
    this.balance = amount;  // 属性
    this.deposit = deposit; // 方法
    this.withdraw = withdraw; // 方法
    this.toString = toString; // 方法
}

/**
 * 存款
 * @param amount 存款金额
 */
function deposit (amount) {
    this.balance += amount;
}

/**
 * 取款
 * @param amount 所需取款的金额
 */
function withdraw (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        console.log("余额不足！");
    }
}

function toString () {
    return "账户：" + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(700);
console.log(account.toString());
account.withdraw(1000);
console.log(account.toString());