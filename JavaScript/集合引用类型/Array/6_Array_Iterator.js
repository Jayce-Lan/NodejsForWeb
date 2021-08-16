let arr = ["item1", "item2", "item3", "item4"];

console.log("keys>>>>>", Array.from(arr.keys())); // Array(4) [0, 1, 2, 3]
console.log("values>>>>>", Array.from(arr.values())); // Array(4) ["item1", "item2", "item3", "item4"]
console.log("entries>>>>>", Array.from(arr.entries())); // Array(4)  [ [ 0, 'item1' ], [ 1, 'item2' ], [ 2, 'item3' ], [ 3, 'item4' ] ]

for (const [index, item] of arr.entries()) {
    console.log("index", index);
    console.log("item", item);
}