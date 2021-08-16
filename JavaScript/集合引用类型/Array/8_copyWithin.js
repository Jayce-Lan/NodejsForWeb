let ints,
    reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();

// 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// 在索引或目标索引达到数组边界时停止
ints.copyWithin(5);
console.log(ints); // Array(10) [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

reset();
ints.copyWithin(3);
console.log(ints); // Array(10) [0, 1, 2, 0, 1, 2, 3, 4, 5, 6]

// 从ints中复制索引5开始的内容，插入到索引0开始的位置
reset();
ints.copyWithin(0, 5);
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]

// 复制索引 0-3（不包括3） 的内容，插入到索引 4 开始的位置
reset();
ints.copyWithin(4, 0, 3);
console.log(ints); // Array(10) [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]