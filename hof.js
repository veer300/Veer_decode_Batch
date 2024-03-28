/* Function are of  two type : */
/* First order function Normal fucntion: function ave  two things : arguments and return type:
Argument can be of two type : Either it be primitvie or object


Second Type of function :
Higher order function where arguments and return type it can be primitvie ,object along with that you can pass function  as an argument as well as return type: 
Higher order function : It  always takes function as an arguement :
 */

// Example of Higher order function:
/* function calculator(operator, a, b) {
  return operator(a, b);
}
console.log(calculator((a, b) => a + b, 5, 6)); */
/* Since it is not taking function as an argument since it is first order function */
/* function calculateFoodBill(person) {
  if (person.male) {
    console.log("Your bill is Rs  900");
  } else {
    console.log("Your bill is Rs  300");
  }
}

calculateFoodBill({ male: false });

 */
/* 
  HOF  if and only if the function takes argument  s a function or return function as an argument:
function getMeGreetFun() {
    return  (message)=>console.log(`Hello  ${message}`  )// It is an arrow function :
}
getMeGreetFun()("How are you");
 */

/* Call back function : is basically or a  type of function which is passed as an argument to a function : */
/* fn is called as calll bac function : */
/* 
function calculator(fn,a,b) {
    return fn(a,b)
    
}

console.log(calculator((a,b)=>  a+b,5,6));
 */
//  Coposition of function:
/* Function decoration */
/* Take a number :After the number  has been take make it twice and then get the square of that number  */

function twice(n) {
    return n * 2;
}
function square(n) {
    return n ** 2;
}
//  Composition of function

/*     
const composition= (fn1,fn2)=>(value)=>fn1(fn2(value))
console.log(composition(square,twice)(5));
 */

/* Very good Mr veeeresh */
/* 
function compose(fn1, fn2) {
  return function (value) {
    return fn1(fn2(value));
  };
}

console.log(compose(square, twice)(5));
 */

/* Tinder :call back  function
He is every time :right swipping : When there is a match when two people write swipe ;
I want to calculate the no of matches  */
/* 
function calculateMathces(isMatch) {
    other_person_match_interest = ["l", "l", "l", "r", "l", "l", "r", "l"];
    for (i of other_person_match_interest) {
        if (isMatch(i)) {
            console.log("Yahh I got a match");
        }
    }
}

calculateMathces((i) => i == "r");
   */
  /* Synchronous or blocking processing :/ */
  /* Asynchroous or non blocking processing  */
  /* JS/Node.js they are heavily dependent on these concepts: */

  /* Meaning of synchronous processing: */
  /* If a problem has 3 step : I have to go step by step 
  only when I finish step 1 then I able to go on step 2 and so on so fourth: */
  /* Rahul-> girlfriend Simron : Simron's Birthday: Cake : Bakery shop: Only 1 cake bake timming -> 30 minutes -> only one the cakes comes up -> then the rahul come to te Simron: */

/* Asynchronous procesising : Rahul again goes to the Same BAkery shop: -> wait for 60 minutes:->When your cake gets ready : -> He cake to drink cofee : He is very practical : Rahul came to cofee for rita: */



