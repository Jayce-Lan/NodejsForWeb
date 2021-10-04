{
    // 使用 new 关键字和 Map 构造函数创建一个空映射
    const map = new Map();

    // 键值对
    const m1 = new Map([
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"]
    ])
    const m2 = new Map([[]])
    console.log(m1.size);   // 3
    console.log(m1.get("key1"));    // value1

    console.log(map.has(undefined)); // false
    console.log(m1.has(undefined)); // false
    console.log(m2.has(undefined)); // true
    console.log(m1.has("key3")); // true
    console.log(m1.has("key4")); // false
    console.log(m1.get(undefined)); // undefined
    console.log(m2.get(undefined)); // undefined
}

console.log("=============================================")
// 操作 Map
{
    const map = new Map();
    console.log("赋值前", map.has("firstName")); // false
    console.log("赋值前", map.get("firstName")); // undefined
    console.log("赋值前", map.size); // 0

    // 添加元素
    map.set("firstName", "Jayce")
        .set("lastName", "Lan")
        .set("age", "26");

    console.log("赋值后", map.has("firstName")); // true
    console.log("赋值后", map.get("firstName")); // Jayce
    console.log("赋值后", map.size); // 3

    // 删除单个键值对
    map.delete("firstName");
    
    console.log("删除后", map.has("firstName")); // false
    console.log("删除后", map.has("lastName")); // true
    console.log("删除后", map.has("age")); // true
    console.log("删除后", map.get("firstName")); // undefined
    console.log("删除后", map.get("lastName")); // Lan
    console.log("删除后", map.get("age")); // 26
    console.log("删除后", map.size); // 2

    // 清理所有键值对
    map.clear()
    console.log(map.size); // 0
}