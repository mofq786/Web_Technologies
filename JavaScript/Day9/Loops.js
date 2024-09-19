var pin = 1234;

let userPin;

do{
    userPin = prompt("Enter your pin");
}while(userPin != pin)

console.log("Pin Correct Access Granted");