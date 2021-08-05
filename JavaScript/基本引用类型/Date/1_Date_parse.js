let _date = new Date();
console.log(_date); // 2021-08-05T04:01:56.294Z

_date = new Date(Date.parse("08/05/2021"));
console.log(_date); // 2021-08-04T16:00:00.000Z

_date = new Date(Date.parse("May 3, 2021"));
console.log(_date); // 2021-05-02T16:00:00.000Z

_date = new Date(Date.parse("May 32, 2021"));
console.log(_date); // Invalid Date