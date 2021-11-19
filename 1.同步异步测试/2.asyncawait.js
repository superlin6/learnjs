async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
function async2() { // 去掉了 async 关键字
    console.log('async2');
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})
console.log('script end')

 /* 
 
    script start
    async1 start
    async2
    promise1
    script end
    async1 end
    promise2
    setTimeout
 
  */
/* 
async 
调用async函数时 会返回一个promise对象；
当这个async函数返回一个值时；
promise的resolve方法会负责传递这个值
当这个async函数抛出异常；
promise的reject方法会负责传递这个异常值

async函数中可能会有await表达式
这会使async函数暂停执行
等待promise的结果出来 
然后恢复async函数的执行并返回解析值 resolved;

遇到await表达式时 会让async函数暂停执行
等到await后面的语句状态发生改变之后 再恢复
async函数的执行 并返回解析值；


 */
async function fun1(){
    console.log("async1")
}
async function fun2(){
    console.log("async2")
}
function fun3(){
    console.log("333")
}
fun1()
console.log( fun1() )
fun2()
fun3()
console.log( fun3() )