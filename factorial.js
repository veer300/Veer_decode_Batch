/* wap to find out  the factorial of bbumber: */
/* function fact(n) {
    if(n==0||n==1) return 1;
    result =1;
     for(let i=1;i<=n;i++){
        result=result*i;
     }
     return result;
}
 */

//console.log(` factorial of  3: ${fact(3)}`);
/* java script tells that function in java script is for me first class citizen :
// if a function follow 3 criterias : 
1: a function could be assign to a variable
 2: you can pass funcction as an argument 
 3:function can be retured from a function : 
*/

//  const hello_func= function hello(){// assign a function to a variable:
//     console.log("Hello ,my dear students :");
//  }
//         hello_func();// this is good  to call a function:
     //console.log(hello_func());// after that undefined : because function does not returning any value:
     /* when you assign a function to a variable ,this can't be callled directly :
     that means you can not call the funnction directly :
      */
      // hello();// this will give you error that hello is not defined:
/*  No need to give here funcvtion name : */
        // const hello_func= function() {// anonymous function
        //     console.log("Hello my dear students :");
        //     // in java,variable can point the function name :
            
        // }
        //  hello_func();
        /* 2: it should be pass an argument to a function : */
      /*   function operate(a,b,fn){// it is taking a function is parameters:
           console.log(fn(a,b));
        }
        function sum2(a,b){
            return a+b;
        }
        operate(5,6,sum2); */

        // return function from a function:
// returning function from function:
        // function return_geet_fn(){
        //     return function(){
        //         console.log("Hello students:");
        //     }
        // }
        //     /* In this case function is behaving anonymus  behaviour : */
        // //console.log(return_geet_fn());// by using ()():
        //     return_geet_fn()();
          /* function func1() {
            return function(){
                console.log("Hello from outer:");
                

                return function(){
                    console.log("Hello from inner:");
                
                return function(){
                    console.log("Hello from innerMost:");
                }
                }
            }
 
          }

          func1()()()(); */
/* Notes : no of argumentshould mathc the no of paramenter it is not neccasry in java scriptz:
java Script are silent language :*/
/* 
  function sum(a,b,c){
    return a+b;
  }

  console.log(sum(5,6));
   */

/* In java script functions have magical power :
 in function you can pass any no of arguments without any paramenter
 and you will be able to use that also:
  */
 // this is a sum function which can add any no of argument :
/* Argument  is a global object avaliable to all the functions:
  it will tell how many arguments passes to a function: */
 function sum(){
    console.log(arguments);
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];

    }
    return sum;
 }
 console.log(sum(5,6));;// I have two arguments:
  console.log( sum(5,6,7,8));//I have four arguments:
// we have seen the loder version of function :up till now:
// in function function name and variable name can be same :no issue: