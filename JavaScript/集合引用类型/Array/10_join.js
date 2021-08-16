let arr = ["C", "Java", "JavaScript", "TypeScript"];

console.log(arr.join("")); // CJavaJavaScriptTypeScript
console.log(arr.join("-")); // C-Java-JavaScript-TypeScript
console.log(arr.join("||")); // C||Java||JavaScript||TypeScript

arr = [1, 2, 3, null, undefined, "test"];

// 如果数组中某一项是null或undefined，则在join()、toLocaleString()、toString()和valueOf()返回的结果中会以空字符串表示
console.log(arr.join("")); // 123test
console.log(arr.join("-")); // 1-2-3---test
console.log(arr.join("||")); // 1||2||3||||||test