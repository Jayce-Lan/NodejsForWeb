function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataSrote = []; // 初始化一个空数组存放列表元素
    // this.clear = clear;
    this.find = find;
    this.toString = toString;
    // this.insert = insert;
    this.append = append;
    this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.hasPrev;
    // this.hasNext;
    this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    // this.contains = contains;
}

/**
 * 给列表添加元素
 * @param element 被添加元素
 */
function append (element) {
    this.dataStore[this.listSize++] = element;
}

/**
 * 寻找数组元素
 * @param element
 * @returns {number}
 */
function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }

    return -1;
}

/**
 * 移除列表元素
 * @param element
 */
function remove (element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}

/**
 * 返回列表元素中的个数
 */
function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

let names = new List();
names.append("Tom");
names.append("Jack");
names.append("Conny");
names.toString();
names.remove("Jack");
names.toString();