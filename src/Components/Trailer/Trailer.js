import React from "react";

export default function Trailer({ video, videoURL, handleVideo }) {
  return (
    <div className="video-carousel" style={{ visibility: `${video}` }}>
      <div className=" absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <button className="close" onClick={() => handleVideo("")}>
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
