/* Call ,apply  and bind: */
/*    */

const mechanic = {
  name: "Veeresh",
  fixItem: function (itemName,args) {
    console.log(`${this.name}   ${itemName}   ${ args} has been fixed  by ${mechanic.name}`);
  },
};
/* call  allws me  to set the value of this: by default this reprsent its immediate parent but in that case
    it repsent the person object:
    call  helps you decide  that which object will fit inside  the this keyword: */
const person={
    name: 'Mohan'
}
/* In case of call method ,you pass(object,comma sepersted  argument) 
   In case of apply  method ,you pass (object, array as an arraay  of arguments:)
   In case of bind :  this will be a function : so I can go and execute it sny time and any no of time:
   */

   mechanic.fixItem.call(person,'T V')
   mechanic.fixItem.apply(person,['Refrigrator','XYZ'])
   console.log( mechanic.fixItem.bind(person,'Refigrator',"Xyz"));//[Function: bound fixItem]

   /*  WE can not  apply thatthis in arrow function because it will not refer the object by this  */
   mechanic.fixItem.bind(person,'Refigrator',"Xyz")();