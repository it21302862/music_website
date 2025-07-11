import { Error, Loader, SongCard } from "../components";
import { genres} from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch,useSelector } from "react-redux";

const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    console.log(data);

    const genreTitle = "Pop"; // This can be dynamic based on user selection or other logic

    if (isFetching) return <Loader title="Loading songs..." />;
    if (error) return <Error />;

    return(
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle} </h2>
            <select
              onChange={() => {}}
              value={genreTitle}
              className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
            >
              {genres.map((genre) => (
                <option key ={genre.value} value={genre.value} className="text-gray-300">
                    {genre.title}
                </option>
              ))}
            </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((song, i) => (
              <SongCard 
              key={song.id || i} 
              song={song} 
              isPlaying={isPlaying} 
              activeSong={activeSong} 
              data ={data} 
              i = {i}/>
            ))}
        </div>
      </div>
    )
};

export default Discover;


