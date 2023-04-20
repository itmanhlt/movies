import React from "react";
import { movieServ } from "../../service/movieService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_MOVIE_ARR } from "../../redux/constant/userConstant";

export default function SearchMovieMobileTablet() {
  let [search, setSearch] = useState("%22%22");
  let dispatch = useDispatch();
  let handleSearchMovie = () => {
    movieServ
      .getSearchMovieMobile(search)
      .then((res) => {
        if (res.data.content != "Không tìm thấy phim !") {
          dispatch({ type: SET_MOVIE_ARR, payload: res.data.content });
        } else {
          dispatch({ type: SET_MOVIE_ARR, payload: [""] });
        }
        if (res.data.content.length === 0) {
          dispatch({ type: SET_MOVIE_ARR, payload: [""] });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let getNameFromInput = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
    } else {
      setSearch("%22%22");
    }
  };
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSearchMovie();
    }
  }
  return (
    <div id="search-movie">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          onChange={getNameFromInput}
          onKeyDown={handleKeyDown}
          type="text"
          id="default-search"
          className="block shadow-lg shadow-indigo-500/40 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tìm kiếm phim"
          required
        />
        <button
          onClick={handleSearchMovie}
          type="button"
          className="text-[#f44b4e] absolute hover:rounded-full  hover:bg-[#00000014] font-medium-[#000000"
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
