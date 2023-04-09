import React, { useEffect, useState } from "react";
import { movieServ } from "../../service/movieService";
import ItemMovie from "./ItemMovie/ItemMovie";

export default function ListMovie({ video, videoURL, handleVideo }) {
  let [movieArr, setMovieArr] = useState([]);
  let renderMovie = () => {
    return movieArr.map((movie, index) => {
      return (
        <ItemMovie
          movie={movie}
          key={index}
          video={video}
          videoURL={videoURL}
          handleVideo={handleVideo}
        />
      );
    });
  };
  useEffect(() => {
    movieServ
      .getMovieList()
      .then((res) => {
        setMovieArr(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-48">
      {renderMovie()}
    </div>
  );
}
