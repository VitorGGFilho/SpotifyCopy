import { artistArray } from "../../Front-End/src/assets/database/artists.js";
import { songsArray } from "../../Front-End/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongsObj = { ...currentSongObj };
  delete newSongsObj.id;

  return newSongsObj;
});

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);
const responseSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(responseSongs);
console.log(responseArtists);

// console.log(newArtistArray);
// console.log(newSongsArray);
