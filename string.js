/* String is an method:
1: String is immutable  Thst cvsn not be changed:
2: sequence of character 
3: */
console.log(typeof String);

let name = "Vishwa";
// if I want to access the character of  string:
console.log(name[1]); //i
name[2] = "M"; // you can see that string are immutable:
console.log(name[1]); //i
console.log(name.length); // length of string
// find the character at any given index:
console.log(name[2]);
console.log(name.at(-2)); // you can also put negative index:
// java script also support negative index:

console.log(name.charAt(2));
console.log(typeof Date);