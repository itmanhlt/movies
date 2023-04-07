import React from "react";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className="flex flex-col lg:text-xl lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-2 lg:pr-3">
      <NavLink to='/sign-in'>
        <button className="hover:text-[#ba181b] lg:border-2 lg:border-white lg:border-r-stone-300 lg:pr-2 flex items-center text-[#161a1d]">
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
