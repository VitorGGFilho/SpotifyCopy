import React from "react";
import Player from "../components/player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currSongObj) => currSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === artist
  );

  const random2Index = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[random2Index]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj._id}`}>
            <img
              width={75}
              height={75}
              src={artistObj.image}
              alt={`Imagem album ${artist}`}
            />
          </Link>
        </div>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
