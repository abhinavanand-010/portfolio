"use clident";

import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

// const containerStyles = "absolute bottom-4 right-4 flex gap-2";
// const btnStyles = "bg-white p-2 rounded-full text-black shadow-md hover:bg-gray-300";
// const iconsStyles = "text-2xl";


const WorkSilderButtons = ({containerStyles, btnStyles, iconsStyles}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSilderButtons;