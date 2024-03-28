
/* This refer to the current object: 
This refers to the object : */
/* This in javaScript is typically a global object : */
/*   And it has mny improtant method: */
/* function func() {
    console.log(this);
}

console.log(func()); */


const obj= {
    name:'Veeresh',
    age:18,
    greet:function () {
        console.log(this.name);
    }
}

obj.greet()