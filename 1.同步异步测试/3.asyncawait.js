async function test(){
    let v = await console.log('await');
    console.log('1');
    console.log(v);//undefined
    console.log(typeof v);//undefined 说明await不会把结果转为promise
}
test();
console.log('截胡')

//顺序是 await 截胡 1