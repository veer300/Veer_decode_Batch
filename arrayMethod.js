/* Created an array: */
/* arr= new Array(1,3,4,5,7,8)
console.log(arr);
 */ /* Removing element from an array : use arr.pop() 
arr.pop()-> removing element from rear of the queue:
arr.push()-> adding element from the rear:returning the length of the modified of new array:
*/

/* console.log(arr.pop());

 console.log(arr);
 arr.push(11);
 console.log(arr);

 */

/* arr.shift()->Remove element from front of arr: 
   arr.unshift()   -> adding element at the front : return the length of the new modifed arrray:*/
/*  console.log(arr.shift());
  arr.unshift(51);
  console.log(arr);
 */

/* concatination of arrays: in humns : shadi:
  arr1.concat(arr2) */

/* arr1=new Array(1,2,2,4);
  arr2=new Array(2,6,7,8);

  arr=arr1.concat(arr2)// type "arr"
  console.log(arr);
  console.log('Length of an array:'+arr.length);

   arr_new=arr1+arr2
   console.log(typeof arr_new);//  string : appending" */

  // join method:
  /* Join method convert arr in to comma seperated string  */
/*   fruits=['Apple','Banana','Carrot'] 
  result=fruits.join(':')
  console.log(fruits.join('->'));
  console.log( result);
  */

  /* Slicing method dividing arr in to piece: small  portion of an array:
  arr.slice( starting index inclusive ,endingIndexexclusive)*/
  /* start from that index and goes to the end: only  one argument pass: */
  /* If you pass -ive index   only inn slcing this is valid:*/
  /* -1 is the last index: */

  /* arr= [1,2,3,4,5,6,8];
  sliced_arrr=arr.slice(0,2)
  console.log(arr.slice(2));
  console.log(arr.slice(-4,-1));
  console.log(arr.slice(1,-3));
   */

  /* splice: add or remove element from any index: delete in not good we have seen earlier: */
/*  console.log(index,no of element removed  from  fromthat)
arr.splice(index,no of element remove,give element) */

 /*  arr=[3,4,2,1,7,8,6]
// chages in array reflect:
  console.log(arr.splice(4,1,51,52));
  console.log(arr);
  //  to reverse an array: use arr.reverse()
  console.log(arr.reverse());
 */

  // sorting ofan array:
  arr=[5,4,7,9,3,2,1,8]

   arr.sort((a,b)=>a-b)// sorting in ascending order:
   console.log(arr);
   console.log(arr);
 arr.sort((a,b)=>b-a)//  sorting in decending order
 console.log(arr);

/* Flatening of an  array:  arr.flat(  levels ) */
 str=arr.toString();
 console.log(str);
 console.log(typeof str);
 arr=  [3,4,5,[7,9,11]]
 /* orignal array remain unchanged: */
 flat_arr=arr.flat()
 console.log(flat_arr);
  arr2=[1,2[3,4,[6,7,8,[7,8,9,11]]]]
  console.log(arr.flat(3));

  /* Is Array is a  method to check that the array is array  or not: */


