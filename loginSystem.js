/* Let uscrete the arry of object: */




/* var admin_credentials={
        email:'Veereshwartiwari3@gmail.com',
        Password:'@veeresh'

    } */
    // Let us create the array of objects:

var admin_credentials=[{
    name:'Veereshwar',
    email:'Veereshwartiwari3@gmail.com',
        Password:'@veeresh'    
},  
{    name :'Vaishnavi',
    email:'Vaishnavi3@gmail.com',
    Password:'@Vaishnavi'
},
  {
    name:'Krishna',
    email:'Krishna3@gmail.com',
    Password:'@Krrishna'

  },{
    name:'aarav',
    email:'aaravpandey6900@gmail.com',
    Password:'aarav6900'    
  }
  ]

    

    /* Email is always unique: EMail is always a sourrce of truth: 
    but function is not very efficient  routine to make login system*/


function loginSystem(name,email,password) {
for(var i=0;i<admin_credentials.length;i++){  
      if(email==admin_credentials[i].email && password==admin_credentials[i].Password   ) {
        return 'Login Successful:'
    }else if(email==admin_credentials[i].email && password!=admin_credentials[i].Password  ){
       return 'Password Mismatch'
    }
    
   
}  
   return 'Invalid Cedientials'  
}
/* We have also seen Dry  */
console.log(loginSystem('Veereshwar','Veereshwartiwari3@gmail.com','@veeresh'));
console.log(loginSystem('Veereshwartiwari3@gmail.com','@veer'));

console.log(loginSystem('veer@gamil.com','@veer'));
console.log(loginSystem('aarav','aaravpandey6900@gmail.com','aarav6900'));
