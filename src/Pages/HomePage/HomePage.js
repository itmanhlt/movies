import React, { useState } from "react";
import Carousels from "../../Components/Carousel/Carousels";
import { useMediaQuery } from "react-responsive";
import SearchMovieMobileTablet from "../../Components/SearchMovie/SearchMovieMobileTablet";
import SearchMovieDesktop from "../../Components/SearchMovie/SearchMovieDesktop";
import ListMovie from "../../Components/ListMovie/ListMovie";
import Trailer from "../../Components/Trailer/Trailer";
import TabMovie from "../../Components/TabMovie/TabMovie";
import News from "../../Components/News/News";
import { useSelector } from "react-redux";
import Application from "../../Components/Application/Application";

export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return (
    <div>
      {isMobile ? <></> : <Carousels />}
      {isMobile || isTablet ? (
        <SearchMovieMobileTablet />
      ) : (
        <SearchMovieDesktop />
      )}
      <ListMovie />
      {!isMobile && !isTablet ? <TabMovie /> : <></>}
      <News />
      <Application />
    </div>
  );
}
