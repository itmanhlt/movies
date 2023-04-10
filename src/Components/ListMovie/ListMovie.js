import React, { useEffect, useMemo, useState } from "react";
import { movieServ } from "../../service/movieService";
import ItemMovie from "./ItemMovie/ItemMovie";
import Pagination from "../Pagination/Pagination";

export default function ListMovie({ video, videoURL, handleVideo }) {
  let [movieArr, setMovieArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let [PageSize, setPageSize] = useState(8);

  const currentTableData = useMemo(() => {
    window.innerWidth > 1024 ? setPageSize(8) : setPageSize(6);
    console.log(PageSize);
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return movieArr.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, movieArr, PageSize, window.innerWidth]);
  let renderMovie = () => {
    return currentTableData.map((movie, index) => {
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
    let test = document.querySelector(".list-movie");
    console.log(test);
    console.log(window.innerWidth);
    movieServ
      .getMovieList()
      .then((res) => {
        setMovieArr(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="list-movie grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-48 ">
        {renderMovie()}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={movieArr.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
