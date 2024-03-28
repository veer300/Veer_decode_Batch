// for loop
/* for (let i = 0; i < 10; i++) {
 console.log("Hello Pw");
 
} */
// loop in decrementing order
/* for (let i = 10; i> 0; i--) {
 console.log("Hello Pw");
 
}*/
// odd term
/* for (let i = 2; i<=20; i+=2) {
 console.log(i+" ");
 
}
*/
/* for(let i=0,j=10;i<j;i++,j--){
   console.log("Hello "+i+","+j);
} */
/* Nesting for loop: */
/* for(person=1;person<=5;person++){
  console.log("Welcome person "+person);
  for(food=1;food<=3;food++){
      console.log("Feeding food item"+food);
  }
} */
/* Suare rectangle */
/*         for(let i=0;i<5;i++){
               for(let j=0;j<5;j++){
                process.stdout.write("* ");
               }
               console.log();
        }
 */
/* Star pyramid */
/*  for(let i=0;i<5;i++){
  for(let j=0;j<=i;j++){
      process.stdout.write("*  ");
  }
  console.log();
 }
  */
/* for(let i=5;i>=0;i--){
 for(let j=1;j<=i;j++){
     process.stdout.write("*  ");
 }
 console.log();
}
 */
/* Break */
/* for (let i = 1; i <= 5; i++) {
    if (i == 3) break;//  just exit for the loop /or break out from the loop:
    console.log("Please have food" + i);
}
 */

/* COntinue */
/* for (let i = 1; i <= 5; i++) {
    if (i == 3) continue;//  when you want to skip current iteration of the loop: 
       console.log("Please have food" + i);
}
 */
/*  for(i=1;i<=3;i++){
    console.log("i="+i);
    for(j=1;j<=3;j++){
        console.log("j="+j);
         break;// break will terminate the immediate for loop:
    }
  } */
let age = 5;
/*  while(age<19){// while loop run till the condition will get true:
        console.log("Drinking not allowed: ");
          age++;
    } */
/*  while(true){
        age+=1;
        if(age>=20) break;
    } */
// right swaps

//  do while loop:
i = -1;
do {
  console.log("Hello students:");
  i--;
} while (i > 5);
