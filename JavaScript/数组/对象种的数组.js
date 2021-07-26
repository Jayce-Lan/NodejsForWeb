function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add (temp) {
    this.dataStore.push(temp);
}

function average () {
    let total = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

let wt = new weekTemps();
wt.add(1);
wt.add(3);
wt.add(6);

console.log(wt.average());