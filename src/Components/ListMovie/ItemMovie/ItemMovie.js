import React from "react";
import { Card } from "antd";
import Trailer from "../../Trailer/Trailer";
const { Meta } = Card;
export default function ItemMovie({ movie, video, videoURL, handleVideo }) {
  return (
    <div
      id="item-movie"
      className="flex space-x-4 px-[40px] items-center md:flex-col md:space-x-0 md:px-2 md:py-1 lg:px-1"
    >
      {/* Hình ảnh phim */}
      <div
        className="item-image relative h-[200px] w-4/12 md:w-full md:h-[314px] md:mb-3 lg:h-[400px] rounded"
        style={{
          backgroundImage: `url(${movie.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        {/* Nút play trailer + overlay */}
        <div className="item-trailer absolute h-full w-full rounded">
          <button
            className="play-carousel absolute arrow-carousel bg-[##ffffff61] rounded-full pt-[6.5px] pl-[6.5px]
        left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
            onClick={() => {
              handleVideo(movie.trailer + "?autoplay=1");
            }}
          >
            <ion-icon name="play-outline"></ion-icon>
          </button>
        </div>
      </div>

      {/* Nội dung + Mua vé */}
      <div className="item-content w-8/12 md:w-full md:m-0">
        <div className="flex items-center space-x-2 md:space-x-0 md:mb-2">
          <span className="item-c18 px-2 md:mr-2">C18</span>
          <p className="item-title">{movie.tenPhim}</p>
        </div>
        <div>
          <p className="item-desc">{movie.moTa}</p>
        </div>
        <div className="space-x-1 space-y-2 md:space-x-0">
          <button className="bg-[#f44b4e] hover:bg-[#d2171a] text-white font-bold py-2 px-4 rounded-full w-full">
            Mua vé
          </button>
        </div>
      </div>
    </div>
  );
}
