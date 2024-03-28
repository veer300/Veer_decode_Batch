const ages=[19,22,19,24,20,25,26,24,25,24]
// Step 1:sort the array
ages.sort((a,b)=>a-b)
console.log(ages);
// stemp 2: find Min and Max age:
 minAge=ages[0]
 maxAge=ages[ages.length-1]

 if(ages.length%2==0){
    const mid1=ages[ages.length%2-1]
    const mid2=ages[ages.length%2]
     medianAge=mid1+mid2/2;

 }else{
    medianAge=ages[Math.floor(ages.length%2)]
 }

// step 4:  FInd the average of all the item: sum/2:


const inntivalValue=0
// reduce method:
const sumAges=ages.reduce((sum,age)=> sum+age,0)
console.log(sumAges);

const averageAge=sumAges/ages.length;
console.log(averageAge);
// Ages ranges:
  const ageRange=maxAge-minAge
  console.log(ageRange);

const minDifference=Math.abs(minAge-averageAge)
const MaxDifference=Math.abs(maxAge-averageAge)
console.log(minDifference);
console.log(MaxDifference);

