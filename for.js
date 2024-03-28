console.log("Hello Student ");

// for loop
var i, j;
for (i = 0; i < 10; i++) {
  console.log("\nHelllo  Students ");
}

// reverse for loop:
for (i = 10; i > 0; i--) {
  console.log("Hello veeresh");
}

// 1 to 20, print all the even numbers :
// console.log() automatically comes up with new line :
//  if you don't want new line then what ypu will do :?
/* for(i=1;i<=20;i++){
       if(i%2==0)console.log(i+" ");
      } */
// without conditional
/* for(i=2;i<=20;i+=2){
    console.log(i);
} */
//-> first we will check the condition then go inside the loop after that we will increment or decrement the counter :
/* for (i = 0, j = 10; i < j; i++, j--) {
  console.log("Hello Veeresh: " + i + " " + " " + j);
}
 */
/* Nested for loop */
var person, food;
console.log("\n\n\n");
/* for (person = 1; person <= 5; person++) {
  console.log("Welcome person " + person);
  // feed 7 item to each person:
  for (food = 1; food <= 3; food++) {
    console.log("Feeding food item "+food);
  }
} */

//  if you don't want new line then what ypu will do :?
/* * * * * *   */
/* Process.stdout.write() */
/* for (i = 0; i < 5; i++) {
  process.stdout.write("* ");

}
 */
/*   for(i=1;i<=5;i++){
        for(j=1;j<=5;j++)
        process.stdout.write("*  ")

        console.log();
     } */

/* Method nd is to define a string with 5 rows: */
/* var row_content;
for (i = 1; i <= 5; i++) {
  row_content = " ";
  for (j = 1; j <= 5; j++) {
    row_content += "*  ";
  }
  console.log(row_content);
} */
/* Good  very good  */
/* Star pyramid mast
 *
 * *
 * * *
 * * * *
 * * * * * : */
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
console.log("\n\n");
/* You have done well: */
/* Star ulta triabgle: */
for (i = 5; i >= 1; i--) {
  for (j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
