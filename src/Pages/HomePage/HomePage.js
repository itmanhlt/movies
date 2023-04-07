import React from "react";
import Carousels from "../../Components/Carousel/Carousels";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <div>{isMobile ? <></> : <Carousels />}</div>;
}
