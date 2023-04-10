import React, { useState } from "react";
import Carousels from "../../Components/Carousel/Carousels";
import { useMediaQuery } from "react-responsive";
import SearchMovieMobileTablet from "../../Components/SearchMovie/SearchMovieMobileTablet";
import SearchMovieDesktop from "../../Components/SearchMovie/SearchMovieDesktop";
import ListMovie from "../../Components/ListMovie/ListMovie";
import Trailer from "../../Components/Trailer/Trailer";

export default function HomePage() {
  let [video, setVideo] = useState("hidden");
  let [videoURL, setVideoURL] = useState();
  let handleVideo = (url) => {
    setVideo(video == "hidden" ? "visible" : "hidden");
    setVideoURL(url);
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return (
    <div>
      <Trailer videoURL={videoURL} video={video} handleVideo={handleVideo} />
      {isMobile ? (
        <></>
      ) : (
        <Carousels
          video={video}
          handleVideo={handleVideo}
          videoURL={videoURL}
        />
      )}
      {isMobile || isTablet ? (
        <SearchMovieMobileTablet />
      ) : (
        <SearchMovieDesktop />
      )}
      <ListMovie video={video} handleVideo={handleVideo} videoURL={videoURL} />
    </div>
  );
}
