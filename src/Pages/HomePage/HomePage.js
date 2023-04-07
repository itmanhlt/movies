import React from "react";
import Carousels from "../../Components/Carousel/Carousels";
import { useMediaQuery } from "react-responsive";
import SearchMovieMobileTablet from "../../Components/SearchMovie/SearchMovieMobileTablet";
import SearchMovieDesktop from "../../Components/SearchMovie/SearchMovieDesktop";
import ListMovie from "../../Components/ListMovie/ListMovie";

export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return (
    <div>
      {isMobile ? <></> : <Carousels />}
      {isMobile || isTablet ? <SearchMovieMobileTablet/> : <SearchMovieDesktop />}
      <ListMovie/>
    </div>
  );
}
