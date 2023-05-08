import React, { useEffect, useMemo, useState } from "react";
import { movieServ } from "../../service/movieService";
import ItemMovie from "./ItemMovie/ItemMovie";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE_ARR } from "../../redux/constant/userConstant";

export default function ListMovie() {
  // let [movieArr, setMovieArr] = useState([]);
  let movieArr = useSelector((state) => state.movieReducer.movieArr);
  let dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  let [PageSize, setPageSize] = useState(8);

  const currentTableData = useMemo(() => {
    window.innerWidth > 1024 ? setPageSize(8) : setPageSize(6);
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return movieArr.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, movieArr, PageSize, window.innerWidth]);
  let renderMovie = () => {
    return currentTableData.map((movie, index) => {
      return <ItemMovie movie={movie} key={index} />;
    });
  };
  useEffect(() => {
    movieServ
      .getMovieList()
      .then((res) => {
        dispatch({ type: SET_MOVIE_ARR, payload: res.data.content });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        className="list-movie grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-48 "
        id="listMovie"
      >
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

