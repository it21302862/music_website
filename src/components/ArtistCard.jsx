import React from 'react';
import { useNavigate } from 'react-router-dom';

import artist1 from '../assets/singer-1.jpg';
import artist2 from '../assets/singer-2.jpg';
import artist3 from '../assets/singer-3.png';
import artist4 from '../assets/singer-4.jpg';
import artist5 from '../assets/singer-5.jpg';
import artist6 from '../assets/singer-6.jpg';
import artist7 from '../assets/singer-7.jpg';
import artist8 from '../assets/singer-8.jpg';

const artists = [
  { id: '1', name: 'The Beatles', image: artist1 },
  { id: '2', name: 'Taylor Swift', image: artist2 },
  { id: '3', name: 'Jungkook', image: artist3 },
  { id: '4', name: 'Adele', image: artist4 },
  { id: '5', name: 'Drake', image: artist5 },
  { id: '6', name: 'Justin Bieber', image: artist6 },
  { id: '7', name: 'Billie Eilish', image: artist7 },
  { id: '8', name: 'Kendrick Lamar', image: artist8 },
];

const ArtistCardList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-6">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
          onClick={() => navigate(`/artists/${artist.id}`)}
        >
          <img
            alt="artist_img"
            src={artist.image}
            className="w-full h-56 rounded-lg object-cover"
          />
          <p className="mt-4 font-semibold text-lg text-white truncate">
            {artist.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArtistCardList;
