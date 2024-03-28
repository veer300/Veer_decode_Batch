console.log("/* Ternary Operaotr: */");
typeOfNum = null;
num = 23;
//   if(num%2==0) typeOfNum="Even";
//   else typeOfNum-"odd";
//         console.log(typeOfNum);
/* Ternary is nothing but it is a way off writting if else statement in a cooler way: */
// mehtod 1:(num%2==0)? typeOfNum="Even":typeOfNum="odd";// this is also the way of assigning:
typeOfNum = num % 2 == 0 ? "Even" : "odd"; // this is also the way of assigning:
console.log(typeOfNum);
console.log("/* Nesting of ternary operator:Chaining of ternary operator: */");
let a = 6;
let b = 3;
let c = 1;
let max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(`Maximum of three no is : ${max}`);
//   repeat
// max=(a>b)?((a>c)?a:c):((b>c)?b:c);
// just try to replace the if else bloc type :you can easily understand the conncept:
isUserLoggedIn = true;
isTheCoursePurchased = true;
 
isUserLoggedIn?isTheCoursePurchased?console.log("Access granted"):console.log("Please Purchase the course:"):console.log("Please login:");
// let us replace this in if else block:
 if(isUserLoggedIn){
    if(isTheCoursePurchased){
        console.log("Access granted");
    }else console.log("Please purchase the course:");
 }else console.log("Please login:");
// so you written right code: understand with if else nesting concept:
// is so handy :we are not strongly type  in the world of java Script :so you can go nnd avioid that by making this type of ooperator:

