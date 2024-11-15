# Assignment 1

## Prerequisites

1. Clone the repository to your local directory.
2. Create a new file named `app.js` and insert the code below:
    ```javascript 
    const hotelRoomApp = require("./Yash_EGL301.js");

    console.log("");

    //Add new room type
    hotelRoomApp.addRoomType("Suite");
    hotelRoomApp.addRoomType("Deluxe");
    hotelRoomApp.addRoomType("Standard");

    console.log("");

    //Remove room type
    hotelRoomApp.removeRoomType("Standard");
    console.log("All rooms after removing 'Standard': ", hotelRoomApp.getAllRooms());

    console.log("");

    //Add a room number to a specific room type
    hotelRoomApp.addRoomNumber("Suite", 101, 1);
    hotelRoomApp.addRoomNumber("Suite", 102, 1);
    hotelRoomApp.addRoomNumber("Deluxe", 201, 2);

    console.log("");

    //Remove a room number from a room type
    hotelRoomApp.removeRoomNumber("Suite", 101);
    console.log("Rooms in 'Suite' after removal: ", hotelRoomApp.getRoomsInType("Suite"));

    console.log("");

    //Get all rooms
    console.log("All rooms: ", hotelRoomApp.getAllRooms());

    console.log("");

    //Get all room numbers under a specific room type
    console.log("Rooms in 'Suite': ", hotelRoomApp.getRoomsInType("Suite"));
    console.log("Rooms in 'Deluxe': ", hotelRoomApp.getRoomsInType("Deluxe"));

    console.log("");

    //Search for room by room number
    let searchResult = hotelRoomApp.searchRoom(102);
    if (searchResult) {
        console.log("Room found: ", searchResult);
    }

    console.log("");

    //Get room details by room number
    let roomDetails = hotelRoomApp.getRoomDetails(201);
    console.log("Room details for room 201: ", roomDetails);

    console.log("");

    //Update room details
    hotelRoomApp.updateRoomDetails(201, 5);
    console.log("Updated room details for room 201: ", hotelRoomApp.getRoomDetails(201));

    console.log("");
        ```


## How to run the code

To run the module, open a new terminal and enter the following command: ```node app.js```


## Code explanation

- addRoomType allows you to add a room type. For example: standard, deluxe, suites.

- removeRoomType allows you to remove an existing room type.

- addRoomNumber allows you to add a room. For example: 101, 201, 102.

- removeRoomNumber allows you to remove an existing room.

- getAllRooms allows you to list all currently existing rooms.

- getRoomsInType allows you to list all currently existing rooms in an existing room type.

- searchRoom allows you to search for a currently existing room.

- getRoomDetails allows you get all relevant details for the selected room.

- updateRoomDetails allows you update all relevant details for the selected room.


# References
I had ChatGPT make my code more readable. I had it guide me through the search function.