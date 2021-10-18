{
    const wm = new WeakMap();
}

{
    const key1 = {id: 1},
    key2 = {id: 2},
    key3 = {id: 3};

    const wm1 = new WeakMap([
        [key1, "value1"],
        [key2, "value2"],
        [key3, "value3"],
    ]);

    console.log(wm1.get(key1)); // value1

    // const wm2 = new WeakMap([
    //     [key1, "value1"],
    //     ["TEST", "value2"],
    //     [key3, "value3"]
    // ]); // Invalid value used as weak map key
    // console.log(wm2.get(key1));

    // 希望使用 String 类型作为键的可以用以下写法：
    const TEST = new String("key4");
    const wm2 = new WeakMap([
        [key1, "value1"],
        [TEST, "value2"],
        [key3, "value3"]
    ]);
    console.log(wm2.get(TEST)); // value2
    console.log(wm2.get("key4")); // undefined
}
