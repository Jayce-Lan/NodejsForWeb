{
    const wm = new WeakMap();
    wm.set({}, "value");

    console.log(wm.get({})); // undefined 由于是弱键的原因，对象没有被创建，因此被垃圾回收机制销毁了
}

{
    const wm = new WeakMap();
    const container = {
        key: {}
    }

    wm.set(container.key, "value");
    console.log(wm.get(container.key)); // value

    function removeReference() {
        container.key = null;
    }

    removeReference();
    console.log(wm.get(container.key)); // undefined 由于key被销毁
}