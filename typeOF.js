/* What is the advantage of type  of Operator: */

let name = "veer";
console.log(name); // inbuit function:
console.log(name.toUpperCase()); // toUpperCase()// method
console.log(name.toLowerCase()); // toLowerCase()// method:
age = 23;
//console.log(age.toUpperCase());
/*  age.toUpperCase is not a function( imp:can be applied only with string )
In java script we ddon't go and explicitly tell what is the type of variable you have declared: 
 there is always a chace that  you have declared a variable of number 
  then you will try to use of string ka function at all
  it can cause run time error: 
  to avoid suuch kind of error:
  // we can go and  make use of ternary Operator:
 
  */
/* if (age === String) {
  console.log(age.toUpperCase());
} else {
  console.log("Age is not string type: so you can not make in to uppercase");
}

typeOfNum=null
num=24
if(num%2==0){
  typeOfNum="Even"
}else typeOfNum='odd';
console.log(typeOfNum);
typeOfNum=(num%2==0)? 'Even':'odd';
console.log(typeOfNum); */

/* Chaining of the ternary operator */

  isTheUserLogedIn=false;
  isTheCoursePurchased=false;
  isTheUserLogedIn?isTheCoursePurchased?console.log('Access Granted'):console.log('Pease buy'):console.log('Please login');