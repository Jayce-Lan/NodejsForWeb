let _data = new Date();

console.log("toDateString", _data.toDateString()); // Thu Aug 05 2021
console.log("toTimeString", _data.toTimeString()); // 17:35:47 GMT+0800 (中国标准时间)
console.log("toLocaleDateString", _data.toLocaleDateString()); // 2021/8/5
console.log("toLocaleTimeString", _data.toLocaleTimeString()); // 下午5:42:30
console.log("toLocaleString", _data.toLocaleString()); // 2021/8/5 下午5:42:54
console.log("toUTCString", _data.toUTCString()); // Thu, 05 Aug 2021 09:43:31 GMT

_data = new Date(2021, 7, 5); // 2021-08-04T16:00:00.000Z
console.log(_data);