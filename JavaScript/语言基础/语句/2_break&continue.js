{
    for (let i = 0; i < 10; i++) {
        if (i == 3) {
            continue; // 跳过3
        }

        if (i == 7) {
            break; // 当i为7时，结束循环
        }
        console.log(i);
    }

    first: for (let i = 0; i < 10; i++) {
        second: for (let j = 0; j < 10; j ++) {
            if (i == 3 && j == 3) {
                continue first;
            }

            if (i == 4 && j == 4) {
                break second;
            }
            console.log(j);
        }
        console.log("=================", i);
    }
}