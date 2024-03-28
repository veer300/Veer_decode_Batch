/* 
let  arr_nums=[1,2,3,4,5];
console.log(arr_nums);
console.log(arr_nums[0]);
console.log(arr_nums[1]);
console.log(arr_nums[9]);
console.log(arr_nums.length);
 */

/* Other way of define an array: */
/* arr=Array(1,2,3,4,5,6)
console.log(arr);

const empty_arr=Array(5);

 */
/* fruit =new Array ('Apple','Mango','Banana','Grapes');
 console.log(fruit);

 <1 empty item>// not looking good we will  not gone to use delete longer period of time:

  */
/*  arr=[1,2,3,4,5]
   console.log(arr);
   //delete arr[2];
   console.log(arr);

    for (let i = 0; i < arr.length; i++) {
         process.stdout.write(arr[i]+" ")
        
    }

 */
/* 
sumofArr = (arr) => {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log("Sum of elements of an array: " + sumofArr([1, 2, 34, 5]));
 */

arr=[4,6,3,6,3]
/* For  each loop: Iteration over array elements directly :*/
for(n of arr){
    console.log(n);
}