import React from "react";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className="flex flex-col md:text-xl md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 md:pr-3">
      <NavLink to='/sign-in'>
        <button className="hover:text-[#ba181b] md:border-2 md:border-white md:border-r-stone-300 md:pr-2 flex items-center text-[#161a1d]">
          <ion-icon name="person-outline"></ion-icon>
          <span className="ml-1 font-medium">Đăng nhập</span>
        </button>
      </NavLink>

      <NavLink to='/sign-in'>
        <button className="hover:text-[#ba181b] flex items-center text-[#161a1d]">
          <ion-icon name="person-outline"></ion-icon>
          <span className="ml-1 font-medium">Đăng ký</span>
        </button>
      </NavLink>

    </div>
  );
}
