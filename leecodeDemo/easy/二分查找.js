{
    /**
     * 给定一个有序数组，进行二分查找，返回数组下标
     * @param arr 传入数组
     * @param num 被查询数字
     * @returns {number} 返回值
     */
    function search(arr, num) {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            let mid = parseInt((low + high) / 2);
            if (arr[mid] === num) {
                return mid;
            } else if (arr[mid] > num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    let arr = [1, 2, 3, 4, 5, 6];
    console.log(search(arr, 7));
}

{
    function search(isBadVersion) {
        return function (n) {
            let left = 0, right = n;
            while (left < right) {
                const mid = parseInt((left + right) / 2);
                if (isBadVersion(mid)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
    }

    console.log(search(3));
}