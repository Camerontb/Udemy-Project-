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


const flight = "L123";
const Cameron ={
    name: "Cameron Butchart",
    passport: 23443863487
};

const checkIn = function(flightNum, passenger){
    flightNum ='lh299';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 43443863487){
        alert("checked in")
    }else{
        alert("Wrong Passport")
    }
    
}

// checkIn(flight, Cameron);
// console.log(flight)
// console.log(Cameron)


const newPassport = function (person){
    person.passport = Math.trunc(Math.random()*1000)
};

newPassport(Cameron);
checkIn(flight,Cameron)
