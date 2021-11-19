function A(){
    this.aname = 'a'
}
function B(){
    this.aname = 'b'
}
A.prototype.getName = () => {
    console.log(this === window)
    return this.aname
}
// 箭头函数 得到的this是{} 避免在prototype中使用箭头函数 v8测试中指向window node不是
// A.prototype.getName = function(){
//     console.log(this)
//     return this.name;
// }
//普通函数 是A { name: 'b' }

var aname = 'window'
B.prototype = new A();
B.aname = 'c'
let b = new B();
console.log(b.getName());
console.log('-----------')
console.log(new A().getName());