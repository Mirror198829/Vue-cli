# Vue核心
## 响应式数据绑定
当数据发生改变 -> 视图自动更新  
##### 响应式原理（Object.defineProperty）  
> 把一个普通的Javascript对象传给Vue实例的data选项。  
Vue将遍历此对象所有属性，并使用`Object.defineProperty`,把这些属性全部转成为getter/setter。  
Vue内部会对数据进行劫持操作，进而追踪依赖，在属性被访问和修改时通知变化。  
###### 数据描述  
| 属性 | 内容 |
|---|---|
| writable | 是否允许重新改写。默认：false |
| enumerable | 是否允许枚举，即是否可被遍历。默认：false |
| configurable | 是否允许删除。默认：false |

###### 访问器描述  
* getter是一种获得属性值的方法  
* setter是一种设置属性值的方法
* 可以写configurable、enumerable
* 不能写value writable
``` javascript
//使用数据时，要先对数据进行劫持（代理）
//使用Object.defineProperty劫持数据，把属性转成访问器的方式
/**
 * getter
 *    获取属性触发
 * setter
 *    修改属性触发
 */
/**
 * Object.defineProperty
 * 定义属性，也可以在原有的属性上描述
 */
let testData = {}
Object.defineProperty(testData,'name',{
    value:'1111',
    writable:true, //是否允许重新改写。默认：false。如下“改写测试”
    enumerable:true,//是否允许枚举，即是否可被遍历。默认：false。如下“枚举测试”
    configurable:false //是否允许删除。默认：false。如下“删除测试”
})
Object.defineProperty(testData,'title',{
    value:'1111',
    writable:true, //是否允许重新改写
    enumerable:true,//是否允许枚举，即是否可被遍历
    configurable:true //是否允许删除
})

/**
 * 改写测试
 */
console.log(testData.name)
testData.name = 'newName'
console.log(testData.name)
/**
 * 枚举测试
 */
for(let arr in testData){
    console.log(`枚举属性是：${arr}`)
}
/**
 * 删除测试
 */
//delete testData.name //报错
delete testData.title //可以
console.log(testData)
```
实现数据响应的示例
``` javascript
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2') 
let txt = document.getElementById('title')
let data = {
  title:'新闻',
  name:'小说'
}
let val = '新的值'

//数据劫持
observer(data)
function observer(obj){
  Object.keys(obj).forEach(item => {
    defineReactive(obj,item,obj[item])
  })
}
function defineReactive(obj,key,value){
  Object.defineProperty(obj,key,{
    get(){
      return value
    },
    set(newValue){
      console.log(`触发了吗`)
      value = newValue
      txt.innerText = value
    }
  })
}

btn1.onclick = () => {
  data.title = 'title' 
}
btn2.onclick = () => {
  data.name = 'name'
}
```
## 声明式渲染
* 声明式
只要声明在哪里做什么，无需关心如何实现
* 命令式
需要以具体代码表达式实现过程
* 声明式渲染理解
1. Dom状态只是数据状态的一个映射
2. 所有逻辑尽可能在状态的层面去进行
3. 当状态改变了，view会被框架自动更新到合理的状态
## 组件
