/*
 * @Author: Jayce Lan
 * @Date: 2021-11-03 11:13:08
 * @Description: Set的顺序与迭代
 */

// 迭代器
{
    const s = new Set(["value1", "value2", "value3"]);
    
    console.log(s.values === s[Symbol.iterator]); // true
    console.log(s.keys === s[Symbol.iterator]); // true

    for (let item of s.values()) {
        console.log(item);
    }

    /**
     * 结果均为：
     * value1
     * value2
     * value3
     */
    

    for (let item of s[Symbol.iterator]()) {
        console.log(item);
    }
}

// 将集合转为数组
{
    const s = new Set(["value1", "value2", "value3"]);
    let arr = [...s];
    console.log(arr); // [ 'value1', 'value2', 'value3' ]

    s.clear();

    for (let i = 0; i < 4; i++) {
        let obj = {
            id: i.toString(),
            name: `name${i}`
        }

        s.add(obj);
    }

    console.log(s);

    for (let item of s.values()) {
        if (item.id === '2') {
            item.name = `name${5}`
        }
        console.log(item);
    }

    console.log(s);
}

// entries()
{
    const s = new Set(["value1", "value2", "value3"]);
    
    for (let param of s.entries()) {
        console.log(param);
    }
    /*
    [ 'value1', 'value1' ]
    [ 'value2', 'value2' ]
    [ 'value3', 'value3' ]
    */
}

// forEach
{
    const s = new Set(["value1", "value2", "value3"]);
    s.forEach((val, dupVal) => {
        console.log(`${val} -> ${dupVal}`);
    });
    /* 
    value1 -> value1
    value2 -> value2
    value3 -> value3
    */
}

// 修改集合中值的属性
{
    const strSet = new Set(["value1"]);
    // 字符串原始值作为值不会被修改
    for (let value of strSet.values()) {
        value = "newValue";
        console.log("字符串本身", value); // 字符串本身 newValue
        console.log("集合 strSet.has(\"value1\")", strSet.has("value1")); // 集合 strSet.has("value1") true
        console.log("集合 strSet.has(\"newValue\")", strSet.has("newValue")); // 集合 strSet.has("newValue") false
    }

    const obj = {id: "1"};
    const objSet = new Set().add(obj);
    // 修改值对象的属性，但对象仍然存在于集合中
    for (let item of objSet.values()) {
        item.id = "newValue";
        console.log(item); // { id: 'newValue' }
    }
    console.log(objSet); // Set(1) { { id: 'newValue' } }
    console.log(objSet.has(obj)); // true
}