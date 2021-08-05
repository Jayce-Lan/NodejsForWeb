let name = "Jayce";
setInterval(() => {
    console.log(name)
}, 100);

let foo = function () {
    let name = "Jayce";
    return function () {
        return name;
    }
}