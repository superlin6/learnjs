   new Promise((resolve) => {
    console.log('1')
        resolve()
    console.log('2')
         }).then(() => {
        console.log('3')
         })
         setTimeout(() => {
        console.log('4')
         })
         console.log('5')