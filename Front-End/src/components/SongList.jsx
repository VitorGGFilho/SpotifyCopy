import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currSongObj, index) => (
          <SongItem {...currSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() =>
          items === 5 ? setItems(items + 5) : setItems(items - 5)
        }
      >
        {items === 5 ? "Ver mais" : "Ver menos"}
      </p>
    </div>
  );
};

export default SongList;
