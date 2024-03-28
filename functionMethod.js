const mechanic = {
  name: "Veeresh",
  fixItem: function (itemName, args) {
    console.log(`${this.name} ${itemName}  ${args} has been fixed`);
  },
};

const customer = {
  name: "Kisa",
};
//call allow me to set the value of this keyword 
/* Call set the object who is  calling : */
// call(obj,arugments)
// works of call is to decide whom {this} is refferering :
mechanic.fixItem.call(customer, "TV",'@Veeresh');
/* In case of arrow function this isonly referening the global object: not regular fucntion: */

 /*  Apply is doing the same thing what the call does :
 In case of appply we pass array as an argument;: */
 /* Bind is nothig but  */

 mechanic.fixItem.apply(customer,['TV', '@Veeresh'])
mechanic.fixItem.bind(customer,'Refirgrator','XYZ')()
/* Bind is nothig but  it provides the function of the samething : so that you can use this in later no : as many time you want: */
/* Caall,bind ,apply :To make and use of other object as function: */
