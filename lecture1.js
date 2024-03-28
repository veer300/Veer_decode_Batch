/* Writting the logic and reusing multiple time that typically called as function */
/* Function always reduces redundancy: */
/* While creating function we always use a prefix called as function : */

/* function greet_students() {
    
console.log('\nHi');
console.log('Welocome to the 7 PM class :');
console.log('Keep learning ');
}

greet_students(); */
/* 
function Sum(a,b) {  //parameter -?dummy variable :
    console.log('Inside the sum sunction:');
    return a+b;
}


console.log(Sum(5,6));// Argument  */
/* Factorial of a number  */

/* function fact(n) {
        if(n==0||n==1) return  1;
    result=1;
    for(i=n;i>=1;i--){
        result*=i;
    }
    return result;

    
}

 result=fact(6)
 console.log(result); */

 /*Function in javaScript is called first called citizen":
 A fuunction could be assiggn to a variable:
 you can pass function as an argument:
 function can be returned from a function itself :  
*/
/* when you  assign  function to the variable :name of the function will  be changed and new name  is the name of varible  which you assign it  :
  when you console the function call it will return undefined if function is not returning any value:*/
/* hello_func=function (a,b) {//  assign function to a varibale :
    console.log('Hello Students:');
    return  a+b;
}

hello_func();
console.log(hello_func(5,6)); */
/* Java script says that when you assignfunction to a variable no need to write even function name: */

/* PAssing function as an  argument */

/* function operate(a,b,fn) {

    return fn(a,b);
    
}

function sum(a,b) {
    return a+b;
}

console.log(operate(4,6,sum)); */

/* function return_greet() {
    return function () {
        console.log('Hello students ');

        return function (a,b) {
            return a+b;
            
        }
    }
    
}

console.log(return_greet()()(5,6));
    return_greet()() */

/* Since java Script is a silent language java script get the work done :  */
   /*  function sum(a,b) {
        return a+b;
        
    }
    console.log(sum(5,7,9));
 */

    /* You can pass any no of argument in function without any parameter and you will be able to use that : */
/* This is a sum function which can add any no of arguments  : */
/* Argument is a global object avaliable to  all the function: */
   /*  function sum() {
        console.log(arguments);
        sum=0;
        for(i=0;i<arguments.length;i++){
            sum+=arguments[i];
        }
        return sum;
    }
    console.log('Sum of all the arguments is :'+sum(5,7,6,8));
 */