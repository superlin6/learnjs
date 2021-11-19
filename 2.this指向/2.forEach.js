var names = ['abc','def'];

names.forEach(item => {
    console.log(this) //空对象 在v8上是指向window node不是
})
names.forEach(function(){
    console.log(this === window) //window true global也是true
})