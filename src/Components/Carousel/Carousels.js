import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carousels() {
  let [video, setVideo] = useState();

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  return (
    <div id="carousel">
      <div className="video-carousel">
        <iframe
          className=" absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          src="https://www.youtube.com/embed/kBY2k3G6LsM"
          width="800"
          height="500"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <Carousel
        // autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
              className="text-red-500 arrow-carousel"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 55 }}
              className="text-red-500 arrow-carousel"
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          )
        }
      >
        <div>
          <button className="play-carousel absolute left-[50%] top-[50%] arrow-carousel bg-[##ffffff61] rounded-full pt-[6.5px] pl-[6.5px] translate-y-[-50%] translate-x-[-50%]">
            <ion-icon name="play-outline"></ion-icon>
          </button>
          <img src="	https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" />
        </div>
        <div>
          <img src="	https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" />
        </div>
        <div>
          <img src="	https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png" />
        </div>
      </Carousel>
    </div>
  );
}
