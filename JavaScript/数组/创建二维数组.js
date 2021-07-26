{
    function createArr(numrows, numcols, initial) {
        let arr = [];
        for (let i = 0; i < numrows; i++) {
            let columns = [];
            for (let j = 0; j < numcols; j ++) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        return arr;
    }

    let arr = createArr(3, 4, 1);
    console.log(arr); // [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]
    arr[2][3] = 'Test';
    console.log(arr[2][3]); // Test
}