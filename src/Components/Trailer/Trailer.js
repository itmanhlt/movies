import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_TRAILER } from "../../redux/constant/userConstant";

export default function Trailer() {
  let video = useSelector((state) => state.trailerReducer.status);
  let videoURL = useSelector((state) => state.trailerReducer.url);
  let dispatch = useDispatch();
  return (
    <div
      className="video-carousel"
      onClick={() =>
        dispatch({ type: SHOW_TRAILER, payload: { status: "hidden", url: "" } })
      }
      style={{ visibility: `${video}` }}
    >
      <div className="video-wrapper">
        <button
          className="close"
          onClick={() =>
            dispatch({
              type: SHOW_TRAILER,
              payload: { status: "hidden", url: "" },
            })
          }
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <iframe
          src={videoURL}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

