import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localUserServ } from "../../../service/localService";

export default function UserMenu() {

  let userInfo = useSelector((state)=>{
    return state.userReducer.userInfo;
  })
  let renderContent =()=>{
    if(userInfo){
      return (
        <div className="flex flex-col lg:text-xl lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-2 lg:pr-3">
          <NavLink to='/user-info'>
            <button className="hover:text-[#ba181b] lg:border-2 lg:border-white lg:border-r-stone-300 lg:pr-2 flex items-center text-[#E5383B]">
              <ion-icon name="ticket-outline"></ion-icon>
              <span className="ml-1 font-medium">{userInfo.hoTen}</span>
            </button>
          </NavLink>
          <div>
          <button onClick={handleLogout} className="hover:text-[#ba181b] lg:border-2 lg:border-white lg:border-r-stone-300 lg:pr-2 flex items-center text-[#161a1d]">
            <span className="ml-1 font-medium">Đăng xuất</span>
            <ion-icon name="log-in-outline"></ion-icon>
          </button>
        </div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col lg:text-xl lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-2 lg:pr-3">
          <NavLink to='/sign-in'>
            <button className="hover:text-[#ba181b] lg:border-2 lg:border-white lg:border-r-stone-300 lg:pr-2 flex items-center text-[#161a1d]">
              <ion-icon name="person-outline"></ion-icon>
              <span className="ml-1 font-medium">Đăng nhập</span>
            </button>
          </NavLink>
    
          <NavLink to='/sign-up'>
            <button className="hover:text-[#ba181b] flex items-center text-[#161a1d]">
              <ion-icon name="person-outline"></ion-icon>
              <span className="ml-1 font-medium">Đăng ký</span>
            </button>
          </NavLink>
        </div>
      );
    }
    
  }
  let handleLogout =()=>{
    localUserServ.remove();
    window.location.href='/sign-in';
  }
  return (
    // <div className="flex flex-col lg:text-xl lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-2 lg:pr-3">
    //   <NavLink to='/sign-in'>
    //     <button className="hover:text-[#ba181b] lg:border-2 lg:border-white lg:border-r-stone-300 lg:pr-2 flex items-center text-[#161a1d]">
    //       <ion-icon name="person-outline"></ion-icon>
    //       <span className="ml-1 font-medium">Đăng nhập</span>
    //     </button>
    //   </NavLink>

    //   <NavLink to='/sign-up'>
    //     <button className="hover:text-[#ba181b] flex items-center text-[#161a1d]">
    //       <ion-icon name="person-outline"></ion-icon>
    //       <span className="ml-1 font-medium">Đăng ký</span>
    //     </button>
    //   </NavLink>
    // </div>
    <div>{renderContent()}</div>
  );
}
