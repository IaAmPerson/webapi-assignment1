// Database array
let rooms = [];


// Add new room type function
function addRoomType(roomTypeName) {
    // Checking if room type already exists
    let roomTypeExists = rooms.some(room => room.roomTypeName === roomTypeName);
    if (!roomTypeExists) {
        rooms.push({ roomTypeName, rooms: [] }); // Add new room type
        console.log(`Room type '${roomTypeName}' added successfully.`);
    } else {
        console.log(`Room type '${roomTypeName}' already exists.`);
    }
}

// Function to remove an existing room type
function removeRoomType(roomTypeName) {
    // Filter out the room type from the array
    rooms = rooms.filter(room => room.roomTypeName !== roomTypeName);
    console.log(`Room type '${roomTypeName}' removed successfully.`);
}

// Function to add a room number to a specific room type
function addRoomNumber(roomTypeName, roomNumber, level) {
    let roomType = rooms.find(room => room.roomTypeName === roomTypeName);
    if (roomType) {
        // Add the room number with details
        roomType.rooms.push({ roomNumber, level });
        console.log(`Room number '${roomNumber}' added to room type '${roomTypeName}'.`);
    } else {
        console.log(`Room type '${roomTypeName}' not found.`);
    }
}

// Function to remove a room number from a room type
function removeRoomNumber(roomTypeName, roomNumber) {
    let roomType = rooms.find(room => room.roomTypeName === roomTypeName);
    if (roomType) {
        // Filter out the room number from the room type
        roomType.rooms = roomType.rooms.filter(room => room.roomNumber !== roomNumber);
        console.log(`Room number '${roomNumber}' removed from room type '${roomTypeName}'.`);
    } else {
        console.log(`Room type '${roomTypeName}' not found.`);
    }
}

// Function to get the entire list of rooms
function getAllRooms() {
    return rooms;
}

// Function to get all room numbers under a specific room type
function getRoomsInType(roomTypeName) {
    let roomType = rooms.find(room => room.roomTypeName === roomTypeName);
    if (roomType) {
        return roomType.rooms;
    } else {
        console.log(`Room type '${roomTypeName}' not found.`);
        return [];
    }
}

// Function to search for a room by room number
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

// Function to get room details by room number
function getRoomDetails(roomNumber) {
    return this.searchRoom(roomNumber);
}

// Function to update room details
function updateRoomDetails(roomNumber, newLevel) {
    let room = this.searchRoom(roomNumber);
    if (room) {
        room.level = newLevel; // Update the level
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
