let text = "000-00-0000";
let regExp = /\d{3}-\d{2}-\d{4}/;

if (regExp.test(text)) {
    console.log("success");
}

let regExp2 = new RegExp("\\[bc\\]at", "g");
console.log("regExp", regExp.toString()); // /\d{3}-\d{2}-\d{4}/
console.log("regExp", regExp.toLocaleString()); // /\d{3}-\d{2}-\d{4}/
console.log("regExp2", regExp2.toString()); // /\[bc\]at/g
console.log("regExp2", regExp2.toLocaleString()); // /\[bc\]at/g