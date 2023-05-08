import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieServ } from "../../service/movieService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
  SHOW_TRAILER,
} from "../../redux/constant/userConstant";
import moment from "moment";
import { Rate } from "antd";
import { Tabs } from "antd";

export default function DetailPage() {
  let param = useParams();
  let [movie, setMovie] = useState([]);
  let [rapChieu, setRapChieu] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_LOADING_ON, payload: true });
    window.scrollTo(0, 0);
    movieServ
      .getDetailMovie(param.id)
      .then((res) => {
        dispatch({ type: SET_LOADING_OFF, payload: false });
        setMovie(res.data.content);
        setRapChieu(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        dispatch({ type: SET_LOADING_OFF, payload: false });
        console.log(err);
      });
  }, []);

  const onChange = (key) => {
  };
  let items = () => {
    return rapChieu.map((item) => {
      return {
        key: item.maHeThongRap,
        label: <img className="w-10 md:w-20" src={item.logo} alt="" />,
        children: item.cumRapChieu.map((cumRap) => {
          return (
            <div
              key={cumRap.maCumRap}
              className="text-center space-y-2 md:space-y-4"
            >
              <div className="font-medium text-black md:text-xl">
                {cumRap.tenCumRap}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {cumRap.lichChieuPhim.map((lichChieu) => {
                  return (
                    <button
                      key={lichChieu.maLichChieu}
                      className="px-2 py-1 bg-[#e63946] rounded-md italic duration-500 hover:bg-[#a8dadc] max-w-[142px]"
                    >
                      {moment(lichChieu.ngayChieuGioChieu).format(
                        "DD/MM/YYYY ~ h:mm"
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }),
      };
    });
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(10, 32, 41)",
      }}
      className="text-black p-5 sm:p-10 lg:p-20"
    >
      <div className="bg-[#f1faee] py-5 sm:py-10 lg:py-10">
        <div className="px-5 sm:px-10 md:px-10 lg:px-20 xl:px-48 flex flex-col md:flex md:flex-row md:items-center md:space-x-5">
          <div className="md:w-1/4 relative image-details">
            <img
              className="max-w-full max-h-[314px] w-auto h-auto my-0 mx-auto "
              src={movie.hinhAnh}
              alt=""
            />
            <button
              onClick={() =>
                dispatch({
                  type: SHOW_TRAILER,
                  payload: {
                    status: "visible",
                    url: movie.trailer + "?autoplay=1",
                  },
                })
              }
              className="play-details absolute left-[50%] top-[50%] bg-[##ffffff61] rounded-full pt-[6.5px] pl-[6.5px] translate-y-[-50%] translate-x-[-50%]"
            >
              <ion-icon name="play-outline"></ion-icon>
            </button>
          </div>
          <div className="mt-5 md:mt-0 space-y-2 md:w-3/4">
            <p className="text-center font-medium text-xl md:text-2xl">
              {movie.tenPhim}
            </p>
            <p className="italic">
              Khởi chiếu:{" "}
              <span className="font-medium">
                {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
              </span>
            </p>
            <p
              style={{
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
                overflow: "hidden",
                textAlign: "justify",
                fontStyle: "italic",
              }}
            >
              {movie.moTa}
            </p>
            <div>
              <span className="italic">Đánh giá:</span>{" "}
              <Rate disabled defaultValue={5} />
            </div>
          </div>
        </div>
        <div className="tabs-details mt-5 max-w-[90%] sm:mx-4 md:mx-10 lg:px-6 xl:px-36">
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            items={items()}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
