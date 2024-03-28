/* Break up break the loop and come outside of it : */
  var i;
  for(i=1;i<=5;i++){
    if(i==3)break;
    console.log('Please havee a food:');
  }
// continue: DEEPIKA and Ranveer:
// you and anj : should be like continue or break ?
// continue means :skip just that iteration only:
console.log("Continue statement :");
/* Always be in the life continue: */

  for(i=1;i<=5;i++){
    if(i==3) continue;
    console.log('Please have food:'+i+"  ");
  }

  for(i=1;i<=3;i++){
    console.log('i ='+i);
    for(j=1;j<=3;j++){
        console.log('Inside j, value of j ='+j);
        break;
    }
  }