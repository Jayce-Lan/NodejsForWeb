let _startDate = Date.now();

setTimeout(()=> {
    console.log("1秒后")
}, 1000);

let _stopDate = Date.now();

console.log(_stopDate - _startDate);
console.log(typeof (_stopDate - _startDate));


console.log(_startDate.toLocaleString());
console.log(_startDate.toString());
