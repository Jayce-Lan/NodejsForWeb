/*
 * @Author: Jayce
 * @Date: 2021-11-08 10:16:59
 * @LastEditTime: 2021-11-08 10:32:21
 * @Description: 使用弱集合
 */

// 弱值
{
    const ws = new WeakSet();
    ws.add({});
    console.log(ws.has({})); // false

    const contariner = {
        value: {}
    }

    function removeValue() {
        contariner.value = null;
    }

    ws.add(contariner.value);
    console.log(ws.has(contariner.value)); // true

    removeValue();
    console.log(ws.has(contariner.value)); // false
}
