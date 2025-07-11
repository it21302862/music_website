import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
    'x-rapidapi-key': '9188aa01b6mshbbfefb14f454723p17be26jsneccd974c729b'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      // headers.set('x-rapidapi-key', '1d09507e6amsh47dcefd04a37130p125bf3jsn32f55a3a8ae5');
      headers.set('x-rapidapi-key', '9188aa01b6mshbbfefb14f454723p17be26jsneccd974c729b');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => 'v1/charts/world?country_code=DZ',
    }),
    getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery, } = shazamCoreApi;

// const topCharts =
//   [{
//     "id": "1804419953",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1804419953?l=en-GB",
//     "attributes": {
//       "albumName": "You'll Be Alright, Kid (Chapter 1)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-09-26",
//       "durationInMillis": 186964,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USAT22500463",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f1/91/6e/f1916ecb-0b21-57da-7d60-cd21ae0ff40b/075679614797.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cdb192",
//         "textColor2": "de8e78",
//         "textColor4": "b47462",
//         "textColor1": "fedab4",
//         "bgColor": "0d0c0a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Adam Yaron, Alex Warren, Cal Shapiro & Mags Duval",
//       "url": "https://music.apple.com/dz/album/ordinary/1804419951?i=1804419953",
//       "playParams": {
//         "id": "1804419953",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Ordinary",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/db/c6/1f/dbc61f12-5481-f8db-4640-1d40b3be5c92/mzaf_17636626085973163298.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Alex Warren"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1804419953/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1802070537",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1802070537?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1804419953/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1572671688",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1572671688?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749625647523,
//         "MZ_INDEXER": 1752151331462
//       }
//     }
//   },
//   {
//     "id": "1795039319",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1795039319?l=en-GB",
//     "attributes": {
//       "albumName": "Shake It To The Max (FLY) [Remix] - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afrobeats",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-02-21",
//       "durationInMillis": 178776,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QZS7J2542546",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/62/0d/36/620d360f-21f4-8257-8aae-685d70714374/764656160678_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "ccd1d1",
//         "textColor2": "f6cd10",
//         "textColor4": "d1b11a",
//         "textColor1": "eff5f5",
//         "bgColor": "3f4042",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Emwah Warmington, Chinsea Linda Lee, Neil Dyer, Molly Ama Montgomery & ADAM KEVIN ALEXANDER",
//       "url": "https://music.apple.com/dz/album/shake-it-to-the-max-fly-remix/1795039318?i=1795039319",
//       "playParams": {
//         "id": "1795039319",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Shake It To The Max (FLY) [Remix]",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/65/ac/1265ac25-2bc1-8796-d779-cd16290b3886/mzaf_12029551374343119301.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MOLIY, Silent Addy, Skillibeng & Shenseea",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1795039319/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1795039319/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1493122482",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1493122482?l=en-GB"
//           },
//           {
//             "id": "1477392077",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1477392077?l=en-GB"
//           },
//           {
//             "id": "1036011142",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1036011142?l=en-GB"
//           },
//           {
//             "id": "1132311326",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1132311326?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751571845867,
//         "MZ_INDEXER": 1751567319472
//       }
//     }
//   },
//   {
//     "id": "1719165204",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1719165204?l=en-GB",
//     "attributes": {
//       "albumName": "44",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Singer/Songwriter"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2020-03-27",
//       "durationInMillis": 187619,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FRX452055103",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f4/5e/65/f45e65d9-d566-a301-5fbd-41f3d8a0a6f8/0.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b9bec3",
//         "textColor2": "ccd6e9",
//         "textColor4": "a8b1c1",
//         "textColor1": "e1e7eb",
//         "bgColor": "1a1e21",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Гусейнли Джахид Афраил оглы & Малахин Михаил",
//       "url": "https://music.apple.com/dz/album/%D0%BA%D0%B0%D0%BC%D0%B8%D0%BD/1719165200?i=1719165204",
//       "playParams": {
//         "id": "1719165204",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Камин",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a1/7d/ea/a17deabe-acf8-efa4-886a-22b796b1e4dc/mzaf_8691947543704915954.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "EMIN & JONY"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1719165204/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1574337523",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1574337523?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1719165204/artists?l=en-GB",
//         "data": [
//           {
//             "id": "275351904",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/275351904?l=en-GB"
//           },
//           {
//             "id": "1444702518",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1444702518?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752140912396,
//         "MZ_INDEXER": 1751031296056
//       }
//     }
//   },
//   {
//     "id": "1795180193",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1795180193?l=en-GB",
//     "attributes": {
//       "albumName": "Selfish Nightmares - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-06-01",
//       "durationInMillis": 155063,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZMEP2444086",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/fc/8c/50fc8c7c-d11b-b8a0-1d77-379ff6f4653f/artwork.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "0a7eb6",
//         "textColor2": "1e9bdc",
//         "textColor4": "187db1",
//         "textColor1": "0c9de3",
//         "bgColor": "010104",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Michael Jimmie hunter",
//       "url": "https://music.apple.com/dz/album/young-black-rich/1795180191?i=1795180193",
//       "playParams": {
//         "id": "1795180193",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Young Black & Rich",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/18/88/1b/18881b41-75d1-5db2-9010-80d8a7e3de8e/mzaf_14120672805166862717.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Melly Mike",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1795180193/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1799596065",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1799596065?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1795180193/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1066310870",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1066310870?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745722309776,
//         "MZ_INDEXER": 1752218093730
//       }
//     }
//   },
//   {
//     "id": "1763742879",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1763742879?l=en-GB",
//     "attributes": {
//       "albumName": "Stacks from All Sides",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop",
//         "Music",
//         "Hip-Hop/Rap"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-08-20",
//       "durationInMillis": 173037,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "HKE022272921",
//       "artwork": {
//         "width": 2000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/95/32/3b/95323b31-1bdd-9bcc-8a6b-329a8d97ec03/749085368376.jpg/440x440bb.jpg",
//         "height": 2000,
//         "textColor3": "b9bfc0",
//         "textColor2": "f5df66",
//         "textColor4": "c4b456",
//         "textColor1": "e7edeb",
//         "bgColor": "000614",
//         "hasP3": false
//       },
//       "audioLocale": "zh-Hans-CN",
//       "composerName": "SKAI ISYOURGOD",
//       "url": "https://music.apple.com/dz/album/stacks-from-all-sides/1763742878?i=1763742879",
//       "playParams": {
//         "id": "1763742879",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Stacks from All Sides",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bb/cd/a4/bbcda451-60d4-63af-e187-b69007958c7e/mzaf_710773405866556865.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "SKAI ISYOURGOD"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1763742879/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1763742879/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1663437158",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1663437158?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195423502,
//         "MZ_INDEXER": 1752025431358
//       }
//     }
//   },
//   {
//     "id": "1440769123",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440769123?l=en-GB",
//     "attributes": {
//       "albumName": "THE E.N.D. (THE ENERGY NEVER DIES)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2009-06-03",
//       "durationInMillis": 268840,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUM70967623",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/fc/47/42fc4794-3c69-8c00-e528-1c7e92b5ac93/09UMGIM13833.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "58b354",
//         "textColor2": "29ca62",
//         "textColor4": "21a24f",
//         "textColor1": "6ee068",
//         "bgColor": "010104",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "William Adams, Allan Pineda, Jaime Gomez, Stacy Ferguson, David Guetta, Mark Knight, Adam Walder, Jean-Baptiste, Jaime L. Munson & Robert Ginyard Jr.",
//       "url": "https://music.apple.com/dz/album/rock-that-body/1440768902?i=1440769123",
//       "playParams": {
//         "id": "1440769123",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Rock That Body",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/89/54/f3/8954f316-9cbf-2175-fae8-98e7bc13e375/mzaf_3734096812502458130.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Black Eyed Peas"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440769123/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445826161",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445826161?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440769123/artists?l=en-GB",
//         "data": [
//           {
//             "id": "360391",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/360391?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750458928666,
//         "MZ_INDEXER": 1751395272098
//       },
//       "formerIds": [
//         "318393309"
//       ]
//     }
//   },
//   {
//     "id": "1820932741",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820932741?l=en-GB",
//     "attributes": {
//       "albumName": "Давай сконнектимся - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 207057,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FRX452534646",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3a/b1/be/3ab1be2e-e053-c450-8d97-47a66564342e/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cfcfcf",
//         "textColor2": "ececec",
//         "textColor4": "c8c8c8",
//         "textColor1": "f5f5f5",
//         "bgColor": "363636",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Кирилл Игоревич Незборецкий",
//       "url": "https://music.apple.com/dz/album/%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9-%D1%81%D0%BA%D0%BE%D0%BD%D0%BD%D0%B5%D0%BA%D1%82%D0%B8%D0%BC%D1%81%D1%8F/1820932732?i=1820932741",
//       "playParams": {
//         "id": "1820932741",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Давай сконнектимся",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d8/86/90/d8869078-12f5-9fba-31c5-438e31daa678/mzaf_7178435612254094638.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "T-Fest",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820932741/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820932741/artists?l=en-GB",
//         "data": [
//           {
//             "id": "718954463",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/718954463?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752106500939,
//         "MZ_INDEXER": 1752104669590
//       }
//     }
//   },
//   {
//     "id": "1743250261",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1743250261?l=en-GB",
//     "attributes": {
//       "albumName": "This Wasn't Meant For You Anyway",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "2024-05-29",
//       "durationInMillis": 284067,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBUM72401610",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d4/85/6b/d4856be7-64d4-5c70-5d5d-18552f826426/24UMGIM46883.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3b2e32",
//         "textColor2": "181923",
//         "textColor4": "403b3f",
//         "textColor1": "120913",
//         "bgColor": "e0c3b1",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Lola Young & Conor Dickinson",
//       "url": "https://music.apple.com/dz/album/messy/1743250148?i=1743250261",
//       "playParams": {
//         "id": "1743250261",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Messy",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/79/c9/32/79c9321b-aeb4-d9bb-95a4-fdd3886eb1f4/mzaf_13964890185861862073.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lola Young",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1743250261/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1789154801",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1789154801?l=en-GB"
//           },
//           {
//             "id": "1748817937",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1748817937?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1743250261/artists?l=en-GB",
//         "data": [
//           {
//             "id": "452271760",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/452271760?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751570351252,
//         "MZ_INDEXER": 1751569716426
//       }
//     }
//   },
//   {
//     "id": "1810796591",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1810796591?l=en-GB",
//     "attributes": {
//       "albumName": "Lose My Mind (feat. Doja Cat) [From F1® The Movie] - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Hip-Hop/Rap"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-30",
//       "durationInMillis": 209051,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT22503116",
//       "artwork": {
//         "width": 3600,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c3/80/32/c380329e-2531-a71b-325b-4395640b877c/075679614438.jpg/440x440bb.jpg",
//         "height": 3600,
//         "textColor3": "bc5d41",
//         "textColor2": "f16640",
//         "textColor4": "c15233",
//         "textColor1": "eb7451",
//         "bgColor": "020202",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Amala Zandile Dlamini, Caleb Toliver, Grant Boutin, Hans Zimmer & Ryan Tedder",
//       "url": "https://music.apple.com/dz/album/lose-my-mind-feat-doja-cat-from-f1-the-movie/1810796590?i=1810796591",
//       "playParams": {
//         "id": "1810796591",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Lose My Mind (feat. Doja Cat) [From F1® The Movie]",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/6b/98/e06b980e-a9e1-80a9-13f5-bfc90027db2b/mzaf_8528368618063258041.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Don Toliver"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1810796591/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1810796591/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1237012992",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1237012992?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751587147676,
//         "MZ_INDEXER": 1751587497267
//       }
//     }
//   },
//   {
//     "id": "1819042579",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819042579?l=en-GB",
//     "attributes": {
//       "albumName": "Dame Un Grrr - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop in Spanish",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 133220,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "RO2DY2500528",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ce/f1/c0/cef1c0fa-bfe6-c88f-bcd9-94a4d68bc278/25UMGIM81208.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c7c9b0",
//         "textColor2": "b4d4c6",
//         "textColor4": "97afa2",
//         "textColor1": "f1f5d7",
//         "bgColor": "221b16",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Fantomel & KATE LINN",
//       "url": "https://music.apple.com/dz/album/dame-un-grrr/1819042576?i=1819042579",
//       "playParams": {
//         "id": "1819042579",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Dame Un Grrr",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/be/d3/83/bed38300-1b9d-39d9-7dc7-1198797d805d/mzaf_1733363395953342986.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Fantomel & KATE LINN"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819042579/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1824225488",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1824225488?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819042579/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1736085960",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1736085960?l=en-GB"
//           },
//           {
//             "id": "742406044",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/742406044?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752170253282,
//         "MZ_INDEXER": 1751929567066
//       }
//     }
//   },
//   {
//     "id": "1816367838",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1816367838?l=en-GB",
//     "attributes": {
//       "albumName": "Ngishutheni - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-23",
//       "durationInMillis": 317221,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ZA56E2527912",
//       "artwork": {
//         "width": 1657,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ec/ce/f2/eccef2d4-cd3a-24e3-7f40-2133e2096949/766214679691.jpg/440x440bb.jpg",
//         "height": 1657,
//         "textColor3": "a8a8b7",
//         "textColor2": "b3c1d8",
//         "textColor4": "939eaf",
//         "textColor1": "cecfe2",
//         "bgColor": "130f0c",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Goon Flavour & Khaogelo Moagi",
//       "url": "https://music.apple.com/dz/album/ngishutheni/1816367837?i=1816367838",
//       "playParams": {
//         "id": "1816367838",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Ngishutheni",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3e/60/ba/3e60ba40-5b45-d388-6c83-2dc037eb2a81/mzaf_2445456323119624687.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Goon Flavour, Master KG & Eemoh"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1816367838/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1816367838/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1686933474",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1686933474?l=en-GB"
//           },
//           {
//             "id": "1400676576",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1400676576?l=en-GB"
//           },
//           {
//             "id": "1586815658",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1586815658?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749180725515,
//         "MZ_INDEXER": 1750324557001
//       }
//     }
//   },
//   {
//     "id": "1743852427",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1743852427?l=en-GB",
//     "attributes": {
//       "albumName": "Bird's Eye",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2024-05-03",
//       "durationInMillis": 213467,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USAT22401137",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/07/8c/6c/078c6c94-d38d-0451-d57b-23e957b569f8/075679660893.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bba896",
//         "textColor2": "d2b292",
//         "textColor4": "b0947b",
//         "textColor1": "e0cbb4",
//         "bgColor": "281b22",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Anderson .Paak, Brent Reynolds, Christian Farlow, Craig Balmoris, Dacoury Dahi Natche, Dominic Angelella, Jaelen Irizarry, Julian Nixon, Ravyn Lenae, Sarah Aarons & Spencer Stewart",
//       "url": "https://music.apple.com/dz/album/love-me-not/1743852410?i=1743852427",
//       "playParams": {
//         "id": "1743852427",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Love Me Not",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ab/d3/56/abd356d5-dd00-e0b7-4c0a-c4105abb056d/mzaf_4522465575669955057.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ravyn Lenae"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1743852427/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1743852427/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1044417443",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1044417443?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569059778,
//         "MZ_INDEXER": 1752058260746
//       }
//     }
//   },
//   {
//     "id": "1811333176",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811333176?l=en-GB",
//     "attributes": {
//       "albumName": "Blessings - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-09",
//       "durationInMillis": 219650,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBARL2500591",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/80/6d/db/806ddb68-79b2-bacd-8441-eba07b192e59/196873126555.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3d1602",
//         "textColor2": "160e0b",
//         "textColor4": "441d09",
//         "textColor1": "0e0502",
//         "bgColor": "fc5802",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Calvin Harris & Clementine Douglas",
//       "url": "https://music.apple.com/dz/album/blessings/1811333156?i=1811333176",
//       "playParams": {
//         "id": "1811333176",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Blessings",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/89/71/6e/89716e33-37e2-2887-4901-fdeeca8e9115/mzaf_18382757922310615477.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Calvin Harris & Clementine Douglas"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811333176/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1820384210",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1820384210?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811333176/artists?l=en-GB",
//         "data": [
//           {
//             "id": "201955086",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/201955086?l=en-GB"
//           },
//           {
//             "id": "638770668",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/638770668?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749860800833,
//         "MZ_INDEXER": 1752103369743
//       }
//     }
//   },
//   {
//     "id": "1824600280",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1824600280?l=en-GB",
//     "attributes": {
//       "albumName": "What Did I Miss? - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-07-05",
//       "durationInMillis": 194324,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12505774",
//       "artwork": {
//         "width": 1600,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/95/c4/7a95c4b0-9a1b-45f5-0a46-a3dff4429d89/25UMGIM91536.rgb.jpg/440x440bb.jpg",
//         "height": 1600,
//         "textColor3": "21363d",
//         "textColor2": "0a0f14",
//         "textColor4": "21363d",
//         "textColor1": "0a0f14",
//         "bgColor": "81d3e0",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Aubrey Drake Graham",
//       "url": "https://music.apple.com/dz/album/what-did-i-miss/1824600278?i=1824600280",
//       "playParams": {
//         "id": "1824600280",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "What Did I Miss?",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/75/38/2d7538a4-934d-870e-cdb9-2926d6bb9228/mzaf_9024311332756954388.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Drake",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1824600280/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1824600280/artists?l=en-GB",
//         "data": [
//           {
//             "id": "271256",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/271256?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195353450,
//         "MZ_INDEXER": 1751941777940
//       }
//     }
//   },
//   {
//     "id": "1811175545",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811175545?l=en-GB",
//     "attributes": {
//       "albumName": "Play",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Singer/Songwriter"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2025-04-04",
//       "durationInMillis": 162029,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAHS2500081",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/a1/fb/7ea1fb0b-97c8-6e1d-b44c-8a71a5d00ac4/5021732786821.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "3f162c",
//         "textColor2": "161616",
//         "textColor4": "442837",
//         "textColor1": "100008",
//         "bgColor": "f971ba",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Ed Sheeran, Ilya Salmanzadeh, Johnny McDaid & Savan Kotecha",
//       "url": "https://music.apple.com/dz/album/azizam/1811175532?i=1811175545",
//       "playParams": {
//         "id": "1811175545",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Azizam",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/df/17/7d/df177d66-d8dc-73be-7745-8c399d86f10d/mzaf_10853568191221693848.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ed Sheeran"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811175545/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811175545/artists?l=en-GB",
//         "data": [
//           {
//             "id": "183313439",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/183313439?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751571285845,
//         "MZ_INDEXER": 1752226073151
//       }
//     }
//   },
//   {
//     "id": "1811175544",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811175544?l=en-GB",
//     "attributes": {
//       "albumName": "Play",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Singer/Songwriter"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-03-19",
//       "durationInMillis": 179082,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAHS2500177",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/a1/fb/7ea1fb0b-97c8-6e1d-b44c-8a71a5d00ac4/5021732786821.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "3f162c",
//         "textColor2": "161616",
//         "textColor4": "442837",
//         "textColor1": "100008",
//         "bgColor": "f971ba",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Arijit Singh, Avinash Chouhan, Ed Sheeran, Ilya Salmanzadeh, Johnny McDaid, Mayur Puri & Savan Kotecha",
//       "url": "https://music.apple.com/dz/album/sapphire/1811175532?i=1811175544",
//       "playParams": {
//         "id": "1811175544",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Sapphire",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/de/ec/12deec07-2f3c-f748-ec35-8952629d5934/mzaf_5501265582199689836.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ed Sheeran"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811175544/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1818340526",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1818340526?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811175544/artists?l=en-GB",
//         "data": [
//           {
//             "id": "183313439",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/183313439?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752109177094,
//         "MZ_INDEXER": 1752150835651
//       }
//     }
//   },
//   {
//     "id": "1786481197",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1786481197?l=en-GB",
//     "attributes": {
//       "albumName": "back to friends - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Indie Rock",
//         "Music",
//         "Alternative"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-12-27",
//       "durationInMillis": 199032,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWB12405502",
//       "artwork": {
//         "width": 3098,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5d/d5/ad/5dd5ad1b-fabf-9218-77f0-3adbfd5328ac/054391237118.jpg/440x440bb.jpg",
//         "height": 3098,
//         "textColor3": "d6d6d6",
//         "textColor2": "f5f5f5",
//         "textColor4": "d6d6d6",
//         "textColor1": "f6f6f6",
//         "bgColor": "585858",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Shane Boose",
//       "url": "https://music.apple.com/dz/album/back-to-friends/1786481196?i=1786481197",
//       "playParams": {
//         "id": "1786481197",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "back to friends",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/78/fb/e4/78fbe49b-71f9-100f-031a-e966b2e039a5/mzaf_16909816455493328525.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "sombr"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1786481197/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1806294086",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1806294086?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1786481197/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1589842503",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1589842503?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751566820545,
//         "MZ_INDEXER": 1752003938844
//       }
//     }
//   },
//   {
//     "id": "1759581500",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1759581500?l=en-GB",
//     "attributes": {
//       "albumName": "EL COMIENZO",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-02-02",
//       "durationInMillis": 222000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZL382406049",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/03/2d/18032dc9-fb05-cd0b-c6f3-a2237f0516f1/198542781577-copy-d8f8bbd8.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cacaca",
//         "textColor2": "d19993",
//         "textColor4": "a87b77",
//         "textColor1": "fbfbfb",
//         "bgColor": "060608",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "url": "https://music.apple.com/dz/album/gata-only/1759581499?i=1759581500",
//       "playParams": {
//         "id": "1759581500",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Gata Only",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/08/a7/bf/08a7bff3-eaf3-76d1-a06d-b8adf6fa5dff/mzaf_218531949513256702.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "FloyyMenor & Cris MJ",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1759581500/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1759581500/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1676497551",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1676497551?l=en-GB"
//           },
//           {
//             "id": "1504191840",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1504191840?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748642746487,
//         "MZ_INDEXER": 1751569708006
//       }
//     }
//   },
//   {
//     "id": "1817868294",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817868294?l=en-GB",
//     "attributes": {
//       "albumName": "Tipo Nino Vs Kabrinha - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Funk",
//         "Music",
//         "R&B/Soul",
//         "Brazilian",
//         "Baile Funk"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-31",
//       "durationInMillis": 201230,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZNJW2532904",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/22/87/87/2287878a-ca41-165b-7cac-a4697ab0642b/0.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "aba29e",
//         "textColor2": "c6bbb8",
//         "textColor4": "a29793",
//         "textColor1": "d1c8c6",
//         "bgColor": "150701",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "MC LEKÃO & DJ Dozabri",
//       "url": "https://music.apple.com/dz/album/tipo-nino-vs-kabrinha/1817868293?i=1817868294",
//       "playParams": {
//         "id": "1817868294",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Tipo Nino Vs Kabrinha",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/94/75/909475b6-4819-d21e-1d8b-f2bd47b77e72/mzaf_14091523425024959311.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "DJ Biel Divulga, DJ Dozabri & MC LEKÃO",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817868294/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817868294/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1659112736",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1659112736?l=en-GB"
//           },
//           {
//             "id": "1490223229",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1490223229?l=en-GB"
//           },
//           {
//             "id": "1613197544",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1613197544?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751889936988,
//         "MZ_INDEXER": 1751887275362
//       }
//     }
//   },
//   {
//     "id": "1819615513",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819615513?l=en-GB",
//     "attributes": {
//       "albumName": "Underdog (From F1® The Movie) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music",
//         "Rap"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-12",
//       "durationInMillis": 142329,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT22503512",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/19/6a/10/196a1083-456a-e484-da13-620369336174/075678596049.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "4b2f1e",
//         "textColor2": "3a2416",
//         "textColor4": "5f3f27",
//         "textColor1": "21110a",
//         "bgColor": "f3aa6b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Adrienne Erin Byrne, David D.a. Doman, Israel Houghton II, Keith Parker & Rodrick Moore Jr",
//       "url": "https://music.apple.com/dz/album/underdog-from-f1-the-movie/1819615511?i=1819615513",
//       "playParams": {
//         "id": "1819615513",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Underdog (From F1® The Movie)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/36/16/8b/36168b93-01dc-fd0f-df0f-e3e966821db3/mzaf_12043039229978432694.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Roddy Ricch",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819615513/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819615513/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1212442072",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1212442072?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751590351021,
//         "MZ_INDEXER": 1752220221854
//       }
//     }
//   },
//   {
//     "id": "1775850908",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1775850908?l=en-GB",
//     "attributes": {
//       "albumName": "PASSO BEM SOLTO - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2024-04-23",
//       "durationInMillis": 116072,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "AUMEV2448907",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6a/1c/c1/6a1cc17f-beee-1a4d-cc94-c31f0cb1d250/artwork.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "38380c",
//         "textColor2": "263011",
//         "textColor4": "505517",
//         "textColor1": "080c04",
//         "bgColor": "f7ec2e",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "ATLXS",
//       "url": "https://music.apple.com/dz/album/passo-bem-solto-slowed/1775850905?i=1775850908",
//       "playParams": {
//         "id": "1775850908",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "PASSO BEM SOLTO (Slowed)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d7/38/3a/d7383a80-cb52-871f-a1d1-f4e5be56f517/mzaf_14911862607845991712.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "ATLXS"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1775850908/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1775850908/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1734102536",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1734102536?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752159288349,
//         "MZ_INDEXER": 1752158877476
//       }
//     }
//   },
//   {
//     "id": "1801820501",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1801820501?l=en-GB",
//     "attributes": {
//       "albumName": "Alligator Bites Never Heal (Extended)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 20,
//       "releaseDate": "2025-03-04",
//       "durationInMillis": 249302,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12500652",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ec/cc/d6/ecccd6d4-2250-5caf-a98d-1ba10baf67f5/24UMGIM88644.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bcb19e",
//         "textColor2": "ebcfad",
//         "textColor4": "beab8a",
//         "textColor1": "e9d7c6",
//         "bgColor": "0a1a00",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jaylah Hickmon, Walter Andre E De Backer & Luiz Floriano Bonfa",
//       "url": "https://music.apple.com/dz/album/anxiety/1801819644?i=1801820501",
//       "playParams": {
//         "id": "1801820501",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Anxiety",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8d/19/3c/8d193c71-0a1f-da6f-d3d5-e9c5ed06d879/mzaf_7712750723994058429.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Doechii",
//       "contentRating": "clean"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1801820501/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1809308768",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1809308768?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1801820501/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1437641643",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1437641643?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748997189492,
//         "MZ_INDEXER": 1748914190518
//       }
//     }
//   },
//   {
//     "id": "1798849696",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1798849696?l=en-GB",
//     "attributes": {
//       "albumName": "My Darling - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afrobeats",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-03-26",
//       "durationInMillis": 146087,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUYG1713268",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c0/61/7f/c0617f97-3e67-d38a-adc9-ca6e1f17c678/199316001174_cover.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "cccccc",
//         "textColor2": "fef804",
//         "textColor4": "ccc704",
//         "textColor1": "ffffff",
//         "bgColor": "050505",
//         "hasP3": false
//       },
//       "audioLocale": "ig",
//       "composerName": "Uzochukwu Michael Ikechukwu",
//       "url": "https://music.apple.com/dz/album/my-darling/1798849691?i=1798849696",
//       "playParams": {
//         "id": "1798849696",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "My Darling",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/d9/da/2ed9da29-d9d5-0a57-def8-cd9229b00046/mzaf_9068964190253285632.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Chella"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1798849696/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1798849696/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1712842583",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1712842583?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750899481638,
//         "MZ_INDEXER": 1750669968797
//       }
//     }
//   },
//   {
//     "id": "1823174044",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1823174044?l=en-GB",
//     "attributes": {
//       "albumName": "بتمنى انساك - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-08-06",
//       "durationInMillis": 179489,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "SE5XG2507912",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1f/9a/e5/1f9ae5c5-7352-fe05-08d2-121a5a1cad3c/8721215741473.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "363636",
//         "textColor2": "1a1a1a",
//         "textColor4": "464646",
//         "textColor1": "050505",
//         "bgColor": "f8f8f8",
//         "hasP3": false
//       },
//       "audioLocale": "ar",
//       "composerName": "Aziz Al Shafee",
//       "url": "https://music.apple.com/dz/album/%D8%A8%D8%AA%D9%85%D9%86%D9%89-%D8%A7%D9%86%D8%B3%D8%A7%D9%83/1823174042?i=1823174044",
//       "playParams": {
//         "id": "1823174044",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "بتمنى انساك",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/32/f4/ed/32f4ede5-ed56-4b1f-7576-8435b64ee4e8/mzaf_5765104421310957578.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Sherine"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1823174044/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1823174044/artists?l=en-GB",
//         "data": [
//           {
//             "id": "287410418",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/287410418?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752041740786,
//         "MZ_INDEXER": 1751929764091
//       }
//     }
//   },
//   {
//     "id": "1817000049",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817000049?l=en-GB",
//     "attributes": {
//       "albumName": "DIA DELÍCIA - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 75462,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "CH7812534814",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/04/35/b6/0435b690-6429-b81c-acf7-dea3ef5823b2/4062851142465.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "1d84cc",
//         "textColor2": "2b98e1",
//         "textColor4": "237dbf",
//         "textColor1": "24a1f1",
//         "bgColor": "021038",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "Nakama, Mc Staff & ΣP",
//       "url": "https://music.apple.com/dz/album/dia-del%C3%ADcia/1816999764?i=1817000049",
//       "playParams": {
//         "id": "1817000049",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "DIA DELÍCIA",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/69/4a/bd/694abd06-b902-063c-6496-33c8e6b2c8a2/mzaf_1446077453292066423.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Nakama, Mc Staff & ΣP",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817000049/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817000049/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1752185734",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1752185734?l=en-GB"
//           },
//           {
//             "id": "1623000432",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1623000432?l=en-GB"
//           },
//           {
//             "id": "1808348534",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1808348534?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751787694533,
//         "MZ_INDEXER": 1751945254512
//       }
//     }
//   },
//   {
//     "id": "1806331548",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1806331548?l=en-GB",
//     "attributes": {
//       "albumName": "Vaitimbora - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-09",
//       "durationInMillis": 135131,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FXR752501190",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c9/37/44/c937442a-aa21-5aa8-2935-363b5ae2d43a/3667007165957_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "031c19",
//         "textColor2": "0b1129",
//         "textColor4": "092a38",
//         "textColor1": "040002",
//         "bgColor": "008d77",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "Josh Chergui & Lois Serre",
//       "url": "https://music.apple.com/dz/album/vaitimbora/1806331525?i=1806331548",
//       "playParams": {
//         "id": "1806331548",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Vaitimbora",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8a/be/a8/8abea88d-c353-b6fc-0337-1bc9f84e4c57/mzaf_14720318279795130093.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Trinix Remix"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1806331548/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1806331548/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1604967678",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1604967678?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751364971078,
//         "MZ_INDEXER": 1752159020492
//       }
//     }
//   },
//   {
//     "id": "1817055308",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817055308?l=en-GB",
//     "attributes": {
//       "albumName": "Just Keep Watching (From F1® The Movie) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-29",
//       "durationInMillis": 142551,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT22503496",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7f/c2/68/7fc268fe-4b8b-23f6-1b5b-62671d48917a/075678595868.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "343130",
//         "textColor2": "1c1b17",
//         "textColor4": "353536",
//         "textColor1": "1a1610",
//         "bgColor": "9aa0b2",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Amy Allen, Ryan Tedder, Tate McRae & Tyler Spry",
//       "url": "https://music.apple.com/dz/album/just-keep-watching-from-f1-the-movie/1817054909?i=1817055308",
//       "playParams": {
//         "id": "1817055308",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Just Keep Watching (From F1® The Movie)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c4/70/4f/c4704f61-6b13-de2e-a144-795c9b504037/mzaf_7339683502956230688.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Tate McRae"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817055308/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1817530418",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1817530418?l=en-GB"
//           },
//           {
//             "id": "1810796751",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1810796751?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817055308/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1446365464",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1446365464?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751108841210,
//         "MZ_INDEXER": 1752175240181
//       }
//     }
//   },
//   {
//     "id": "1806614466",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1806614466?l=en-GB",
//     "attributes": {
//       "albumName": "Fancy That",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-09",
//       "durationInMillis": 149667,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAYE2500293",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/db/5a/12db5a38-94c1-42bc-b36b-7204b7aa4eac/5021732768650.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "d9c9c9",
//         "textColor2": "e8e2c1",
//         "textColor4": "cfbaa0",
//         "textColor1": "f5f5f5",
//         "bgColor": "6b1b1c",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Darren Paul Emerson, Karl Hyde, PinkPantheress, Richard David Smith & aksel arvid",
//       "url": "https://music.apple.com/dz/album/illegal/1806614239?i=1806614466",
//       "playParams": {
//         "id": "1806614466",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Illegal",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/08/6f/90086ff0-a8ed-b182-5c4a-0bdb55678657/mzaf_3379501694555948976.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "PinkPantheress"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1806614466/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1813842234",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1813842234?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1806614466/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1552521489",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1552521489?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751585756458,
//         "MZ_INDEXER": 1751992643452
//       }
//     }
//   },
//   {
//     "id": "1791098133",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1791098133?l=en-GB",
//     "attributes": {
//       "albumName": "Show Me Love - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-02-07",
//       "durationInMillis": 176965,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "DE1FB2500005",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/17/d2/6717d2e9-4c17-2b43-9f90-5674f3bc6e9f/021865185794.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "2c1b0e",
//         "textColor2": "0c0c0c",
//         "textColor4": "332216",
//         "textColor1": "020202",
//         "bgColor": "d37e40",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Sanele David Sydow, Jonas Kalisch, Alexej Vlasenko, Jeremy Chacon & Henrik Meinke",
//       "url": "https://music.apple.com/dz/album/show-me-love/1791098132?i=1791098133",
//       "playParams": {
//         "id": "1791098133",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Show Me Love",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d7/98/56/d798565d-8dff-a4da-e250-92abc7f0d61a/mzaf_3945904164717597611.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "WizTheMc & bees & honey"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1791098133/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1791098133/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1040142504",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1040142504?l=en-GB"
//           },
//           {
//             "id": "1757403374",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1757403374?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750899070368,
//         "MZ_INDEXER": 1751918976595
//       }
//     }
//   },
//   {
//     "id": "1771105935",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1771105935?l=en-GB",
//     "attributes": {
//       "albumName": "rosie",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 6,
//       "releaseDate": "2024-10-17",
//       "durationInMillis": 169917,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USAT22409184",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2d/14/66/2d14661b-345b-d0f3-4e86-56ef626e68aa/075679629203.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "97d714",
//         "textColor2": "edbea1",
//         "textColor4": "d1a384",
//         "textColor1": "a4ff15",
//         "bgColor": "643912",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Amy Allen, Bruno Mars, Chae Young Park, Christopher \"Brody\" Brown, Henry Walter, Michael Chapman, Nicholas Chinn, Omer Fedi, Philip Lawrence, Rogét Chahayed & Theron Thomas",
//       "url": "https://music.apple.com/dz/album/apt/1771105914?i=1771105935",
//       "playParams": {
//         "id": "1771105935",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "APT.",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/de/10/c0de10b8-72f2-a035-90b7-b1e68c5d043e/mzaf_14258169655599676574.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "ROSÉ & Bruno Mars"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1771105935/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1774570775",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1774570775?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1771105935/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1406242696",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1406242696?l=en-GB"
//           },
//           {
//             "id": "278873078",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/278873078?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751128204326,
//         "MZ_INDEXER": 1752151516849
//       }
//     }
//   },
//   {
//     "id": "1777168731",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1777168731?l=en-GB",
//     "attributes": {
//       "albumName": "Die With A Smile (Acoustic) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-11-01",
//       "durationInMillis": 251668,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUM72413062",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/30/a8/78/30a87869-f9fb-bf53-e0ba-91ffe8c03f31/24UM1IM23004.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b8b3af",
//         "textColor2": "cfcac4",
//         "textColor4": "ada8a4",
//         "textColor1": "ddd7d2",
//         "bgColor": "232323",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Lady Gaga, Bruno Mars, Dernst \"D'Mile\" Emile II, James Fauntleroy & Andrew Watt",
//       "url": "https://music.apple.com/dz/album/die-with-a-smile-acoustic/1777168730?i=1777168731",
//       "playParams": {
//         "id": "1777168731",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Die With A Smile (Acoustic)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dd/8a/4f/dd8a4fd2-1b43-d0d2-eced-8bca917ed4ba/mzaf_16867325614561422830.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lady Gaga & Bruno Mars"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1777168731/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1777168731/artists?l=en-GB",
//         "data": [
//           {
//             "id": "277293880",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/277293880?l=en-GB"
//           },
//           {
//             "id": "278873078",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/278873078?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752021140428,
//         "MZ_INDEXER": 1749252642408
//       }
//     }
//   },
//   {
//     "id": "1802084938",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802084938?l=en-GB",
//     "attributes": {
//       "albumName": "undressed - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Indie Rock",
//         "Music",
//         "Alternative"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-03-21",
//       "durationInMillis": 182089,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USWB12500737",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2a/98/7d/2a987dd6-2961-b988-d7f1-e7a59f990dce/054391234278.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "202020",
//         "textColor2": "080808",
//         "textColor4": "242424",
//         "textColor1": "040404",
//         "bgColor": "949494",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Shane Boose",
//       "url": "https://music.apple.com/dz/album/undressed/1802084937?i=1802084938",
//       "playParams": {
//         "id": "1802084938",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "undressed",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/5b/fb/005bfba3-8a02-119e-0643-de453232f580/mzaf_4179365565413360702.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "sombr"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802084938/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1813029947",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1813029947?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802084938/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1589842503",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1589842503?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751568964885,
//         "MZ_INDEXER": 1751566233505
//       }
//     }
//   },
//   {
//     "id": "1736051619",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1736051619?l=en-GB",
//     "attributes": {
//       "albumName": "Fireworks & Rollerblades",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2024-01-18",
//       "durationInMillis": 180304,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USWB12307016",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a5/c1/9c/a5c19c62-d641-93b4-2800-e74778569f5f/093624852483.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bfaea5",
//         "textColor2": "e8a14e",
//         "textColor4": "bb8441",
//         "textColor1": "edd6ca",
//         "bgColor": "090f0f",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Benson Boone, Evan Blair & Jack LaFrantz",
//       "url": "https://music.apple.com/dz/album/beautiful-things/1736051351?i=1736051619",
//       "playParams": {
//         "id": "1736051619",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Beautiful Things",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/68/48/a4/6848a498-05bd-6428-908c-d647a5e2c497/mzaf_13654407929449846984.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Benson Boone"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1736051619/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1736051619/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1587414058",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1587414058?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751170746319,
//         "MZ_INDEXER": 1752148859649
//       }
//     }
//   },
//   {
//     "id": "1820264150",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820264150?l=en-GB",
//     "attributes": {
//       "albumName": "KPop Demon Hunters (Soundtrack from the Netflix Film)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "K-Pop",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 194608,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QZ8BZ2513510",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/15/42/e1154273-8ecd-5702-e6e6-597f28001681/25UMGIM82363.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5c264c",
//         "textColor2": "480b28",
//         "textColor4": "5f2e4f",
//         "textColor1": "440023",
//         "bgColor": "bbbdef",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "EJAE & Mark Sonnenblick",
//       "url": "https://music.apple.com/dz/album/golden/1820264137?i=1820264150",
//       "playParams": {
//         "id": "1820264150",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Golden",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a2/e3/0f/a2e30fd3-4b36-40a8-e313-108b5cb72eb0/mzaf_10831367526580668329.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "HUNTRX, EJAE, AUDREY NUNA, REI AMI & KPop Demon Hunters Cast"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820264150/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820264150/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1478164763",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1478164763?l=en-GB"
//           },
//           {
//             "id": "1118367711",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1118367711?l=en-GB"
//           },
//           {
//             "id": "1444332093",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1444332093?l=en-GB"
//           },
//           {
//             "id": "1468217918",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1468217918?l=en-GB"
//           },
//           {
//             "id": "1820264140",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264140?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195131772,
//         "MZ_INDEXER": 1751615727115
//       }
//     }
//   },
//   {
//     "id": "1738371321",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1738371321?l=en-GB",
//     "attributes": {
//       "albumName": "COWBOY CARTER",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Country",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 25,
//       "releaseDate": "2024-03-29",
//       "durationInMillis": 250725,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USSM12402726",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/9c/17/c69c17df-1835-77e7-58c1-ca04d44a0611/196871853736.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b3aaa2",
//         "textColor2": "cfc8c2",
//         "textColor4": "a5a09b",
//         "textColor1": "e0d5ca",
//         "bgColor": "000000",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Beyoncé, Camaron Ochs (Cam), Terius \"The-Dream\" Gesteelde-Diamant, David Doman, Dominik Redenczki & Ezemdi Chikwendu",
//       "url": "https://music.apple.com/dz/album/tyrant/1738370746?i=1738371321",
//       "playParams": {
//         "id": "1738371321",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "TYRANT",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/49/5a/9c495a67-0915-1a73-a0f9-412033678078/mzaf_8480714447225218897.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Beyoncé & Dolly Parton"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1738371321/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1738371321/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1419227",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1419227?l=en-GB"
//           },
//           {
//             "id": "535066",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/535066?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745886311052,
//         "MZ_INDEXER": 1752218310362
//       }
//     }
//   },
//   {
//     "id": "1802209140",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802209140?l=en-GB",
//     "attributes": {
//       "albumName": "Soleil Bleu - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "French Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-09",
//       "durationInMillis": 246000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR6F32500820",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/9b/d0/7a9bd0ef-f278-1bb5-a83e-17341e33c006/3596974815797_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3e2f32",
//         "textColor2": "26231d",
//         "textColor4": "504246",
//         "textColor1": "0f0b05",
//         "bgColor": "f9c0e9",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "Nino Faerdig & Antonin Parmentier",
//       "url": "https://music.apple.com/dz/album/soleil-bleu/1802209136?i=1802209140",
//       "playParams": {
//         "id": "1802209140",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Soleil Bleu",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/af/4e/62/af4e6272-8fe8-77dd-1f69-056bf539d0c0/mzaf_6514764203787499849.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Bleu Soleil & LUIZA"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802209140/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802209140/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1753891726",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1753891726?l=en-GB"
//           },
//           {
//             "id": "1536211246",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1536211246?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752163878110,
//         "MZ_INDEXER": 1752164549200
//       }
//     }
//   },
//   {
//     "id": "1812675240",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1812675240?l=en-GB",
//     "attributes": {
//       "albumName": "God Is a Weapon (feat. Marilyn Manson) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-20",
//       "durationInMillis": 215444,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USEP42525001",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/fe/da/f3feda61-bf86-fe70-5e0f-91e83327c642/0045778810109.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c2c0c1",
//         "textColor2": "d3d1d2",
//         "textColor4": "aeabad",
//         "textColor1": "edeaeb",
//         "bgColor": "191718",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Marilyn Manson, Ronnie Radke, Tyler Smyth & Cody Quistad",
//       "url": "https://music.apple.com/dz/album/god-is-a-weapon-feat-marilyn-manson/1812675239?i=1812675240",
//       "playParams": {
//         "id": "1812675240",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "God Is a Weapon (feat. Marilyn Manson)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/12/a7/09/12a709c9-5770-df91-e394-ae9b4011c9b9/mzaf_155684620891462795.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Falling In Reverse",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1812675240/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1817371637",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1817371637?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1812675240/artists?l=en-GB",
//         "data": [
//           {
//             "id": "439592053",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/439592053?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749678489256,
//         "MZ_INDEXER": 1749510349625
//       }
//     }
//   },
//   {
//     "id": "1823245745",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1823245745?l=en-GB",
//     "attributes": {
//       "albumName": "Cant Go Broke Remix - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-27",
//       "durationInMillis": 107778,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QZTLA2516276",
//       "artwork": {
//         "width": 2000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/21/b0/03/21b003c0-9345-42f1-3428-c38fd8549206/764656404444_cover.jpg/440x440bb.jpg",
//         "height": 2000,
//         "textColor3": "2d1111",
//         "textColor2": "040203",
//         "textColor4": "2f1111",
//         "textColor1": "020202",
//         "bgColor": "dd504b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Zeddy Will",
//       "url": "https://music.apple.com/dz/album/cant-go-broke-remix/1823245744?i=1823245745",
//       "playParams": {
//         "id": "1823245745",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Cant Go Broke Remix",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/be/43/0b/be430bfc-a496-5eff-903f-275f811410d6/mzaf_10437734277802046883.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Zeddy Will",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1823245745/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1823245745/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1627730378",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1627730378?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752115066989,
//         "MZ_INDEXER": 1752076501682
//       }
//     }
//   },
//   {
//     "id": "1807490820",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1807490820?l=en-GB",
//     "attributes": {
//       "albumName": "American Heart",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-04-24",
//       "durationInMillis": 165747,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USWB12500844",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/35/5d/cb355d50-f32a-6641-db03-a1d08ad87399/093624834960.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b5745d",
//         "textColor2": "d29377",
//         "textColor4": "aa775f",
//         "textColor1": "df9074",
//         "bgColor": "0a0401",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Benson Boone, Evan Blair, Jack LaFrantz, Steve Kipner & Terry Shaddick",
//       "url": "https://music.apple.com/dz/album/mystical-magical/1807490612?i=1807490820",
//       "playParams": {
//         "id": "1807490820",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Mystical Magical",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a6/fa/a0/a6faa0a2-74fd-e4c4-3673-e6016e14c515/mzaf_8906995548213374578.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Benson Boone"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1807490820/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1807490820/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1587414058",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1587414058?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751570573255,
//         "MZ_INDEXER": 1751919547038
//       }
//     }
//   },
//   {
//     "id": "1822502735",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822502735?l=en-GB",
//     "attributes": {
//       "albumName": "Yerinde Dur - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rap",
//         "Music",
//         "Hip-Hop/Rap"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-27",
//       "durationInMillis": 148000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "TRA162500229",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/38/9a/f0/389af031-8d60-6e26-da5f-1f81f9988fb7/196873355177.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cdccc4",
//         "textColor2": "e2af6c",
//         "textColor4": "bb9159",
//         "textColor1": "f8f9f1",
//         "bgColor": "231a0e",
//         "hasP3": false
//       },
//       "audioLocale": "tr",
//       "composerName": "Seyfullah Sağır",
//       "url": "https://music.apple.com/dz/album/yerinde-dur/1822502734?i=1822502735",
//       "playParams": {
//         "id": "1822502735",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Yerinde Dur",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/37/b7/9c/37b79c49-722c-1e17-5e0e-ebafc9de2118/mzaf_6184684982650022567.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Sefo & Demet Akalın"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822502735/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1824147406",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1824147406?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822502735/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1360733410",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1360733410?l=en-GB"
//           },
//           {
//             "id": "172483565",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/172483565?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195420399,
//         "MZ_INDEXER": 1752222176581
//       }
//     }
//   },
//   {
//     "id": "1817441744",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817441744?l=en-GB",
//     "attributes": {
//       "albumName": "Bengicela (feat. Jazzworx) - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-13",
//       "durationInMillis": 358008,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "ZA56E2528183",
//       "artwork": {
//         "width": 1657,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6d/51/9d/6d519df4-fff3-9a98-7ae2-ab45b7fd0fd7/766214681045.jpg/440x440bb.jpg",
//         "height": 1657,
//         "textColor3": "282829",
//         "textColor2": "19181a",
//         "textColor4": "3c3b3f",
//         "textColor1": "000000",
//         "bgColor": "c8c8d0",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Gobokweone Lekganyane, Kgotso Dube, Thandeka Ngema & Kamohelo Monese",
//       "url": "https://music.apple.com/dz/album/bengicela-feat-jazzworx/1817441454?i=1817441744",
//       "playParams": {
//         "id": "1817441744",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Bengicela (feat. Jazzworx)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8d/4c/82/8d4c826b-eec4-566c-64fa-8ef5deea332c/mzaf_12333403197927753537.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MaWhoo, GL_Ceejay & Thukuthela"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817441744/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817441744/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1474310340",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1474310340?l=en-GB"
//           },
//           {
//             "id": "1680814823",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1680814823?l=en-GB"
//           },
//           {
//             "id": "1768801647",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1768801647?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752102162103,
//         "MZ_INDEXER": 1752208105177
//       }
//     }
//   },
//   {
//     "id": "1794317772",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1794317772?l=en-GB",
//     "attributes": {
//       "albumName": "Ma Tnsani (Yalla Habibi) [feat. AYA] - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afro House",
//         "Music",
//         "African",
//         "Dance",
//         "House"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-03",
//       "durationInMillis": 220000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "UKXN22566225",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fc/1d/f1/fc1df184-188b-969b-3b4c-7697b63c52c0/5063654541966_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "e7c5bf",
//         "textColor2": "fbd949",
//         "textColor4": "ebb840",
//         "textColor1": "f6eae8",
//         "bgColor": "ab311a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Vanco",
//       "url": "https://music.apple.com/dz/album/ma-tnsani-yalla-habibi-feat-aya/1794317769?i=1794317772",
//       "playParams": {
//         "id": "1794317772",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Ma Tnsani (Yalla Habibi) [feat. AYA]",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9a/97/cf/9a97cffa-585f-015c-4e79-2ae0414f0a17/mzaf_2463329975124707008.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Vanco"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1794317772/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1794317772/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1002462055",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1002462055?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752018314012,
//         "MZ_INDEXER": 1752015512549
//       }
//     }
//   },
//   {
//     "id": "1763742884",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1763742884?l=en-GB",
//     "attributes": {
//       "albumName": "Stacks from All Sides",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop",
//         "Music",
//         "Hip-Hop/Rap"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "2024-08-20",
//       "durationInMillis": 211678,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "HKE022272925",
//       "artwork": {
//         "width": 2000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/95/32/3b/95323b31-1bdd-9bcc-8a6b-329a8d97ec03/749085368376.jpg/440x440bb.jpg",
//         "height": 2000,
//         "textColor3": "b9bfc0",
//         "textColor2": "f5df66",
//         "textColor4": "c4b456",
//         "textColor1": "e7edeb",
//         "bgColor": "000614",
//         "hasP3": false
//       },
//       "audioLocale": "zh-Hans-CN",
//       "composerName": "SKAI ISYOURGOD & AR",
//       "url": "https://music.apple.com/dz/album/blueprint-supreme/1763742878?i=1763742884",
//       "playParams": {
//         "id": "1763742884",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Blueprint Supreme",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/58/6b/a2/586ba29a-8a07-6445-1ac1-072e1d360f54/mzaf_1721030422983414226.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "SKAI ISYOURGOD & AR"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1763742884/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1763742884/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1663437158",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1663437158?l=en-GB"
//           },
//           {
//             "id": "1459429029",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1459429029?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195585447,
//         "MZ_INDEXER": 1752218804371
//       }
//     }
//   },
//   {
//     "id": "1821258889",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1821258889?l=en-GB",
//     "attributes": {
//       "albumName": "Tholukuthi (Clap Song) [feat. MaWhoo] - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-27",
//       "durationInMillis": 463872,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "USUYG1736799",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/ef/c1/39efc1a2-2ceb-142d-5716-2a36f1f70277/199316135428_cover.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "a48c69",
//         "textColor2": "eba040",
//         "textColor4": "c08335",
//         "textColor1": "c9ac81",
//         "bgColor": "140e0a",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "url": "https://music.apple.com/dz/album/tholukuthi-clap-song-feat-mawhoo/1821258884?i=1821258889",
//       "playParams": {
//         "id": "1821258889",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Tholukuthi (Clap Song) [feat. MaWhoo]",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6a/34/4d/6a344d68-c544-92b0-2cc7-292e9609f679/mzaf_10561257249132600442.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Jazzworx, GL_Ceejay & Thukuthela"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1821258889/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1821258889/artists?l=en-GB",
//         "data": [
//           {
//             "id": "112735681",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/112735681?l=en-GB"
//           },
//           {
//             "id": "1680814823",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1680814823?l=en-GB"
//           },
//           {
//             "id": "1768801647",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1768801647?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752170191156,
//         "MZ_INDEXER": 1751939766758
//       }
//     }
//   },
//   {
//     "id": "1821548915",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1821548915?l=en-GB",
//     "attributes": {
//       "albumName": "Drive (From F1® The Movie) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 187397,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT22503507",
//       "artwork": {
//         "width": 3600,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5a/c1/5a/5ac15a4a-ff40-c2b6-4099-ef08e7ce6bcb/075678595929.jpg/440x440bb.jpg",
//         "height": 3600,
//         "textColor3": "5a4433",
//         "textColor2": "3e1f08",
//         "textColor4": "654c39",
//         "textColor1": "311601",
//         "bgColor": "fefefe",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Blake Slatkin, Ed Sheeran & John Mayer",
//       "url": "https://music.apple.com/dz/album/drive-from-f1-the-movie/1821548912?i=1821548915",
//       "playParams": {
//         "id": "1821548915",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Drive (From F1® The Movie)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/57/6f/76/576f76b2-1c22-ae15-216d-578008b73b4e/mzaf_14319708884604248307.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ed Sheeran"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1821548915/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1821941925",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1821941925?l=en-GB"
//           },
//           {
//             "id": "1810796750",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1810796750?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1821548915/artists?l=en-GB",
//         "data": [
//           {
//             "id": "183313439",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/183313439?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751590332892,
//         "MZ_INDEXER": 1752175225002
//       }
//     }
//   },
//   {
//     "id": "1796306971",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1796306971?l=en-GB",
//     "attributes": {
//       "albumName": "La Plena (W Sound 05) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin Urban",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-02-20",
//       "durationInMillis": 150001,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWL12500595",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f0/45/82/f0458283-370b-26e6-c592-a66df10ab07d/5021732661593.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d0cfce",
//         "textColor2": "fd5f00",
//         "textColor4": "cf5002",
//         "textColor1": "ffffff",
//         "bgColor": "16130e",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Brandon Lopez, Cristian Andrés Salazar, Daniel Echavarria Oviedo, Diego León Vélez & Luis Fernando Villa",
//       "url": "https://music.apple.com/dz/album/la-plena-w-sound-05/1796306713?i=1796306971",
//       "playParams": {
//         "id": "1796306971",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "La Plena (W Sound 05)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/3d/8f/413d8fb6-aadd-821a-2be9-11905f283791/mzaf_16737877064460265073.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "W Sound, Beéle & Ovy On the Drums",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1796306971/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1796306971/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1620506341",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1620506341?l=en-GB"
//           },
//           {
//             "id": "1470139605",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1470139605?l=en-GB"
//           },
//           {
//             "id": "1066207235",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1066207235?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752178356872,
//         "MZ_INDEXER": 1752178444611
//       }
//     }
//   },
//   {
//     "id": "1757461233",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1757461233?l=en-GB",
//     "attributes": {
//       "albumName": "Remixed - EP",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Afro House",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-06-07",
//       "durationInMillis": 248000,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "FRUM72400728",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cf/39/2b/cf392b18-f748-fcd5-9594-39855d11d76e/24UMGIM77267.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "e3bebb",
//         "textColor2": "e4d6d6",
//         "textColor4": "d9afab",
//         "textColor1": "f0eaea",
//         "bgColor": "af1200",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "Salif Keïta",
//       "url": "https://music.apple.com/dz/album/yamore-feat-ces%C3%A1ria-evora-benja-nl-franc-fala/1757461231?i=1757461233",
//       "playParams": {
//         "id": "1757461233",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Yamore (feat. Cesária Evora, Benja (NL) & Franc Fala)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/94/71/4a9471fe-43a5-c394-5c82-9f167d2851aa/mzaf_16838927272288463232.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MoBlack & Salif Keïta"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1757461233/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1757461233/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1444810543",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1444810543?l=en-GB"
//           },
//           {
//             "id": "41364",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/41364?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751126731566,
//         "MZ_INDEXER": 1746885510674
//       }
//     }
//   },
//   {
//     "id": "1645556889",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1645556889?l=en-GB",
//     "attributes": {
//       "albumName": "Connie Francis Sings Second Hand Love & Other Hits",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Vocal"
//       ],
//       "trackNumber": 8,
//       "releaseDate": "1962-04-10",
//       "durationInMillis": 142520,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "USUM71120288",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/d0/39/3d/d0393d3e-267b-3042-adfc-45bb30e09313/22UMGIM91134.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c5b29a",
//         "textColor2": "f0d18a",
//         "textColor4": "c7ac72",
//         "textColor1": "edd7bc",
//         "bgColor": "251b12",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Don Stirling & BILL NAUMAN",
//       "url": "https://music.apple.com/dz/album/pretty-little-baby/1645556867?i=1645556889",
//       "playParams": {
//         "id": "1645556889",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Pretty Little Baby",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6e/d7/64/6ed76410-5d6b-527e-f988-b178f6dd240b/mzaf_13077412560532976133.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Connie Francis"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1645556889/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1645556889/artists?l=en-GB",
//         "data": [
//           {
//             "id": "378986",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/378986?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748642737308,
//         "MZ_INDEXER": 1752227712854
//       }
//     }
//   },
//   {
//     "id": "1691699836",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1691699836?l=en-GB",
//     "attributes": {
//       "albumName": "I've Tried Everything But Therapy (Part 1)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2023-06-23",
//       "durationInMillis": 210689,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWB12302315",
//       "artwork": {
//         "width": 3900,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/440x440bb.jpg",
//         "height": 3900,
//         "textColor3": "e3c19e",
//         "textColor2": "ed965c",
//         "textColor4": "db7f49",
//         "textColor1": "f8e8c6",
//         "bgColor": "902400",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jaten Dimsdale, Joshua Coleman, Julian Bunetta, Marco \"INFAMOUS\" Rodriguez & Mikky Ekko",
//       "url": "https://music.apple.com/dz/album/lose-control/1691699589?i=1691699836",
//       "playParams": {
//         "id": "1691699836",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Lose Control",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/4d/cc/1a4dccfd-ab4a-35ac-6477-45e33074f303/mzaf_17951172482135259186.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Teddy Swims"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1691699836/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1691699836/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1462541757",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1462541757?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751568831078,
//         "MZ_INDEXER": 1752058719456
//       }
//     }
//   },
//   {
//     "id": "1440764677",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440764677?l=en-GB",
//     "attributes": {
//       "albumName": "Making Mirrors",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music",
//         "Rock",
//         "Electronic",
//         "Electronica",
//         "Adult Alternative",
//         "Jazz",
//         "Bop"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2011-07-05",
//       "durationInMillis": 244885,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "AUZS21100040",
//       "artwork": {
//         "width": 1000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3b/cd/e8/3bcde89b-b58c-12b3-2c54-6af84ddfbe8f/11UMGIM40069.rgb.jpg/440x440bb.jpg",
//         "height": 1000,
//         "textColor3": "3e3935",
//         "textColor2": "343230",
//         "textColor4": "5b5751",
//         "textColor1": "100d0d",
//         "bgColor": "f7ead7",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Wally De Backer",
//       "url": "https://music.apple.com/dz/album/somebody-that-i-used-to-know-feat-kimbra/1440764665?i=1440764677",
//       "playParams": {
//         "id": "1440764677",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Somebody That I Used to Know (feat. Kimbra)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e8/ca/e5/e8cae521-340b-87a9-0cff-341ab81f3651/mzaf_10203132160323016091.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Gotye"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440764677/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1446741273",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1446741273?l=en-GB"
//           },
//           {
//             "id": "1445841287",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445841287?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440764677/artists?l=en-GB",
//         "data": [
//           {
//             "id": "161541223",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/161541223?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750081162612,
//         "MZ_INDEXER": 1752152256181
//       },
//       "formerIds": [
//         "482565545"
//       ]
//     }
//   },
//   {
//     "id": "1819691874",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819691874?l=en-GB",
//     "attributes": {
//       "albumName": "Fica De Quatão (Versões) - EP",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Brazilian",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-03-28",
//       "durationInMillis": 139852,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QMBZ92524074",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/f0/62/34f0627f-5fb8-5b78-f955-fb80c5d4e33f/199350901881.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "191919",
//         "textColor2": "060606",
//         "textColor4": "1c1c1c",
//         "textColor1": "010101",
//         "bgColor": "787878",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "MC LEKÃO",
//       "url": "https://music.apple.com/dz/album/fica-de-quat%C3%A3o-slowed/1819691868?i=1819691874",
//       "playParams": {
//         "id": "1819691874",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Fica De Quatão (Slowed)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c0/ec/75/c0ec753f-7ce7-03bb-5c5a-ac851b33d2b0/mzaf_15380389938168471878.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "DJ Biel Divulga, DJ Dozabri & MC LEKÃO",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819691874/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819691874/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1659112736",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1659112736?l=en-GB"
//           },
//           {
//             "id": "1490223229",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1490223229?l=en-GB"
//           },
//           {
//             "id": "1613197544",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1613197544?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751637295195,
//         "MZ_INDEXER": 1752231776234
//       }
//     }
//   },
//   {
//     "id": "1562640932",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1562640932?l=en-GB",
//     "attributes": {
//       "albumName": "PLATINUM 1",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2009-10-14",
//       "durationInMillis": 250500,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "RUB422100998",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/08/a7/6b/08a76b26-157e-caa7-5fca-18f518f839bb/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "e3dbe3",
//         "textColor2": "eacc75",
//         "textColor4": "d2b379",
//         "textColor1": "fffffb",
//         "bgColor": "734f86",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "А. Романоф, Ю. Усачёв, А Сахаров & Е. Польна",
//       "url": "https://music.apple.com/dz/album/eva-feat-%D0%B5%D0%B2%D0%B0-%D0%BF%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0/1562640924?i=1562640932",
//       "playParams": {
//         "id": "1562640932",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Eva (feat. Ева Польна)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/8a/8d/b2/8a8db292-d897-47e7-cbee-e9c8df813ae8/mzaf_6723625740977798008.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Vintazh"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1562640932/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1562640932/artists?l=en-GB",
//         "data": [
//           {
//             "id": "674319958",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/674319958?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748506128545,
//         "MZ_INDEXER": 1748506202723
//       }
//     }
//   },
//   {
//     "id": "1820263161",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820263161?l=en-GB",
//     "attributes": {
//       "albumName": "USB",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music",
//         "Dance"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-17",
//       "durationInMillis": 165857,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAHS2500558",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/4f/9f/744f9f87-0629-77f5-64c7-e5e72914b365/5021732843395.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "d8d8d8",
//         "textColor2": "ebebeb",
//         "textColor4": "cdcdcd",
//         "textColor1": "f8f8f8",
//         "bgColor": "585858",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Fred Gibson, Jaylah Ji Mya Hickmon, Joseph Adenuga, Kaylon Berry & Maria-Cecilia Simone Kelly",
//       "url": "https://music.apple.com/dz/album/victory-lap/1820263160?i=1820263161",
//       "playParams": {
//         "id": "1820263161",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Victory Lap",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/e1/bc/2ce1bc26-068e-f46b-0f7e-c54c2e25d3a2/mzaf_9989161835484186391.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Fred again.., Skepta & PlaqueBoyMax",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820263161/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820263161/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1455262408",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1455262408?l=en-GB"
//           },
//           {
//             "id": "167376669",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/167376669?l=en-GB"
//           },
//           {
//             "id": "1673148514",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1673148514?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752194817654,
//         "MZ_INDEXER": 1752164122222
//       }
//     }
//   },
//   {
//     "id": "1714235527",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1714235527?l=en-GB",
//     "attributes": {
//       "albumName": "Come Into My Life (The Album)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 10,
//       "releaseDate": "1996-01-01",
//       "durationInMillis": 213394,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "ITA179700143",
//       "artwork": {
//         "width": 1440,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/15/59/f9/1559f9a2-cfd8-99b8-60c0-5e313cedb77b/cover.jpg/440x440bb.jpg",
//         "height": 1440,
//         "textColor3": "d2d3cb",
//         "textColor2": "ebc4a2",
//         "textColor4": "d3ab88",
//         "textColor1": "e9f6f6",
//         "bgColor": "764920",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "M. Molella, F. CARMENI & G. Rizzatto",
//       "url": "https://music.apple.com/dz/album/freed-from-desire/1714234986?i=1714235527",
//       "playParams": {
//         "id": "1714235527",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Freed From Desire",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d7/74/3a/d7743ab4-90b1-c742-8989-2215d6d195f6/mzaf_877524865672754042.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Gala"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1714235527/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1714235527/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1082893764",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1082893764?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745503417287,
//         "MZ_INDEXER": 1752210611170
//       }
//     }
//   },
//   {
//     "id": "1795765087",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1795765087?l=en-GB",
//     "attributes": {
//       "albumName": "Beautiful People - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-03-07",
//       "durationInMillis": 187087,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "UKWLG2500016",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/43/73/c4/4373c49e-369c-689c-11d2-c60abe6377a5/5021732657756.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "cb8da9",
//         "textColor2": "d0beb3",
//         "textColor4": "a99a91",
//         "textColor1": "faaed2",
//         "bgColor": "0e0a07",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "David Guetta, Mikkel S. Eriksen, Sia, Timofey Reznikov & Tor Erik Hermansen",
//       "url": "https://music.apple.com/dz/album/beautiful-people/1795765069?i=1795765087",
//       "playParams": {
//         "id": "1795765087",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Beautiful People",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7b/4c/c3/7b4cc34c-73aa-b6c0-708b-0ac2d087bdb9/mzaf_9790833440843075454.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "David Guetta & Sia"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1795765087/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1799996262",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1799996262?l=en-GB"
//           },
//           {
//             "id": "1802189288",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1802189288?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1795765087/artists?l=en-GB",
//         "data": [
//           {
//             "id": "5557599",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/5557599?l=en-GB"
//           },
//           {
//             "id": "28721078",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/28721078?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569801867,
//         "MZ_INDEXER": 1751789075736
//       }
//     }
//   },
//   {
//     "id": "1818469777",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1818469777?l=en-GB",
//     "attributes": {
//       "albumName": "Nasty Jamz - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Dance",
//         "Music",
//         "Electronic",
//         "Electronica"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2015-09-15",
//       "durationInMillis": 238558,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QM4TX2539937",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/34/29/89/34298915-bc97-b789-ecc8-e284aae5267c/663918281918.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "cb516f",
//         "textColor2": "e8567d",
//         "textColor4": "b94464",
//         "textColor1": "ff668c",
//         "bgColor": "000000",
//         "hasP3": false
//       },
//       "audioLocale": "zxx",
//       "composerName": "David Gemmill",
//       "url": "https://music.apple.com/dz/album/nasty-jamz/1818469776?i=1818469777",
//       "playParams": {
//         "id": "1818469777",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Nasty Jamz",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5c/2d/56/5c2d56be-c6f6-4ae8-8ca9-7df413600f3d/mzaf_4935351755432659212.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Coolzone"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1818469777/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1818469777/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1818469650",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1818469650?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751762289777,
//         "MZ_INDEXER": 1752217424526
//       }
//     }
//   },
//   {
//     "id": "1787022572",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1787022572?l=en-GB",
//     "attributes": {
//       "albumName": "DeBÍ TiRAR MáS FOToS",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-01-05",
//       "durationInMillis": 183685,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QMFMF2447055",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/5e/7e/905e7ed5-a8fa-a8f3-cd06-0028fdf3afaa/199066342442.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bbc7c0",
//         "textColor2": "d5b195",
//         "textColor4": "ae927d",
//         "textColor1": "e5f3ea",
//         "bgColor": "13181c",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Benito A. Martinez Ocasio",
//       "url": "https://music.apple.com/dz/album/nuevayol/1787022393?i=1787022572",
//       "playParams": {
//         "id": "1787022572",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "NUEVAYoL",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/1e/17/e71e17d8-4a5c-7254-3551-62580aa77516/mzaf_9417781865839967440.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Bad Bunny"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1787022572/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1824543897",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1824543897?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1787022572/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1126808565",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1126808565?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749625656312,
//         "MZ_INDEXER": 1752084185526
//       }
//     }
//   },
//   {
//     "id": "1799080775",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1799080775?l=en-GB",
//     "attributes": {
//       "albumName": "Freudian",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music",
//         "Alternative"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2016-10-21",
//       "durationInMillis": 278180,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "TCACR1690004",
//       "artwork": {
//         "width": 1425,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/cd/1a/b6cd1a5b-83af-a1e2-0ad7-ea530fcf2522/859722261219.jpg/440x440bb.jpg",
//         "height": 1425,
//         "textColor3": "31322c",
//         "textColor2": "231817",
//         "textColor4": "403a3a",
//         "textColor1": "100e06",
//         "bgColor": "b7c2c6",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "url": "https://music.apple.com/dz/album/get-you-feat-kali-uchis/1799080774?i=1799080775",
//       "playParams": {
//         "id": "1799080775",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Get You (feat. Kali Uchis)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a2/64/7e/a2647e53-f16c-ec35-0b41-cf6a65ab69a2/mzaf_7427365009000821098.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Daniel Caesar"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1799080775/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1799080775/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1019899019",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1019899019?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751566698431,
//         "MZ_INDEXER": 1751569834494
//       }
//     }
//   },
//   {
//     "id": "1739659142",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1739659142?l=en-GB",
//     "attributes": {
//       "albumName": "HIT ME HARD AND SOFT",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2024-05-17",
//       "durationInMillis": 210373,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72401994",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "a8b2a0",
//         "textColor2": "c8c8b9",
//         "textColor4": "a4a59a",
//         "textColor1": "cdd9c1",
//         "bgColor": "141720",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Billie Eilish & FINNEAS",
//       "url": "https://music.apple.com/dz/album/birds-of-a-feather/1739659134?i=1739659142",
//       "playParams": {
//         "id": "1739659142",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "BIRDS OF A FEATHER",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/ff/37/06ff37b5-02b3-af0c-2a75-8d8bb11ce3fc/mzaf_1694141409109287793.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Billie Eilish"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1739659142/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1770887795",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1770887795?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1739659142/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1065981054",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1065981054?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569592928,
//         "MZ_INDEXER": 1751570718863
//       }
//     }
//   },
//   {
//     "id": "1756335935",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1756335935?l=en-GB",
//     "attributes": {
//       "albumName": "I Adore You (feat. Daecolm) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-07-19",
//       "durationInMillis": 214000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "DECE72401347",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/df/e6/1ddfe6ea-a5f2-2c59-b574-b56ef0379096/24UMGIM74086.rgb.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "2f2f2f",
//         "textColor2": "2d2d2d",
//         "textColor4": "525252",
//         "textColor1": "000000",
//         "bgColor": "e9e9e9",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Florent Hugel, Alexander Tidebrink, Tobias Topic, Daecolm Holland, Arash Labaf, Maximilian Riehl & Loris Cimino",
//       "url": "https://music.apple.com/dz/album/i-adore-you-feat-daecolm/1756335923?i=1756335935",
//       "playParams": {
//         "id": "1756335935",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "I Adore You (feat. Daecolm)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/12/ff/7f12ff99-459b-a217-a1ef-b7569e539c5e/mzaf_7355524967509472542.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "HUGEL, Topic & Arash"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1756335935/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1756335935/artists?l=en-GB",
//         "data": [
//           {
//             "id": "978839124",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/978839124?l=en-GB"
//           },
//           {
//             "id": "1075860684",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1075860684?l=en-GB"
//           },
//           {
//             "id": "49315081",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/49315081?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1747960362366,
//         "MZ_INDEXER": 1750931263148
//       }
//     }
//   },
//   {
//     "id": "1627798965",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1627798965?l=en-GB",
//     "attributes": {
//       "albumName": "Greatest Hits",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "1989-11-01",
//       "durationInMillis": 218293,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAAW0202208",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5f/18/71/5f1871b1-78a4-e597-ad28-81e5a34ea3c7/196589190574.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "eecdce",
//         "textColor2": "f5a3a3",
//         "textColor4": "e68384",
//         "textColor1": "ffffff",
//         "bgColor": "ac050a",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Domenico Modugno",
//       "url": "https://music.apple.com/dz/album/volare-nel-blu-di-pinto-di-blu/1627798677?i=1627798965",
//       "playParams": {
//         "id": "1627798965",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Volare (Nel Blu di Pinto di Blu)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b6/92/00/b6920010-a3a5-915f-10c6-6b3c2bae86cd/mzaf_13656818257700915241.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Gipsy Kings"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1627798965/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1627798965/artists?l=en-GB",
//         "data": [
//           {
//             "id": "553517",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/553517?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751446657059,
//         "MZ_INDEXER": 1751571248672
//       }
//     }
//   },
//   {
//     "id": "1806531515",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1806531515?l=en-GB",
//     "attributes": {
//       "albumName": "LUNA BALA - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music",
//         "Electronica"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-04-18",
//       "durationInMillis": 124111,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "CA5KR2527385",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/00/dd/c5/00ddc5dd-4c86-92b6-1323-190c572badf3/663918173695.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "461d00",
//         "textColor2": "251003",
//         "textColor4": "4e2102",
//         "textColor1": "1b0a00",
//         "bgColor": "f56800",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Aris Parrein & Paolo Rondolone",
//       "url": "https://music.apple.com/dz/album/luna-bala-slowed/1806531513?i=1806531515",
//       "playParams": {
//         "id": "1806531515",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "LUNA BALA (Slowed)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e5/91/5e/e5915ea4-f62e-929e-ae7c-5967ac147ad4/mzaf_12090222155032071224.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Yb Wasg'ood & Ariis"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1806531515/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1806531515/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1528301216",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1528301216?l=en-GB"
//           },
//           {
//             "id": "1524746997",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1524746997?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748974427450,
//         "MZ_INDEXER": 1751129408412
//       }
//     }
//   },
//   {
//     "id": "1792667027",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1792667027?l=en-GB",
//     "attributes": {
//       "albumName": "MAYHEM",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 14,
//       "releaseDate": "2024-08-16",
//       "durationInMillis": 251668,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72409273",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/be/11/d1/be11d187-1aeb-99f3-01c5-597ed65cdb6a/25UMGIM07433.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d0d0d0",
//         "textColor2": "dfdfdf",
//         "textColor4": "bdbdbd",
//         "textColor1": "f7f7f7",
//         "bgColor": "353535",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Lady Gaga, Bruno Mars, Dernst \"D'Mile\" Emile II, Andrew Watt & James Fauntleroy",
//       "url": "https://music.apple.com/dz/album/die-with-a-smile/1792666546?i=1792667027",
//       "playParams": {
//         "id": "1792667027",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Die With A Smile",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/55/8c/15/558c157d-9bc6-b5ad-665d-3b609f21a0a1/mzaf_6778175040302231361.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lady Gaga & Bruno Mars"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1792667027/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1792667027/artists?l=en-GB",
//         "data": [
//           {
//             "id": "277293880",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/277293880?l=en-GB"
//           },
//           {
//             "id": "278873078",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/278873078?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752021057351,
//         "MZ_INDEXER": 1751568648170
//       }
//     }
//   },
//   {
//     "id": "1698723327",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1698723327?l=en-GB",
//     "attributes": {
//       "albumName": "The Rise and Fall of a Midwest Princess",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 11,
//       "releaseDate": "2020-04-03",
//       "durationInMillis": 258035,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USAT22001300",
//       "artwork": {
//         "width": 4358,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/65/cb/fb65cb0f-4260-d740-d6f5-bb80c9c27c1b/23UMGIM84225.rgb.jpg/440x440bb.jpg",
//         "height": 4358,
//         "textColor3": "cacccb",
//         "textColor2": "fbe7c1",
//         "textColor4": "c9bb9c",
//         "textColor1": "fcfcfc",
//         "bgColor": "000b06",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Daniel Nigro & Kayleigh Rose Amstutz",
//       "url": "https://music.apple.com/dz/album/pink-pony-club/1698723205?i=1698723327",
//       "playParams": {
//         "id": "1698723327",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Pink Pony Club",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/b5/57/cdb5571e-fde6-a075-9d88-18dcc8691a52/mzaf_1732025204656200729.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Chappell Roan"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1698723327/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1733734929",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1733734929?l=en-GB"
//           },
//           {
//             "id": "1506190874",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1506190874?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1698723327/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1264818718",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1264818718?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569599413,
//         "MZ_INDEXER": 1752077377751
//       }
//     }
//   },
//   {
//     "id": "1593095067",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1593095067?l=en-GB",
//     "attributes": {
//       "albumName": "Stereo Love (feat. Vika Jigulina)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2009-09-17",
//       "durationInMillis": 247615,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ROCMA0901964",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/23/f0/cf/23f0cffe-c599-9f0d-4b6e-c673f2e33d0f/6420565345820.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cacac7",
//         "textColor2": "fd01c3",
//         "textColor4": "cb019d",
//         "textColor1": "fdfcf7",
//         "bgColor": "010408",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Ilie Eduard Marian & Victoria Corneva",
//       "url": "https://music.apple.com/dz/album/stereo-love-feat-vika-jigulina/1593095063?i=1593095067",
//       "playParams": {
//         "id": "1593095067",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Stereo Love (feat. Vika Jigulina)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/42/ec/3b/42ec3b31-6e74-4abd-c763-0e856159be1e/mzaf_4224313685881654518.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Edward Maya"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1593095067/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1593095067/artists?l=en-GB",
//         "data": [
//           {
//             "id": "318015722",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/318015722?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752235383764,
//         "MZ_INDEXER": 1748354797429
//       }
//     }
//   },
//   {
//     "id": "1708289078",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1708289078?l=en-GB",
//     "attributes": {
//       "albumName": "Y Qué Fue? - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin Urban",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2020-07-29",
//       "durationInMillis": 163759,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZHZ62041239",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/88/9d/a6/889da6ac-8275-8194-da2a-cbf53f555e8f/755773116723.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c0a393",
//         "textColor2": "dbb9a4",
//         "textColor4": "af9483",
//         "textColor1": "f0ccb8",
//         "bgColor": "000000",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Miguel Angel Valerio",
//       "url": "https://music.apple.com/dz/album/y-qu%C3%A9-fue/1708289077?i=1708289078",
//       "playParams": {
//         "id": "1708289078",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Y Qué Fue?",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6b/c1/a3/6bc1a344-a9f5-3435-b72c-6949a6c92343/mzaf_17111025155118328954.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Don Miguelo"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1708289078/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1708289078/artists?l=en-GB",
//         "data": [
//           {
//             "id": "129181816",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/129181816?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745489202401,
//         "MZ_INDEXER": 1746650410503
//       }
//     }
//   },
//   {
//     "id": "1737990264",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1737990264?l=en-GB",
//     "attributes": {
//       "albumName": "Romance",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2024-04-17",
//       "durationInMillis": 221451,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBBKS2400090",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4d/3a/76/4d3a7621-8b56-56a3-829f-545dde0b2b6a/191404143674.png/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "431f29",
//         "textColor2": "2e0e12",
//         "textColor4": "582534",
//         "textColor1": "140704",
//         "bgColor": "ff7fbc",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Carlos O’Connell, Conor Curley, Conor Deegan III, Tom Coll, Frederick Wordsworth & Grian Chatten",
//       "url": "https://music.apple.com/dz/album/starburster/1737990072?i=1737990264",
//       "playParams": {
//         "id": "1737990264",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Starburster",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/84/ac/49/84ac4998-945d-f789-046c-c18025e273f7/mzaf_2511381881695499903.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Fontaines D.C.",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1737990264/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1742036899",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1742036899?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1737990264/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1341828470",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1341828470?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751590384893,
//         "MZ_INDEXER": 1752196325187
//       }
//     }
//   },
//   {
//     "id": "1804974563",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1804974563?l=en-GB",
//     "attributes": {
//       "albumName": "Something Beautiful",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2025-04-04",
//       "durationInMillis": 250484,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USSM12501019",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/b1/63/beb16362-169d-b53f-7186-eccf028d7830/196872959222.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cecad2",
//         "textColor2": "dad7d8",
//         "textColor4": "bcb6b7",
//         "textColor1": "f0f0fa",
//         "bgColor": "483433",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Miley Cyrus, Michael Pollack, Gregory \"Aldae\" Hein, Shawn Everett, Jonathan Rado, Molly Rankin & Alec O'Hanley",
//       "url": "https://music.apple.com/dz/album/end-of-the-world/1804974240?i=1804974563",
//       "playParams": {
//         "id": "1804974563",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "End of the World",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bd/29/e9/bd29e955-260b-5828-95bd-55ac9a93bb5b/mzaf_11001085680747764493.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Miley Cyrus"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1804974563/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1806134050",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1806134050?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1804974563/artists?l=en-GB",
//         "data": [
//           {
//             "id": "137057909",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/137057909?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751566637221,
//         "MZ_INDEXER": 1751567232634
//       }
//     }
//   },
//   {
//     "id": "1739659144",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1739659144?l=en-GB",
//     "attributes": {
//       "albumName": "HIT ME HARD AND SOFT",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "2024-05-17",
//       "durationInMillis": 261467,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72401993",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "a8b2a0",
//         "textColor2": "c8c8b9",
//         "textColor4": "a4a59a",
//         "textColor1": "cdd9c1",
//         "bgColor": "141720",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Billie Eilish & FINNEAS",
//       "url": "https://music.apple.com/dz/album/wildflower/1739659134?i=1739659144",
//       "playParams": {
//         "id": "1739659144",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "WILDFLOWER",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/30/35/10/303510ea-fe5b-39c7-26cc-d0e50698393f/mzaf_12539564791562071844.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Billie Eilish"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1739659144/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1739659144/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1065981054",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1065981054?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569314874,
//         "MZ_INDEXER": 1752201906449
//       }
//     }
//   },
//   {
//     "id": "1793654640",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1793654640?l=en-GB",
//     "attributes": {
//       "albumName": "Hurry Up Tomorrow",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 13,
//       "releaseDate": "2024-09-27",
//       "durationInMillis": 256000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12406536",
//       "artwork": {
//         "width": 4500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/0d/06/3d0d06e6-cfd4-8f69-4a42-52b7cf33fb24/25UMGIM09490.rgb.jpg/440x440bb.jpg",
//         "height": 4500,
//         "textColor3": "c7c2ad",
//         "textColor2": "f3dfbd",
//         "textColor4": "c5b598",
//         "textColor1": "f5efd8",
//         "bgColor": "0d0d03",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Abel Tesfaye, Jordan Terrell Carter, Pharrell Williams, Mark Williams (Oji), Raul Cubina (Volta), Tariq 'BL$$D' Sharrieff, Kobe “BbyKobe” Hood, Devon Chisolm (Lawson), Blessed, Jarrod \"Twisco\" Morgan & MIKE DEAN",
//       "url": "https://music.apple.com/dz/album/timeless/1793654348?i=1793654640",
//       "playParams": {
//         "id": "1793654640",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Timeless",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d6/ab/60/d6ab6032-594f-1ac3-d334-c070874ae90b/mzaf_2333733561389610365.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "The Weeknd & Playboi Carti",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1793654640/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1795692888",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1795692888?l=en-GB"
//           },
//           {
//             "id": "1771533314",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1771533314?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1793654640/artists?l=en-GB",
//         "data": [
//           {
//             "id": "479756766",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/479756766?l=en-GB"
//           },
//           {
//             "id": "982372505",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/982372505?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751244769206,
//         "MZ_INDEXER": 1752206605029
//       }
//     }
//   },
//   {
//     "id": "1812537122",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1812537122?l=en-GB",
//     "attributes": {
//       "albumName": "BORONDO",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin Urban",
//         "Music",
//         "Latin",
//         "African",
//         "Afro-Pop"
//       ],
//       "trackNumber": 6,
//       "releaseDate": "2025-05-14",
//       "durationInMillis": 158036,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZ7B82500302",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8b/95/6b/8b956b63-4f21-899a-f912-f1c8a9f5d9f5/196873015750.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "333333",
//         "textColor2": "000000",
//         "textColor4": "333333",
//         "textColor1": "000000",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Diego L. Vélez Márquez \"Super Dakis\", Brandon De Jesús López Orozco (Beéle), Kevyn Mauricio Cruz, Lenin Yorney Palacios Machado, Alejandro Robledo, Filly Andrés Lima Maya & Cristian Camilo Álvarez Ospina",
//       "url": "https://music.apple.com/dz/album/no-tiene-sentido/1812536829?i=1812537122",
//       "playParams": {
//         "id": "1812537122",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "no tiene sentido",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3f/26/94/3f26949d-7e42-246b-3f2f-9618024f239b/mzaf_17932134645267425479.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Beéle"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1812537122/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1814653708",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1814653708?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1812537122/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1470139605",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1470139605?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751170875907,
//         "MZ_INDEXER": 1749878499137
//       }
//     }
//   },
//   {
//     "id": "1753137724",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1753137724?l=en-GB",
//     "attributes": {
//       "albumName": "Save It For Later - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-06-26",
//       "durationInMillis": 261967,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12403625",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2a/f0/16/2af016d0-e800-01d2-bcfc-85f68f292169/24UMGIM62498.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "dcd1b7",
//         "textColor2": "ebe3ce",
//         "textColor4": "cfc7b3",
//         "textColor1": "faefd3",
//         "bgColor": "625749",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Dave Wakeling, Andy Cox, David Steele, Everett Morton & Roger Charlery",
//       "url": "https://music.apple.com/dz/album/save-it-for-later/1753137713?i=1753137724",
//       "playParams": {
//         "id": "1753137724",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Save It For Later",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/bb/07/e1bb07aa-1ebd-6136-d142-2017b88dd1cd/mzaf_8747303831003389464.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Eddie Vedder"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1753137724/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1753137724/artists?l=en-GB",
//         "data": [
//           {
//             "id": "267320",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/267320?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1747823461806,
//         "MZ_INDEXER": 1748326177173
//       }
//     }
//   },
//   {
//     "id": "712862710",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/712862710?l=en-GB",
//     "attributes": {
//       "albumName": "Walking On a Dream (Special Edition)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music",
//         "Rock",
//         "Adult Alternative",
//         "Alternative"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2008-09-20",
//       "durationInMillis": 267355,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "AUEI10800041",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7f/63/2c/7f632c08-3960-de3d-d34c-ee8140038b69/13UADIM60773.rgb.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "cdced0",
//         "textColor2": "becbed",
//         "textColor4": "9aa6c9",
//         "textColor1": "fdfdf5",
//         "bgColor": "0c123e",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Nick Littlemore, Luke Steele & Jonathan Sloan",
//       "url": "https://music.apple.com/dz/album/we-are-the-people/712862605?i=712862710",
//       "playParams": {
//         "id": "712862710",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "We Are the People",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1f/33/71/1f337152-3283-de6b-45f5-c3b4028c0998/mzaf_11304312529559775009.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Empire Of The Sun"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/712862710/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/712862710/artists?l=en-GB",
//         "data": [
//           {
//             "id": "284433289",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/284433289?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749861007111,
//         "MZ_INDEXER": 1751311372376
//       }
//     }
//   },
//   {
//     "id": "1818761158",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1818761158?l=en-GB",
//     "attributes": {
//       "albumName": "No Broke Boys - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-06",
//       "durationInMillis": 163994,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USAT22504362",
//       "artwork": {
//         "width": 1425,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/c9/d3/7ac9d3d9-519a-3e67-ff4b-77de2458e0b9/075679605375.jpg/440x440bb.jpg",
//         "height": 1426,
//         "textColor3": "363131",
//         "textColor2": "2a201a",
//         "textColor4": "3f3b3a",
//         "textColor1": "1f140d",
//         "bgColor": "91a7be",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Eric Frederic, Michael Edward Neil, Thadeus Labuszewski & Tinashe",
//       "url": "https://music.apple.com/dz/album/no-broke-boys/1818761033?i=1818761158",
//       "playParams": {
//         "id": "1818761158",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "No Broke Boys",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/27/81/33278110-4a15-6492-8786-c2be067e2bd0/mzaf_15790030797772341949.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Disco Lines & Tinashe",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1818761158/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1818761158/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1462793893",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1462793893?l=en-GB"
//           },
//           {
//             "id": "464835513",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/464835513?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751585920738,
//         "MZ_INDEXER": 1752174979640
//       }
//     }
//   },
//   {
//     "id": "1822256772",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822256772?l=en-GB",
//     "attributes": {
//       "albumName": "10 - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Latin Urban",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-27",
//       "durationInMillis": 163960,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "FRX452536356",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/71/e8/b0/71e8b0b6-ac92-bdb6-33c9-16d6a95a0b34/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "332b2e",
//         "textColor2": "211d17",
//         "textColor4": "403538",
//         "textColor1": "11100a",
//         "bgColor": "bb96bd",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Сослан Бурнацев & Ахмед Аль-Ханафи",
//       "url": "https://music.apple.com/dz/album/10/1822256770?i=1822256772",
//       "playParams": {
//         "id": "1822256772",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "10",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/42/b7/9142b773-4599-17ac-697c-908f1f4afaac/mzaf_17687577233815410518.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Endshpil"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822256772/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822256772/artists?l=en-GB",
//         "data": [
//           {
//             "id": "979506114",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/979506114?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751517304378,
//         "MZ_INDEXER": 1752238288849
//       }
//     }
//   },
//   {
//     "id": "1780380430",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1780380430?l=en-GB",
//     "attributes": {
//       "albumName": "5ive",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 17,
//       "releaseDate": "2025-02-07",
//       "durationInMillis": 136036,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBARL2401834",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/0c/91/cd0c917a-e1a0-2592-a3a1-529796e19ea9/196872682564.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "442623",
//         "textColor2": "432403",
//         "textColor4": "604325",
//         "textColor1": "200000",
//         "bgColor": "d5c0af",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Davido, Omah Lay & Yung Alpha",
//       "url": "https://music.apple.com/dz/album/with-you-feat-omah-lay/1780380016?i=1780380430",
//       "playParams": {
//         "id": "1780380430",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "With You (feat. Omah Lay)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4b/3b/95/4b3b9502-df5c-a4c7-f08d-b1834046e512/mzaf_7412530520805052040.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Davido"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1780380430/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1821256980",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1821256980?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1780380430/artists?l=en-GB",
//         "data": [
//           {
//             "id": "254654363",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/254654363?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750718561609,
//         "MZ_INDEXER": 1750680934556
//       }
//     }
//   },
//   {
//     "id": "200526621",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/200526621?l=en-GB",
//     "attributes": {
//       "albumName": "Stay With You - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Rock",
//         "Hard Rock",
//         "Adult Alternative",
//         "Pop/Rock",
//         "Alternative"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "1998-03-31",
//       "durationInMillis": 289533,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWB19800160",
//       "artwork": {
//         "width": 1425,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music/8e/75/8b/mzi.zrwbzwbf.jpg/440x440bb.jpg",
//         "height": 1425,
//         "textColor3": "cdcdcd",
//         "textColor2": "c6c6c6",
//         "textColor4": "a0a0a0",
//         "textColor1": "ffffff",
//         "bgColor": "080808",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "John Rzeznik",
//       "url": "https://music.apple.com/dz/album/iris/200526616?i=200526621",
//       "playParams": {
//         "id": "200526621",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Iris",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/70/df/a4/70dfa4ec-daf3-2630-d5a7-4a53aea7228e/mzaf_17234540174424619942.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "The Goo Goo Dolls"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/200526621/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1762527988",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1762527988?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/200526621/artists?l=en-GB",
//         "data": [
//           {
//             "id": "147559",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/147559?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751329923762,
//         "MZ_INDEXER": 1751569201521
//       }
//     }
//   },
//   {
//     "id": "1805259823",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1805259823?l=en-GB",
//     "attributes": {
//       "albumName": "Isaka (6am) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music",
//         "House"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-11",
//       "durationInMillis": 349911,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QM6N22533642",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/16/dc/7916dced-60ee-cbc4-6ad1-334b399bb7ba/199350154188.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bcb3a9",
//         "textColor2": "baccc2",
//         "textColor4": "9faba1",
//         "textColor1": "ded6cc",
//         "bgColor": "35271c",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Ciza & Thukuthela",
//       "url": "https://music.apple.com/dz/album/isaka-6am/1805259822?i=1805259823",
//       "playParams": {
//         "id": "1805259823",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Isaka (6am)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3b/3b/53/3b3b5317-8be9-3eb5-192e-127806cf00a2/mzaf_11737965177079677969.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ciza, Jazzworx & Thukuthela"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1805259823/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1805259823/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1472059692",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1472059692?l=en-GB"
//           },
//           {
//             "id": "112735681",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/112735681?l=en-GB"
//           },
//           {
//             "id": "1768801647",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1768801647?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751587015678,
//         "MZ_INDEXER": 1751586387018
//       }
//     }
//   },
//   {
//     "id": "1792667005",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1792667005?l=en-GB",
//     "attributes": {
//       "albumName": "MAYHEM",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-02-03",
//       "durationInMillis": 223398,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72412581",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/be/11/d1/be11d187-1aeb-99f3-01c5-597ed65cdb6a/25UMGIM07433.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d0d0d0",
//         "textColor2": "dfdfdf",
//         "textColor4": "bdbdbd",
//         "textColor1": "f7f7f7",
//         "bgColor": "353535",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Lady Gaga, Andrew Watt, Henry Walter, Susan Janet Ballion, Pete Edward Clarke, Steven Severin & John McGeoch",
//       "url": "https://music.apple.com/dz/album/abracadabra/1792666546?i=1792667005",
//       "playParams": {
//         "id": "1792667005",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Abracadabra",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/0d/db/e20ddbb3-6669-5ed1-125e-e60517fff29b/mzaf_4822340899686598221.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lady Gaga"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1792667005/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1797447006",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1797447006?l=en-GB"
//           },
//           {
//             "id": "1793872676",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1793872676?l=en-GB"
//           },
//           {
//             "id": "1800624661",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1800624661?l=en-GB"
//           },
//           {
//             "id": "1792667184",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1792667184?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1792667005/artists?l=en-GB",
//         "data": [
//           {
//             "id": "277293880",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/277293880?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752021091356,
//         "MZ_INDEXER": 1748359893104
//       }
//     }
//   },
//   {
//     "id": "1819861156",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819861156?l=en-GB",
//     "attributes": {
//       "albumName": "Man’s Best Friend",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-05",
//       "durationInMillis": 213646,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72504354",
//       "artwork": {
//         "width": 3700,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cc/bc/ef/ccbcefb5-cf3a-1c55-0173-c37602827c7a/25UMGIM81699.rgb.jpg/440x440bb.jpg",
//         "height": 3700,
//         "textColor3": "403637",
//         "textColor2": "2d2528",
//         "textColor4": "51494d",
//         "textColor1": "180d0c",
//         "bgColor": "e0dbe2",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Sabrina Carpenter, Jack Antonoff & Amy Allen",
//       "url": "https://music.apple.com/dz/album/manchild/1819861154?i=1819861156",
//       "playParams": {
//         "id": "1819861156",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Manchild",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/50/33/5d/50335d34-64fc-77a4-4b93-1cc345d5f851/mzaf_17303179372393021932.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Sabrina Carpenter",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819861156/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1818875533",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1818875533?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819861156/artists?l=en-GB",
//         "data": [
//           {
//             "id": "390647681",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/390647681?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751516991293,
//         "MZ_INDEXER": 1751133979368
//       }
//     }
//   },
//   {
//     "id": "1819545673",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819545673?l=en-GB",
//     "attributes": {
//       "albumName": "Tropicoqueta",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 19,
//       "releaseDate": "2024-06-21",
//       "durationInMillis": 195824,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12400968",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1e/39/f5/1e39f58c-e5c1-6431-d6ed-d6c32e29d63f/25UMGIM79234.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "e99965",
//         "textColor2": "fc9461",
//         "textColor4": "e88055",
//         "textColor1": "fcb376",
//         "bgColor": "9c3123",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Carolina Giraldo Navarro, Edgar Barrera, Andres Jael Correa Rios & Alejandro Ramirez",
//       "url": "https://music.apple.com/dz/album/si-antes-te-hubiera-conocido/1819544141?i=1819545673",
//       "playParams": {
//         "id": "1819545673",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Si Antes Te Hubiera Conocido",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/44/b7/3444b7c5-66dd-fbee-222f-2a44396cfe86/mzaf_693509316072806786.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "KAROL G"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819545673/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1753205411",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1753205411?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819545673/artists?l=en-GB",
//         "data": [
//           {
//             "id": "290814601",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/290814601?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751109117075,
//         "MZ_INDEXER": 1752220027362
//       }
//     }
//   },
//   {
//     "id": "1716680983",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1716680983?l=en-GB",
//     "attributes": {
//       "albumName": "Jealousy (feat. Leemckrazy & Ceeka RSA) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Amapiano",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2023-11-17",
//       "durationInMillis": 390874,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ZBOOX2300001",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/29/12/43/29124310-9fca-45fb-509d-f803e2b1949f/196871649599.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cccecd",
//         "textColor2": "d2b8ae",
//         "textColor4": "ac968f",
//         "textColor1": "fbfdfc",
//         "bgColor": "121212",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Mxolisi Nkosi & Linda Mnisi",
//       "url": "https://music.apple.com/dz/album/jealousy-feat-leemckrazy-ceeka-rsa/1716680982?i=1716680983",
//       "playParams": {
//         "id": "1716680983",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Jealousy (feat. Leemckrazy & Ceeka RSA)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fe/8e/76/fe8e76d3-74b8-412e-8e29-97897332e00a/mzaf_16149550960648432972.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Khalil Harrison & Tyler ICU"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1716680983/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1716680983/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1554719458",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1554719458?l=en-GB"
//           },
//           {
//             "id": "1408283553",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1408283553?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745509254949,
//         "MZ_INDEXER": 1746130254703
//       }
//     }
//   },
//   {
//     "id": "1576809257",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1576809257?l=en-GB",
//     "attributes": {
//       "albumName": "Vidrado Em Você - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Brazilian",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2019-06-11",
//       "durationInMillis": 134769,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "BXG6R1900599",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/ef/3d/a4ef3df9-6480-f516-6ff7-657a24842ca1/00193483952918_Cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "c9bbcb",
//         "textColor2": "f0cede",
//         "textColor4": "cba5b7",
//         "textColor1": "ede9f8",
//         "bgColor": "380218",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "DJ Guuga & MC Livinho",
//       "url": "https://music.apple.com/dz/album/vidrado-em-voc%C3%AA/1576809249?i=1576809257",
//       "playParams": {
//         "id": "1576809257",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Vidrado Em Você",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/97/68/8c/97688c7d-7090-545a-df41-60821501817c/mzaf_12428886567182865683.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "DJ Guuga & MC Livinho"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1576809257/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1576809257/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1070659717",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1070659717?l=en-GB"
//           },
//           {
//             "id": "898401982",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/898401982?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745433002971,
//         "MZ_INDEXER": 1745442231595
//       }
//     }
//   },
//   {
//     "id": "1813869898",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1813869898?l=en-GB",
//     "attributes": {
//       "albumName": "Kat Slater (Native Remedies Remix) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-14",
//       "durationInMillis": 109582,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZNWY2565335",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8d/2a/df/8d2adf5b-9cb5-f806-3abb-ddba281475a0/artwork.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "a58971",
//         "textColor2": "d6a977",
//         "textColor4": "ac8761",
//         "textColor1": "ceab8c",
//         "bgColor": "040207",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Oluwafemi Akintimehin",
//       "url": "https://music.apple.com/dz/album/kat-slater-native-remedies-remix/1813869894?i=1813869898",
//       "playParams": {
//         "id": "1813869898",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Kat Slater (Native Remedies Remix)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d0/49/02/d04902ea-6983-5374-653f-933909920926/mzaf_707911052082859134.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Tim Duzit",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1813869898/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1813869898/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1452976704",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1452976704?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750893805689,
//         "MZ_INDEXER": 1750892336215
//       }
//     }
//   },
//   {
//     "id": "1820264339",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820264339?l=en-GB",
//     "attributes": {
//       "albumName": "KPop Demon Hunters (Soundtrack from the Netflix Film)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "K-Pop",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 8,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 187964,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QZ8BZ2513513",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/15/42/e1154273-8ecd-5702-e6e6-597f28001681/25UMGIM82363.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5c264c",
//         "textColor2": "480b28",
//         "textColor4": "5f2e4f",
//         "textColor1": "440023",
//         "bgColor": "bbbdef",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jenna Andrews, Stephen Kirk & Mark Sonnenblick",
//       "url": "https://music.apple.com/dz/album/free/1820264137?i=1820264339",
//       "playParams": {
//         "id": "1820264339",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Free",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/71/6f/f2/716ff297-ff70-2e38-ce27-e10eac18a736/mzaf_16749104189023804319.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Rumi, JINU, EJAE, Andrew Choi & KPop Demon Hunters Cast"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820264339/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820264339/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1822335096",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1822335096?l=en-GB"
//           },
//           {
//             "id": "1822335097",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1822335097?l=en-GB"
//           },
//           {
//             "id": "1118367711",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1118367711?l=en-GB"
//           },
//           {
//             "id": "415508398",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/415508398?l=en-GB"
//           },
//           {
//             "id": "1820264140",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264140?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752109400678,
//         "MZ_INDEXER": 1751993811235
//       }
//     }
//   },
//   {
//     "id": "1097861834",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1097861834?l=en-GB",
//     "attributes": {
//       "albumName": "OK Computer",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "1997-05-21",
//       "durationInMillis": 299560,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAYE9701374",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "363333",
//         "textColor2": "1e2629",
//         "textColor4": "4b5154",
//         "textColor1": "040000",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Colin Greenwood, Ed O'Brien, Jonny Greenwood, Phil Selway & Thom Yorke",
//       "url": "https://music.apple.com/dz/album/let-down/1097861387?i=1097861834",
//       "playParams": {
//         "id": "1097861834",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Let Down",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/66/13/3c/66133c2c-59a6-f17b-0b88-7f61e1edc181/mzaf_12936594904953407247.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Radiohead"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1097861834/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1097861834/artists?l=en-GB",
//         "data": [
//           {
//             "id": "657515",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/657515?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751567669253,
//         "MZ_INDEXER": 1752237104659
//       }
//     }
//   },
//   {
//     "id": "1817380542",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817380542?l=en-GB",
//     "attributes": {
//       "albumName": "Ride Or Die - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-04-18",
//       "durationInMillis": 159033,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FRX282578763",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/01/f4/ec/01f4ec3d-85d9-71b3-083c-04575dfa6ae8/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "2f3030",
//         "textColor2": "292a2a",
//         "textColor4": "4a4b4b",
//         "textColor1": "080808",
//         "bgColor": "ced0cf",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Kerem Aksoy",
//       "url": "https://music.apple.com/dz/album/ride-or-die/1817380133?i=1817380542",
//       "playParams": {
//         "id": "1817380542",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Ride Or Die",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/57/dd/4257ddce-d40f-8b9e-e7e2-9cf39384d6ff/mzaf_1769742846696276356.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "afro26",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817380542/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817380542/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1804322485",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1804322485?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751108632038,
//         "MZ_INDEXER": 1751098294850
//       }
//     }
//   },
//   {
//     "id": "1817706421",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817706421?l=en-GB",
//     "attributes": {
//       "albumName": "Redención (Deluxe)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Regional Mexican",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 24,
//       "releaseDate": "2025-06-05",
//       "durationInMillis": 190432,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QM6P42503788",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d8/c0/e9/d8c0e92f-0976-18e1-066d-dc1446234136/199350238130.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "322e27",
//         "textColor2": "1c1a15",
//         "textColor4": "3d372c",
//         "textColor1": "0e0e0e",
//         "bgColor": "c3af8a",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "José Darey Castro & Estevan Plazola",
//       "url": "https://music.apple.com/dz/album/frecuencia/1817706015?i=1817706421",
//       "playParams": {
//         "id": "1817706421",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Frecuencia",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c3/1f/b3/c31fb3f7-7642-e345-3dc7-5b2863ba60aa/mzaf_14216980615744156501.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Los Dareyes De La Sierra",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817706421/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817706421/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1475990231",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1475990231?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751530685419,
//         "MZ_INDEXER": 1751637370453
//       }
//     }
//   },
//   {
//     "id": "1672056675",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1672056675?l=en-GB",
//     "attributes": {
//       "albumName": "Tattoo - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2023-02-23",
//       "durationInMillis": 183375,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "SEUM72201638",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/50/32/fd/5032fddc-e486-956d-a503-7ec6d17af848/22UM1IM46463.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d0d0d0",
//         "textColor2": "e2e9f0",
//         "textColor4": "c0c6cc",
//         "textColor1": "f6f6f6",
//         "bgColor": "3c3c3c",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Peter Boström, Jimmy Thornfeldt, Jimmy Jansson, Moa “Cazzi Opeia” Carlebecker, Loreen Talhaoui & Thomas G:son",
//       "url": "https://music.apple.com/dz/album/tattoo/1672056674?i=1672056675",
//       "playParams": {
//         "id": "1672056675",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Tattoo",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/28/a3/3e/28a33e92-39f5-ba72-9b18-bba16f9b36de/mzaf_10493108083167243659.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Loreen"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1672056675/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1672056675/artists?l=en-GB",
//         "data": [
//           {
//             "id": "417755574",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/417755574?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752021121512,
//         "MZ_INDEXER": 1751849232738
//       }
//     }
//   },
//   {
//     "id": "1749043132",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1749043132?l=en-GB",
//     "attributes": {
//       "albumName": "Move - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afro House",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-06-07",
//       "durationInMillis": 177599,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "DEEC33501508",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7b/84/6d/7b846d83-4d1f-36f4-32e5-6289596980c2/dj.kdflvmhp.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "321006",
//         "textColor2": "050403",
//         "textColor4": "331007",
//         "textColor1": "040303",
//         "bgColor": "eb4314",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Adam Polaszek & Hamid Bashir",
//       "url": "https://music.apple.com/dz/album/move/1749043131?i=1749043132",
//       "playParams": {
//         "id": "1749043132",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Move",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/75/39/c9753920-a947-b4b1-0b68-7e8fc835fbf5/mzaf_695871088900971899.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Adam Port, Stryv & Malachiii"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1749043132/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1749043132/artists?l=en-GB",
//         "data": [
//           {
//             "id": "314014291",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/314014291?l=en-GB"
//           },
//           {
//             "id": "993864364",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/993864364?l=en-GB"
//           },
//           {
//             "id": "1504150622",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1504150622?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750429129160,
//         "MZ_INDEXER": 1751570744209
//       }
//     }
//   },
//   {
//     "id": "1787023936",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1787023936?l=en-GB",
//     "attributes": {
//       "albumName": "DeBÍ TiRAR MáS FOToS",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 16,
//       "releaseDate": "2025-01-05",
//       "durationInMillis": 237117,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": true,
//       "isrc": "QMFMF2447070",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/5e/7e/905e7ed5-a8fa-a8f3-cd06-0028fdf3afaa/199066342442.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bbc7c0",
//         "textColor2": "d5b195",
//         "textColor4": "ae927d",
//         "textColor1": "e5f3ea",
//         "bgColor": "13181c",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Benito A. Martinez Ocasio",
//       "url": "https://music.apple.com/dz/album/dtmf/1787022393?i=1787023936",
//       "playParams": {
//         "id": "1787023936",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "DtMF",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/18/08/dd/1808dd28-e6c1-7396-ba29-36362d3a2255/mzaf_4772680730951823595.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Bad Bunny",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1787023936/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1787023936/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1126808565",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1126808565?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749476572675,
//         "MZ_INDEXER": 1752084189690
//       }
//     }
//   },
//   {
//     "id": "1809806294",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1809806294?l=en-GB",
//     "attributes": {
//       "albumName": "Наследство - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 130778,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FRX202542372",
//       "artwork": {
//         "width": 1440,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/85/88/9d/85889d27-2e7a-c31a-53f8-20ab7a7e388d/cover.jpg/440x440bb.jpg",
//         "height": 1440,
//         "textColor3": "bfcfd1",
//         "textColor2": "d6d5d2",
//         "textColor4": "afb0ae",
//         "textColor1": "eafcfe",
//         "bgColor": "151f20",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Котомцев Николай & Нарольский Михаил",
//       "url": "https://music.apple.com/dz/album/%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE/1809806119?i=1809806294",
//       "playParams": {
//         "id": "1809806294",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Наследство",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bd/b0/11/bdb01174-6d8c-c4ee-7348-135dc5123d9b/mzaf_6963941793922599148.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Icegergert & SKY RAE",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1809806294/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1809806294/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1563426461",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1563426461?l=en-GB"
//           },
//           {
//             "id": "1536427155",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1536427155?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1747913618177,
//         "MZ_INDEXER": 1750755808730
//       }
//     }
//   },
//   {
//     "id": "573537962",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/573537962?l=en-GB",
//     "attributes": {
//       "albumName": "Global Warming (Deluxe Version)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Hip-Hop/Rap"
//       ],
//       "trackNumber": 20,
//       "releaseDate": "2011-03-17",
//       "durationInMillis": 256133,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USJAY1100032",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/74/d3/05/74d305b5-9f71-2fbf-80b5-84d37a21f181/886443671553.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "cecece",
//         "textColor2": "e76a44",
//         "textColor4": "bc5739",
//         "textColor1": "ffffff",
//         "bgColor": "0f0f0f",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Armando C. Perez, Nick van de Wall & Shaffer Smith",
//       "url": "https://music.apple.com/dz/album/give-me-everything-feat-nayer/573537783?i=573537962",
//       "playParams": {
//         "id": "573537962",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Give Me Everything (feat. Nayer)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b2/d9/5d/b2d95d6f-dff8-33fd-b512-4ebb976242ba/mzaf_3191449479966797016.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Pitbull, AFROJACK & Ne-Yo"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/573537962/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "436457877",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/436457877?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/573537962/artists?l=en-GB",
//         "data": [
//           {
//             "id": "27044968",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/27044968?l=en-GB"
//           },
//           {
//             "id": "211210469",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/211210469?l=en-GB"
//           },
//           {
//             "id": "78257321",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/78257321?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751680752867,
//         "MZ_INDEXER": 1751567549573
//       }
//     }
//   },
//   {
//     "id": "1785726923",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1785726923?l=en-GB",
//     "attributes": {
//       "albumName": "LA CIUDAD",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 9,
//       "releaseDate": "2024-11-20",
//       "durationInMillis": 173858,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USLD91766968",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/95/39/f39539ea-0747-c52d-be5a-61c45ba90d7b/48528.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d1cdcc",
//         "textColor2": "ffe7fd",
//         "textColor4": "d2bbcb",
//         "textColor1": "fcfcfe",
//         "bgColor": "230e04",
//         "hasP3": false
//       },
//       "audioLocale": "la",
//       "composerName": "Alleh, Yorghaki & Manuel Lara",
//       "url": "https://music.apple.com/dz/album/capaz-merengueton/1785726614?i=1785726923",
//       "playParams": {
//         "id": "1785726923",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "capaz (merengueton)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8a/aa/8e/8aaa8e42-9639-beff-5315-9163fc1dbb4e/mzaf_4372394017800810797.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Alleh & Yorghaki"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1785726923/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1785726923/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1644755393",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1644755393?l=en-GB"
//           },
//           {
//             "id": "1280681802",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1280681802?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749277142106,
//         "MZ_INDEXER": 1749252839680
//       }
//     }
//   },
//   {
//     "id": "596834669",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/596834669?l=en-GB",
//     "attributes": {
//       "albumName": "Long Way Down (Deluxe)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Singer/Songwriter",
//         "Music",
//         "Rock",
//         "Adult Alternative"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2012-10-15",
//       "durationInMillis": 244360,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBARL1300107",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/4c/5a/c7/4c5ac7cf-28b6-1281-9477-906e7ba12304/886443847835.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "292a2b",
//         "textColor2": "06171e",
//         "textColor4": "273439",
//         "textColor1": "080a0d",
//         "bgColor": "aba7a4",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Tom Odell",
//       "url": "https://music.apple.com/dz/album/another-love/596834552?i=596834669",
//       "playParams": {
//         "id": "596834669",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Another Love",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a7/ad/3d/a7ad3d00-33e4-0c15-2458-f4e3107b1c79/mzaf_12526391418235042549.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Tom Odell",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/596834669/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1666379497",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1666379497?l=en-GB"
//           },
//           {
//             "id": "1281370544",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1281370544?l=en-GB"
//           },
//           {
//             "id": "653024601",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/653024601?l=en-GB"
//           },
//           {
//             "id": "1481603032",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1481603032?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/596834669/artists?l=en-GB",
//         "data": [
//           {
//             "id": "524929515",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/524929515?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1746882308931,
//         "MZ_INDEXER": 1751416106262
//       }
//     }
//   },
//   {
//     "id": "1781270323",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1781270323?l=en-GB",
//     "attributes": {
//       "albumName": "GNX",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2024-11-21",
//       "durationInMillis": 177599,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12408496",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/c2/cc/50c2cc95-3658-9417-0d4b-831abde44ba1/24UM1IM28978.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "2a2b2d",
//         "textColor2": "1c1e1f",
//         "textColor4": "373839",
//         "textColor1": "0c0e0f",
//         "bgColor": "a4a2a3",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Kendrick Lamar, SZA, Ink, Sam Dew, Mark Anthony Spears, Jack Antonoff, Roshwita Larisha Bacha, Matthew Bernard, Kamasi Washington, Scott Bridgeway & Marvin Gaye",
//       "url": "https://music.apple.com/dz/album/luther/1781270319?i=1781270323",
//       "playParams": {
//         "id": "1781270323",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "luther",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/17/c5/2a/17c52a60-2867-4bc2-bbd3-5598f465ec15/mzaf_1780590825750947644.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Kendrick Lamar & SZA"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1781270323/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1808036218",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1808036218?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1781270323/artists?l=en-GB",
//         "data": [
//           {
//             "id": "368183298",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/368183298?l=en-GB"
//           },
//           {
//             "id": "605800394",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/605800394?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751572158569,
//         "MZ_INDEXER": 1752035559193
//       }
//     }
//   },
//   {
//     "id": "1819073311",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819073311?l=en-GB",
//     "attributes": {
//       "albumName": "Survive - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-27",
//       "durationInMillis": 225212,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "DEUM72504276",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7a/55/b4/7a55b4ab-1ac9-0d0e-ccc3-f105c18c1999/25UMGIM78904.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "271b19",
//         "textColor2": "170506",
//         "textColor4": "351e1c",
//         "textColor1": "060202",
//         "bgColor": "ae8275",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Lewis Capaldi & Sam Roman",
//       "url": "https://music.apple.com/dz/album/survive/1819073308?i=1819073311",
//       "playParams": {
//         "id": "1819073311",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Survive",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c5/4e/a2/c54ea2e7-eefc-e0cb-5426-fddb272d7f25/mzaf_12577468502239154789.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lewis Capaldi"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819073311/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1823028703",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1823028703?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819073311/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1213405916",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1213405916?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751932320312,
//         "MZ_INDEXER": 1751642830240
//       }
//     }
//   },
//   {
//     "id": "1804608078",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1804608078?l=en-GB",
//     "attributes": {
//       "albumName": "Uzizwa Kanjan - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "House",
//         "Music",
//         "Dance"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 467145,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUYG1718882",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/b0/02/57b002b5-6023-5fe5-e17c-f9564ca18c27/199316031218_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "8abad6",
//         "textColor2": "83d5f7",
//         "textColor4": "6cb5d6",
//         "textColor1": "a9dbf7",
//         "bgColor": "0e3351",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "url": "https://music.apple.com/dz/album/uzizwa-kanjan/1804608073?i=1804608078",
//       "playParams": {
//         "id": "1804608078",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Uzizwa Kanjan",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/cc/b6/19ccb6f7-6ba4-c463-3e9b-f301e9d14c07/mzaf_17925873901867120353.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Jazzworx, MaWhoo, Thukuthela & GL_Ceejay"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1804608078/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1804608078/artists?l=en-GB",
//         "data": [
//           {
//             "id": "112735681",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/112735681?l=en-GB"
//           },
//           {
//             "id": "1474310340",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1474310340?l=en-GB"
//           },
//           {
//             "id": "1768801647",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1768801647?l=en-GB"
//           },
//           {
//             "id": "1680814823",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1680814823?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751171409888,
//         "MZ_INDEXER": 1751025354456
//       }
//     }
//   },
//   {
//     "id": "1760378209",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1760378209?l=en-GB",
//     "attributes": {
//       "albumName": "To The World - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2024-02-13",
//       "durationInMillis": 185238,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USRE12400063",
//       "artwork": {
//         "width": 2000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/be/33/3fbe339b-6da1-7bdc-1083-0345a1aa40f0/5021732450494.jpg/440x440bb.jpg",
//         "height": 2000,
//         "textColor3": "d1ccbe",
//         "textColor2": "fe713c",
//         "textColor4": "d65b31",
//         "textColor1": "f7ffed",
//         "bgColor": "3a0205",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Paul Simon",
//       "url": "https://music.apple.com/dz/album/the-sound-of-silence-cyril-remix/1760377976?i=1760378209",
//       "playParams": {
//         "id": "1760378209",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "The Sound of Silence (CYRIL Remix)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/04/ed/e0/04ede021-9321-25c4-ba2d-ae9757a11eb6/mzaf_9057434849530475378.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Disturbed"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1760378209/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1760378209/artists?l=en-GB",
//         "data": [
//           {
//             "id": "156807",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/156807?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745616216898,
//         "MZ_INDEXER": 1749680584019
//       }
//     }
//   },
//   {
//     "id": "1650564035",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1650564035?l=en-GB",
//     "attributes": {
//       "albumName": "Caliente (Radio Edit) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2012-05-04",
//       "durationInMillis": 201231,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ROROT1202401",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0b/92/ac/0b92acf3-c64b-5025-75ef-e562c29dfaad/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d0caa0",
//         "textColor2": "f3c78c",
//         "textColor4": "c7a577",
//         "textColor1": "fff7c0",
//         "bgColor": "181b24",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Barac Sebastian Alexandru, Botezan Marcel & Bolfea Radu",
//       "url": "https://music.apple.com/dz/album/caliente-radio-edit/1650564033?i=1650564035",
//       "playParams": {
//         "id": "1650564035",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Caliente (Radio Edit)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/1c/6e/c4/1c6ec40b-7027-ff3d-07a7-7f237fdfa301/mzaf_13276285845161530531.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Inna"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1650564035/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1650564035/artists?l=en-GB",
//         "data": [
//           {
//             "id": "269986851",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/269986851?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749177144816,
//         "MZ_INDEXER": 1751633303142
//       }
//     }
//   },
//   {
//     "id": "1816228655",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1816228655?l=en-GB",
//     "attributes": {
//       "albumName": "Homay - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-03-14",
//       "durationInMillis": 244660,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZL5N2556755",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ca/17/c2/ca17c2f7-bdc8-f5e9-882f-fad0b3736c83/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c29580",
//         "textColor2": "eca286",
//         "textColor4": "be836c",
//         "textColor1": "f1b99f",
//         "bgColor": "060606",
//         "hasP3": false
//       },
//       "audioLocale": "ba",
//       "composerName": "Шайхитдинов Руслан Рамильевич, Sasha Tatiana Arriagada Gil, Кильдина Диана Хуснулхаковна & Traditional",
//       "url": "https://music.apple.com/dz/album/homay/1816228650?i=1816228655",
//       "playParams": {
//         "id": "1816228655",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Homay",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/75/aa/8f75aa5f-d804-233b-ab4a-53b7d3e85961/mzaf_12051065208591093172.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "AY YOLA"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1816228655/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1816228655/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1795677160",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1795677160?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751636903584,
//         "MZ_INDEXER": 1752069016014
//       }
//     }
//   },
//   {
//     "id": "1807490626",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1807490626?l=en-GB",
//     "attributes": {
//       "albumName": "American Heart",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-02-27",
//       "durationInMillis": 156582,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USWB12500464",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/35/5d/cb355d50-f32a-6641-db03-a1d08ad87399/093624834960.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b5745d",
//         "textColor2": "d29377",
//         "textColor4": "aa775f",
//         "textColor1": "df9074",
//         "bgColor": "0a0401",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Benson Boone, Jack LaFrantz & Jason Evigan",
//       "url": "https://music.apple.com/dz/album/sorry-im-here-for-someone-else/1807490612?i=1807490626",
//       "playParams": {
//         "id": "1807490626",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Sorry I'm Here For Someone Else",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/ed/a6/81eda603-9ea4-522d-c9b8-6817f464a8be/mzaf_14320456562773830392.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Benson Boone"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1807490626/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1807490626/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1587414058",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1587414058?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569807588,
//         "MZ_INDEXER": 1751919566335
//       }
//     }
//   },
//   {
//     "id": "1822794234",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822794234?l=en-GB",
//     "attributes": {
//       "albumName": "Take My Mind - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-07-04",
//       "durationInMillis": 171200,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "DE1FB2500191",
//       "artwork": {
//         "width": 2200,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b5/64/82/b56482d2-9311-408d-c88b-d76c78de748a/009392405912.png/440x440bb.jpg",
//         "height": 2200,
//         "textColor3": "c7d2c0",
//         "textColor2": "e5ceeb",
//         "textColor4": "c6bbc9",
//         "textColor1": "e6ebe0",
//         "bgColor": "496d40",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Paco Bose, Sanele David Sydow, Jonas Kalisch, Alexej Vlasenko, Jeremy Chacon & Henrik Meinke",
//       "url": "https://music.apple.com/dz/album/take-my-mind/1822793963?i=1822794234",
//       "playParams": {
//         "id": "1822794234",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Take My Mind",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/ef/5a/b9ef5a4e-df4f-1c74-43ef-efd20925d880/mzaf_13234244598451294810.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "WizTheMc & bees & honey"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822794234/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822794234/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1040142504",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1040142504?l=en-GB"
//           },
//           {
//             "id": "1757403374",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1757403374?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752067375220,
//         "MZ_INDEXER": 1752067438107
//       }
//     }
//   },
//   {
//     "id": "1775581103",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1775581103?l=en-GB",
//     "attributes": {
//       "albumName": "The Secret of Us (Deluxe)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 15,
//       "releaseDate": "2024-10-16",
//       "durationInMillis": 166300,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12406911",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d2/f8/99/d2f89987-d2a5-45a5-1746-c0841c7e9843/24UM1IM17286.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3f3a35",
//         "textColor2": "35271d",
//         "textColor4": "5b5049",
//         "textColor1": "120a04",
//         "bgColor": "f4f8f8",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Gracie Abrams & Audrey Hobert",
//       "url": "https://music.apple.com/dz/album/thats-so-true/1775580883?i=1775581103",
//       "playParams": {
//         "id": "1775581103",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "That’s So True",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/01/54/0701544d-0387-7923-4e28-252716dc4ceb/mzaf_5123012566068012526.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Gracie Abrams",
//       "contentRating": "clean"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1775581103/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1775581103/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1450554836",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1450554836?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748367664138,
//         "MZ_INDEXER": 1749126405154
//       }
//     }
//   },
//   {
//     "id": "1793654352",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1793654352?l=en-GB",
//     "attributes": {
//       "albumName": "Hurry Up Tomorrow",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2024-10-30",
//       "durationInMillis": 301623,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12405846",
//       "artwork": {
//         "width": 4500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/0d/06/3d0d06e6-cfd4-8f69-4a42-52b7cf33fb24/25UMGIM09490.rgb.jpg/440x440bb.jpg",
//         "height": 4500,
//         "textColor3": "c7c2ad",
//         "textColor2": "f3dfbd",
//         "textColor4": "c5b598",
//         "textColor1": "f5efd8",
//         "bgColor": "0d0d03",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Abel Tesfaye, Larissa de Macedo Machado, MIKE DEAN, Sean Solymar, FLAVIO SERAPHIM DE ALMEIDA, Everton Ramos De Araujo, Marcelo Nei Leal, Tatiana Dos Santos Lourenço, Agustinho Raphael Dos Santos, WASHINGTON LUIS COSTA VAZ & ANDRE LUIZ VIEGAS",
//       "url": "https://music.apple.com/dz/album/s%C3%A3o-paulo/1793654348?i=1793654352",
//       "playParams": {
//         "id": "1793654352",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "São Paulo",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/0b/ff/b90bff8f-7567-95eb-5f01-7e620ac8155e/mzaf_17378087522586538149.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "The Weeknd & Anitta",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1793654352/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1776914761",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1776914761?l=en-GB"
//           },
//           {
//             "id": "1795692869",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1795692869?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1793654352/artists?l=en-GB",
//         "data": [
//           {
//             "id": "479756766",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/479756766?l=en-GB"
//           },
//           {
//             "id": "597214610",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/597214610?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750986546992,
//         "MZ_INDEXER": 1752208294907
//       }
//     }
//   },
//   {
//     "id": "1817000060",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817000060?l=en-GB",
//     "attributes": {
//       "albumName": "DIA DELÍCIA - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 84701,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "CH7812534815",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/04/35/b6/0435b690-6429-b81c-acf7-dea3ef5823b2/4062851142465.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "1d84cc",
//         "textColor2": "2b98e1",
//         "textColor4": "237dbf",
//         "textColor1": "24a1f1",
//         "bgColor": "021038",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "Nakama, Mc Staff & ΣP",
//       "url": "https://music.apple.com/dz/album/dia-del%C3%ADcia-slowed/1816999764?i=1817000060",
//       "playParams": {
//         "id": "1817000060",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "DIA DELÍCIA (Slowed)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e9/39/19/e9391952-5cd2-2162-639a-c53296b254df/mzaf_17312981470513533790.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Nakama, Mc Staff & ΣP",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817000060/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817000060/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1752185734",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1752185734?l=en-GB"
//           },
//           {
//             "id": "1623000432",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1623000432?l=en-GB"
//           },
//           {
//             "id": "1808348534",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1808348534?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751787871285,
//         "MZ_INDEXER": 1751945291680
//       }
//     }
//   },
//   {
//     "id": "1733731157",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1733731157?l=en-GB",
//     "attributes": {
//       "albumName": "Submarine",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 11,
//       "releaseDate": "2024-05-03",
//       "durationInMillis": 236907,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USAT22307579",
//       "artwork": {
//         "width": 1425,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/df/47/18/df471848-5779-7147-a1df-c2d7f5fa0c3e/075679659644.jpg/440x440bb.jpg",
//         "height": 1425,
//         "textColor3": "b0bcd0",
//         "textColor2": "96b4e8",
//         "textColor4": "7e98c7",
//         "textColor1": "d4e2f4",
//         "bgColor": "222744",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Gianluca Buccellati, Josh Conway & Maria Zardoya",
//       "url": "https://music.apple.com/dz/album/no-one-noticed/1733730985?i=1733731157",
//       "playParams": {
//         "id": "1733731157",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "No One Noticed",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/10/4b/2a/104b2a0a-aad3-d33f-5e11-0d4f7132dce7/mzaf_13669189375294773897.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "The Marías"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1733731157/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1733731157/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1244878938",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1244878938?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751924170296,
//         "MZ_INDEXER": 1751924288988
//       }
//     }
//   },
//   {
//     "id": "1440906939",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440906939?l=en-GB",
//     "attributes": {
//       "albumName": "Black Panther: The Album",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Soundtrack",
//         "Music",
//         "Hip-Hop/Rap"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2018-01-04",
//       "durationInMillis": 232190,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM71713947",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0f/7c/f9/0f7cf9a6-651f-53ae-e374-6be14630bfae/18UMGIM00001.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c3c1bc",
//         "textColor2": "ebebd0",
//         "textColor4": "bcbca6",
//         "textColor1": "f4f1ec",
//         "bgColor": "000000",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Kendrick Lamar, SZA, M. Spears, Alexander Shuckburgh & Anthony Tiffith",
//       "url": "https://music.apple.com/dz/album/all-the-stars/1440906927?i=1440906939",
//       "playParams": {
//         "id": "1440906939",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "All The Stars",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/2c/25/cd2c25ca-1d59-d33b-c56c-790213f19bdc/mzaf_2218697121305354247.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Kendrick Lamar, SZA",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440906939/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445021375",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445021375?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440906939/artists?l=en-GB",
//         "data": [
//           {
//             "id": "368183298",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/368183298?l=en-GB"
//           },
//           {
//             "id": "605800394",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/605800394?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749341434636,
//         "MZ_INDEXER": 1750458374779
//       },
//       "formerIds": [
//         "1331042471",
//         "1331258586"
//       ]
//     }
//   },
//   {
//     "id": "1500491200",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1500491200?l=en-GB",
//     "attributes": {
//       "albumName": "Colores",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin Urban",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2020-03-19",
//       "durationInMillis": 205924,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72001731",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ae/b3/66/aeb36667-f9b2-c455-c3fc-a53bbd5ec4c1/20UMGIM10542.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "413a3f",
//         "textColor2": "5d1828",
//         "textColor4": "7d4653",
//         "textColor1": "11090f",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "J Balvin, Sky Rompiendo, Justin Quiles, Bull Nene & Michaël Brun",
//       "url": "https://music.apple.com/dz/album/azul/1500490683?i=1500491200",
//       "playParams": {
//         "id": "1500491200",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Azul",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/50/5b/25/505b2547-8e02-6978-805c-74726ba20a83/mzaf_11150039594175067742.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "J Balvin"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1500491200/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1517867885",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1517867885?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1500491200/artists?l=en-GB",
//         "data": [
//           {
//             "id": "444520760",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/444520760?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750986622057,
//         "MZ_INDEXER": 1752200741255
//       }
//     }
//   },
//   {
//     "id": "429945616",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/429945616?l=en-GB",
//     "attributes": {
//       "albumName": "Ladies & Gentlemen",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Adult Contemporary"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "1984-07-24",
//       "durationInMillis": 300107,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBBBM8402006",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/89/46/95/8946959a-e959-f22d-ced2-745feb799454/mzm.upagbaeg.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "413c3a",
//         "textColor2": "321d15",
//         "textColor4": "5b4a44",
//         "textColor1": "120b09",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "George Michael & Andrew Ridgeley",
//       "url": "https://music.apple.com/dz/album/careless-whisper/429945575?i=429945616",
//       "playParams": {
//         "id": "429945616",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Careless Whisper",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/eb/cd/4e/ebcd4ed4-9e4c-738e-f0a5-40dd091d3a01/mzaf_9752795156531835778.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "George Michael"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/429945616/music-videos?l=en-GB",
//         "next": "/v1/catalog/dz/songs/429945616/music-videos?l=en-GB&offset=14",
//         "data": [
//           {
//             "id": "477441995",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/477441995?l=en-GB"
//           },
//           {
//             "id": "1473453232",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1473453232?l=en-GB"
//           },
//           {
//             "id": "1774490509",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1774490509?l=en-GB"
//           },
//           {
//             "id": "322833513",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/322833513?l=en-GB"
//           },
//           {
//             "id": "1772919162",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1772919162?l=en-GB"
//           },
//           {
//             "id": "1776608579",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1776608579?l=en-GB"
//           },
//           {
//             "id": "1600526020",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1600526020?l=en-GB"
//           },
//           {
//             "id": "1473590481",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1473590481?l=en-GB"
//           },
//           {
//             "id": "1774770966",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1774770966?l=en-GB"
//           },
//           {
//             "id": "1779527717",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1779527717?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/429945616/artists?l=en-GB",
//         "data": [
//           {
//             "id": "894337",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/894337?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750899608392,
//         "MZ_INDEXER": 1752199788492
//       }
//     }
//   },
//   {
//     "id": "1806340240",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1806340240?l=en-GB",
//     "attributes": {
//       "albumName": "The Days (Remixes)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2024-11-08",
//       "durationInMillis": 233229,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBUM72406694",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/06/16/8c06167d-14ce-161e-9ab9-2c3e5453e6c8/25UMGIM52929.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "2d3239",
//         "textColor2": "0e0f12",
//         "textColor4": "2d3239",
//         "textColor1": "0e0f12",
//         "bgColor": "a6bfd3",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Chrystal Orchard",
//       "url": "https://music.apple.com/dz/album/the-days-notion-remix/1806340222?i=1806340240",
//       "playParams": {
//         "id": "1806340240",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "The Days (NOTION Remix)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/28/be/77/28be77fc-61e0-2ee1-e638-d95062dfffc7/mzaf_4157291134990815613.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "CHRYSTAL & NOTION"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1806340240/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1806340240/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1684950440",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1684950440?l=en-GB"
//           },
//           {
//             "id": "576443911",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/576443911?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751570445409,
//         "MZ_INDEXER": 1752200142038
//       }
//     }
//   },
//   {
//     "id": "1807389776",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1807389776?l=en-GB",
//     "attributes": {
//       "albumName": "At The Beach, In Every Life",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-12",
//       "durationInMillis": 211979,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": true,
//       "isrc": "USHM92438095",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/54/11/b5/5411b5e4-30e7-8853-a7d7-75b3700b810c/25UMGIM53543.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "363636",
//         "textColor2": "2e2d2e",
//         "textColor4": "585758",
//         "textColor1": "040404",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Gianna Perez",
//       "url": "https://music.apple.com/dz/album/sailor-song/1807389775?i=1807389776",
//       "playParams": {
//         "id": "1807389776",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Sailor Song",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/37/13/9b/37139b99-e6a7-3be1-bab4-6f033addac4a/mzaf_2505903576374896289.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Gigi Perez"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1807389776/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1772955523",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1772955523?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1807389776/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1553802745",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1553802745?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751566637025,
//         "MZ_INDEXER": 1752200129085
//       }
//     }
//   },
//   {
//     "id": "1737497080",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1737497080?l=en-GB",
//     "attributes": {
//       "albumName": "Good Luck, Babe! - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-04-05",
//       "durationInMillis": 218424,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12401967",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/29/a7/c4/29a7c478-351d-25eb-a116-3e68118cdab8/24UMGIM31246.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "342f29",
//         "textColor2": "33240b",
//         "textColor4": "52432a",
//         "textColor1": "0d0b09",
//         "bgColor": "cebfa8",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Kayleigh Rose Amstutz, Daniel Nigro & Justin Tranter",
//       "url": "https://music.apple.com/dz/album/good-luck-babe/1737497078?i=1737497080",
//       "playParams": {
//         "id": "1737497080",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Good Luck, Babe!",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ae/57/5d/ae575db4-68db-508a-c012-421ee79bfa62/mzaf_5112451481032254728.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Chappell Roan"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1737497080/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1737497080/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1264818718",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1264818718?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569354426,
//         "MZ_INDEXER": 1752196443275
//       }
//     }
//   },
//   {
//     "id": "1778688390",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1778688390?l=en-GB",
//     "attributes": {
//       "albumName": "не расслабляйся - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-11-08",
//       "durationInMillis": 164309,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "DGA0R2442658",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/85/71/ad85713c-146d-ef50-dee1-c431777b378f/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "a6a4ab",
//         "textColor2": "c6c8db",
//         "textColor4": "a0a2b2",
//         "textColor1": "cdccd2",
//         "bgColor": "090810",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Адиль Жалелов",
//       "url": "https://music.apple.com/dz/album/%D0%BD%D0%B5-%D1%80%D0%B0%D1%81%D1%81%D0%BB%D0%B0%D0%B1%D0%BB%D1%8F%D0%B9%D1%81%D1%8F/1778688387?i=1778688390",
//       "playParams": {
//         "id": "1778688390",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "не расслабляйся",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/d9/3b/2cd93bea-2570-edbd-cf58-5ad10f974a56/mzaf_5530048085343237040.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Skryptonite",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1778688390/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1778688390/artists?l=en-GB",
//         "data": [
//           {
//             "id": "837847154",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/837847154?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745674451689,
//         "MZ_INDEXER": 1745529176939
//       }
//     }
//   },
//   {
//     "id": "1819372801",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819372801?l=en-GB",
//     "attributes": {
//       "albumName": "Uzama The 3rd - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afrobeats",
//         "Music",
//         "African",
//         "Amapiano"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 180765,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZNJW2561392",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4e/e0/8f/4ee08f71-3092-8727-c137-04889eae2e21/0.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bcaba2",
//         "textColor2": "d3c5bd",
//         "textColor4": "b0a49e",
//         "textColor1": "e3cdc2",
//         "bgColor": "242424",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "OSHAON UZAMA, Crown Uzama & Divine Uzama",
//       "url": "https://music.apple.com/dz/album/ewo/1819372800?i=1819372801",
//       "playParams": {
//         "id": "1819372801",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Ewo",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c4/11/5e/c4115e5c-c494-a27c-af58-c7cf51ef925b/mzaf_5735184098735220323.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Famous PLuto, Shallipopi & Zerrydl",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819372801/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819372801/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1777898981",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1777898981?l=en-GB"
//           },
//           {
//             "id": "1566146722",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1566146722?l=en-GB"
//           },
//           {
//             "id": "1681107116",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1681107116?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752109197089,
//         "MZ_INDEXER": 1751940826862
//       }
//     }
//   },
//   {
//     "id": "1820264156",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820264156?l=en-GB",
//     "attributes": {
//       "albumName": "KPop Demon Hunters (Soundtrack from the Netflix Film)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "K-Pop",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 191538,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QZ8BZ2513512",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/15/42/e1154273-8ecd-5702-e6e6-597f28001681/25UMGIM82363.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5c264c",
//         "textColor2": "480b28",
//         "textColor4": "5f2e4f",
//         "textColor1": "440023",
//         "bgColor": "bbbdef",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "EJAE, Mark Sonnenblick, Vince & KUSH",
//       "url": "https://music.apple.com/dz/album/your-idol/1820264137?i=1820264156",
//       "playParams": {
//         "id": "1820264156",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Your Idol",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/73/f3/ac/73f3acb1-e3d4-37b2-c0d1-3b87472cdc36/mzaf_6001868899805631066.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Saja Boys, Andrew Choi, Neckwav, Danny Chung, Kevin Woo, samUIL Lee & KPop Demon Hunters Cast"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820264156/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820264156/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1820264141",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264141?l=en-GB"
//           },
//           {
//             "id": "415508398",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/415508398?l=en-GB"
//           },
//           {
//             "id": "1474197187",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1474197187?l=en-GB"
//           },
//           {
//             "id": "259354646",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/259354646?l=en-GB"
//           },
//           {
//             "id": "1333450804",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1333450804?l=en-GB"
//           },
//           {
//             "id": "1820264149",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264149?l=en-GB"
//           },
//           {
//             "id": "1820264140",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264140?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752109254091,
//         "MZ_INDEXER": 1751993817435
//       }
//     }
//   },
//   {
//     "id": "1739505989",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1739505989?l=en-GB",
//     "attributes": {
//       "albumName": "47 - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "2023-11-28",
//       "durationInMillis": 132160,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZWFH2353145",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9f/d4/14/9fd41410-58e4-6e26-4f3e-2ff2c51f7b04/739919934563.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "d7d7d7",
//         "textColor2": "f7f7f7",
//         "textColor4": "d7d7d7",
//         "textColor1": "f7f7f7",
//         "bgColor": "5a5a5a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Alejandro Sánchez",
//       "url": "https://music.apple.com/dz/album/beanie/1739505980?i=1739505989",
//       "playParams": {
//         "id": "1739505989",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Beanie",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ad/d8/4d/add84d46-d531-6369-7b26-c6801d5b82f0/mzaf_7974398692962629061.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Chezile"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1739505989/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1739505989/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1502584860",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1502584860?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751567202759,
//         "MZ_INDEXER": 1751568309879
//       }
//     }
//   },
//   {
//     "id": "1809374521",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1809374521?l=en-GB",
//     "attributes": {
//       "albumName": "С неба (feat. TRIDA) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 189041,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "RUA1D2571908",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7a/50/08/7a5008dc-d22b-28a9-166b-723a648c8c12/cover.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b7c8ba",
//         "textColor2": "c3decf",
//         "textColor4": "a2b9ac",
//         "textColor1": "ddf0e1",
//         "bgColor": "212920",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Эльман Эльман оглы Зейналов, Мещеряков Александр Вячеславович & Мещерякова Татьяна Игоревна",
//       "url": "https://music.apple.com/dz/album/%D1%81-%D0%BD%D0%B5%D0%B1%D0%B0-feat-trida/1809374520?i=1809374521",
//       "playParams": {
//         "id": "1809374521",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "С неба (feat. TRIDA)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9b/45/b0/9b45b04f-6d11-209c-b906-76a6562d60f6/mzaf_4229704919662616243.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "ELMAN"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1809374521/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1809374521/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1253064201",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1253064201?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749599257859,
//         "MZ_INDEXER": 1752217868265
//       }
//     }
//   },
//   {
//     "id": "1463939442",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1463939442?l=en-GB",
//     "attributes": {
//       "albumName": "Danza Kuduro 2019 (Luigi Ramirez Remix) - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2010-08-15",
//       "durationInMillis": 196099,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR43Y1000060",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c5/3b/18/c53b18c2-819d-b7e6-55f2-e45192cec775/19UMGIM45219.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "09303e",
//         "textColor2": "061616",
//         "textColor4": "05313e",
//         "textColor1": "0b1416",
//         "bgColor": "009edb",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Lucenzo, Cyril Govic & Alexander Scander",
//       "url": "https://music.apple.com/dz/album/danza-kuduro-feat-don-omar/1463939439?i=1463939442",
//       "playParams": {
//         "id": "1463939442",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Danza Kuduro (feat. Don Omar)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1d/14/9d/1d149d5c-08b5-1942-0aab-4084f14522d0/mzaf_3085625940087350621.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lucenzo"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1463939442/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1542643447",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1542643447?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1463939442/artists?l=en-GB",
//         "data": [
//           {
//             "id": "258095253",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/258095253?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1747355296631,
//         "MZ_INDEXER": 1748338412111
//       }
//     }
//   },
//   {
//     "id": "1818901329",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1818901329?l=en-GB",
//     "attributes": {
//       "albumName": "Folded - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-11",
//       "durationInMillis": 238120,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT22504344",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/20/45/55/2045552e-882a-b225-8be7-e67f4feacf19/075679609687.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c4996e",
//         "textColor2": "dc9a67",
//         "textColor4": "b47f58",
//         "textColor1": "f1bb84",
//         "bgColor": "141519",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Andre Harris, Darius Dixson, Dawit Kamal Wilson, Don Mills, Donovan Knight, Kehlani & Khris Riddick-Tynes",
//       "url": "https://music.apple.com/dz/album/folded/1818901325?i=1818901329",
//       "playParams": {
//         "id": "1818901329",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Folded",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9b/0d/16/9b0d16c5-ee4f-4f4c-926b-dbf2e91bc53a/mzaf_14391753377979429204.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Kehlani"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1818901329/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1822891728",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1822891728?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1818901329/artists?l=en-GB",
//         "data": [
//           {
//             "id": "690126399",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/690126399?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751108632715,
//         "MZ_INDEXER": 1752174974321
//       }
//     }
//   },
//   {
//     "id": "1775728457",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1775728457?l=en-GB",
//     "attributes": {
//       "albumName": "A Minute... - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Singer/Songwriter",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-11-08",
//       "durationInMillis": 176000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBARL2401376",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/a5/e5/c1a5e5c4-7a40-ed20-ee53-1cfc97b22c55/196872574104.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "3d3f40",
//         "textColor2": "282724",
//         "textColor4": "4f4d48",
//         "textColor1": "11151b",
//         "bgColor": "ede5d7",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Myles Smith, Peter Fenn, Dan Smith, Phil Plested & Donna Lewis",
//       "url": "https://music.apple.com/dz/album/nice-to-meet-you/1775728445?i=1775728457",
//       "playParams": {
//         "id": "1775728457",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Nice To Meet You",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/bf/14/cebf1429-faa6-0a0a-9130-190721519133/mzaf_2887572446539778295.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Myles Smith"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1775728457/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1778641721",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1778641721?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1775728457/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1249499491",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1249499491?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749860879417,
//         "MZ_INDEXER": 1749259508600
//       }
//     }
//   },
//   {
//     "id": "1796127375",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1796127375?l=en-GB",
//     "attributes": {
//       "albumName": "$ome $exy $ongs 4 U",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 14,
//       "releaseDate": "2025-02-14",
//       "durationInMillis": 241023,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USLD91772032",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/34/10/1e/34101e1f-f4b9-907a-ce47-3fba5b3ee5e8/50222.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cbccc8",
//         "textColor2": "dbf5f9",
//         "textColor4": "b3c8cc",
//         "textColor1": "faf9f3",
//         "bgColor": "13181b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Aubrey Drake Graham",
//       "url": "https://music.apple.com/dz/album/nokia/1796127242?i=1796127375",
//       "playParams": {
//         "id": "1796127375",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "NOKIA",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a0/f9/8c/a0f98cba-a988-f47e-9f9e-491b4b44dd4e/mzaf_5519005314983652783.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Drake",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1796127375/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1805946437",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1805946437?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1796127375/artists?l=en-GB",
//         "data": [
//           {
//             "id": "271256",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/271256?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752016801636,
//         "MZ_INDEXER": 1752017359081
//       }
//     }
//   },
//   {
//     "id": "1822804830",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822804830?l=en-GB",
//     "attributes": {
//       "albumName": "Chubina - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Folk",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2021-08-07",
//       "durationInMillis": 90607,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QZRP52390918",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d9/28/d3/d928d3f2-4fda-2fcd-0cbf-9cffb209961e/26421404-8302-48e5-925a-7e5c6614499d.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bfb0a1",
//         "textColor2": "d9c6b1",
//         "textColor4": "b6a796",
//         "textColor1": "e4d1be",
//         "bgColor": "2c2c2b",
//         "hasP3": false
//       },
//       "audioLocale": "zxx",
//       "composerName": "Levan Bantsadze & Giorgi Matkava",
//       "url": "https://music.apple.com/dz/album/chubina/1822804829?i=1822804830",
//       "playParams": {
//         "id": "1822804830",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Chubina",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/10/4e/43/104e431c-fc5c-4170-bd6a-814970d6cc12/mzaf_16570485484635479418.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "East Duo"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822804830/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822804830/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1793160295",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1793160295?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751762393889,
//         "MZ_INDEXER": 1752133673138
//       }
//     }
//   },
//   {
//     "id": "1474669074",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1474669074?l=en-GB",
//     "attributes": {
//       "albumName": "Norman Fucking Rockwell!",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2019-08-30",
//       "durationInMillis": 300683,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": true,
//       "isrc": "GBUM71903147",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c6/5f/b9/c65fb9eb-da2f-89a9-b640-2fff1fc3a660/19UMGIM61350.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c3b5a3",
//         "textColor2": "86bfd4",
//         "textColor4": "6f9cad",
//         "textColor1": "f0ddc8",
//         "bgColor": "10120f",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Lana Del Rey & Jack Antonoff",
//       "url": "https://music.apple.com/dz/album/cinnamon-girl/1474669063?i=1474669074",
//       "playParams": {
//         "id": "1474669074",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Cinnamon Girl",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/ab/c9/86abc949-717d-b99e-ccc1-2d06a10e01d6/mzaf_13331833199397738074.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lana Del Rey"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1474669074/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1474669074/artists?l=en-GB",
//         "data": [
//           {
//             "id": "464296584",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/464296584?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751570807638,
//         "MZ_INDEXER": 1751566642376
//       }
//     }
//   },
//   {
//     "id": "1820264147",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820264147?l=en-GB",
//     "attributes": {
//       "albumName": "KPop Demon Hunters (Soundtrack from the Netflix Film)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "K-Pop",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 150686,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QZ8BZ2513509",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/15/42/e1154273-8ecd-5702-e6e6-597f28001681/25UMGIM82363.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5c264c",
//         "textColor2": "480b28",
//         "textColor4": "5f2e4f",
//         "textColor1": "440023",
//         "bgColor": "bbbdef",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Danny Chung, Vince & KUSH",
//       "url": "https://music.apple.com/dz/album/soda-pop/1820264137?i=1820264147",
//       "playParams": {
//         "id": "1820264147",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Soda Pop",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c1/51/63/c1516347-7111-80a9-467b-ae7ff0423260/mzaf_5824261778604690816.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Saja Boys, Andrew Choi, Neckwav, Danny Chung, Kevin Woo, samUIL Lee & KPop Demon Hunters Cast"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820264147/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820264147/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1820264141",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264141?l=en-GB"
//           },
//           {
//             "id": "415508398",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/415508398?l=en-GB"
//           },
//           {
//             "id": "1474197187",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1474197187?l=en-GB"
//           },
//           {
//             "id": "259354646",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/259354646?l=en-GB"
//           },
//           {
//             "id": "1333450804",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1333450804?l=en-GB"
//           },
//           {
//             "id": "1820264149",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264149?l=en-GB"
//           },
//           {
//             "id": "1820264140",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264140?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752109383151,
//         "MZ_INDEXER": 1751993826005
//       }
//     }
//   },
//   {
//     "id": "1777205296",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1777205296?l=en-GB",
//     "attributes": {
//       "albumName": "Дневник памяти",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2024-11-08",
//       "durationInMillis": 125660,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "RUAGT2479085",
//       "artwork": {
//         "width": 3949,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/3e/98/5c3e98bc-c1f4-bf6d-2beb-374a7f996f9e/cover.jpg/440x440bb.jpg",
//         "height": 3949,
//         "textColor3": "313031",
//         "textColor2": "312520",
//         "textColor4": "4e4441",
//         "textColor1": "0c0c0d",
//         "bgColor": "c3c2c5",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Дарья Андреевна Кустовская & Мещеряков Александр Вячеславович",
//       "url": "https://music.apple.com/dz/album/%D0%B8%D0%BE%D1%80%D0%B4%D0%B0%D0%BD/1777205288?i=1777205296",
//       "playParams": {
//         "id": "1777205296",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Иордан",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/20/80/09/20800933-f852-1016-9875-50d10819df9b/mzaf_239137538531369906.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MONA"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1777205296/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1777205296/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1471130799",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1471130799?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1746060540012,
//         "MZ_INDEXER": 1745848967674
//       }
//     }
//   },
//   {
//     "id": "1817250330",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817250330?l=en-GB",
//     "attributes": {
//       "albumName": "Shake It To The Max (Done With Ya Ex) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "African Dancehall",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-15",
//       "durationInMillis": 93061,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZS7J2517699",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/fc/f4/53fcf46e-213b-529e-6fe7-a75886391503/764656353551_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5d3d5d",
//         "textColor2": "620234",
//         "textColor4": "7d2a57",
//         "textColor1": "3a193b",
//         "bgColor": "e8cbe6",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Haddyah Cyrus, Neil Dyer, ADAM KEVIN ALEXANDER & Molly Ama Montgomery",
//       "url": "https://music.apple.com/dz/album/shake-it-to-the-max-done-with-ya-ex/1817250329?i=1817250330",
//       "playParams": {
//         "id": "1817250330",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Shake It To The Max (Done With Ya Ex)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/53/e2/34/53e23495-6656-c32a-792c-4c92e5ca880f/mzaf_4304561773001647155.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MOLIY, Silent Addy & Gladdest"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817250330/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817250330/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1493122482",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1493122482?l=en-GB"
//           },
//           {
//             "id": "1477392077",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1477392077?l=en-GB"
//           },
//           {
//             "id": "1792725152",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1792725152?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751416691468,
//         "MZ_INDEXER": 1751412960810
//       }
//     }
//   },
//   {
//     "id": "1824152379",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1824152379?l=en-GB",
//     "attributes": {
//       "albumName": "Прониклась мной - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-07-04",
//       "durationInMillis": 173958,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FRX452581558",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/76/7f/5d/767f5d8d-d468-6b07-f99c-a38cd9f75141/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b27623",
//         "textColor2": "dc7713",
//         "textColor4": "b46313",
//         "textColor1": "da9028",
//         "bgColor": "111111",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Кирилл Игоревич Незборецкий",
//       "url": "https://music.apple.com/dz/album/%D0%BF%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%BB%D0%B0%D1%81%D1%8C-%D0%BC%D0%BD%D0%BE%D0%B9/1824152376?i=1824152379",
//       "playParams": {
//         "id": "1824152379",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Прониклась мной",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/43/65/1d/43651d7f-05b8-3c5d-feb4-9aa85adb358b/mzaf_4669182141766920518.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "T-Fest, Ivan Dorn & DJ INSAMA"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1824152379/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1824152379/artists?l=en-GB",
//         "data": [
//           {
//             "id": "718954463",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/718954463?l=en-GB"
//           },
//           {
//             "id": "482931747",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/482931747?l=en-GB"
//           },
//           {
//             "id": "847465594",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/847465594?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752106216149,
//         "MZ_INDEXER": 1752104832364
//       }
//     }
//   },
//   {
//     "id": "1728225920",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1728225920?l=en-GB",
//     "attributes": {
//       "albumName": "i have died everyday waiting for you (love songs) - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2011-10-18",
//       "durationInMillis": 285120,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT21102141",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/eb/ee/ef/ebeeef24-d44a-7f8d-1373-29ca3eaccd38/5059460267725.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "47403d",
//         "textColor2": "312923",
//         "textColor4": "514640",
//         "textColor1": "24211f",
//         "bgColor": "d0bdb6",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Christina Perri & David Hodges",
//       "url": "https://music.apple.com/dz/album/a-thousand-years/1728225917?i=1728225920",
//       "playParams": {
//         "id": "1728225920",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "A Thousand Years",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5b/cc/aa/5bccaa06-0413-3a9c-2b20-e3b6dadc116f/mzaf_12565140704279885698.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Christina Perri"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1728225920/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1728225920/artists?l=en-GB",
//         "data": [
//           {
//             "id": "378346343",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/378346343?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751570200366,
//         "MZ_INDEXER": 1752058734332
//       }
//     }
//   },
//   {
//     "id": "1604645502",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1604645502?l=en-GB",
//     "attributes": {
//       "albumName": "Gangsta's Paradise",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music",
//         "West Coast Rap",
//         "Hardcore Rap"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "1995-08-08",
//       "durationInMillis": 241933,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USTB10250016",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/df/b8/4e/dfb84e99-7b63-ae2d-217e-57746e36eac0/081227882365.png/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "cdcccf",
//         "textColor2": "f1e690",
//         "textColor4": "c5bd7a",
//         "textColor1": "fbf8f9",
//         "bgColor": "151c25",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Stevie Wonder, Artis Ivey Jr., Doug Rasheed & Larry Sanders",
//       "url": "https://music.apple.com/dz/album/gangstas-paradise-feat-l-v/1604645496?i=1604645502",
//       "playParams": {
//         "id": "1604645502",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Gangsta's Paradise (feat. L.V.)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d7/d7/e8/d7d7e8a5-b615-a819-30b7-f5ca0289dd29/mzaf_17107740390140189424.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Coolio"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1604645502/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1657624162",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1657624162?l=en-GB"
//           },
//           {
//             "id": "1359381232",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1359381232?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1604645502/artists?l=en-GB",
//         "data": [
//           {
//             "id": "625207",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/625207?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195030819,
//         "MZ_INDEXER": 1750778548047
//       }
//     }
//   },
//   {
//     "id": "1810411570",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1810411570?l=en-GB",
//     "attributes": {
//       "albumName": "A me mi piace - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Worldwide",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-09",
//       "durationInMillis": 140670,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR84R2500040",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/c6/a8/30c6a80b-0bfe-58fc-3707-ecd3c69c0dff/5056556161066_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "302c00",
//         "textColor2": "0e1601",
//         "textColor4": "2d3101",
//         "textColor1": "110f00",
//         "bgColor": "aba100",
//         "hasP3": false
//       },
//       "audioLocale": "it",
//       "composerName": "Manu Chao & Andrea De Filippi",
//       "url": "https://music.apple.com/dz/album/a-me-mi-piace/1810411247?i=1810411570",
//       "playParams": {
//         "id": "1810411570",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "A me mi piace",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c9/2b/a7/c92ba725-dd5f-2b4e-5eb3-e916c005345f/mzaf_6838354132102813507.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Alfa & Manu Chao"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1810411570/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1813396878",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1813396878?l=en-GB"
//           },
//           {
//             "id": "1814086983",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1814086983?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1810411570/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1474383988",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1474383988?l=en-GB"
//           },
//           {
//             "id": "2398554",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/2398554?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750348313590,
//         "MZ_INDEXER": 1751135037286
//       }
//     }
//   },
//   {
//     "id": "1811551953",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811551953?l=en-GB",
//     "attributes": {
//       "albumName": "Dior (feat. Chrystal) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-06",
//       "durationInMillis": 169159,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBARL2500597",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7f/00/50/7f0050f1-a341-daed-86b6-8e76e181f0ff/196873130569.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "402328",
//         "textColor2": "161514",
//         "textColor4": "422429",
//         "textColor1": "141413",
//         "bgColor": "ef5f7a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "MK, Chrystal Orchard, Emily Nash & Jacob Manson",
//       "url": "https://music.apple.com/dz/album/dior-feat-chrystal/1811551951?i=1811551953",
//       "playParams": {
//         "id": "1811551953",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Dior (feat. Chrystal)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ab/78/3a/ab783a4a-27c1-ef69-0670-72998120e30d/mzaf_830962220770896472.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MK"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811551953/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811551953/artists?l=en-GB",
//         "data": [
//           {
//             "id": "63097617",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/63097617?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751844586174,
//         "MZ_INDEXER": 1752058554989
//       }
//     }
//   },
//   {
//     "id": "1818226377",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1818226377?l=en-GB",
//     "attributes": {
//       "albumName": "Catalina - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 173520,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR9W12532227",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/63/d4/ae/63d4ae4a-8c6d-33c2-6814-ffc3abaff134/5034644737546.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "2b2e2c",
//         "textColor2": "131817",
//         "textColor4": "31312c",
//         "textColor1": "0c1417",
//         "bgColor": "a99780",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "Ghost Killer Track & Kenzy",
//       "url": "https://music.apple.com/dz/album/catalina/1818226374?i=1818226377",
//       "playParams": {
//         "id": "1818226377",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Catalina",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f6/64/e9/f664e9bc-de91-c84b-ebe9-72b0a69e96a7/mzaf_3512568887184996164.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Cheu-B, Ghost Killer Track & SDM",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1818226377/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1818226377/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1108249061",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1108249061?l=en-GB"
//           },
//           {
//             "id": "1065582690",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1065582690?l=en-GB"
//           },
//           {
//             "id": "455690468",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/455690468?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752106043999,
//         "MZ_INDEXER": 1752104770568
//       }
//     }
//   },
//   {
//     "id": "1440826778",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440826778?l=en-GB",
//     "attributes": {
//       "albumName": "Delirium",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 9,
//       "releaseDate": "2015-01-07",
//       "durationInMillis": 252534,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBUM71406823",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7b/00/8e/7b008e14-84c8-56a5-079e-e68ce766e59d/15UMGIM48135.rgb.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "45423f",
//         "textColor2": "30261b",
//         "textColor4": "4d4a42",
//         "textColor1": "261d18",
//         "bgColor": "c1d9dd",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Max Martin, Savan Kotecha, Ilya Salmanzadeh, Ali Payami & Tove Lo",
//       "url": "https://music.apple.com/dz/album/love-me-like-you-do-from-fifty-shades-of-grey/1440826508?i=1440826778",
//       "playParams": {
//         "id": "1440826778",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Love Me Like You Do (From \"Fifty Shades of Grey\")",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6b/85/8e/6b858ed3-e77d-486d-de1f-4bb368b4d506/mzaf_7251272332311811515.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ellie Goulding"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440826778/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440826778/artists?l=en-GB",
//         "data": [
//           {
//             "id": "338264227",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/338264227?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751717809970,
//         "MZ_INDEXER": 1752075970359
//       },
//       "formerIds": [
//         "1040671606",
//         "1040127751"
//       ]
//     }
//   },
//   {
//     "id": "594061861",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/594061861?l=en-GB",
//     "attributes": {
//       "albumName": "Rumours",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music",
//         "Arena Rock",
//         "Pop",
//         "Pop/Rock",
//         "Soft Rock"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "1977-02-04",
//       "durationInMillis": 268200,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWB10400053",
//       "artwork": {
//         "width": 2400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/440x440bb.jpg",
//         "height": 2400,
//         "textColor3": "373734",
//         "textColor2": "202022",
//         "textColor4": "4c4c4a",
//         "textColor1": "050507",
//         "bgColor": "fffce9",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Christine McVie, John McVie, Lindsey Buckingham, Mick Fleetwood & Stevie Nicks",
//       "url": "https://music.apple.com/dz/album/the-chain/594061854?i=594061861",
//       "playParams": {
//         "id": "594061861",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "The Chain",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/66/0d/e7660d80-d642-3143-b632-14140981f1ab/mzaf_1844466076862574589.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Fleetwood Mac"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/594061861/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/594061861/artists?l=en-GB",
//         "data": [
//           {
//             "id": "158038",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/158038?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751590484990,
//         "MZ_INDEXER": 1750047311390
//       }
//     }
//   },
//   {
//     "id": "1800504521",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1800504521?l=en-GB",
//     "attributes": {
//       "albumName": "FUNNY little FEARS",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-03-13",
//       "durationInMillis": 165677,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ITB002500107",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/96/42/0e/96420e54-8ae8-20f7-7ca8-70afaccebd7d/196872958799.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c4c3b8",
//         "textColor2": "ece8e4",
//         "textColor4": "bfbcb9",
//         "textColor1": "f2f0e3",
//         "bgColor": "0b100a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Damiano David, Jason Evigan, Mark Schick & Sarah Hudson",
//       "url": "https://music.apple.com/dz/album/next-summer/1800504135?i=1800504521",
//       "playParams": {
//         "id": "1800504521",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Next Summer",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/1a/62/8e1a6298-2379-468b-93e2-a35b21688332/mzaf_16344370214453995334.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Damiano David",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1800504521/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1798489117",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1798489117?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1800504521/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1767322404",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1767322404?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749279076258,
//         "MZ_INDEXER": 1752226779728
//       }
//     }
//   },
//   {
//     "id": "1058740894",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1058740894?l=en-GB",
//     "attributes": {
//       "albumName": "Bloom",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music",
//         "Electronic"
//       ],
//       "trackNumber": 11,
//       "releaseDate": "2015-11-20",
//       "durationInMillis": 578041,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "AUDCB1500639",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/aa/5f/d8/aa5fd889-4c2e-7e24-e8b2-428beaf9d4fe/SWEATA009.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bf9494",
//         "textColor2": "e1a590",
//         "textColor4": "bb897c",
//         "textColor1": "e5b2af",
//         "bgColor": "241a2a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jon George, Tyrone Lindqvist & James Hunt",
//       "url": "https://music.apple.com/dz/album/innerbloom/1058740883?i=1058740894",
//       "playParams": {
//         "id": "1058740894",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Innerbloom",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/19/0e/3c/190e3c87-1af7-d701-965b-057e799c862c/mzaf_9944475216234105941.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "RÜFÜS DU SOL"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1058740894/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1058740894/artists?l=en-GB",
//         "data": [
//           {
//             "id": "799587823",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/799587823?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750458868096,
//         "MZ_INDEXER": 1752085525747
//       }
//     }
//   },
//   {
//     "id": "1804429404",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1804429404?l=en-GB",
//     "attributes": {
//       "albumName": "Amor na Praia - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-03-26",
//       "durationInMillis": 101481,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GXD7G2575392",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a8/a8/1a/a8a81aac-c04e-2e13-9332-7295371b720f/074417379530.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cdccd5",
//         "textColor2": "9ca8fe",
//         "textColor4": "7e87d5",
//         "textColor1": "ffffff",
//         "bgColor": "050531",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "Pascal Schürmann",
//       "url": "https://music.apple.com/dz/album/amor-na-praia-slowed/1804429402?i=1804429404",
//       "playParams": {
//         "id": "1804429404",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Amor na Praia (Slowed)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/80/0b/86800bc4-8ef8-39ce-2575-dca7b0ec225a/mzaf_17212567975362874889.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Flame Runner"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1804429404/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1804429404/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1638708562",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1638708562?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748615919269,
//         "MZ_INDEXER": 1750224293811
//       }
//     }
//   },
//   {
//     "id": "1820134125",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820134125?l=en-GB",
//     "attributes": {
//       "albumName": "Gaddem - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Afrobeats",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-17",
//       "durationInMillis": 161455,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "USA2P2529230",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ec/d6/40/ecd64007-14cb-4557-d435-9d7c951294cb/198704558313_Cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "402f09",
//         "textColor2": "561900",
//         "textColor4": "773d00",
//         "textColor1": "11080c",
//         "bgColor": "fccb00",
//         "hasP3": false
//       },
//       "audioLocale": "pcm",
//       "composerName": "Adewale Atanda & Shodade Solomon Segun",
//       "url": "https://music.apple.com/dz/album/gaddem/1820133928?i=1820134125",
//       "playParams": {
//         "id": "1820134125",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Gaddem",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/5e/40/5d5e40bf-ad52-4fa7-1079-e1d97e1a869e/mzaf_4475214150020769078.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Rybeena & Shoday"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820134125/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820134125/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1331258843",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1331258843?l=en-GB"
//           },
//           {
//             "id": "1592883497",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1592883497?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752170209148,
//         "MZ_INDEXER": 1751844022843
//       }
//     }
//   },
//   {
//     "id": "1443865214",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1443865214?l=en-GB",
//     "attributes": {
//       "albumName": "Let's Get It - Thug Motivation 101",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 14,
//       "releaseDate": "2005-07-16",
//       "durationInMillis": 280013,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUM70501375",
//       "artwork": {
//         "width": 1456,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/90/e6/b7/90e6b79c-4577-6504-139b-a8deb48d7f82/12UMGIM36597.rgb.jpg/440x440bb.jpg",
//         "height": 1456,
//         "textColor3": "cbc5ce",
//         "textColor2": "d6a860",
//         "textColor4": "ad894f",
//         "textColor1": "fcf4ff",
//         "bgColor": "0a0e0f",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Akon & Jay Jenkins",
//       "url": "https://music.apple.com/dz/album/soul-survivor-feat-akon/1443864907?i=1443865214",
//       "playParams": {
//         "id": "1443865214",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Soul Survivor (feat. Akon)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c9/28/66/c928664a-d687-b946-1e1c-8ac08be87c5c/mzaf_16836893562688229872.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Young Jeezy",
//       "contentRating": "clean"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1443865214/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445886666",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445886666?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1443865214/artists?l=en-GB",
//         "data": [
//           {
//             "id": "19627204",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/19627204?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752020981605,
//         "MZ_INDEXER": 1750889785265
//       },
//       "formerIds": [
//         "541216052",
//         "892999571"
//       ]
//     }
//   },
//   {
//     "id": "1440866486",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440866486?l=en-GB",
//     "attributes": {
//       "albumName": "Greatest Hits",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music",
//         "Alternative",
//         "New Wave",
//         "Adult Alternative"
//       ],
//       "trackNumber": 13,
//       "releaseDate": "1983-01-06",
//       "durationInMillis": 253960,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBAAM8300001",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/29/75/57/2975570e-cbcf-d0ad-4f7d-87332857b191/16UMGIM61698.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "363835",
//         "textColor2": "13100e",
//         "textColor4": "423f3e",
//         "textColor1": "040603",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Sting",
//       "url": "https://music.apple.com/dz/album/every-breath-you-take/1440866395?i=1440866486",
//       "playParams": {
//         "id": "1440866486",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Every Breath You Take",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/b7/37/c2b7378c-0b72-820d-887b-d8bf9535f9fa/mzaf_5525858756324484090.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "The Police"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440866486/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440866486/artists?l=en-GB",
//         "data": [
//           {
//             "id": "93818",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/93818?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751567290289,
//         "MZ_INDEXER": 1751571373188
//       },
//       "formerIds": [
//         "1147256305"
//       ]
//     }
//   },
//   {
//     "id": "1802816580",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802816580?l=en-GB",
//     "attributes": {
//       "albumName": "NGOMOYA",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Amapiano",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-03-28",
//       "durationInMillis": 518308,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ZB1OS2500457",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/19/b3/ac/19b3ac87-bf66-0e45-2e2e-8c2c5c62510a/196872981476.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "eec79c",
//         "textColor2": "faaf91",
//         "textColor4": "ee9077",
//         "textColor1": "faf3c0",
//         "bgColor": "bf130e",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Thato Raphadi",
//       "url": "https://music.apple.com/dz/album/abantwana-bakho-feat-thatohatsi-young-stunna-nkosazana/1802816578?i=1802816580",
//       "playParams": {
//         "id": "1802816580",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Abantwana Bakho (feat. Thatohatsi, Young Stunna & Nkosazana Daughter)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/24/29/28/2429289c-ebb2-2eba-5da0-eaa4af8b931f/mzaf_5141383116785646630.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "DJ Maphorisa, Xduppy & Kabza De Small"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802816580/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802816580/artists?l=en-GB",
//         "data": [
//           {
//             "id": "956074379",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/956074379?l=en-GB"
//           },
//           {
//             "id": "1553381176",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1553381176?l=en-GB"
//           },
//           {
//             "id": "1021730955",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1021730955?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752016427725,
//         "MZ_INDEXER": 1752016667842
//       }
//     }
//   },
//   {
//     "id": "1729803393",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1729803393?l=en-GB",
//     "attributes": {
//       "albumName": "Hopes And Fears 20",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2019-10-18",
//       "durationInMillis": 235640,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBUM72309011",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6f/7a/fd/6f7afdfd-1699-0a38-4714-e9be679c9d41/24UMGIM07866.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "343d32",
//         "textColor2": "31352a",
//         "textColor4": "5a5a4b",
//         "textColor1": "01100b",
//         "bgColor": "fff2cf",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Keane",
//       "url": "https://music.apple.com/dz/album/somewhere-only-we-know-remastered-2024/1729802956?i=1729803393",
//       "playParams": {
//         "id": "1729803393",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Somewhere Only We Know (Remastered 2024)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/78/0d/b9780da3-9c8f-1cea-208c-05db6c3023aa/mzaf_10175424815222066124.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Keane"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1729803393/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445683157",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445683157?l=en-GB"
//           },
//           {
//             "id": "1469554768",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1469554768?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1729803393/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1187178",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1187178?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1746687469698,
//         "MZ_INDEXER": 1748857678001
//       }
//     }
//   },
//   {
//     "id": "1811269146",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811269146?l=en-GB",
//     "attributes": {
//       "albumName": "Calculate - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afrobeats",
//         "Music",
//         "African",
//         "Worldwide"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-16",
//       "durationInMillis": 180689,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZNJV2514439",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/15/39/78/153978e2-ec37-7986-d74b-109c1317a89c/0.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c7a388",
//         "textColor2": "e7a87a",
//         "textColor4": "bc8a62",
//         "textColor1": "f6c7a9",
//         "bgColor": "0f1103",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Emmanuel Samuel Oluwatosin",
//       "url": "https://music.apple.com/dz/album/calculate/1811269145?i=1811269146",
//       "playParams": {
//         "id": "1811269146",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Calculate",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c8/e2/2e/c8e22e79-d27b-fed6-9db6-66c37a4ab6de/mzaf_5399258791471381779.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Kidd Carder",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811269146/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1824347151",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1824347151?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811269146/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1547714623",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1547714623?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752194845042,
//         "MZ_INDEXER": 1751686447571
//       }
//     }
//   },
//   {
//     "id": "1440751633",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440751633?l=en-GB",
//     "attributes": {
//       "albumName": "Encore",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music",
//         "Hip-Hop",
//         "Hardcore Rap"
//       ],
//       "trackNumber": 16,
//       "releaseDate": "2004-11-12",
//       "durationInMillis": 250760,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "USIR10400813",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cbcbd0",
//         "textColor2": "cac9dd",
//         "textColor4": "a2a1b5",
//         "textColor1": "fefefe",
//         "bgColor": "000219",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Marshall Mathers & Luis Resto",
//       "url": "https://music.apple.com/dz/album/mockingbird/1440751265?i=1440751633",
//       "playParams": {
//         "id": "1440751633",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Mockingbird",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_1118356663281522602.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Eminem",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440751633/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445837780",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445837780?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440751633/artists?l=en-GB",
//         "data": [
//           {
//             "id": "111051",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/111051?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749860954649,
//         "MZ_INDEXER": 1752227942489
//       },
//       "formerIds": [
//         "29100104",
//         "323563444"
//       ]
//     }
//   },
//   {
//     "id": "1691699849",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1691699849?l=en-GB",
//     "attributes": {
//       "albumName": "I've Tried Everything But Therapy (Part 1)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2024-04-17",
//       "durationInMillis": 212649,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWB12302870",
//       "artwork": {
//         "width": 3900,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/440x440bb.jpg",
//         "height": 3900,
//         "textColor3": "e3c19e",
//         "textColor2": "ed965c",
//         "textColor4": "db7f49",
//         "textColor1": "f8e8c6",
//         "bgColor": "902400",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jaten Dimsdale, John Ryan, Joshua Coleman, Julian Bunetta, Mikky Ekko & Sherwyn Nicholls",
//       "url": "https://music.apple.com/dz/album/the-door/1691699589?i=1691699849",
//       "playParams": {
//         "id": "1691699849",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "The Door",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/87/fc/44/87fc44b1-1721-3874-343b-4480f6191b2c/mzaf_3494542487124814715.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Teddy Swims"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1691699849/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1741625539",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1741625539?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1691699849/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1462541757",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1462541757?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751567308147,
//         "MZ_INDEXER": 1752226507654
//       }
//     }
//   },
//   {
//     "id": "696838901",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/696838901?l=en-GB",
//     "attributes": {
//       "albumName": "La folie",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music",
//         "Alternative",
//         "New Wave",
//         "Punk"
//       ],
//       "trackNumber": 9,
//       "releaseDate": "1983-01-01",
//       "durationInMillis": 206760,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBAYE8100053",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/49/b1/36/49b136c1-10e1-89c8-aa3a-1aa00abcacc2/dj.nzpozdjn.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "28383e",
//         "textColor2": "041316",
//         "textColor4": "2a3a40",
//         "textColor1": "011114",
//         "bgColor": "c1d3e5",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Dave Greenfield, Hugh Cornwell, Jean-Jacques Burnel & Jet Black",
//       "url": "https://music.apple.com/dz/album/golden-brown/696838485?i=696838901",
//       "playParams": {
//         "id": "696838901",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Golden Brown",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/da/bd/c1/dabdc1ce-ae41-560b-7838-e69d31f1dfc0/mzaf_14252839288622868230.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "The Stranglers"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/696838901/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/696838901/artists?l=en-GB",
//         "data": [
//           {
//             "id": "20828456",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/20828456?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195042051,
//         "MZ_INDEXER": 1752186308039
//       }
//     }
//   },
//   {
//     "id": "1822312920",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822312920?l=en-GB",
//     "attributes": {
//       "albumName": "LE NORD SE SOUVIENT : L'ODYSSÉE",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-25",
//       "durationInMillis": 186000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR8FB2505700",
//       "artwork": {
//         "width": 1440,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/ab/b8/24abb810-bedc-37fb-07f7-951152234752/cover.jpg/440x440bb.jpg",
//         "height": 1440,
//         "textColor3": "8fabba",
//         "textColor2": "95c8dd",
//         "textColor4": "79a3b6",
//         "textColor1": "b1d2e2",
//         "bgColor": "060d1c",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "GIMS, Jul & Maximum",
//       "url": "https://music.apple.com/dz/album/air-force-blanche-feat-jul/1822312917?i=1822312920",
//       "playParams": {
//         "id": "1822312920",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "AIR FORCE BLANCHE (feat. JUL)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/f2/0d/4af20d2f-a42f-661d-84b0-fc51a9af5a8c/mzaf_15178625482118401794.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "GIMS"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822312920/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822312920/artists?l=en-GB",
//         "data": [
//           {
//             "id": "458659054",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/458659054?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751929615171,
//         "MZ_INDEXER": 1752049318198
//       }
//     }
//   },
//   {
//     "id": "1055074640",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1055074640?l=en-GB",
//     "attributes": {
//       "albumName": "This Is Acting",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 6,
//       "releaseDate": "2015-12-17",
//       "durationInMillis": 211667,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USRC11502935",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "bda69d",
//         "textColor2": "e8c4aa",
//         "textColor4": "bca08b",
//         "textColor1": "eaccc1",
//         "bgColor": "0c0e0d",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Sia & Greg Kurstin",
//       "url": "https://music.apple.com/dz/album/cheap-thrills/1055074478?i=1055074640",
//       "playParams": {
//         "id": "1055074640",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Cheap Thrills",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/45/65/18/45651878-3a79-efeb-ad04-708d4a821a9c/mzaf_4980429886018969999.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Sia"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1055074640/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1055074640/artists?l=en-GB",
//         "data": [
//           {
//             "id": "28721078",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/28721078?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751567616034,
//         "MZ_INDEXER": 1752200620244
//       }
//     }
//   },
//   {
//     "id": "1744776167",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1744776167?l=en-GB",
//     "attributes": {
//       "albumName": "Not Like Us - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-05-04",
//       "durationInMillis": 274192,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12400910",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d0/ef/b6/d0efb685-73be-fdee-58c9-be655f4cd4fd/24UMGIM51924.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c3c7ce",
//         "textColor2": "c2cfe8",
//         "textColor4": "a9b6cc",
//         "textColor1": "e3e4e9",
//         "bgColor": "475260",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Kendrick Lamar, Ray Charles, Sean Momberger, Dijon McFarlane & Mark Anthony Spears",
//       "url": "https://music.apple.com/dz/album/not-like-us/1744776162?i=1744776167",
//       "playParams": {
//         "id": "1744776167",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Not Like Us",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/df/05/e7/df05e74c-c4a1-b6ca-61b0-e2c36df3ebfd/mzaf_9714719170473697657.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Kendrick Lamar",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1744776167/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1755691074",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1755691074?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1744776167/artists?l=en-GB",
//         "data": [
//           {
//             "id": "368183298",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/368183298?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751888180800,
//         "MZ_INDEXER": 1751887233569
//       }
//     }
//   },
//   {
//     "id": "1683380390",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1683380390?l=en-GB",
//     "attributes": {
//       "albumName": "eat ya veggies",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2021-06-22",
//       "durationInMillis": 133707,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QMUY42100151",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7a/69/5b/7a695b56-1a8b-b3da-3a05-7efc99b31e72/653738610920_Cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "3d343a",
//         "textColor2": "2a2529",
//         "textColor4": "4f4a4e",
//         "textColor1": "130911",
//         "bgColor": "e4e0e1",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Alex Gumuchian, Brian Imanuel & Christian Dold",
//       "url": "https://music.apple.com/dz/album/edamame-feat-rich-brian/1683380202?i=1683380390",
//       "playParams": {
//         "id": "1683380390",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "edamame (feat. Rich Brian)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d9/fd/d8/d9fdd8f8-229f-daf0-2b4a-003497645915/mzaf_1510868488634280272.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "bbno$",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1683380390/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1707075679",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1707075679?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1683380390/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1161580951",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1161580951?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751503621127,
//         "MZ_INDEXER": 1751281684657
//       }
//     }
//   },
//   {
//     "id": "1811497151",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811497151?l=en-GB",
//     "attributes": {
//       "albumName": "Paradise - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-16",
//       "durationInMillis": 200000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12407780",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9a/7c/8e/9a7c8ec8-1d12-f000-1323-8168f2a5e323/25UMGIM62200.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "322f2d",
//         "textColor2": "191816",
//         "textColor4": "44433e",
//         "textColor1": "020001",
//         "bgColor": "f2ecde",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Phil Collins",
//       "url": "https://music.apple.com/dz/album/paradise/1811497134?i=1811497151",
//       "playParams": {
//         "id": "1811497151",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Paradise",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f0/15/a0/f015a06e-8db9-dedf-9fb6-84064f899190/mzaf_17400536517853206838.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "DJ Snake & Bipolar Sunshine"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811497151/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811497151/artists?l=en-GB",
//         "data": [
//           {
//             "id": "125742557",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/125742557?l=en-GB"
//           },
//           {
//             "id": "642896832",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/642896832?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750729016177,
//         "MZ_INDEXER": 1751997636314
//       }
//     }
//   },
//   {
//     "id": "1776119017",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1776119017?l=en-GB",
//     "attributes": {
//       "albumName": "Unreal Unearth: Unending",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2024-03-22",
//       "durationInMillis": 251424,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "IEACJ2300335",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/89/09/66/890966fc-848d-ef73-249b-36345194f16a/24UM1IM15145.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bcbf97",
//         "textColor2": "e8b857",
//         "textColor4": "bb9547",
//         "textColor1": "eaedbb",
//         "bgColor": "060608",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Andrew Hozier-Byrne, Daniel Tannenbaum, Peter Gonzales, Daniel Krieger, Sergiu Gherman, Stuart Johnson & Tyler Mehlenbacher",
//       "url": "https://music.apple.com/dz/album/too-sweet/1776118672?i=1776119017",
//       "playParams": {
//         "id": "1776119017",
//         "kind": "song"
//       },
//       "discNumber": 2,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Too Sweet",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/eb/06/f7/eb06f77d-0197-9739-8135-b930555b38a5/mzaf_4773927185376001612.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Hozier"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1776119017/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1776119017/artists?l=en-GB",
//         "data": [
//           {
//             "id": "342260741",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/342260741?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751590269892,
//         "MZ_INDEXER": 1752022221596
//       }
//     }
//   },
//   {
//     "id": "1815266962",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1815266962?l=en-GB",
//     "attributes": {
//       "albumName": "Badede (feat. Aubrey Qwana, Mr Kangaroo, Cool Drop & Dreamy Kins) - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-23",
//       "durationInMillis": 290456,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QM7282539345",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fd/9b/2a/fd9b2aa9-bc85-88a2-a578-f53ce87317da/199350744921.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "353535",
//         "textColor2": "1c1c1c",
//         "textColor4": "4a4a4a",
//         "textColor1": "030303",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "ss",
//       "composerName": "Thabiso Mtsetfwa, Malibongwe Manana & Aubrey Qwana",
//       "url": "https://music.apple.com/dz/album/badede-feat-aubrey-qwana-mr-kangaroo-cool-drop-dreamy-kins/1815266957?i=1815266962",
//       "playParams": {
//         "id": "1815266962",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Badede (feat. Aubrey Qwana, Mr Kangaroo, Cool Drop & Dreamy Kins)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/71/2c/45712c11-cab2-25b7-9b5a-090d81a2077a/mzaf_5391536589652484191.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Thaifo Son"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1815266962/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1815266962/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1815266961",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1815266961?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748928377267,
//         "MZ_INDEXER": 1752094882574
//       }
//     }
//   },
//   {
//     "id": "1737085899",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1737085899?l=en-GB",
//     "attributes": {
//       "albumName": "Where I've Been, Isn't Where I'm Going",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Country",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2024-04-12",
//       "durationInMillis": 171292,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUYG1541249",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/97/b5/bc/97b5bca2-6238-2421-4f0d-1f7a39d5d9d4/197342550925_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cec39f",
//         "textColor2": "e2863b",
//         "textColor4": "c17134",
//         "textColor1": "f2edc0",
//         "bgColor": "3d1a1a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Sean Cook, Nevin Sastry, Collins Obinna Chibueze, Jerrel Jones, Joe Kent & Mark Williams",
//       "url": "https://music.apple.com/dz/album/a-bar-song-tipsy/1737085577?i=1737085899",
//       "playParams": {
//         "id": "1737085899",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "A Bar Song (Tipsy)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/ef/b9/a7efb9e2-3abb-4d1b-9329-5f1dcffe094e/mzaf_2796029368755887005.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Shaboozey",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1737085899/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1741413458",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1741413458?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1737085899/artists?l=en-GB",
//         "data": [
//           {
//             "id": "914125510",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/914125510?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751680688718,
//         "MZ_INDEXER": 1751567280096
//       }
//     }
//   },
//   {
//     "id": "1193700769",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1193700769?l=en-GB",
//     "attributes": {
//       "albumName": "÷",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music",
//         "Singer/Songwriter"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "2017-03-03",
//       "durationInMillis": 263400,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "GBAHS1700007",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/2d/1c/4f/2d1c4fd7-018c-0529-693b-c67fea53b698/190295851286.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "68b3cc",
//         "textColor2": "69d5f1",
//         "textColor4": "58afc5",
//         "textColor1": "7ddafa",
//         "bgColor": "151716",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Ed Sheeran",
//       "url": "https://music.apple.com/dz/album/perfect/1193700601?i=1193700769",
//       "playParams": {
//         "id": "1193700769",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Perfect",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/14/74/12/14741286-038c-2d61-9614-eb105f5bb845/mzaf_14568988375482426293.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Ed Sheeran"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1193700769/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1313284807",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1313284807?l=en-GB"
//           },
//           {
//             "id": "1289761841",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1289761841?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1193700769/artists?l=en-GB",
//         "data": [
//           {
//             "id": "183313439",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/183313439?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751567177218,
//         "MZ_INDEXER": 1752227075030
//       }
//     }
//   },
//   {
//     "id": "1808437826",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1808437826?l=en-GB",
//     "attributes": {
//       "albumName": "031 Studio Camp 2.0",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 408814,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "ZAC012500415",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/24/32/cd/2432cda8-5c09-c7f8-2af4-cc1106ccf1c3/6009553456870_Cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "c3b6b9",
//         "textColor2": "d2d1ce",
//         "textColor4": "aeaaa7",
//         "textColor1": "ece0e4",
//         "bgColor": "1f100b",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Thuthuka Zindlovu, Zandile Ndhlovu & Ayabonga Zuma",
//       "url": "https://music.apple.com/dz/album/mali-feat-sykes/1808437517?i=1808437826",
//       "playParams": {
//         "id": "1808437826",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Mali (feat. Sykes)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/07/b2/55/07b255c0-70fe-3073-4d6e-5967dbfedf7d/mzaf_363255826892264096.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Dlala Thukzin & Zee Nxumalo"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1808437826/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1808437826/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1305671349",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1305671349?l=en-GB"
//           },
//           {
//             "id": "1606439969",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1606439969?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748951351541,
//         "MZ_INDEXER": 1748951420696
//       }
//     }
//   },
//   {
//     "id": "1806531961",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1806531961?l=en-GB",
//     "attributes": {
//       "albumName": "Strange Trails",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Indie Rock",
//         "Music",
//         "Alternative"
//       ],
//       "trackNumber": 14,
//       "releaseDate": "2015-02-09",
//       "durationInMillis": 208227,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "US53Q1200103",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "84a8a5",
//         "textColor2": "d2c23e",
//         "textColor4": "ada036",
//         "textColor1": "9eccc8",
//         "bgColor": "1a1a1a",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Ben Schneider",
//       "url": "https://music.apple.com/dz/album/the-night-we-met/1806531135?i=1806531961",
//       "playParams": {
//         "id": "1806531961",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "The Night We Met",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4b/36/b7/4b36b739-1de7-e0ae-45da-9a66463127ac/mzaf_1821541347983595183.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Lord Huron"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1806531961/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1806531961/artists?l=en-GB",
//         "data": [
//           {
//             "id": "393068687",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/393068687?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1746543602489,
//         "MZ_INDEXER": 1748321659219
//       }
//     }
//   },
//   {
//     "id": "1811449012",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1811449012?l=en-GB",
//     "attributes": {
//       "albumName": "Where I've Been, Isn't Where I'm Going: The Complete Edition",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Country",
//         "Music"
//       ],
//       "trackNumber": 17,
//       "releaseDate": "2025-04-24",
//       "durationInMillis": 199210,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUYG1580113",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/8c/d3/fa8cd32b-cde8-d216-73ef-44185b6888d5/199316036572_cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d0c9c8",
//         "textColor2": "d69392",
//         "textColor4": "ba7b79",
//         "textColor1": "f1f6f4",
//         "bgColor": "4a1a18",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Collins Obinna Chibueze, Jacob Torrey, Michael Pollack, Sam Romans, Sean Cook & Nevin Sastry",
//       "url": "https://music.apple.com/dz/album/good-news/1811448288?i=1811449012",
//       "playParams": {
//         "id": "1811449012",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Good News",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/56/25/f2/5625f20c-acc4-1ae1-d0d7-2f457c150bb7/mzaf_9102701876348717666.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Shaboozey"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1811449012/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1779815862",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1779815862?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1811449012/artists?l=en-GB",
//         "data": [
//           {
//             "id": "914125510",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/914125510?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751680816415,
//         "MZ_INDEXER": 1751629107200
//       }
//     }
//   },
//   {
//     "id": "1820264340",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820264340?l=en-GB",
//     "attributes": {
//       "albumName": "KPop Demon Hunters (Soundtrack from the Netflix Film)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "K-Pop",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 9,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 250269,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QZ8BZ2513514",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/15/42/e1154273-8ecd-5702-e6e6-597f28001681/25UMGIM82363.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5c264c",
//         "textColor2": "480b28",
//         "textColor4": "5f2e4f",
//         "textColor1": "440023",
//         "bgColor": "bbbdef",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jenna Andrews, Stephen Kirk & Mark Sonnenblick",
//       "url": "https://music.apple.com/dz/album/what-it-sounds-like/1820264137?i=1820264340",
//       "playParams": {
//         "id": "1820264340",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "What It Sounds Like",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cb/02/f6/cb02f65f-caec-3ddc-beb5-e88cfc445aba/mzaf_1161783401243879356.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "HUNTRX, EJAE, AUDREY NUNA, REI AMI & KPop Demon Hunters Cast"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820264340/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820264340/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1478164763",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1478164763?l=en-GB"
//           },
//           {
//             "id": "1118367711",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1118367711?l=en-GB"
//           },
//           {
//             "id": "1444332093",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1444332093?l=en-GB"
//           },
//           {
//             "id": "1468217918",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1468217918?l=en-GB"
//           },
//           {
//             "id": "1820264140",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264140?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752195003561,
//         "MZ_INDEXER": 1751615731124
//       }
//     }
//   },
//   {
//     "id": "1667519267",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1667519267?l=en-GB",
//     "attributes": {
//       "albumName": "Олимп",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2016-04-27",
//       "durationInMillis": 282752,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "RUB631600195",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/9b/0e/4d/9b0e4d98-c043-4d54-0a1d-bc88a2e9aa2b/cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "252525",
//         "textColor2": "1e1e1e",
//         "textColor4": "343535",
//         "textColor1": "0a0a09",
//         "bgColor": "909495",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Мурашов Павел Станиславович, Djibril Gibson Kagni, Johan Errami & Тимур Ильдарович Юнусов",
//       "url": "https://music.apple.com/dz/album/%D0%B3%D0%B4%D0%B5-%D1%82%D1%8B-%D0%B3%D0%B4%D0%B5-%D1%8F-feat-%D0%B5%D0%B3%D0%BE%D1%80-%D0%BA%D1%80%D0%B8%D0%B4/1667519207?i=1667519267",
//       "playParams": {
//         "id": "1667519267",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Где ты, где я (feat. Егор Крид)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/ac/d9/9d/acd99dc8-ca08-8f5c-ad20-f43dc86829d9/mzaf_17431476950520124691.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Timati",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1667519267/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1676753372",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1676753372?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1667519267/artists?l=en-GB",
//         "data": [
//           {
//             "id": "284266257",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/284266257?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751126316836,
//         "MZ_INDEXER": 1749251494740
//       }
//     }
//   },
//   {
//     "id": "1609910933",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1609910933?l=en-GB",
//     "attributes": {
//       "albumName": "Love, Maybe (A Business Proposal Original Soundtrack Special Track) - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Soundtrack",
//         "Music",
//         "Pop",
//         "K-Pop"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2022-02-18",
//       "durationInMillis": 185000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "KRA382203167",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/50/f0/fc/50f0fcea-7360-47c0-37d6-4440e97e2862/cover_KM0014772_1.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "dfd8d8",
//         "textColor2": "a3ddb0",
//         "textColor4": "97bf9b",
//         "textColor1": "fcfcfc",
//         "bgColor": "684a46",
//         "hasP3": false
//       },
//       "audioLocale": "ko",
//       "url": "https://music.apple.com/dz/album/love-maybe/1609910932?i=1609910933",
//       "playParams": {
//         "id": "1609910933",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Love, Maybe",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f7/f5/26/f7f526ab-087f-5e14-ea58-b093a4044d96/mzaf_2755153646745576540.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "MeloMance"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1609910933/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1609910933/artists?l=en-GB",
//         "data": [
//           {
//             "id": "975450659",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/975450659?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569659994,
//         "MZ_INDEXER": 1751569946348
//       }
//     }
//   },
//   {
//     "id": "1802242418",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802242418?l=en-GB",
//     "attributes": {
//       "albumName": "Glide - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-03-28",
//       "durationInMillis": 184405,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "DEE862500421",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/15/1f/52/151f5282-6612-5cc6-2a09-88460c666f0c/196872973051.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "4d3e39",
//         "textColor2": "482818",
//         "textColor4": "614c3b",
//         "textColor1": "2f1616",
//         "bgColor": "c5ddc7",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Joacim Persson, John Gourley, Sebastian Arman, Niklas Lif, Sebastian Lundberg & Victor Rådström",
//       "url": "https://music.apple.com/dz/album/glide/1802242410?i=1802242418",
//       "playParams": {
//         "id": "1802242418",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Glide",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/6c/ff/e26cff4c-5ccb-ac55-7da1-ad7a7f565da1/mzaf_17442463133228315823.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "NEIKED & Portugal. The Man"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802242418/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802242418/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1053426262",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1053426262?l=en-GB"
//           },
//           {
//             "id": "167649475",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/167649475?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751453613846,
//         "MZ_INDEXER": 1751453353316
//       }
//     }
//   },
//   {
//     "id": "1534593298",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1534593298?l=en-GB",
//     "attributes": {
//       "albumName": "Не положено!",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2020-04-10",
//       "durationInMillis": 314625,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "RUA1D2012161",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/d2/a6/9ad2a673-2ac3-6f7a-7192-4c4ba144b51b/cover.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c4a687",
//         "textColor2": "da854c",
//         "textColor4": "b57043",
//         "textColor1": "edc8a1",
//         "bgColor": "1f1f1d",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Дарчиев А.А., Камагин Е.П. & Семенов Н.С.",
//       "url": "https://music.apple.com/dz/album/%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5/1534593295?i=1534593298",
//       "playParams": {
//         "id": "1534593298",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Сердце",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/20/ec/6c/20ec6c2a-d308-7b2a-a0f6-e2d1257fe1d5/mzaf_9449406524699752515.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "passmurny"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1534593298/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1742186562",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1742186562?l=en-GB"
//           },
//           {
//             "id": "1536722030",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1536722030?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1534593298/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1454131916",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1454131916?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752140500685,
//         "MZ_INDEXER": 1752241889603
//       }
//     }
//   },
//   {
//     "id": "1818991008",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1818991008?l=en-GB",
//     "attributes": {
//       "albumName": "7/7 : 24/24",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-13",
//       "durationInMillis": 174494,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR9W12530574",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/26/2b/fe/262bfe4a-2b3f-0708-f65e-982bd3a45e4f/196873264813.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c1a3a9",
//         "textColor2": "edb4b0",
//         "textColor4": "bf918e",
//         "textColor1": "f0cbd2",
//         "bgColor": "070707",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "Hydro4k, Artro & Donnelli",
//       "url": "https://music.apple.com/dz/album/ruinart/1818990994?i=1818991008",
//       "playParams": {
//         "id": "1818991008",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "RUINART",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2f/5b/37/2f5b3785-f311-d9d9-7417-ec0f0b1a5b49/mzaf_10980658239447272736.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "R2",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1818991008/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1818991008/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1723757963",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1723757963?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751518246122,
//         "MZ_INDEXER": 1752198306306
//       }
//     }
//   },
//   {
//     "id": "1673100855",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1673100855?l=en-GB",
//     "attributes": {
//       "albumName": "La Isla Bonita - EP",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "1986-06-30",
//       "durationInMillis": 244886,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USWB19903355",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b6/47/17/b647177b-48bf-e1e8-08e5-21ec094c6542/603497832477.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "3a3636",
//         "textColor2": "670a0d",
//         "textColor4": "813736",
//         "textColor1": "0e0a0c",
//         "bgColor": "ece8dd",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Bruce Gaitsch, Madonna & Patrick Leonard",
//       "url": "https://music.apple.com/dz/album/la-isla-bonita/1673100833?i=1673100855",
//       "playParams": {
//         "id": "1673100855",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "La Isla Bonita",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/48/df/95/48df95a1-6042-3ee0-4ef8-2779610341a5/mzaf_9866256633273874733.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Madonna"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1673100855/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "278116894",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/278116894?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1673100855/artists?l=en-GB",
//         "data": [
//           {
//             "id": "20044",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/20044?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750898871519,
//         "MZ_INDEXER": 1750808081062
//       }
//     }
//   },
//   {
//     "id": "1802103914",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802103914?l=en-GB",
//     "attributes": {
//       "albumName": "I’m The Problem",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Country",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-05-16",
//       "durationInMillis": 184517,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12501601",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fa/60/fe/fa60fe4a-4329-a0bb-eb7c-3b6094a4d831/25UMGIM46049.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3e3327",
//         "textColor2": "3b2419",
//         "textColor4": "5e4736",
//         "textColor1": "120b07",
//         "bgColor": "ebd4a8",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Morgan Wallen, Tate McRae, John Byron, Jacob Kasher Hindlin, Ryan Vojtesak & Joe Reeves",
//       "url": "https://music.apple.com/dz/album/what-i-want/1802103906?i=1802103914",
//       "playParams": {
//         "id": "1802103914",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "What I Want",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/09/1e/e2091e2f-9d0b-fd06-7f4f-0b8bed39a769/mzaf_98132925738253207.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Morgan Wallen & Tate McRae"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802103914/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802103914/artists?l=en-GB",
//         "data": [
//           {
//             "id": "829142092",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/829142092?l=en-GB"
//           },
//           {
//             "id": "1446365464",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1446365464?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749736845347,
//         "MZ_INDEXER": 1750290686421
//       }
//     }
//   },
//   {
//     "id": "1446278331",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1446278331?l=en-GB",
//     "attributes": {
//       "albumName": "No Protection",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "1987-01-30",
//       "durationInMillis": 270333,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USRC18702968",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e9/f9/22/e9f92236-bb5b-7e84-0f9f-af6825c94550/603497853984.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "b5bab6",
//         "textColor2": "ec53a9",
//         "textColor4": "bd4287",
//         "textColor1": "e2e8e3",
//         "bgColor": "010101",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Albert Hammond, Albert Hammond Jr & Diane Warren",
//       "url": "https://music.apple.com/dz/album/nothings-gonna-stop-us-now/1446278327?i=1446278331",
//       "playParams": {
//         "id": "1446278331",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Nothing's Gonna Stop Us Now",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/db/0b/17/db0b17e9-22a8-63ec-387e-602d285e7c1b/mzaf_6350573002420800357.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Starship"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1446278331/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1446278331/artists?l=en-GB",
//         "data": [
//           {
//             "id": "183706",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/183706?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569151137,
//         "MZ_INDEXER": 1751565323275
//       }
//     }
//   },
//   {
//     "id": "1817616188",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1817616188?l=en-GB",
//     "attributes": {
//       "albumName": "Believe (Piano Edit) [Cover] - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "House",
//         "Music",
//         "Dance"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-16",
//       "durationInMillis": 225985,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "AEA3A2528977",
//       "artwork": {
//         "width": 4082,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7c/02/c5/7c02c540-c87a-7389-2ffe-ff115acee8c2/074843928104.png/440x440bb.jpg",
//         "height": 4082,
//         "textColor3": "cecfe7",
//         "textColor2": "cbcff0",
//         "textColor4": "a7abdc",
//         "textColor1": "fcfcfe",
//         "bgColor": "161d8e",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Stuart Mclennen, Paul Barry, Steven Torch, Matthew Gray, Timothy Powell & Brian Higgins",
//       "url": "https://music.apple.com/dz/album/believe-piano-edit-cover/1817616187?i=1817616188",
//       "playParams": {
//         "id": "1817616188",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Believe (Piano Edit) [Cover]",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/69/8a/ae/698aae5f-344a-e414-2573-c3d1745f2191/mzaf_13303360845019706053.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Jackyboom & nowifi"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1817616188/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1817616188/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1817615935",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1817615935?l=en-GB"
//           },
//           {
//             "id": "1476476243",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1476476243?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751517418303,
//         "MZ_INDEXER": 1751878443582
//       }
//     }
//   },
//   {
//     "id": "1824543093",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1824543093?l=en-GB",
//     "attributes": {
//       "albumName": "HEARTS SOLD SEPARATELY",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 5,
//       "releaseDate": "2025-04-25",
//       "durationInMillis": 205725,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "USSM12501674",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2c/06/86/2c068675-4814-c770-8da6-aaf1cc3fbdd0/196873376462.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "33232a",
//         "textColor2": "090a0a",
//         "textColor4": "35232a",
//         "textColor1": "070b0a",
//         "bgColor": "e485aa",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Mariah Amani Buckles",
//       "url": "https://music.apple.com/dz/album/burning-blue/1824543088?i=1824543093",
//       "playParams": {
//         "id": "1824543093",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Burning Blue",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/31/e3/ec/31e3ec9e-cd46-c185-11b6-7399bc1f3b03/mzaf_10536305416112779595.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Mariah the Scientist"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1824543093/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1813045299",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1813045299?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1824543093/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1475275447",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1475275447?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751948965996,
//         "MZ_INDEXER": 1751991806994
//       }
//     }
//   },
//   {
//     "id": "1795795647",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1795795647?l=en-GB",
//     "attributes": {
//       "albumName": "Кухни - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music",
//         "Indie Rock"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-02-27",
//       "durationInMillis": 140800,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QZGLM2546789",
//       "artwork": {
//         "width": 3744,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/a2/68/10a26841-4a7c-e8b6-1b8d-04164a0b5b9d/0.jpg/440x440bb.jpg",
//         "height": 3744,
//         "textColor3": "9fac7b",
//         "textColor2": "6fc8ad",
//         "textColor4": "5da58e",
//         "textColor1": "c1d095",
//         "bgColor": "181b12",
//         "hasP3": false
//       },
//       "audioLocale": "ru",
//       "composerName": "Золотухин Илья Алексеевич",
//       "url": "https://music.apple.com/dz/album/%D0%BA%D1%83%D1%85%D0%BD%D0%B8/1795795646?i=1795795647",
//       "playParams": {
//         "id": "1795795647",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Кухни",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/51/e7/c6/51e7c6e6-0c5d-5a65-b842-275d1609c80f/mzaf_3973845407360918665.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Бонд с кнопкой"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1795795647/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1795795647/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1492872948",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1492872948?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751887331958,
//         "MZ_INDEXER": 1751887195179
//       }
//     }
//   },
//   {
//     "id": "65122547",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/65122547?l=en-GB",
//     "attributes": {
//       "albumName": "Forever Young",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 6,
//       "releaseDate": "1984-09-27",
//       "durationInMillis": 226706,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "DEA629260150",
//       "artwork": {
//         "width": 1423,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c9/f5/e6/c9f5e66e-8ab1-5c75-dbe7-7670f9204776/s06.emtrcgpz.jpg/440x440bb.jpg",
//         "height": 1411,
//         "textColor3": "313131",
//         "textColor2": "161616",
//         "textColor4": "434343",
//         "textColor1": "000000",
//         "bgColor": "f5f5f5",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Bernhard Lloyd, Frank Mertens & Marian Gold",
//       "url": "https://music.apple.com/dz/album/forever-young/65122585?i=65122547",
//       "playParams": {
//         "id": "65122547",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Forever Young",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/2f/cb/9d/2fcb9d23-6687-7e17-e2a4-693cc887dcd1/mzaf_10992406982963596655.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Alphaville"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/65122547/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/65122547/artists?l=en-GB",
//         "data": [
//           {
//             "id": "4157274",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/4157274?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750329836515,
//         "MZ_INDEXER": 1751569032421
//       }
//     }
//   },
//   {
//     "id": "1822847799",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822847799?l=en-GB",
//     "attributes": {
//       "albumName": "Ya Nga Bebe - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Traditional Folk",
//         "Music",
//         "Singer/Songwriter",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-18",
//       "durationInMillis": 235775,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "TCAJT2513671",
//       "artwork": {
//         "width": 1400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/65/90/c26590e0-8f81-d19a-b490-063c6e01f9df/859709781419_cover.jpg/440x440bb.jpg",
//         "height": 1400,
//         "textColor3": "98b2af",
//         "textColor2": "c8ad91",
//         "textColor4": "ae9075",
//         "textColor1": "acd8da",
//         "bgColor": "481c03",
//         "hasP3": false
//       },
//       "audioLocale": "ln",
//       "composerName": "Matsouma Mario Jostie Tidiane",
//       "url": "https://music.apple.com/dz/album/ya-nga-bebe/1822847795?i=1822847799",
//       "playParams": {
//         "id": "1822847799",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Ya Nga Bebe",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/32/b8/e8/32b8e863-19a5-64c0-7dac-dcb3ea50ad35/mzaf_8889642560466988760.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Tidiane Mario, Tété Ketch & Vinny Baltazard"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822847799/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822847799/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1467143860",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1467143860?l=en-GB"
//           },
//           {
//             "id": "1822815789",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1822815789?l=en-GB"
//           },
//           {
//             "id": "1653025608",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1653025608?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752076147388,
//         "MZ_INDEXER": 1751336983926
//       }
//     }
//   },
//   {
//     "id": "924469196",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/924469196?l=en-GB",
//     "attributes": {
//       "albumName": "The Complete Atlantic Studio Albums 1977-1991",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "1984-11-13",
//       "durationInMillis": 304787,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT29900662",
//       "artwork": {
//         "width": 2400,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/a4/33/ac/a433acaa-64df-f4a7-c6dc-9056c4a7da27/075678279621.jpg/440x440bb.jpg",
//         "height": 2400,
//         "textColor3": "187bc1",
//         "textColor2": "ef4221",
//         "textColor4": "bf351b",
//         "textColor1": "1f9af1",
//         "bgColor": "000002",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Mick Jones",
//       "url": "https://music.apple.com/dz/album/i-want-to-know-what-love-is-remastered/924465849?i=924469196",
//       "playParams": {
//         "id": "924469196",
//         "kind": "song"
//       },
//       "discNumber": 5,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "I Want To Know What Love Is (Remastered)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/52/30/7d/52307d67-d6ec-9441-12df-b29defdaadef/mzaf_13790033209940936845.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Foreigner"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/924469196/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/924469196/artists?l=en-GB",
//         "data": [
//           {
//             "id": "564219",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/564219?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745862263915,
//         "MZ_INDEXER": 1752151365059
//       }
//     }
//   },
//   {
//     "id": "1822813317",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822813317?l=en-GB",
//     "attributes": {
//       "albumName": "Together - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Dance",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-26",
//       "durationInMillis": 153750,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "UKWLG2500094",
//       "artwork": {
//         "width": 4000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9d/ba/18/9dba183b-4616-1a62-fb76-c10a05d5362f/5021732854285.jpg/440x440bb.jpg",
//         "height": 4000,
//         "textColor3": "cb5f46",
//         "textColor2": "ec5e54",
//         "textColor4": "c04e46",
//         "textColor1": "fa7353",
//         "bgColor": "101010",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "David Guetta, Hypaton, Jim Steinman & Timofey Reznikov",
//       "url": "https://music.apple.com/dz/album/together/1822813315?i=1822813317",
//       "playParams": {
//         "id": "1822813317",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Together",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/5c/62/f45c6255-30b2-9fc0-17a2-562ec9d69395/mzaf_558380058013966438.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "David Guetta, Hypaton & Bonnie Tyler"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822813317/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822813317/artists?l=en-GB",
//         "data": [
//           {
//             "id": "5557599",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/5557599?l=en-GB"
//           },
//           {
//             "id": "1437307932",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1437307932?l=en-GB"
//           },
//           {
//             "id": "549450",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/549450?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752021104201,
//         "MZ_INDEXER": 1751887320876
//       }
//     }
//   },
//   {
//     "id": "1440933709",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440933709?l=en-GB",
//     "attributes": {
//       "albumName": "ANTI",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2016-01-27",
//       "durationInMillis": 219340,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QM5FT1600116",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/b9/d9/2a/b9d92a2d-4c5c-bc7f-eec3-6cad3e3ae009/16UMGIM03372.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "383536",
//         "textColor2": "520d10",
//         "textColor4": "6e373a",
//         "textColor1": "0f0a0b",
//         "bgColor": "dce0e3",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jahron Anthony Brathwaite, Matthew Jehu Samuels, Allen Ritter, R.Thomas, Aubrey Drake Graham, Robyn Rihanna Fenty & Monte Moir",
//       "url": "https://music.apple.com/dz/album/work-feat-drake/1440933547?i=1440933709",
//       "playParams": {
//         "id": "1440933709",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Work (feat. Drake)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2c/1c/c5/2c1cc5d7-3c01-836d-2330-2fa399ed6c9d/mzaf_17210716399341155484.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Rihanna",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440933709/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445011498",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445011498?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440933709/artists?l=en-GB",
//         "data": [
//           {
//             "id": "63346553",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/63346553?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752138134878,
//         "MZ_INDEXER": 1748320877951
//       },
//       "formerIds": [
//         "1079272755",
//         "1079106486"
//       ]
//     }
//   },
//   {
//     "id": "1800621031",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1800621031?l=en-GB",
//     "attributes": {
//       "albumName": "Deslocado - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Alternative",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-01-23",
//       "durationInMillis": 179997,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "PTUM72500004",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/a0/ff/59a0ff46-d105-df31-1113-e10aeec5a7ad/25UMGIM42118.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3c3c3c",
//         "textColor2": "252525",
//         "textColor4": "515151",
//         "textColor1": "0c0c0c",
//         "bgColor": "ffffff",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "Napa",
//       "url": "https://music.apple.com/dz/album/deslocado/1800621020?i=1800621031",
//       "playParams": {
//         "id": "1800621031",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Deslocado",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d9/2f/d3/d92fd358-c860-6caa-0066-def755750562/mzaf_3012330235231107457.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Napa"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1800621031/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1818090350",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1818090350?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1800621031/artists?l=en-GB",
//         "data": [
//           {
//             "id": "537049018",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/537049018?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751680741556,
//         "MZ_INDEXER": 1749258667012
//       }
//     }
//   },
//   {
//     "id": "1543895862",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1543895862?l=en-GB",
//     "attributes": {
//       "albumName": "Euphories",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "French Pop",
//         "Music"
//       ],
//       "trackNumber": 9,
//       "releaseDate": "2019-06-19",
//       "durationInMillis": 223093,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "FR9W11913036",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c5/e6/66/c5e66687-e756-a870-a6c2-c2f87fd89f80/886448932147.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "eed8e4",
//         "textColor2": "aee3f8",
//         "textColor4": "adc1df",
//         "textColor1": "ffffff",
//         "bgColor": "ac3c78",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "Adèle Castillon & Matthieu Reynaud",
//       "url": "https://music.apple.com/dz/album/en-nuit/1543895613?i=1543895862",
//       "playParams": {
//         "id": "1543895862",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "En nuit",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/fa/45/21fa456a-1a45-ce8f-a52f-ae5bacfcb5ff/mzaf_15574246947513297637.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Videoclub"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1543895862/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1471209707",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1471209707?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1543895862/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1435695527",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1435695527?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749273936226,
//         "MZ_INDEXER": 1749258180838
//       }
//     }
//   },
//   {
//     "id": "1819544623",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1819544623?l=en-GB",
//     "attributes": {
//       "albumName": "Tropicoqueta",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Latin",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-05-22",
//       "durationInMillis": 159523,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12502629",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1e/39/f5/1e39f58c-e5c1-6431-d6ed-d6c32e29d63f/25UMGIM79234.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "e99965",
//         "textColor2": "fc9461",
//         "textColor4": "e88055",
//         "textColor1": "fcb376",
//         "bgColor": "9c3123",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Carolina Giraldo Navarro, Daniela Aponte, Alvaro Jose Arroyo Gonzalez, Eliel Lind, Leonardo Vasquez, Natalie Albino, Nicole Albino, Ramón Ayala, Victor Santiago, Edwin Almonte, Ralphy Ramirez, Hector Mazzarri & Misha",
//       "url": "https://music.apple.com/dz/album/latina-foreva/1819544141?i=1819544623",
//       "playParams": {
//         "id": "1819544623",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "LATINA FOREVA",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/05/b5/26/05b5260b-fdb9-c14a-22e1-d6b492cac96e/mzaf_2627955553307126695.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "KAROL G",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1819544623/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1817501986",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1817501986?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1819544623/artists?l=en-GB",
//         "data": [
//           {
//             "id": "290814601",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/290814601?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751585603651,
//         "MZ_INDEXER": 1751585286699
//       }
//     }
//   },
//   {
//     "id": "1802835892",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802835892?l=en-GB",
//     "attributes": {
//       "albumName": "Rough Dance",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Amapiano",
//         "Music",
//         "African",
//         "Dance"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-03-28",
//       "durationInMillis": 428817,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "ZB1OS2500488",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/98/16/40/98164001-3626-3a4b-70b2-d5d9c9933b40/196872977899.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c1bfb9",
//         "textColor2": "e8dfdc",
//         "textColor4": "bcb5b3",
//         "textColor1": "efebe4",
//         "bgColor": "090d0e",
//         "hasP3": false
//       },
//       "audioLocale": "tn",
//       "composerName": "Lethabo Sebetso",
//       "url": "https://music.apple.com/dz/album/dlala-ka-yona-feat-focalistic-ricky-lenyora-uncool/1802835555?i=1802835892",
//       "playParams": {
//         "id": "1802835892",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Dlala Ka Yona (feat. Focalistic, Ricky Lenyora, Uncool MC & Mellow & Sleazy)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c7/8a/aa/c78aaa0f-23d9-ce37-4a3d-554006ce1164/mzaf_8685373164917318739.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "DJ Maphorisa, Xduppy & Enny Man Da Guitar"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802835892/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802835892/artists?l=en-GB",
//         "data": [
//           {
//             "id": "956074379",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/956074379?l=en-GB"
//           },
//           {
//             "id": "1553381176",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1553381176?l=en-GB"
//           },
//           {
//             "id": "1592086223",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1592086223?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749109593831,
//         "MZ_INDEXER": 1749145060686
//       }
//     }
//   },
//   {
//     "id": "1808074346",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1808074346?l=en-GB",
//     "attributes": {
//       "albumName": "I LOVE YOU SO JUMPSTYLE - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Electronic",
//         "Music"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2025-04-13",
//       "durationInMillis": 189148,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USUYG1721897",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/ba/02/c2ba02b9-d059-e651-4be0-808d19302f41/199316049305_cover.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "c6c7c1",
//         "textColor2": "d9d9d9",
//         "textColor4": "aeaeae",
//         "textColor1": "f8f9f0",
//         "bgColor": "020202",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "url": "https://music.apple.com/dz/album/i-love-you-so-jumpstyle-slowed/1808074149?i=1808074346",
//       "playParams": {
//         "id": "1808074346",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "I LOVE YOU SO JUMPSTYLE (Slowed)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a7/5c/42/a75c4240-eeda-4636-146c-bbfe5456c265/mzaf_14566345153197647668.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "HUSSVRX"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1808074346/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1808074346/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1627554247",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1627554247?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1749080057911,
//         "MZ_INDEXER": 1749079788739
//       }
//     }
//   },
//   {
//     "id": "1822313282",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822313282?l=en-GB",
//     "attributes": {
//       "albumName": "LE NORD SE SOUVIENT : L'ODYSSÉE",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 4,
//       "releaseDate": "2025-02-20",
//       "durationInMillis": 167814,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FR8FB2503200",
//       "artwork": {
//         "width": 1440,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/ab/b8/24abb810-bedc-37fb-07f7-951152234752/cover.jpg/440x440bb.jpg",
//         "height": 1440,
//         "textColor3": "8fabba",
//         "textColor2": "95c8dd",
//         "textColor4": "79a3b6",
//         "textColor1": "b1d2e2",
//         "bgColor": "060d1c",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "GIMS & Maximum",
//       "url": "https://music.apple.com/dz/album/ninao/1822312917?i=1822313282",
//       "playParams": {
//         "id": "1822313282",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "NINAO",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/04/c9/e9/04c9e984-b0db-1eae-749d-49eb78a8283b/mzaf_13339946963049910304.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "GIMS"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822313282/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1806610854",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1806610854?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822313282/artists?l=en-GB",
//         "data": [
//           {
//             "id": "458659054",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/458659054?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752017221232,
//         "MZ_INDEXER": 1752049341629
//       }
//     }
//   },
//   {
//     "id": "1029609244",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1029609244?l=en-GB",
//     "attributes": {
//       "albumName": "Furious 7 (Original Motion Picture Soundtrack) [Deluxe Version]",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2015-03-10",
//       "durationInMillis": 229526,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USAT21500313",
//       "artwork": {
//         "width": 1425,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4a/9b/c5/4a9bc5c5-9616-d5f9-02e5-d9845d7032cb/mzm.pgafiurb.jpg/440x440bb.jpg",
//         "height": 1425,
//         "textColor3": "d0d0d0",
//         "textColor2": "d2cdc9",
//         "textColor4": "ada9a6",
//         "textColor1": "fefefe",
//         "bgColor": "18191b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Andrew Cedar, Cameron Thomaz, Charlie Puth, Dann Hume, Joshua Karl Simon Hardy, Justin Franks & Phoebe Cockburn",
//       "url": "https://music.apple.com/dz/album/see-you-again-feat-charlie-puth/1029607120?i=1029609244",
//       "playParams": {
//         "id": "1029609244",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "See You Again (feat. Charlie Puth)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d8/8b/af/d88baf56-37cf-9e00-a51d-76cb986ee4eb/mzaf_6002171359963152137.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Wiz Khalifa"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1029609244/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "984609995",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/984609995?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1029609244/artists?l=en-GB",
//         "data": [
//           {
//             "id": "201714418",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/201714418?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1747182442933,
//         "MZ_INDEXER": 1749006461341
//       }
//     }
//   },
//   {
//     "id": "1741035175",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1741035175?l=en-GB",
//     "attributes": {
//       "albumName": "Angel Face (Club Deluxe)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Singer/Songwriter",
//         "Music"
//       ],
//       "trackNumber": 19,
//       "releaseDate": "2022-04-22",
//       "durationInMillis": 176440,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUG12202266",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/30/34/5c303478-a98f-90b0-98fb-5541d1017a9a/24UMGIM37365.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cbccc5",
//         "textColor2": "e95547",
//         "textColor4": "bb483f",
//         "textColor1": "fdfbef",
//         "bgColor": "03141e",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Stephen Sanchez & Em Beihold",
//       "url": "https://music.apple.com/dz/album/until-i-found-you-em-beihold-version/1741034588?i=1741035175",
//       "playParams": {
//         "id": "1741035175",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Until I Found You (Em Beihold Version)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e4/05/e0/e405e093-a66d-f2a5-b235-2f4e35604d91/mzaf_2925518993403533704.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Stephen Sanchez & Em Beihold"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1741035175/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1741035175/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1276541872",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1276541872?l=en-GB"
//           },
//           {
//             "id": "1505702878",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1505702878?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751569937170,
//         "MZ_INDEXER": 1751566488050
//       }
//     }
//   },
//   {
//     "id": "1226034393",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1226034393?l=en-GB",
//     "attributes": {
//       "albumName": "Harry Styles",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2017-04-07",
//       "durationInMillis": 340707,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USSM11703595",
//       "artwork": {
//         "width": 1500,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/440x440bb.jpg",
//         "height": 1500,
//         "textColor3": "bfa486",
//         "textColor2": "e1a898",
//         "textColor4": "b7897c",
//         "textColor1": "ebcaa4",
//         "bgColor": "0f0f0f",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Harry Styles, Jeff Bhasker, Mitch Rowland, Ryan Nasci, Alex Salibian & Tyler Johnson",
//       "url": "https://music.apple.com/dz/album/sign-of-the-times/1226034336?i=1226034393",
//       "playParams": {
//         "id": "1226034393",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Sign of the Times",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/19/f7/99/19f799a3-4638-f354-8713-f5ac076f328e/mzaf_2398941441794619302.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Harry Styles"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1226034393/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1234013066",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1234013066?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1226034393/artists?l=en-GB",
//         "data": [
//           {
//             "id": "471260289",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/471260289?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751680555198,
//         "MZ_INDEXER": 1752227438988
//       }
//     }
//   },
//   {
//     "id": "1440817530",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440817530?l=en-GB",
//     "attributes": {
//       "albumName": "No More Drama (Version 1)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2001-06-12",
//       "durationInMillis": 265867,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USMC10111369",
//       "artwork": {
//         "width": 3750,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bc/ba/dd/bcbadd95-9fff-b93e-b03c-84d11e9382e2/06UMGIM00908.rgb.jpg/440x440bb.jpg",
//         "height": 3632,
//         "textColor3": "e2ba83",
//         "textColor2": "fcd649",
//         "textColor4": "e2bb43",
//         "textColor1": "fcd599",
//         "bgColor": "79502b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Mary J. Blige, Bruce Miller, Andre R. Young, Camara Kambon, Mike Elizondo, Asiah Kewis & Luchana N. Lodge",
//       "url": "https://music.apple.com/dz/album/family-affair/1440817211?i=1440817530",
//       "playParams": {
//         "id": "1440817530",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Family Affair",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/48/13/7b/48137b2d-170f-bc6d-26a6-9c859d9ec10b/mzaf_8383012881809014007.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Mary J. Blige"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440817530/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440817530/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1392280",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1392280?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748469356826,
//         "MZ_INDEXER": 1752232561782
//       },
//       "formerIds": [
//         "954389270",
//         "962939805"
//       ]
//     }
//   },
//   {
//     "id": "1440903693",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1440903693?l=en-GB",
//     "attributes": {
//       "albumName": "The Eminem Show",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music",
//         "Hip-Hop",
//         "Hardcore Rap"
//       ],
//       "trackNumber": 10,
//       "releaseDate": "2002-05-14",
//       "durationInMillis": 290320,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "USIR10211038",
//       "artwork": {
//         "width": 1423,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b4/13/e9/b413e91d-40aa-a1a8-b8e3-2bacc3b3e222/00606949329020.rgb.jpg/440x440bb.jpg",
//         "height": 1410,
//         "textColor3": "c5c7c3",
//         "textColor2": "e5b945",
//         "textColor4": "bb973a",
//         "textColor1": "f3f5f0",
//         "bgColor": "100e11",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Marshall Mathers, Kevin Bell, Malcolm McLaren, Trevor Horn, Anne Dudley & Jeff Bass",
//       "url": "https://music.apple.com/dz/album/without-me/1440903530?i=1440903693",
//       "playParams": {
//         "id": "1440903693",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Without Me",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/95/a5/f095a5b0-9413-2463-eb08-64c4e43130a2/mzaf_15171290860624917386.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Eminem",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1440903693/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1440903693/artists?l=en-GB",
//         "data": [
//           {
//             "id": "111051",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/111051?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751531916258,
//         "MZ_INDEXER": 1751640435121
//       },
//       "formerIds": [
//         "15477279",
//         "111070"
//       ]
//     }
//   },
//   {
//     "id": "1796127378",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1796127378?l=en-GB",
//     "attributes": {
//       "albumName": "$ome $exy $ongs 4 U",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "R&B/Soul",
//         "Music"
//       ],
//       "trackNumber": 16,
//       "releaseDate": "2025-02-14",
//       "durationInMillis": 182768,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "USLD91772034",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/34/10/1e/34101e1f-f4b9-907a-ce47-3fba5b3ee5e8/50222.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cbccc8",
//         "textColor2": "dbf5f9",
//         "textColor4": "b3c8cc",
//         "textColor1": "faf9f3",
//         "bgColor": "13181b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "J. Brathwaite & Aubrey Drake Graham",
//       "url": "https://music.apple.com/dz/album/somebody-loves-me/1796127242?i=1796127378",
//       "playParams": {
//         "id": "1796127378",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "SOMEBODY LOVES ME",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d6/d4/72/d6d4722f-8786-6ef3-10df-bc038970b807/mzaf_2745792223673957327.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "PARTYNEXTDOOR & Drake",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1796127378/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1796127378/artists?l=en-GB",
//         "data": [
//           {
//             "id": "666648192",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/666648192?l=en-GB"
//           },
//           {
//             "id": "271256",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/271256?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752194972703,
//         "MZ_INDEXER": 1752238413822
//       }
//     }
//   },
//   {
//     "id": "1802285784",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1802285784?l=en-GB",
//     "attributes": {
//       "albumName": "4 da Ho's - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Amapiano",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 3,
//       "releaseDate": "2024-12-06",
//       "durationInMillis": 273099,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "QZWA32201010",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dd/57/8e/dd578e22-7463-ab8e-8488-be3804e69128/8721253346999.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "3a3233",
//         "textColor2": "121212",
//         "textColor4": "393334",
//         "textColor1": "131111",
//         "bgColor": "d5b8bd",
//         "hasP3": false
//       },
//       "audioLocale": "zu",
//       "composerName": "Thando Sibeko, Sibusiso Mokone, Gomolemo Gumede, Tisetso Masangu & Lungelihle Zwane",
//       "url": "https://music.apple.com/dz/album/zenzele-feat-cowboii-royal-musiq-uncool-mc-xduppy/1802285596?i=1802285784",
//       "playParams": {
//         "id": "1802285784",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "ZENZELE (feat. CowBoii, Royal Musiq, Uncool MC & Xduppy)",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/88/07/28/88072862-3c5d-8741-c16a-21e05d5d541a/mzaf_10000410594882956369.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Uncle Waffles"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1802285784/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1802285784/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1612263083",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1612263083?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751590626545,
//         "MZ_INDEXER": 1750426948325
//       }
//     }
//   },
//   {
//     "id": "1442636220",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1442636220?l=en-GB",
//     "attributes": {
//       "albumName": "Nevermind (Remastered)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Rock",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "1991-09-10",
//       "durationInMillis": 301096,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USGF19942501",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/e8/60/7f/e8607f3e-fe77-1265-fcca-390fc5fe21fe/00602547866974.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "062830",
//         "textColor2": "0e1616",
//         "textColor4": "0b3139",
//         "textColor1": "070a0a",
//         "bgColor": "009fc7",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Kurt Cobain, Dave Grohl & Krist Novoselic",
//       "url": "https://music.apple.com/dz/album/smells-like-teen-spirit/1442636209?i=1442636220",
//       "playParams": {
//         "id": "1442636220",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Smells Like Teen Spirit",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/12/02/1f/12021f13-a865-1527-9489-187d92a9807c/mzaf_5138880194067570540.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Nirvana"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1442636220/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1445847344",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1445847344?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1442636220/artists?l=en-GB",
//         "data": [
//           {
//             "id": "112018",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/112018?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745432771988,
//         "MZ_INDEXER": 1745438338009
//       },
//       "formerIds": [
//         "1092321649"
//       ]
//     }
//   },
//   {
//     "id": "1646072776",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1646072776?l=en-GB",
//     "attributes": {
//       "albumName": "Agudo Mágico 3 - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Baile Funk",
//         "Music",
//         "Brazilian"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "1930-01-01",
//       "durationInMillis": 174009,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "BCVK92200693",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/4c/e8/09/4ce80986-73fc-10f8-af80-88acb87304fd/0.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "c9c9c9",
//         "textColor2": "f7282b",
//         "textColor4": "cc2629",
//         "textColor1": "f3f3f3",
//         "bgColor": "1f1f1f",
//         "hasP3": false
//       },
//       "audioLocale": "pt-PT",
//       "composerName": "MC Lipivox & Carlos Alexandre Amaral da Silva",
//       "url": "https://music.apple.com/dz/album/agudo-m%C3%A1gico-3/1646072565?i=1646072776",
//       "playParams": {
//         "id": "1646072776",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Agudo Mágico 3",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/50/37/4f/50374feb-7437-a6c0-1cae-a0249e3c1282/mzaf_16509838417311486175.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Mc K.K, DJ TG Beats, Dj Aurélio & MC Lipivox",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1646072776/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1646072776/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1520001557",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1520001557?l=en-GB"
//           },
//           {
//             "id": "1541475793",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1541475793?l=en-GB"
//           },
//           {
//             "id": "1565037208",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1565037208?l=en-GB"
//           },
//           {
//             "id": "1160378573",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1160378573?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750288141078,
//         "MZ_INDEXER": 1750290622100
//       }
//     }
//   },
//   {
//     "id": "1822265783",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822265783?l=en-GB",
//     "attributes": {
//       "albumName": "الوفاء ماتغير - سالم المسعودي جلسة حصرية - Single",
//       "hasTimeSyncedLyrics": false,
//       "genreNames": [
//         "Worldwide",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-21",
//       "durationInMillis": 440157,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QZTB82540007",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f6/61/f1/f661f1cf-8f9d-2efa-393d-485dddf973a5/artwork.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cdc2d1",
//         "textColor2": "dfe1f4",
//         "textColor4": "d3bbc8",
//         "textColor1": "d8ebff",
//         "bgColor": "a4221a",
//         "hasP3": false
//       },
//       "audioLocale": "ar",
//       "composerName": "Salem Al Masoudi",
//       "url": "https://music.apple.com/dz/album/%D8%A7%D9%84%D9%88%D9%81%D8%A7%D8%A1-%D9%85%D8%A7%D8%AA%D8%BA%D9%8A%D8%B1-%D8%B3%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%AC%D9%84%D8%B3%D8%A9-%D8%AD%D8%B5%D8%B1%D9%8A%D8%A9/1822265782?i=1822265783",
//       "playParams": {
//         "id": "1822265783",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": false,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "الوفاء ماتغير - سالم المسعودي جلسة حصرية",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3b/65/01/3b650196-39e2-b235-6da5-08713c4fd53d/mzaf_5257190529652483067.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "King of Yemeni art"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822265783/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822265783/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1801107896",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1801107896?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751695204600,
//         "MZ_INDEXER": 1751285787826
//       }
//     }
//   },
//   {
//     "id": "1813025640",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1813025640?l=en-GB",
//     "attributes": {
//       "albumName": "Pelotero A La Bola - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop in Spanish",
//         "Music",
//         "Latin"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-16",
//       "durationInMillis": 156710,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "MXF152501103",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9f/9b/9a/9f9b9ad6-1960-0c17-a38a-6bee5c52b975/5021732805973.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cccdcd",
//         "textColor2": "f2eee5",
//         "textColor4": "c2c0b9",
//         "textColor1": "ffffff",
//         "bgColor": "03060a",
//         "hasP3": false
//       },
//       "audioLocale": "es-ES",
//       "composerName": "Alberto Ruiz, Erik Ivan Gonzalez Nuñez & Jesus Andrade",
//       "url": "https://music.apple.com/dz/album/pelotero-a-la-bola/1813025588?i=1813025640",
//       "playParams": {
//         "id": "1813025640",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Pelotero A La Bola",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/20/a2/5b/20a25beb-bf59-e51d-2d4c-5442c352acdc/mzaf_12582903681725220813.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "8Uno & Airam Páez",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1813025640/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1813025640/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1463220573",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1463220573?l=en-GB"
//           },
//           {
//             "id": "1381187866",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1381187866?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752114212662,
//         "MZ_INDEXER": 1752203570878
//       }
//     }
//   },
//   {
//     "id": "1808449129",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1808449129?l=en-GB",
//     "attributes": {
//       "albumName": "Wrong Places - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Worldwide",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-05-16",
//       "durationInMillis": 177600,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBX722530003",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/96/51/13965188-f529-da91-6001-25e9d5c3a487/8721215148029.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "bcc1c9",
//         "textColor2": "f0cbcd",
//         "textColor4": "e1aaad",
//         "textColor1": "c1e8f1",
//         "bgColor": "a6252b",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Joshua Baraka & Johnathon Mensah",
//       "url": "https://music.apple.com/dz/album/wrong-places/1808449124?i=1808449129",
//       "playParams": {
//         "id": "1808449129",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Wrong Places",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/61/5e/d5615ec6-2787-9bba-f0ca-c661e8c33291/mzaf_6055048466741799746.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Joshua Baraka",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1808449129/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1808449129/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1526660844",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1526660844?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1748925593182,
//         "MZ_INDEXER": 1748292873314
//       }
//     }
//   },
//   {
//     "id": "972839365",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/972839365?l=en-GB",
//     "attributes": {
//       "albumName": "Premiers pas",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Worldwide",
//         "Music"
//       ],
//       "trackNumber": 11,
//       "releaseDate": "2009-12-21",
//       "durationInMillis": 224360,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "FRYAS0967256",
//       "artwork": {
//         "width": 1600,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/66/78/dd/6678dd53-b2e4-a9fd-786a-74d112255929/3760173970407_cover.jpg/440x440bb.jpg",
//         "height": 1600,
//         "textColor3": "cdad9d",
//         "textColor2": "dadbe1",
//         "textColor4": "b3b3b7",
//         "textColor1": "fad4c0",
//         "bgColor": "191411",
//         "hasP3": false
//       },
//       "audioLocale": "fr-FR",
//       "composerName": "Guillaume Nestoret & Patrice Nayaradou",
//       "url": "https://music.apple.com/dz/album/confidence/972838620?i=972839365",
//       "playParams": {
//         "id": "972839365",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Confidence",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/18/82/9a/18829a8f-7136-656c-b82f-0ce5434bfa20/mzaf_16121627348482037049.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Kim"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/972839365/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/972839365/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1483608310",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1483608310?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1745870509805,
//         "MZ_INDEXER": 1732698307831
//       }
//     }
//   },
//   {
//     "id": "1822960244",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1822960244?l=en-GB",
//     "attributes": {
//       "albumName": "WENT WEST - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Hip-Hop/Rap",
//         "Music"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-06-27",
//       "durationInMillis": 156084,
//       "isVocalAttenuationAllowed": false,
//       "isMasteredForItunes": false,
//       "isrc": "QZZ4J2500452",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/27/19/62/27196238-719f-0911-0721-4b4a6fe56deb/840471810421.png/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "cbdebb",
//         "textColor2": "a4e9d1",
//         "textColor4": "98ceb7",
//         "textColor1": "e3fed6",
//         "bgColor": "6b5e4f",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Jayden Whittier-Jones & Isaiah Simmons",
//       "url": "https://music.apple.com/dz/album/went-west/1822960242?i=1822960244",
//       "playParams": {
//         "id": "1822960244",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "WENT WEST",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/93/5d/07935d92-2826-5a0e-d8e9-1d159dcc780f/mzaf_5217626206771462283.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "BabyChiefDoit",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1822960244/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1822960244/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1696609280",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1696609280?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752004404842,
//         "MZ_INDEXER": 1752153481998
//       }
//     }
//   },
//   {
//     "id": "1779319634",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1779319634?l=en-GB",
//     "attributes": {
//       "albumName": "So Close To What",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2025-01-24",
//       "durationInMillis": 165045,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USRC12403580",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/51/8a/29/518a29f3-5915-662a-d861-663e6d0fbfe4/196872648911.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "b2aa8e",
//         "textColor2": "e1b69a",
//         "textColor4": "ba977f",
//         "textColor1": "d7cead",
//         "bgColor": "1c1815",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Tate McRae, Ryan Tedder, Grant Boutin & Julia Michaels",
//       "url": "https://music.apple.com/dz/album/sports-car/1779319620?i=1779319634",
//       "playParams": {
//         "id": "1779319634",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Sports car",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/df/d0/eb/dfd0ebcf-313a-e703-fc61-2f9c4ef14f05/mzaf_1484730333431199509.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Tate McRae"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1779319634/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1779319634/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1446365464",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1446365464?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1751570212039,
//         "MZ_INDEXER": 1752084193992
//       }
//     }
//   },
//   {
//     "id": "1750307362",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1750307362?l=en-GB",
//     "attributes": {
//       "albumName": "Short n' Sweet",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Pop",
//         "Music"
//       ],
//       "trackNumber": 7,
//       "releaseDate": "2024-04-11",
//       "durationInMillis": 175459,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "USUM72403305",
//       "artwork": {
//         "width": 3600,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f6/15/d0/f615d0ab-e0c4-575d-907e-1cc084642357/24UMGIM61704.rgb.jpg/440x440bb.jpg",
//         "height": 3600,
//         "textColor3": "d19c7f",
//         "textColor2": "e1b281",
//         "textColor4": "b99b84",
//         "textColor1": "ffb47b",
//         "bgColor": "193f91",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Sabrina Carpenter, Julian Bunetta, Amy Allen & Steph Jones",
//       "url": "https://music.apple.com/dz/album/espresso/1750307020?i=1750307362",
//       "playParams": {
//         "id": "1750307362",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "atmos",
//         "lossless",
//         "lossy-stereo",
//         "spatial"
//       ],
//       "name": "Espresso",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/60/70/99/607099f1-b04c-2901-0ce0-cf0dae7b4563/mzaf_13331510138185333320.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Sabrina Carpenter",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1750307362/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1740640007",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1740640007?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1750307362/artists?l=en-GB",
//         "data": [
//           {
//             "id": "390647681",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/390647681?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750718618714,
//         "MZ_INDEXER": 1751593264547
//       }
//     }
//   },
//   {
//     "id": "1798724540",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1798724540?l=en-GB",
//     "attributes": {
//       "albumName": "Laho - Single",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "Afrobeats",
//         "Music",
//         "African"
//       ],
//       "trackNumber": 1,
//       "releaseDate": "2025-02-20",
//       "durationInMillis": 144000,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": false,
//       "isrc": "GBARL2500218",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0c/6f/44/0c6f4462-2486-f44c-a160-132f0d7e0863/196872917529.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "d05d1e",
//         "textColor2": "ee6222",
//         "textColor4": "c5521d",
//         "textColor1": "fd6f24",
//         "bgColor": "1f1209",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "Crown Uzama & Eredoro Progress",
//       "url": "https://music.apple.com/dz/album/laho/1798724324?i=1798724540",
//       "playParams": {
//         "id": "1798724540",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": false,
//       "hasLyrics": true,
//       "audioTraits": [
//         "hi-res-lossless",
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "Laho",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/eb/69/c5/eb69c52d-fbfc-f5d6-2c7e-0dad820f46b3/mzaf_10455539146887077006.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "Shallipopi",
//       "contentRating": "explicit"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1798724540/music-videos?l=en-GB",
//         "data": [
//           {
//             "id": "1800497895",
//             "type": "music-videos",
//             "href": "/v1/catalog/dz/music-videos/1800497895?l=en-GB"
//           }
//         ]
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1798724540/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1566146722",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1566146722?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1750718572165,
//         "MZ_INDEXER": 1751567238639
//       }
//     }
//   },
//   {
//     "id": "1820264145",
//     "type": "songs",
//     "href": "/v1/catalog/dz/songs/1820264145?l=en-GB",
//     "attributes": {
//       "albumName": "KPop Demon Hunters (Soundtrack from the Netflix Film)",
//       "hasTimeSyncedLyrics": true,
//       "genreNames": [
//         "K-Pop",
//         "Music",
//         "Pop"
//       ],
//       "trackNumber": 2,
//       "releaseDate": "2025-06-20",
//       "durationInMillis": 176059,
//       "isVocalAttenuationAllowed": true,
//       "isMasteredForItunes": true,
//       "isrc": "QZ8BZ2513508",
//       "artwork": {
//         "width": 3000,
//         "url": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/15/42/e1154273-8ecd-5702-e6e6-597f28001681/25UMGIM82363.rgb.jpg/440x440bb.jpg",
//         "height": 3000,
//         "textColor3": "5c264c",
//         "textColor2": "480b28",
//         "textColor4": "5f2e4f",
//         "textColor1": "440023",
//         "bgColor": "bbbdef",
//         "hasP3": false
//       },
//       "audioLocale": "en-US",
//       "composerName": "EJAE, Mark Sonnenblick & Danny Chung",
//       "url": "https://music.apple.com/dz/album/how-its-done/1820264137?i=1820264145",
//       "playParams": {
//         "id": "1820264145",
//         "kind": "song"
//       },
//       "discNumber": 1,
//       "isAppleDigitalMaster": true,
//       "hasLyrics": true,
//       "audioTraits": [
//         "lossless",
//         "lossy-stereo"
//       ],
//       "name": "How It’s Done",
//       "previews": [
//         {
//           "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/21/bf/7521bfe5-4c3a-401a-c0c3-2e65880e4022/mzaf_14246548726308219484.plus.aac.p.m4a"
//         }
//       ],
//       "artistName": "HUNTRX, EJAE, AUDREY NUNA, REI AMI & KPop Demon Hunters Cast"
//     },
//     "relationships": {
//       "music-videos": {
//         "href": "/v1/catalog/dz/songs/1820264145/music-videos?l=en-GB",
//         "data": []
//       },
//       "artists": {
//         "href": "/v1/catalog/dz/songs/1820264145/artists?l=en-GB",
//         "data": [
//           {
//             "id": "1478164763",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1478164763?l=en-GB"
//           },
//           {
//             "id": "1118367711",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1118367711?l=en-GB"
//           },
//           {
//             "id": "1444332093",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1444332093?l=en-GB"
//           },
//           {
//             "id": "1468217918",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1468217918?l=en-GB"
//           },
//           {
//             "id": "1820264140",
//             "type": "artists",
//             "href": "/v1/catalog/dz/artists/1820264140?l=en-GB"
//           }
//         ]
//       }
//     },
//     "meta": {
//       "contentVersion": {
//         "RTCI": 1752194814291,
//         "MZ_INDEXER": 1752228450996
//       }
//     }
//   }];


// export default topCharts;