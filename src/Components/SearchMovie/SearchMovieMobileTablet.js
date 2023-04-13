import React from "react";

export default function SearchMovieMobileTablet() {
  return (
    <div id="search-movie">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block shadow-lg shadow-indigo-500/40 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tìm kiếm phim"
            required
          />
          <button
            type="submit"
            className="text-[#f44b4e] absolute hover:rounded-full  hover:bg-[#00000014] font-medium-[#000000"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
}
