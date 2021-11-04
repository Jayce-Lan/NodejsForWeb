/*
 * @Author: Jayce Lan
 * @Date: 2021-11-04 10:27:15
 * @Description: 重写Set
 */

class XSet extends Set {
    union (...sets) {
        return XSet.union(this, ...sets);
    }

    // 返回两个或多个集合的并集
    static union (a, ...bSet) {
        const unionSet = new XSet(a);
        for (const b of bSet) {
            for (const bValue of b) {
                unionSet.add(bValue);
            }
        }
        return unionSet;
    }
}


const xs1 = new XSet();
xs1.add("value1")
xs1.add("value4");

const xs2 = new XSet();
xs2.add("value2")
    .add("value1")
    .add("value3");

const xsAll = xs1.union(xs2);

console.log(xsAll); // XSet(4) [Set] { 'value1', 'value4', 'value2', 'value3' }