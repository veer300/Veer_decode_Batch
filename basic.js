/* So if you want this code at multiple time:  then functions comes in to picture: */
/* Defination of the functions : */
/* function greet_students() {
  console.log('Hi');
  console.log('Welcome to the 7 pm class :');
  console.log('Keep learning :');
    
  
} */
/* Calling of the function: ** 
greet_students(); */
/* function sum(a, b) {
  console.log("Inside sum function :");
  return a + b;// throws the result out of function :
} */
/*   var result=sum(5,7)
console.log("Sum of two numbers is " +result); */
/* Fancy question :
Parameters: in the defination of function"

Arguments: in calling of functions: */
/* function factorial(n) {
  var fact = 1;
  for (var i = n; i >= 1; i--) {
    fact = fact * i;
  }
  console.log('Inside factorial function :');
  return fact;

}

  var fact=factorial(7);
   console.log('factorial of 7 is :'+fact);

 */
/* Assigning  function to aa variable: */
/*  const hello_func=function hello(){
    console.log('Hello veeresh!');
   }
 */

/* console.log(hello_func()); */ /* Hello veeresh!
   undefined */
/*  hello_func();
 */

/* const sum_funct=function (a,b){//anonymous function:
      return a+b;
    } */

/* console.log(sum_funct(5,6)); */
/* function operate(a, b, fn) {
  console.log("sum of two numbers :" + fn(a, b));
}
function sum2(a, b) {
  return a + b;
}
operate(5, 6, sum2);
 */
// return function  from a function:
/* function return_greet_fn() {
  return function () {
    // function  but this is without a name:
    console.log("Hello students");
  };
}
// If I want to execute function inside a function ,I have to  use ()() second () because I want to execute also this one :
return_greet_fn()();
console.log(return_greet_fn());//[Function (anonymous)]
 */

/* function func1() {
  console.log("Hello from outer ");

  return function () {
    console.log("Hello from inner");

    return function () {
      console.log("Hello from innerMost");
    };

    
  };

  
}
    func1()()(); */
// java script is a silent language :
// silent people are more dangeorous:
/*    function sum(a,b) {
      return a+b;
      
    }
    console.log(sum(4));//NaN
 */
/*   JavaScript function has magical power:
in a function you can pass any number of argument in defination phase without any parameter
and you will be able to use that:*/

function sum() {
  console.log(arguments);
  let sum=0;
  for(i=0;i<arguments.length;i++){
    sum+=arguments[i];

  }
  return sum;

  }


console.log(sum(5,6));
console.log(sum(5,6,7));

 function evenOrOdd(n) {
  if(n%2==0) console.log('No is even  ');
  else console.log('No is odd:');
  
 }

 evenOrOdd(8);