let a = 5;
let b = 0;
// if( conditional Expession)
// if(boolean) is true? inside if block code executed:else  block will be executed:
if (b != 0) {
  // by using if block :we are checking condtion:
  console.log("Inside if block");
  console.log(a / b); //1.6666666666666667
} else {
  console.log("Denominator is " + 0 + " so can can divide it");
}
// in real world ,you have some backup :planning:
console.log("/* If else block */");
// you have been given an number ,if num%2==0 print even else print odd:
// Taking number input from the user

let num = 68;
if (num % 2 == 0) console.log("Number is even:");
else console.log("Number is odd:"); // we don't amy condtion for else:
// Let us use with ternary operaotr:
num % 2 == 0 ? console.log(num + " is even ") : console.log(num + " iss odd ");

console.log("/* Check divisiblity by 2,3,or 5: */");
num = 23;
if (num % 2 == 0) console.log(num + " is divisible by 2");
else if (num % 3 == 0) {
  console.log(num + " is divisible by 3");
} else if (num % 5 == 0) {
  console.log(num + "  is divisble by 5");
} else {
  console.log(num + " is not divisible by 2 ,3  and 5");
}

// when you have to handle multiple condition you are going to make use of if else ladder
// only one block will be executed in the if else ladder that match the following condition but sequentally checking of program:
// if one block will get hit remaining all the code will never get executed:
console.log("/* Find the greatest of three no: */");
a = 97;
b = 43;
c = 12;
if (a > b) {
  if (a > c) {
    console.log(a + " is greatest :");
  } else {
    console.log(c + " is greatest :");
  }
} else {
  if (b > c) console.log(b + " is greatest: ");
  else console.log(c + " is greatest ");
}

console.log("/* E commerce probblem statement: */");
var amount = 450;
var day = "Monday";
var discount;
/* if(amount<100){
    // you gave discount of 10%
      discount=amount/10;
  }else if (amount>=100 && amount<200 ) {
    // you gave discount of 20%
    discount= amount/5;
  }else if (amount>=200 && amount<500 ) {
    // you gave discount of 30%
    discount= amount*3/10; 

  }
  else{
    // you gave discount of 40%
    discount=amount*4/10;
  } */

discount =
  amount < 100
    ? amount / 10
    : amount >= 100 && amount < 200
    ? amount / 5
    : amount >= 200 && amount < 500
    ? (amount * 3) / 10
    : (amount * 4) / 10;

if (day == "Monday") {
  discount += 10;
  console.log("final amount paid by the user :" + (amount - discount));
} else {
  console.log("final amount paid by the user :" + (amount - discount));
}

console.log(" \nVeeresh you are a good problem solver:\n");

var day = 6;
/* Switch statement  */
switch (day) {
  case 0:
    console.log("Sunday");

    break;
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thurssday");

  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  default:
    console.log("Not a valid number ");
    break;
}

/* Gradding question : */
var grade = "C=-=-";
switch (grade) {
  case "A":
    console.log("Excellent ");

    break;
  case "B":
    console.log("Average ");
    break;
  case "C":
    console.log("Need improvement ");
    break;

  case "D":
    console.log("You have buneked Exam : ");
    break;

  default:
    break;
}
