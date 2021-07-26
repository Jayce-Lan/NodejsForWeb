{
    // let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];

    let grades = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

    let total = 0;
    let average = 0.0;

    for (let row  = 0; row < grades.length; row++) {
        for (let col = 0; col < grades[row].length; col++) {
            total += grades[row][col];
        }
        average = total / grades[row].length;
        console.log("第" + (row + 1) + "行的平均值为："
            // 结果保留两位小数
            + average.toFixed(2));
        total = 0;
        average = 0.0;
    }
}