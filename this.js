
/* This refer to the current object: 
This refers to the object : */
/* This in javaScript is typically a global object : */
/*   And it has mny improtant method: */
/* function func() {
    console.log(this);
}

console.log(func()); */
/*  When you call this in the reference of object then this is reffering to the obj it's part of: */
/*  This only will get refernece inside the function not outside the function it will refer to the global object  at that time: globalObject.name: is an undefined field: */
/*  Outside the function this will  always refer to the global object: */
/* Function inside object will refer to that objectt  if and  only if: */
// function is defined inside object :It wil refer to the immediate parent object
/* Like regular function  the arrow function :this does not refer to the object:  */
/* 
symbolic  representation of global objeect :{}  */
/* 
const obj= {
    name:'Veeresh',
    alias:this.name+'  Mohan',
    age:18,
    greet:function () {
        console.log(this.name);
    },
    adress:{
        city:'Banglore',
        country :this.name+' India',
        name: 'Vaishnavi',
      greet1:()=>{// drawback of arrow function :
        console.log(this.name);
      }
    }
}

obj.greet()
console.log(obj.alias);
console.log(obj.adress.country);
console.log(obj.adress.greet1());
 */

/* Creatig object using construction functionn  : */
/* When you use this keyword inside a constructor function : 
this will refer to the object created*/
/* Construction function  */
    /* function Person(name) {
        this.name=name;
        
    }
   ;

    const person_obj=new Person('Vishwa')
    person_obj.salary=100
    console.log(person_obj);
    console.log(person_obj.name);
    console.log(person_obj.salary);
     */
    
    /*Function method : call ,apply bind :  */

    /* In the real world we  try to reuse other property: */

    
