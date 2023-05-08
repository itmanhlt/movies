import React from "react";

export default function AppInfo() {
  return (
    <div className="text-white flex flex-col justify-center items-center pt-[60px] pb-4 px-4 lg:px-0 lg:items-start lg:flex-wrap lg:flex-grow-0 lg:max-w-[50%] lg:basis-[50%]">
      <p className="text-xl font-bold tracking-[0.00938em] leading-6 mb-2 sm:text-[32px] sm:pb-8 lg:pb-8">
        Ứng dụng tiện lợi dành cho
      </p>
      <p className="text-xl font-bold tracking-[0.00938em] leading-6 mb-2 sm:text-[32px] sm:pb-4 lg:pb-8">
        người yêu điện ảnh
      </p>
      <p className="text-center mt-4 mb-2 lg:text-start lg:mb-8">
        Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi
        quà hấp dẫn.
      </p>
      <a
        href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
        target="_blank"
        className="text-white border-none px-8 py-2 font-bold mt-4 rounded-[4px] bg-[#fb4226] duration-500 hover:bg-[#af2e1a]"
      >
        APP MIỄN PHÍ - TẢI VỀ NGAY!
      </a>
      <p className="pt-4 mb-2">
        TIX có hai phiên bản{" "}
        <a
          href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
          target="_blank"
          className="text-[#fb4226]"
        >
          IOS
        </a>{" "}
        &{" "}
        <a
          href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123&pli=1"
          target="_blank"
          className="text-[#fb4226]"
        >
          Android
        </a>
      </p>
    </div>
  );
}
