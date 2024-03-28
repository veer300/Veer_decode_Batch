/* Array store data in a contagious fashionn
array is a linear data strucutre:
Array has indexing:
to maintain the order of element we have index"
index is always contagious:

 */
/* Arrat of numbers */
// fetching element from index:
// index :0 to n-1:
/* let arr_nums = [1, 2, 3, 4];
console.log(arr_nums);
console.log("Element at 0th index " + arr_nums[0]);
console.log("ELement at 1th index " + arr_nums[1]);
console.log("Length of an Array: " + arr_nums.length); */

/* Other way of defining an Array: */
arr = Array(1, 2, 3, 4, 5);
console.log(arr);
empty_arr = Array(5);
console.log(empty_arr);
// 3rd way of creating an array;
// qqe are invoking the array constructor using new constructor:
fruits = new Array("Apple", "Mango", "Banana");
console.log(fruits);
/* 
  arr=[1,2,3,4,5];
  console.log(arr);
  console.log(arr.length);
  delete arr[2];// we will not gon to use delete
  console.log(arr);
  let arr_nums = [1, 2, 3, 4,7];
  for(let i=0;i<arr_nums.length;i++){
    process.stdout.write(arr_nums[i]+" ");
  }
   */

/* Sum of Array elements: */
/* Passing array to function: */
function sum_Array(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum_Array([1, 2, 3, 5, 7, 8]));
   arr=[3,4,7,8,44,7];// for each loop:// no  need of syntax
   for(num  of arr){
    process.stdout.write(num+" "); 
   }
