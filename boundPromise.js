// boundPromise -> accepted
/// bound Promise -> rejeted:
//const motherPromise= Promise.resolve('Mother never lies')

// Async await:
/*  When you go apply async keyword before function   this transfrom the function in to an async function   is just a promise:: */

/*  and function is returning the promise object  */
/* 
 async function printMessage() {
    return  'Hello Students'
    
}
printMessage().then((msg)=>{
    console.log(msg);
}); */


 async function printHelloAfterWait() {

    // await is always applied to promisez:
    let result = await new  Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve ("Hello students");      },1000)
    
    })
    console.log('This line should be print the lasr');
 }

console.log('First line');
printHelloAfterWait()
console.log('Last line');




 


