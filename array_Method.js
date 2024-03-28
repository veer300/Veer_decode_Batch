/* arr = [12, 3, 5, 6]; //defination of array
console.log(arr); */
//  removal of element from an array:
/* Array works like stack  in javaScript: */
/* pop() remove element from the  last index: */
/* push() add element at the last index: */
/* console.log(45) this will  return the length of modifed array:; */

/* arr.pop();
console.log(arr);

arr.push(11);
console.log(arr);

fruits = ["Mango", "Papaya", "Grapes"];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("Gauva");
console.log(fruits);

fruit = fruits.pop();
console.log("This fruit is qauva " + fruit); */

/* Remove from front  elements in  array:  */
/* arr.shift()-> remove  oth index element from an array: */
/* arr.unshift()->add the element at 0th index: */
/*   console.log(arr.unshift(45)); this will  return the length of modifed array: */

/* arr = [5, 2, 1, 9, 7, 6];
console.log(arr);
x = arr.shift();

arr.unshift(24);
console.log(arr);
console.log(arr.unshift(45));
 */ /* Array.shift and  unshift  time complexity bad:  */
/* Array concattion:
    [3,2,1]  [5,6,7,8] =>  [3,2,1,5,6,7,8] */
/* arr=arr1.concat(arr2);: use to concat(add) two  arrays: :  */

/* rr1 = [3, 4, 5];
arr2 = [56, 6, 7];
arr = arr1.concat(arr2);
console.log(arr);
arr1 += arr2; */ // create a new string : if you want to make array,then you will  make use of concat method:
/* console.log("Length of an array:" + arr.length);

fruits = ["Apple", "Banana", "Carrot"]; */
/* fruits.join()-> , common  by default sepearator: */
/* let result = fruits.join("->"); //Apple->Banana->Carrot
console.log(result); //  string
console.log(typeof result); */
/* Slicing : * a small poertion of an array:: sub part of an array: arr.slice ([))*/
/* arr.slice ()-> it does not impact the orignal   array as well: */
/* arr.slice()-> if no argiment passes it will print the entire array: */
/* arr.slice(2)->  it will  start from 2nd index till the last: */
/* arr.slice()-> putting more that 2  argumment if will simply ignore this : */
/* arr.slice(-1)-> will gicw tou -1  in case of  only slcing : */
/* 0 1 2 3 4 5 6 ->mapping =>(-1,-2,-3,-4,-5,-6,-7) : this mappping hapens in case of slicing : */
/* arr.splice(index,how many from that index:) =>starting from index 2 ,remmove x no of elements:*/
/* arr.splice( ) it will impace the orignal array as well: */
/* arr.splice(index,count ,x,y,) ->  no of count will remove the elment after that x and y will add in the array*/
arr = [1, 2, 3, 4, 5, 6, 7, 8, 53, 65, 35, 64];
sliced_arr = arr.slice(2, 5);
console.log(arr.slice(2, 5));

console.log(arr.slice(-2));

arr = [3, 2, 1, 5, 4, 7, 5, 11];

console.log(arr.splice(2, 3, 26, 54));
console.log(arr);
console.log(arr.reverse());
/*  arr.reverse()  reverse  element : */
    fruits=['apple','banana','kiwi','mango'];
    console.log('index  of  kiwi '+fruits.indexOf('kiwi'));
  /*   console.log(arr.sort((a,b)=>a-b));// sort the element in ascending order: */
  console.log(arr.sort((a,b)=>b-a));// sort element in desceding order:

    str=arr.toString();
    console.log(typeof str);
    console.log(str);//54,26,11,7,5,3,2

      /* flatenning of an array; */
      /*  arr.flat() does only ist level of flatenning: */
      arr=[1,2,3,[4,5,6,[2,4,56,7],[456,5,3,2,35,6],[3,6,3,2,6],[4,3,4]],];
       flat_arr=arr.flat(Infinity);
       console.log(flat_arr);//[ 1, 2, 3, 4, 5, 6 ]
       /* Array.isArray() is an object which help you to identify that object is an array or not:: */
       console.log(Array.isArray(arr));
       str="Hello and welcome to my world:";
         console.log(Array.isArray(str));