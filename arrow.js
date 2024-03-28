/* Intention of arrow function :Write less get more: */
/* 
function add(a, b) {
  console.log("Inside the add function");
  return a + b;
}
console.log(add(5,7));
 */ /* In arrow function there is no function keyword : */
/*  const add1=(a,b)=>{
    console.log('Inside arrow function :');
   return a+b;
}

console.log(add1(5,7));

 const greet=()=>{
    console.log('Hello folks :');
}


 greet(); */

 sum=(a,b)=> {return a+b;}

 console.log(sum(55,7));
 /* Even or odd: */

 evenOrOdd=(n)=>{
return (n%2==0)?'Even':'odd';
 }
 console.log(evenOrOdd(8));