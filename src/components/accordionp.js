import { useState } from "react";
import { top } from "../utilts/icon";

function Accordeionp(props) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="   rounded-[24px]  ">
      <div className={`${isVisible ? "" : "h-[108px]"} rounded-[40px]  `}>
        <div className="flex justify-between px-[30px] pt-[30px] ">
          <span className="text-[#000000]  text-[20px] font-[400]">
            {props.title}
          </span>
          <button
            onClick={toggleVisible}
            className="  rounded-full w-[28px] bg-[#0A2640] flex items-center justify-center h-[28px] "
          >
            {isVisible ? "-" : top}
          </button>
        </div>
        <div className="mx-10">
          {isVisible && (
            <p className="text-[#000000]  text-[20px] font-[400]">
              {props.body}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordeionp;
