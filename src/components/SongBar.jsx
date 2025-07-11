import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  const isCurrentSong = activeSong?.id === song?.id;

  const artworkUrl = song?.attributes?.artwork?.url
    ?.replace('{w}', '125')
    ?.replace('{h}', '125') || song?.images?.coverart;

  const songTitle = song?.attributes?.albumName || song?.attributes?.albumName || 'Unknown Title';
  const artistName = song?.attributes?.artistName || 'Unknown Artist';

  return (
    <div
      className={`w-full flex flex-row items-center py-2 p-4 rounded-lg cursor-pointer mb-2
      hover:bg-[#4c426e] ${isCurrentSong ? 'bg-[#4c426e]' : 'bg-transparent'}`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>

      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={artworkUrl}
          alt={songTitle}
        />

        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.id}`}>
            <p className="text-xl font-bold text-white truncate">{songTitle}</p>
          </Link>
          <Link to={`/artists/${artistId || song.id}`}>
            <p className="text-base text-gray-300 mt-1 truncate">{artistName}</p>
          </Link>
        </div>
      </div>

      {!artistId && (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )}
    </div>
  );
};

export default SongBar;
