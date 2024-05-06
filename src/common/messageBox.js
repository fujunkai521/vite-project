//封装消息提示组件
import messageBox from './messageBox.vue'
import { h, render} from 'vue'
function msgBox ( ) {
    //1.调用h函数把组件变成虚拟dom Vnode
    const Vnode = h(messageBox);
    //2.挂载节点到dom
    const container = document.createElement('div')
    document.body.appendChild(container);
    //渲染dom到真实的dom
    render(Vnode,container); //render(参1要渲染的vnode，参2要渲染到哪里去)

    /**
     * 一般的组件是 声明式组件<messageBox>是跟着vue走的
     * 函数式组件是
     */
}
export { msgBox }