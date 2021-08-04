{
    let obj = {
        name: "Tom",
        age: 25,
        job: "coder",
        sex: "man"
    }

    let obj2 = [
        {
            name: "Tom",
            age: 25,
            job: "coder",
            sex: "man"
        },
        {
            name: "Tom",
            age: 24,
            job: "coder",
            sex: "man"
        },
        {
            name: "Tom",
            age: 23,
            job: "coder",
            sex: "man"
        },
        {
            name: "Tom",
            age: 22,
            job: "coder",
            sex: "man"
        }
    ]

    let arr = [1, 2, 3, 4, 5, 6];

    // for in 遍历对象的键
    for (const key in obj) {
        console.log("for-in:", key);
    }

    for (const num in arr) {
        console.log("for-in: ", num); // 打印数组下标
    }

    // for of 遍历数组的元素
    for (const item of arr) {
        console.log("for-of: ", item);
    }

    for (const o of obj2) {
        console.log(typeof o);
        console.log(o);
    }

    // 遍历对象
    for (const o of obj2) {
        for (const propName in o) {
            console.log(propName + ":" + o[propName]);
        }
    }
}