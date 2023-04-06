import { useRef } from "react";
import LeftorRightbutton from "./leftorrightbutton";
import Swiperslates from "./swiperslades";

function Swiperbutton() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="lg:mt-[120px] lg:pb-16 pb-5 mt-4 bg-[#0A2640]">
      <div className="lg:max-w-[1200px] mx-3 md:mx-4 lg:mx-auto lg:pt-[96px] pt-5">
        <div className="lg:flex justify-between">
          <div>
            <p className="text-[#fff] text-[48px] font-[400] lg:max-w-[716px]">
              An enterprise template to ramp up your company website
            </p>
          </div>
          <div className="flex  lg:mt-[85px] justify-between">
            <div></div>
            <div className="flex space-x-[28px]">
              <LeftorRightbutton
                isRight={false}
                navigationPrevRef={navigationPrevRef}
                navigationNextRef={navigationNextRef}
              />
              <LeftorRightbutton
                isRight={true}
                navigationPrevRef={navigationPrevRef}
                navigationNextRef={navigationNextRef}
              />
            </div>
          </div>
        </div>
        <Swiperslates
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
        />
      </div>
    </div>
  );
}

export default Swiperbutton;
