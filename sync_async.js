/*  Execution  of code statrs from top to bottom   : That is synchronous processing :
By default processing happens synchronous : */
/* 
console.log('Hello 1')
console.log('Hello 2');

function greet(msg) {
    console.log(msg);
    
}

greet('Hello Students')

console.log('Hello 3');

 */

/* Asynchronous function : set timeout: */
/* 
console.log('Hello from the begining ');
function Hello() {
    console.log('Hello from callback function');
    
}
setTimeout(Hello,3000)
//setTimeout(()=>{console.log('Hello from the callback function ')},3000)
console.log('Hello from the end:');

 */

/* How do I stop it: */
// clear Interval : wwhich takes some Id  :
/* console.log('Hello Veer');
 id=setInterval(()=>{console.log('Hello  Students')
 clearInterval(id)// I will stop the interval  job:
},2000)
 */
 /* flag=0
id=setInterval(()=>{console.log('Hello Students')
    flag++;
    if(flag==3){
        clearInterval(id)
    }
},2000);
 */
/* Why javaScript is  asynchrronous while  other programming  laguages are synchronous: */

// for_each method :

 