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
## 组件
