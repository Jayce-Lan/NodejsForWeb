//引入vue
import Vue from "vue"
import HelloWorld from "./HelloWorld.vue"

const root = document.createElement("div")
document.body.appendChild(root)

//mount 将 HelloWorld 模块挂载到 root 根节点中
new Vue({
    render: (h) => h(HelloWorld)
}).$mount(root)