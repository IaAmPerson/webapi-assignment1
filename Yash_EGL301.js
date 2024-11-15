//Database array
let rooms = [];


//Add new room type
function addRoomType(roomTypeName) {
    //Check if room type already exists
    let roomTypeExists = rooms.some(room => room.roomTypeName === roomTypeName);
    if (!roomTypeExists) {
        rooms.push({ roomTypeName, rooms: [] }); //Add new room type
        console.log(`Room type '${roomTypeName}' added successfully.`);
    } else {
        console.log(`Room type '${roomTypeName}' already exists.`);
    }
}

//Remove room type
function removeRoomType(roomTypeName) {
    //Filter out the room type from the array
    rooms = rooms.filter(room => room.roomTypeName !== roomTypeName);
    console.log(`Room type '${roomTypeName}' removed successfully.`);
}

//Add a room number to a specific room type
function addRoomNumber(roomTypeName, roomNumber, level) {
    let roomType = rooms.find(room => room.roomTypeName === roomTypeName);
    if (roomType) {
        //Add room number with details
        roomType.rooms.push({ roomNumber, level });
        console.log(`Room number '${roomNumber}' added to room type '${roomTypeName}'.`);
    } else {
        console.log(`Room type '${roomTypeName}' not found.`);
    }
}

//Remove a room number from a room type
function removeRoomNumber(roomTypeName, roomNumber) {
    let roomType = rooms.find(room => room.roomTypeName === roomTypeName);
    if (roomType) {
        //Filter out the room number from the room type
        roomType.rooms = roomType.rooms.filter(room => room.roomNumber !== roomNumber);
        console.log(`Room number '${roomNumber}' removed from room type '${roomTypeName}'.`);
    } else {
        console.log(`Room type '${roomTypeName}' not found.`);
    }
}

//Get all rooms
function getAllRooms() {
    return rooms;
}

//Get all room numbers under a specific room type
function getRoomsInType(roomTypeName) {
    let roomType = rooms.find(room => room.roomTypeName === roomTypeName);
    if (roomType) {
        return roomType.rooms;
    } else {
        console.log(`Room type '${roomTypeName}' not found.`);
        return [];
    }
}

//Search for room by room number
function searchRoom(roomNumber) {
    for (let roomType of rooms) {
        let room = roomType.rooms.find(r => r.roomNumber === roomNumber);
        if (room) {
            return { ...room, roomTypeName: roomType.roomTypeName };
        }
    }
    console.log(`Room number '${roomNumber}' not found.`);
    return null;
}

//Get room details by room number
function getRoomDetails(roomNumber) {
    return this.searchRoom(roomNumber);
}

//Update room details
function updateRoomDetails(roomNumber, newLevel) {
    let room = this.searchRoom(roomNumber);
    if (room) {
        room.level = newLevel; //Update room level
        console.log(`Room number '${roomNumber}' updated to level '${newLevel}'.`);
    } else {
        console.log(`Room number '${roomNumber}' not found for update.`);
    }
}

module.exports = {
    addRoomType,
    removeRoomType,
    addRoomNumber,
    removeRoomNumber,
    getAllRooms,
    getRoomsInType,
    searchRoom,
    getRoomDetails,
    updateRoomDetails
};
