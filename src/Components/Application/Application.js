import React from "react";
import AppInfo from "./AppInfo/AppInfo";
import AppImage from "./AppImage/AppImage";

export default function Application() {
  return (
    <div id="ungDung">
      <div className="flex flex-col pb-[80px] lg:flex-row lg:items-center lg:justify-center lg:pt-[120px] lg:max-w-[960px] lg:px-6 lg:mx-auto">
        <AppInfo />
        <AppImage />
      </div>
    </div>
  );
}
