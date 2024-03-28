/* Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%. */

let paymentMethod = "paypal";
switch (paymentMethod) {
    case `credit`:
        console.log(`Processing fee for  credit Method: 2%`);
        break;

    case `debit`:
        console.log(`Processing fee for  debit Method: 1.5%`);
        break;
    case `paypal`:
        console.log(`Processing fee for Paypal Method :3%`);
        break;

    default:
        console.log(`Invalid Payment Method `);
        break;
}
