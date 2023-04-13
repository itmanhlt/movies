import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserMenu from "./UserMenu/UserMenu";

export default function MobileHeader() {
  let [menu, setMenu] = useState(-200);
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between px-2 items-center shadow-lg shadow-gray-500/40 " id="header">
        <NavLink to="/" className="z-20" >
          <img src="./logo-movie.png" className="w-20" href="#header" />
        </NavLink>
        <NavLink to="/" className="z-20" >
          <strong className="text-[#e5383b]" href="#header">MOVIE THEATER</strong>
        </NavLink>
        <button
          className="z-20 text-[#e5383b]"
          onClick={() => {
            if (menu == -200) {
              setMenu(0);
              document.querySelector("body").style = "overflow: hidden";
            } else {
              setMenu(-200);
              document.querySelector("body").removeAttribute("style");
            }
          }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </header>
      {/* Menu Bar*/}
      <div
        onClick={() => {
          if (menu == -200) {
            setMenu(0);
            document.querySelector("body").style = "overflow: hidden";
          } else {
            setMenu(-200);
            document.querySelector("body").removeAttribute('style');

          }
        }}
        className="fixed h-full w-screen flex z-20 top-0"
        style={{ left: `${menu}%`, transition: ".5s" }}
      >
        <div className="bg-[#f5f3f4] h-screen w-2/4 space-y-2 py-2 px-2">
          <UserMenu />
          <hr />
          <ul className="flex flex-col space-y-2">
            <li className="mr-6">
              <a
                className="text-[#ba181b] hover:font-medium duration-200"
                href="#listMovie"
              >
                Lịch chiếu
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-[#ba181b] hover:font-medium duration-200"
                hrehref="#tabMovie"
              >
                Cụm rạp
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-[#ba181b] hover:font-medium duration-200"
                href="#tinTuc"
              >
                Tin tức
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-[#ba181b] hover:font-medium duration-200"
                href="#ungDung"
              >
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
