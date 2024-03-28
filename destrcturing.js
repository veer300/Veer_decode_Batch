/* Destructuring -> to break something : */
/*  Array ,Object :Map & Set : which can store the multiple data  */
/* Destructuring is applied mostly on arrays and object: */
/* Purpose of destructuring :is to assign each data in seperater variable: */
 const arr=[1,2,3]//This values 1,2,3 should be assigned in to three different variables a,b,c

/* let [a,b,c]=arr

console.log([a,b,c]);
console.log(c);
 */
/* let ans=[a,b,c]=arr
console.log(ans);
  console.log(a); */
// d will  get unndefined :
 /*  let [a,b,c,d]=[1,2,3]
  console.log(d); */

/* const [a,b,c,[d,e,f]]=[1,2,3,[4,5,6]]
console.log(d);
console.log(d);

 */

const obj={
  name: 'Veeresh',
  salary:'10LPM',
  age:'19',
  adress:{
    city:'Banglore',
    state:'Karnatka',
    country: 'India'
  }

}
// to destructure obj I should put my variable inside curly braces
// name of the variable should be same as inside the object
// here order does not matter 
 let{age,name,salary,adress:{city,state,country}}=obj
  
 console.log(name);
 console.log(country);


