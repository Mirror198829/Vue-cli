# Vue核心
## 响应式数据绑定
当数据发生改变 -> 视图自动更新  
##### 响应式原理（Object.defineProperty）  
> 把一个普通的Javascript对象传给Vue实例的data选项。  
Vue将遍历此对象所有属性，并使用`Object.defineProperty`,把这些属性全部转成为getter/setter。  
Vue内部会对数据进行劫持操作，进而追踪依赖，在属性被访问和修改时通知变化。
## 组件
