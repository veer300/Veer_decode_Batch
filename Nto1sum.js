/* Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer. */
 let n=8;
 sum=0;

do{
 sum+=n;
 n--;

 }while(n>0);
 console.log( `Sum from 1 to  n :  ${sum}`);


 