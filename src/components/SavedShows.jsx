// import React, { useState, useEffect } from "react";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { UserAuth } from "../context/AuthContext";
// import { db } from "../data/firebase";
// import { updateDoc, doc, onSnapshot } from "firebase/firestore";

// const SavedShows = () => {
//   const [movies, setMovies] = userState([]);
//   const { user } = UserAuth();

//   const slideLeft = () => {
//     var slider = document.getElementById("slider ");
//     slider.scrollLeft = slider.scrollLeft - 500;
//   };
//   const slideRight = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 500;
//   };

//   useEffect(() => {
//     onSnapshot(
//       doc(db, "user", `${user?.email}`, (doc) => {
//         setMovies(doc.data()?.savedShows);
//       })
//     );
//   }, [user?.email]);

//   return (
//     <div>
//       <h2 className=" text-white font-bold md:text-xl p-4 ">My Shows </h2>
//       <div className="relative flex items-center group">
//         <MdChevronLeft
//           onClick={slideLeft}
//           className=" bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
//           size={30}
//         />
//         <div
//           id={"slider"}
//           className=" w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
//         >
//           {movies.map((item, id) => (
//             <div className="  w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative p-2 ">
//               <img
//                 className="w-full h-auto block"
//                 src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path} `}
//                 alt={item?.title}
//               />
//               <div className="absolute top-0 left-0 w-full h-full hover:bg-primary/80 opacity-0 hover:opacity-100 text-white border-l-4 border-red-600">
//                 <div className=" flex flex-col justify-center items-center  h-full text-center">
//                   <p className=" whitespace-normal text-sm md:text-sm font-bold  ">
//                     {item?.title}
//                   </p>
//                   <button className="border bg-red-600 text-white border-red-600 text-sm md:text-sm  py-2 px-3 rounded whitespace-normal my-2 ">
//                     PLAY NOW
//                   </button>
//                 </div>
//                 <p onClick={saveShow}>
//                   {like ? (
//                     <FaHeart className=" absolute top-4 left-4 text-gray-300" />
//                   ) : (
//                     <FaRegHeart className=" absolute top-4 left-4 text-gray-300" />
//                   )}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <MdChevronRight
//           onClick={slideRight}
//           className=" bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
//           size={30}
//         />
//       </div>
//     </div>
//   );
// };

// export default SavedShows;
