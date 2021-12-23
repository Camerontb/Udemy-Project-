'use strict';


// const bookings = []

// const createBooking = function(flightNum,numPassengers = 1, price= 199 * numPassengers){
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     bookings.push.booking
// }

// createBooking("QF123",2,800)
// createBooking("QF123",4,800)
// createBooking("QF123",6,800)


// const flight = "L123";
// const Cameron ={
//     name: "Cameron Butchart",
//     passport: 23443863487
// };

// const checkIn = function(flightNum, passenger){
//     flightNum ='lh299';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 43443863487){
//         alert("checked in")
//     }else{
//         alert("Wrong Passport")
//     }
    
// }

// // checkIn(flight, Cameron);
// // console.log(flight)
// // console.log(Cameron)


// const newPassport = function (person){
//     person.passport = Math.trunc(Math.random()*1000)
// };

// newPassport(Cameron);
// checkIn(flight,Cameron)


// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
// Your tasks:
// 1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
// 3. Createamethod'displayResults'whichdisplaysthepollresults.The
// method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
// 5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

const poll = {
   question:'What is your favourite programming language?',
   options:['0: JavaScript','1:Python','2:Rust'],
   Answers:new Array(3).fill(0),
}

console.log(poll)


const registerNewuser = function(){
   const fav = 
   prompt(poll.question)
   alert("Thank you your answer was " +fav)
   console.log(fav)
   typeof fav


}

registerNewuser()

