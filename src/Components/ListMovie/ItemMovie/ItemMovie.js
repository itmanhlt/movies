import React from "react";
import { Card } from "antd";
const { Meta } = Card;
export default function ItemMovie({ movie }) {
  console.log(movie);
  return (
    <div id="item-movie">
      <Card
        className="flex "
        hoverable
        style={{ width: "100%", height: "234px"}}
        cover={
          <img
            alt="example"
            style={{width: "100%", height: "200px", objectFit:'cover'}}
            src={movie.hinhAnh}
          />
        }
      >
        <div className="item-content">
          <div className="flex items-center space-x-2">
            <span className="item-c18">C18</span>
            <p className="item-title">{movie.tenPhim}</p>
          </div>
          <div>
            <p className="item-desc">{movie.moTa}</p>
          </div>
          <div className="space-x-1 space-y-2">
            <button className="bg-[#9e9e9e] hover:bg-[#403d39] text-white font-bold py-2 px-4 rounded-full">Chi tiết</button>
            <button className="bg-[#f44b4e] hover:bg-[#d2171a] text-white font-bold py-2 px-4 rounded-full">Mua vé</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
