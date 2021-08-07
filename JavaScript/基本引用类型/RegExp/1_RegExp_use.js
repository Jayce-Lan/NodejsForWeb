const regExp = /cat/g;
console.log(regExp); // /cat/g
const re1 = new RegExp(regExp);
console.log(re1); // /cat/g
const re2 = new RegExp(regExp, "i");
console.log(re2); // /cat/i

let re3 = new RegExp("\[bc\]at", "g");
console.log(re3); // /[bc]at/g
re3 = new RegExp("\\[bc\\]at", "g");
console.log(re3); // /\[bc\]at/g