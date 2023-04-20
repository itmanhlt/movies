import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieServ } from "../../service/movieService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
} from "../../redux/constant/userConstant";

export default function DetailPage() {
  let param = useParams();
  let [movie, setMovie] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_LOADING_ON, payload: true });
    movieServ
      .getDetailMovie(param.id)
      .then((res) => {
        dispatch({ type: SET_LOADING_OFF, payload: false });
        setMovie(res.data.content);
      })
      .catch((err) => {
        dispatch({ type: SET_LOADING_OFF, payload: false });
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgb(10, 32, 41)",
      }}
      className="h-screen"
    >
      <img className="w-20" src={movie.hinhAnh} alt="" />
    </div>
  );
}
