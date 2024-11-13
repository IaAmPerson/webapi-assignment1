// Simulated database to store rooms and their songs
let rooms = {};

// Adds a new playlist
function addRoomType(roomTypeName) {
  if (rooms[roomTypeName]) {
    return `Room type "${roomTypeName}" already exists`;
  }
  rooms[roomTypeName] = [];
  console.log(`Playlist "${roomTypeName}" is created.`);
}

// Adds a new song to a specific playlist
function addRoom(roomTypeName, roomNo, roomLevel) {
  if (!rooms[roomTypeName]) {
    return `Room type "${roomTypeName}" already exists`;
  }
  const roomType = rooms[roomTypeName];
  const roomExists = rooms.some(song => song.title === title && song.artist === artist);
  if (roomExists) {
    return "Song already exists in the playlist";
  }
  const room = {
    id: playlist.length + 1,
    title: title,
    artist: artist,
    album: album
  };
  roomType.push(room);
  console.log(`Room "${title}" on ${artist} is added to playlist "${playlistName}".`);
}

// Searches for songs with a given term in a specific playlist
function searchSongs(playlistName, search) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const foundSongs = rooms[playlistName].filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase()) ||
    song.album.toLowerCase().includes(search.toLowerCase())
  );
  return foundSongs.length > 0 ? foundSongs : `No songs found in playlist "${playlistName}" matching the search term`;
}

// Gets the details of a song by its ID in a specific playlist
function getSongDetails(playlistName, id) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const song = rooms[playlistName].find(song => song.id === id);
  return song || `Song with ID ${id} does not exist in playlist "${playlistName}"`;
}

// Updates the details of a song in a specific playlist
function updateSongDetails(playlistName, id, updatedDetails) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const playlist = rooms[playlistName];
  const song = playlist.find(song => song.id === id);
  if (song) {
    song.title = updatedDetails.title || song.title;
    song.artist = updatedDetails.artist || song.artist;
    song.album = updatedDetails.album || song.album;
    return song;
  }
  return `Song with ID ${id} does not exist in playlist "${playlistName}"`;
}

// Deletes a song by its ID in a specific playlist
function deleteSong(playlistName, id) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const playlist = rooms[playlistName];
  const songIndex = playlist.findIndex(song => song.id === id);
  if (songIndex !== -1) {
    const [deletedSong] = playlist.splice(songIndex, 1);
    console.log(`Song "${deletedSong.title}" by ${deletedSong.artist} is deleted from playlist "${playlistName}".`);
    return true;
  }
  return `Song with ID ${id} does not exist in playlist "${playlistName}"`;
}

// Lists all songs in a specific playlist
function listSongs(playlistName) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  return rooms[playlistName];
}

// Gets songs by a specific artist in a specific playlist
function getSongsByArtist(playlistName, artist) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const artistSongs = rooms[playlistName].filter(song => song.artist.toLowerCase() === artist.toLowerCase());
  return artistSongs.length > 0 ? artistSongs : `No songs found for artist "${artist}" in playlist "${playlistName}"`;
}

// Deletes an entire playlist
function deletePlaylist(playlistName) {
  if (!rooms[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  delete rooms[playlistName];
  console.log(`Playlist "${playlistName}" is deleted.`);
}

// Exporting the functions as a module
module.exports = {
  addPlaylist,
  addSong,
  searchSongs,
  getSongDetails,
  updateSongDetails,
  deleteSong,
  listSongs,
  getSongsByArtist,
  deletePlaylist
};
