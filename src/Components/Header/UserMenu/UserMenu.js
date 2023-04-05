import React from "react";

export default function UserMenu() {
  return (
    <div className="flex flex-col items-start">
      <button className="hover:text-[#fb4226] flex items-center">
        <ion-icon name="person-circle-outline"></ion-icon>{" "}
        <span className="ml-1">Đăng nhập</span>
      </button>
      <button className="hover:text-[#fb4226] flex items-center">
        <ion-icon name="person-circle-outline"></ion-icon>{" "}
        <span className="ml-1">Đăng ký</span>
      </button>
    </div>
  );
}
