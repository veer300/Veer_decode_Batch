/* Admission Management system:
Student directries : Array: of string:
2: add students:
3: Remove students:
4: List students
5.Udpate Students
6.C R U D -> Create,Read,Update,Delete
Create-> means Add ,Read  ->add students,Update: Update stduents,D-> delete students
 */

/* class AdmissionMangmentSystem{
    constructor (){
        this.student=[]
    }

    addStudent(name){
        this.student.push(name)
        return  `Student ${name} added successfully`

    }
    removeStudent(name){
        const eleIndex=this.student.indexOf(name)
        if(eleIndex!=-1){
            this.student.splice(eleIndex,1)
           return  `Student ${ name } remove successfullly`;
        }
           return `Student ${ name } not founnd in the system`;

        
    }
    updateStudent(oldname,newName){
        const eleIndex=this.student.indexOf(oldname)
        if(eleIndex!=-1){
            this.student[eleIndex]=newName
            return `Student  ${newName} updated Successuflly:`;
        }
        
        return    `Student ${oldname } not found in the system`;
        

    }
    listStudent(){
        this.student.forEach((student,idx)=>{
            console.log(`${idx+1} : ${student}`);
        }
        )



}
}

   


 const ams=new AdmissionMangmentSystem()
 ams.addStudent('Veeresh')
 ams.addStudent('Kisa')
 ams.addStudent('Vasihnavi')
 ams.addStudent('Tanu')
 ams.listStudent()
 //console.log(ams.removeStudent('Kisa'));
 console.log(ams.updateStudent('Kisa','Aastha')); */


 // OTP Generator Build::
 //OTP-> is a random 4 digit number or string :
 // Math.random ->  usage case:
 /* I got a random number but not of 4 digit: */
 // I want random 4 digit random 
 /* It always given number b/w O to 1: */
 /*  1111 to 9999 */
 /*To remove decimal we have math.floor  method   */
 /*  Math.random given random number but it will nto be unique always : */
 /* Disadvantage : SOmetimes it can cause  problem like in : 0.000123 */
 /* Other appraches: */

/*  function generateUniqueOTP() {
    let timeStamp=new Date().getTime();
    
    let timeStampDigits=timeStamp.toString().slice(-4)
              return timeStampDigits
    
 }
    console.log(generateUniqueOTP()); */
    // Map:
//     const studentRegistery={
//         1:'Mithun',
//         2:'Kumar',
//         3:'Saikat'
//     }

// console.log(studentRegistery);
//  Map will overcome the  disadvantage of object:
/* const studentRegisteryMap=new Map(
 [
    [1,'Mithun'],
    [2,'Kumar'],
    [3,'Saikat']
 ]

)
console.log(studentRegisteryMap); */

/* Set  */
//const uniqueEmailId=['Mithun@live','Veeresh@live','Adarsh@live','Veeresh@live']


// loop way of removing duplicated :
/* 
let uniqueEmailIds=[]

for(let i=0;i<uniqueEmailId.length;i++){
    if(!uniqueEmailIds.includes(uniqueEmailId[i])){
        uniqueEmailIds.push(uniqueEmailId[i])
    }
}
console.log(uniqueEmailIds); */

/* 
 function reverword(Sentence) {
   const arr=Sentence.split(' ')
   console.log(arr);
   for(let i=0;i<arr.length;i++){
      arr[i]=arr[i].split('').reverse().join("")

   }        

     return arr.join(' ')
    
 }

 console.log(reverword('Kisa Fatima '));
 */

    function isPalindrome(str) {
 // Remove non -alphanumeric characters and convert to LowerCase:
       const   cleanStr=str.replace(/[^A-za-z)-9]/g,'').toLowerCase()
     
       const reverseStr=cleanStr.split('').reverse().join("")
    
        return cleanStr==reverseStr

    }

     
console.log(isPalindrome('Malayalam'));
console.log(isPalindrome('Racecar'));