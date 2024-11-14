const hotelRoomApp = require("./Yash_EGL301.js");
// const person = require("./person.js");
// const courseController = require("./courseController.js");

// Using hotel room App functions
hotelRoomApp.addRoomType("Suite");
hotelRoomApp.addRoomType("Deluxe");
hotelRoomApp.addRoomType("Standard");

hotelRoomApp.addRoomNumber("Suite", 101, 1);
hotelRoomApp.addRoomNumber("Suite", 102, 1);
hotelRoomApp.addRoomNumber("Deluxe", 201, 2);
hotelRoomApp.addRoomNumber("Standard", 301, 3);

console.log("All rooms: ", hotelRoomApp.getAllRooms());

hotelRoomApp.removeRoomNumber("Suite", 101);
console.log("Rooms in 'Suite': ", hotelRoomApp.getRoomsInType("Suite"));

let searchResult = hotelRoomApp.searchRoom(102);
if (searchResult) {
    console.log("Room found: ", searchResult);
}

let roomDetails = hotelRoomApp.getRoomDetails(201);
console.log("Room details: ", roomDetails);

hotelRoomApp.updateRoomDetails(201, 5);
console.log("Updated room details: ", hotelRoomApp.getRoomDetails(201));

hotelRoomApp.removeRoomType("Standard");
console.log("All rooms after removing 'Standard': ", hotelRoomApp.getAllRooms());
