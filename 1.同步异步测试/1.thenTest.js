Promise.resolve(yibu()).then(()=>{
    console.log('then parent')
})
function yibu(){
    console.log('promise')
    Promise.resolve().then(()=>{
        console.log('then children')
    })
}