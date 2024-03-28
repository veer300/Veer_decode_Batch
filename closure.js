/* 
function fn() {
    let name='Vishwa'
    console.log(name);

}

fn()
 */
/*  Name is defined inside a function only: */
/* SomeHow I want to defined magically get hold of function variable even after the function is executed : */

//console.log(name);
/* function outerFn() {
  let outVar = "I am from outer fn";
  function innerFn() {
    console.log(outVar);
  }
  return innerFn;
} */
//  The sense of saying that after executing the outer function , all the variables of outer function will get destroyed
//  But because  of closures I am still able to retain the outVar which is declared in outerfunction
/* It is able to do it because of lexical scoping */

/* onst fn = outerFn();
fn();
outerFn()()  *///  when you are returning function from inside function
/* Why should I learn closure:
to implement the concept of Encapsulation */


    function customerCounter() {
        let count=0// now count is encapsulated :
        return   function () {
            count++
            console.log('New customer is '+count);
        }

    }

    let counter=customerCounter()
     counter()
     counter()
     counter()

     /*  
     // syntax of closure 
     fn outerFn{
                innerFn(){

                }
                return innerFn
     } */