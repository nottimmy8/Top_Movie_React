import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [response, setResponse] = useState({});
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const singlePage = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWI3MTk0ZmYxZTQwZjA0ZGZmODVlYWFmODNhZDY4OSIsInN1YiI6IjY1YmEzMGU3ZTlkYTY5MDE3YmY1ZWYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Dl15YiWG78LZ_9ifvYnQnQ7ZK2VOoUDrWEAxluiC2M",
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error("error loading", error);
    }
  };

  useEffect(() => {
    singlePage();
  }, [id]);

  const fetchMovieVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWI3MTk0ZmYxZTQwZjA0ZGZmODVlYWFmODNhZDY4OSIsInN1YiI6IjY1YmEzMGU3ZTlkYTY5MDE3YmY1ZWYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Dl15YiWG78LZ_9ifvYnQnQ7ZK2VOoUDrWEAxluiC2M",
          },
        }
      );
      console.log(response);

      const officialTrailer = response.data.results.find(
        (video) => video.type === "Trailer" && video.official
      );

      setVideo(officialTrailer); // Set video state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieVideos();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className=" w-full p-8 h-auto">
          <div className=" w-full h-[30rem]  ">
            {video && (
              <iframe
                title={video.name}
                width="100%"
                height="100%"
                className="rounded-2xl"
                src={`https://www.youtube.com/embed/${video.key}`}
                allowFullScreen
              >
                {" "}
              </iframe>
            )}
          </div>
          {/*  */}
          <div>
            {/* Movie title */}
            <div className="flex flex-col sm:flex-row gap-2 py-5 font-semibold text-lg">
              <h1 className=" text-white">{response.title} </h1>
              <p className="flex text-white  items-center gap-2">
                <span className="w-1  bg-white rounded-full aspect-square"></span>
                {response.release_date}
              </p>
              <p className="flex text-white items-center gap-2">
                <span className="w-1 text-white  bg-white rounded-full aspect-square"></span>
                {response.runtime}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className=" w-full">
                {" "}
                <h2 className=" text-white">{response.overview} </h2>
                <div className="flex text-white  items-center gap-2 pt-3 font-bold text-lg">
                  Genres:
                  <ul className="flex text-white  items-center gap-2 font-normal  ">
                    <li>Drama,</li>
                    <li>Crime</li>
                  </ul>
                </div>
              </div>
              <div className="  w-full sm:w-[50%] px-4">
                <div>
                  <a
                    href=""
                    className="border border-red-600 bg-red-600 py-2 rounded-md text-white grid justify-center items-center"
                  >
                    See Showtime
                  </a>
                </div>
                <div className="mt-1">
                  <a
                    href=""
                    className="bg-[#BE123C]/10 border border-red-600 text-white py-2 rounded-md grid justify-center items-center"
                  >
                    More Watch Option
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
