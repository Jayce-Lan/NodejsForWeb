{
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 展示数组 x 与 y 的方法
     * @param arr 被传入数组
     */
    function displayPts(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].x + " " + arr[i].y);
        }
    }

    let p1 = new Point(1, 2);
    let p2 = new Point(3, 4);
    let p3 = new Point(5, 6);
    let p4 = new Point(7, 8);

    let points = [p1, p2, p3, p4];

    console.log("==========处理前")
    displayPts(points);

    console.log("==========push处理后")
    let p5 = new Point(12, -1);
    points.push(p5);
    displayPts(points);

    console.log("==========shift处理后")
    points.shift();
    displayPts(points);
}