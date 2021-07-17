/**
 * 删除有序数组中的重复项
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度
 *
 * @param nums 传入数组
 */
function removeDuplicates (nums) {
    const numLength = nums.length;
    const arr = new Array();

    if (numLength == 0) {
        return 0;
    }

    let fast = 1, slow = 1;
    arr.push(nums[0]);
    while (fast < numLength) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            arr.push(nums[slow])
            slow++;
        }
        fast++;
    }
    console.log(arr);
    return slow;
}

const nums = [1, 2, 3, 3, 4, 5, 5];

console.log(removeDuplicates(nums));