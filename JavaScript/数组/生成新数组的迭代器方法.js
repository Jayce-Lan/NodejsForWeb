// map()
{
    function showItem(item) {
        return item;
    }

    let nums = [1, 2, 3, 4, 5, 6];

    const numsMap = nums.map(showItem);
    console.log(numsMap); // [ 1, 2, 3, 4, 5, 6 ]
}
{
    function showItem(item) {
        return item[0];
    }

    let arr = ["jack", "fly", "tom"];
    const arrMap = arr.map(showItem);
    console.log(arrMap.join("")); // jft
}

// filter

{
    let nums = new Array();
    for (let i = 0; i < 20; i++) {
        nums[i] = i + 1;
    }

    function isEven(num) {
        return num % 2 === 0;
    }

    function isObb(num) {
        return num % 2 !== 0;
    }

    const filterEven = nums.filter(isEven);
    console.log(filterEven); // 只输出偶数

    const filterObb = nums.filter(isObb);
    console.log(filterObb); // 只输出奇数
}

// 使用filter过滤字符串
{
    function afterc(item) {
        if (item.indexOf("ac") > -1) {
            return true;
        }
        return false;
    }

    let arr = ["jack", "tacl", "good", "hello", "heaccc"];

    const strings = arr.filter(afterc);
    console.log(strings); // [ 'jack', 'tacl', 'heaccc' ]
}