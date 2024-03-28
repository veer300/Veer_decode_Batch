/* Arrow fuction is like a syntactical suger:
wrtting less getting more that is why we are makinguse of arroe funtion:
write less and do more :
in arrow->there is no function keyword:
 right  side  you have paramenter:
 */

  /* function add(a,b){
    console.log("Inside the add function:");
    return a+b;
   }*/
  /* Arrow function  */
 /*  const add1=(a,b)=>{
    console.log("Inside the add function:");
    return a+b;

  }


  console.log(add(5,7));
  console.log(add1(5,7));

  const hello=()=>{
    console.log("Hello students:");

  }

 hello();

  */

 // function with mmultiple arguments and return type:
//    sum_Of_Three=(a,b,c)=>{
//     console.log("Insude sum three:");
//      return a+b+c;
//    }

//    console.log(sum_Of_Three(4,5,6));
//    // function with no  returns:
//     greet=(name)=>{
//         console.log("Hello "+name);
//     }

//     greet("Hello Mr veer")
/* 
  sum=(a,b)=>  a+b;// you don't need th use of return 


  console.log(sum(4,6)); */
  /* Limitation of arrow function:
  1: They can  access the argument object 
  2:No prtotype property
  3:Can't be used with new property
  4:can't we use as constructors

  
  
  */

  /* Revsion:
  function is a block of code
  2:Resuablity
  write one use many 

   */

  evenOrOdd=(n)=>{// aroe +ternary operaotor:
   return (n%2==0) ?"even":"odd";
  }

  console.log(evenOrOdd(6));