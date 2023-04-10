import React from "react";

export default function Trailer({ video, videoURL, handleVideo }) {
  return (
    <div
      className="video-carousel"
      onClick={() => handleVideo("")}
      style={{ visibility: `${video}` }}
    >
      <div className="video-wrapper">
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
