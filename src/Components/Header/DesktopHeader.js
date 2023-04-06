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
        <div className="flex items-center ">          
          <NavLink to="/" className="z-20">
            <img src="./logo-movie.png" className="w-20 " />
          </NavLink>
          <NavLink to="/" className="z-20">
            <strong className="text-[#e5383b] text-2xl">MOVIE THEATER</strong>
          </NavLink>
        </div>
        {/* div2: ul */}
        <div>
        <ul className="flex items-center text-xl">
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
        {/* div3 */}
        <div >
        <UserMenu />
        </div>
      </div>
    </div>
  );
}
