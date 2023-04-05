import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserMenu from "./UserMenu/UserMenu";

export default function MobileHeader() {
  let [menu, setMenu] = useState(-100);
  return (
    <div>
      <header className="flex justify-between items-center shadow-lg shadow-gray-500/40 ">
        <NavLink to="/" className="z-20">
          <img src="./logo-movie.png" className="w-20" />
        </NavLink>
        <NavLink to="/" className="z-20">
          <strong>MOVIE THEATER</strong>
        </NavLink>
        <button
          className="z-20 text-[#FB4226]"
          onClick={() => {
            menu == -100 ? setMenu(0) : setMenu(-100);
          }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </header>
      <div
        onClick={() => {
          menu == -100 ? setMenu(0) : setMenu(-100);
        }}
        className="fixed h-full w-screen flex	"
        style={{ left: `${menu}%`, transition: ".5s" }}
      >
        <div className="bg-white h-screen w-2/4 ">
          <UserMenu />
          <hr />
          <ul className="flex flex-col">
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">
                Lịch chiếu
              </a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#cumRap">
                Cụm rạp
              </a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#tinTuc">
                Tin tức
              </a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#ungDung">
                Ứng dụng
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-[#353535] h-screen w-2/4 opacity-20">1</div>
      </div>
    </div>
  );
}
