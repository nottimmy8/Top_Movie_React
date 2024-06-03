import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../data/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.name,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };

  return (
    <div className="  w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative p-2 ">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path} `}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-primary/80 opacity-0 hover:opacity-100 text-white border-l-4 border-red-600">
        <div className=" flex flex-col justify-center items-center  h-full text-center">
          <p className=" whitespace-normal text-sm md:text-sm font-bold  ">
            {item?.title}
          </p>
          <Link to={`/player/${item?.id} `}>
            <button className="border bg-red-600 text-white border-red-600 text-sm md:text-sm  py-2 px-3 rounded whitespace-normal my-2 ">
              PLAY NOW
            </button>
          </Link>
        </div>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className=" absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
