{
    function Foo(_author) {
        this.title = "一个类";
        this.author = _author;
    }

    let obj1 = new Foo();
    let obj2 = new Foo("Jayce");

    console.log("obj1", obj1); // { title: '一个类', author: undefined }
    console.log("obj2", obj2); // { title: '一个类', author: 'Jayce' }
}

{
    function Foo() {
        this.title = "一个类";
        this.author = "Jayce";
    }

    let obj1 = new Foo();
    let obj2 = new Foo();

    delete obj1.author;

    console.log("obj1", obj1); // { title: '一个类' }
    console.log("obj2", obj2); // { title: '一个类', author: 'Jayce' }
}