

let age=11;// intialization and declaration:
while (true) {
    console.log('\n Drinking is not allowed:\n');
     age++;
     if(age>20) break;
}

var right_swaps=10;
// but 3,7,9 ko ignore karna hai:
/* continue ka essence :start from  start  */
  while(right_swaps>=0){
    if(right_swaps==3||right_swaps==7|| right_swaps==9){
        right_swaps--;
        continue;
    }
     console.log("Swapping right person's   "+right_swaps);
     right_swaps--;
  }