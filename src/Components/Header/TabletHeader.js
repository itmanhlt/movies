import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserMenu from "./UserMenu/UserMenu";

export default function TabletHeader() {
  let [menu, setMenu] = useState(-100);
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between px-2 items-center shadow-lg shadow-gray-500/40 ">
        <NavLink to="/" className="z-20">
          <img src="./logo-movie.png" className="w-20" />
        </NavLink>
        <NavLink to="/" className="z-20 text-xl">
          <strong className="text-[#e5383b]">MOVIE THEATER</strong>
        </NavLink>
        <button
          className="z-20 text-[#e5383b]"
          onClick={() => {
            menu == -100 ? setMenu(0) : setMenu(-100);
          }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </header>
      {/* Menu Bar*/}
      <div
        onClick={() => {
          menu == -100 ? setMenu(0) : setMenu(-100);
        }}
        className="fixed h-full w-screen flex"
        style={{ left: `${menu}%`, transition: ".5s" }}
      >
        <div className="bg-[#f5f3f4] h-screen w-2/4 space-y-2 py-4 px-4">
          <UserMenu />
          <hr />
          <ul className="flex flex-col space-y-2">
            <li className="mr-6">
              <a className="text-[#ba181b] hover:font-medium duration-200" href="#">
                Lịch chiếu
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#ba181b] hover:font-medium duration-200" href="#cumRap">
                Cụm rạp
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#ba181b] hover:font-medium duration-200" href="#tinTuc">
                Tin tức
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#ba181b] hover:font-medium duration-200" href="#ungDung">
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

