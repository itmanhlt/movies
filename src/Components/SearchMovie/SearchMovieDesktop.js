import React, { useEffect, useMemo, useState } from "react";
import { movieServ } from "../../service/movieService";
import moment from "moment";
import { message, notification } from "antd";

export default function SearchMovieDesktop() {
  let [movieArr, setMovieArr] = useState([]);
  let [heThongRapChieuArr, setHeThongRapChieu] = useState([]);
  let [lichChieuPhim, setLichChieuPhim] = useState([]);
  let [maPhimCu, setMaPhimCu] = useState("");
  let [maRapCu, setMaRapCu] = useState("");
  useEffect(() => {
    movieServ
      .getMovieList()
      .then((res) => {
        setMovieArr(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  let renderRap = () => {
    return heThongRapChieuArr.map((item) => {
      return item.cumRapChieu.map((item) => {
        return <option value={item.maCumRap}>{item.tenCumRap}</option>;
      });
    });
  };

  let renderNgayGio = () => {
    return lichChieuPhim.map((item) => {
      return (
        <option>
          {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY ~ hh:mm")}
        </option>
      );
    });
  };

  let handleChonPhim = () => {
    let maPhim = document.getElementById("chon-phim").value;
    if (maPhim == 0) {
      document.getElementById("chon-rap").value = 0;
      setLichChieuPhim([]);
      setHeThongRapChieu([]);
      setMaPhimCu(maPhim);
    } else {
      movieServ.getSearchMovie(maPhim).then((res) => {
        setHeThongRapChieu(res.data.content.heThongRapChieu);
      });
    }
    if (maPhim != maPhimCu) {
      document.getElementById("chon-rap").value = 0;
      setLichChieuPhim([]);
      setMaPhimCu(maPhim);
    }
  };

  let handleChonRap = () => {
    let maCumRap = document.getElementById("chon-rap").value;
    if (maCumRap == 0) {
      setLichChieuPhim([]);
    }
    if (maCumRap != maRapCu) {
      heThongRapChieuArr.map((item) => {
        item.cumRapChieu.map((item) => {
          if (item.maCumRap == maCumRap) {
            setLichChieuPhim(item.lichChieuPhim);
          }
        });
      });
      document.getElementById("chon-gio").value = 0;
      setMaRapCu(maCumRap);
    }
  };

  let handleMuaVe = () => {
    let chonPhim = document.getElementById("chon-phim").value;
    let chonRap = document.getElementById("chon-rap").value;
    let chonGio = document.getElementById("chon-gio").value;
    if (chonPhim == 0) {
      notification.warning({
        message: 'BẠN CHƯA CHỌN PHIM',
      description:
        'Vui lòng chọn phim',
        placement: 'topLeft'
      });
    }
    else if (chonRap == 0) {
      notification.warning({
        message: 'BẠN CHƯA CHỌN RẠP',
      description:
        'Vui lòng chọn rạp',
        placement: 'topLeft'
      });
    }
    else if (chonGio == 0) {
      notification.warning({
        message: 'BẠN CHƯA CHỌN NGÀY GIỜ CHIẾU',
      description:
        'Vui lòng chọn ngày giờ chiếu',
        placement: 'topLeft'
      });
    }
  };

  return (
    <div className=" lg:px-48 my-10">
      <div
        className="flex space-x-4 p-[20px] rounded items-center shadow-xl "
        id="search"
      >
        {/* search phim */}
        <div className="grow">
          <div className="flex items-center justify-around">
            <select
              id="chon-phim"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onClick={() => {
                handleChonPhim();
              }}
              defaultValue={0}
            >
              <option value={0}>
                Chọn Phim{" "}
              </option>
              {movieArr.map((movie, index) => {
                return (
                  <option value={movie.maPhim} key={index}>
                    {" "}
                    {movie.tenPhim}
                  </option>
                );
              })}
            </select>
            <div className="pt-2">
              <ion-icon name="chevron-down-outline" size="small"></ion-icon>
            </div>
          </div>
        </div>
        {/* search rap */}
        <div className="grow">
          <div className="flex items-center justify-around ">
            <select
              id="chon-rap"
              defaultValue={0}
              onClick={() => {
                handleChonRap();
              }}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value={0}>
                Chọn Rạp{" "}
              </option>
              {renderRap()}
            </select>
            <div className="pt-2">
              <ion-icon name="chevron-down-outline" size="small"></ion-icon>
            </div>
          </div>
        </div>
        {/* search ngay gio chieu */}
        <div className="grow">
          <div className="flex items-center justify-around">
            <select
              id="chon-gio"
              defaultValue={0}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value={0}>
                Chọn Ngày Giờ Chiếu{" "}
              </option>
              {renderNgayGio()}
            </select>
            <div className="pt-2">
              <ion-icon name="chevron-down-outline" size="small"></ion-icon>
            </div>
          </div>
        </div>
        {/* button mua vé */}
        <div className="w-[200px]">
          <button
            className="bg-[#f44b4e] hover:bg-[#d2171a] text-white font-bold py-2 px-4 rounded-full w-full"
            onClick={() => {
              handleMuaVe();
            }}
          >
            Mua vé
          </button>
        </div>
      </div>
    </div>
  );
}
