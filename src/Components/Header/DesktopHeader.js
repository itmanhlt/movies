import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserMenu from "./UserMenu/UserMenu";
export default function DesktopHeader() {
  let [menu, setMenu] = useState(-100);
  return (
    <div className="">
      <div className="flex justify-between px-4 items-center shadow-lg shadow-gray-500/40 ">
        {/* div1: icon + title */}
        {/* <a className="flex items-center block " href="#carousel">           */}
          <NavLink to="/" className="z-20" href="#carousel">
            <img src="./logo-movie.png" className="w-20 "/>
          </NavLink>
          <NavLink to="/" className="z-20">
            <strong className="text-[#e5383b] text-2xl">MOVIE THEATER</strong>
          </NavLink>
        {/* </a> */}
        {/* div2: ul */}
        <div>
        <ul className="flex items-center text-xl">
            <li className="mr-6">
              <a className="text-[#ba181b] hover:font-medium duration-200" href="#listMovie">
                Lịch chiếu
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#ba181b] hover:font-medium duration-200" href="#tabMovie">
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
        {/* div3 */}
        <div >
        <UserMenu />
        </div>
      </div>
    </div>
  );
}
