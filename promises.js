/* Prommise is always done in future event   : is always futurestic  Where the condition of doubt happening : */
/* Promises have two outcomes:  Agree and betrail of that promise  : */
/*  In javaScript we have Promise object:  whcih  has two  outcomes :  favourable : Promisied is resolved and Unfavourable : means it i s rejected :*/
/*  After that last phase is completed or settelled: */

/* 
Promise from simran
*/
/* const promiseFromSimran = new Promise((resolve, reject) => {
  let parentDecision = false;
  if (parentDecision) {
    resolve("   Shadi ki tyrai karo ");
  } else {
    reject("Papa ne dusra ladka  dhoodh  liya  hai");
  }
});

promiseFromSimran
  .then((message) => {
    console.log("Message from my girl " + message);
    console.log("My life is set ");
  })
  .catch((msg) => {
    console.log("Messagr from my girl  " + msg);
    console.log("Where is my Tinder !");
  })
  .finally(() => {
    console.log("Finallly I got clarity from Simran");
  });
 */

/* WHere we are using Promsie:
  We are trying to build an appliction in whci we are trying to fetch all the comments: */
/* 
const Dost1tPromise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(" Dost 1 is ready to come");
    } else {
      rejected("Dost 1 is not ready to come:");
    }
  }, 1000);
});
const Dost2tPromise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(" Dost 2 is ready to come");
    } else {
      rejected("Dost 2 is not ready to come:");
    }
  }, 1000);
});

const Dost3tPromise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(" Dost 2 is ready to come");
    } else {
      rejected("Dost 2 is not ready to come:");
    }
  }, 1000);
});
 */
/* Only If all agreed to come then I will marry : */
/* const friendPromises=[Dost1tPromise,Dost2tPromise,Dost3tPromise]
Promise.all(friendPromises).then((result)=>{
    console.log( result +' I will marry from kareena');

}).catch((msg)=>{
    console.log(msg);
    console.log(' Since All my friend did not come I will not marry :');

})

 */
/* 
const friendPromises = [Dost1tPromise, Dost2tPromise, Dost3tPromise];

Promise.any(friendPromises)
  .then((result) => {
    console.log("I will marry from kisa");
    console.log(result);
  })
  .catch((msg) => {
    console.log("I will not be able to marry from kisa ");
    console.log(msg);
  });
 */