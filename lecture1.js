// object have some kind of attributes and behaviour:

// In java Script use object to represent real world enrtitites:
/*  objects are the collection of keys : key value kind of data structure : that is how the objects are : 
typeOf person is object: */
/* First way of definig an object: 
Key can be string or symbol:
value could be any  data type :

*/
/*   Inside an object value can be function also: */
/* person={
    name:'Visha',
    age:19,
   greet: function () {
    console.log('Hello students');
    
   }
}
console.log(person);
console.log(typeof person);
 */
/* Since javaScript iss a silent language it internally convert in to string  :Since it is integer: */
/* const user={
    1:'Vishwa',
    2:'Mohan',
    3:'Shetal'
}
console.log(user);

 */
/* 2nd way of creating object :using object constructor: */
/* Object is a class : using the object constructor : you can creat object: */
/* New help us to create new object: */
/* const obj= new Object()
  obj.name='Veeresh';
  obj.age=19;
  obj.dob='13-07-2004';
  console.log(obj); */

/* 3rd way of creating object: we can create object using function : */
/* Function call with new keyword create objects */
/*  Inside function:this keyword  refers to the object which is created: */
/* 
function employ(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
const emp_obj = new employ(1, "Vishwa", 7000);
console.log(emp_obj);

 */
/* Manipulating object: */
/* const student ={
  name:'Rohan',
  age:18,
  adress:{
    city:'Banglore',
    state:'Karnatka',
    pincode:271801
  }

}
console.log(student);
 */ // I would like to  read the properties of  student :
/* 
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
console.log(student.adress.city);
console.log(student.adress.pincode);
console.log(student.adress.state);

 */
// I would likee to  insert new fields:
/* 
const person = new Object();

person.contry = "India";
person.hobby = "cricket";
person.name = "Veeresh";
console.log(person);
// update the field of the  object:
person.name='Karena'
console.log(person);
//   Delete  certain field :
// delete  keyword  is not applied on  object: 
delete person.name

console.log(person);
 */

/* Different inbuit methods of an object: */
/* const emp={
  name:'Veeresh',
  age:19,
  salary:1000,
  adress:{
    city:'Banglore',
    contry: 'India'
  }
} */
/* 
// List of all the keys in the given object:

console.log(Object.keys(emp));
// List of all the   values in the given object:
console.log(Object.values(emp));
//List of all the key value  pair:
console.log(Object.entries(emp));
 */

/* I wantt to create an object based  on the existing object:
Use Object .assinng method */
/* {} this will  keey deep copy:
If this not then changes in one reflect in other object: */
 /* const emp_new=Object.assign({},emp,{role:'Developer'})
 console.log(emp_new); */
 /* I want to keep my thing privste so thst it csn't be modifed by other one: */
/* Object.freeze() : object is now freezed and can't be changed: modify ,add .delete */
/* Object.isfrozen()-> cha=eck if object is froze or not" */
/* Objec.seal()->no addition ,no deletion but modification of existing field" */
/* const person={
  name:"Veeresh",
  age:19
} */
/* Object.freeze(person)
console.log(person);
console.log(Object.isFrozen(person)); */
/* console.log(Object.seal(person));
  person.name='Vaishnavi'
console.log(person); */

const person={
  name:'Veeresh',
  age:19,
  salary:67000
}
//  Object.hasOwn(objectName,key)-> key is present or not :
/* Objects.keys(objectName)=>(Object.getOwnPropertyNames(person) will do the same functionality */
/* console.log(person);
console.log(Object.hasOwn(person,'name'));
console.log(Object.getOwnPropertyNames(person));
console.log(Object.keys(person));

 */
//console.log(Object.getOwnPropertyDescriptors(person));
/* Writable->
Enuerable->iteration is allowed when trueand not alllowed when false
Configurable-> */
/* Iteration over the keys: */

Object.defineProperties(person,{
  salary:{
    value:70000,
    enumerable:false,
    writable:true

  }
})
for( k in person){
  console.log(k);
}

