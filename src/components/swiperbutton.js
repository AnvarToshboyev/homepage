import Carusel from "./carusel";
import LeftorRightbutton from "./leftorrightbutton";

function Swiperbutton() {
  return (
    <div className="lg:mt-[120px] mt-4 bg-[#0A2640]">
      <div className="lg:max-w-[1200px] mx-3 md:mx-4 lg:mx-auto lg:pt-[96px] pt-5">
        <div className="lg:flex justify-between">
          <div>
            <p className="text-[#fff] text-[48px] font-[400] lg:max-w-[716px]">
              An enterprise template to ramp up your company website
            </p>
          </div>
          <div className="flex space-x-[28px] lg:mt-[85px]">
            <LeftorRightbutton isRight={false} />
            <LeftorRightbutton isRight={true} />
          </div>
        </div>
        {/* <Carusel /> */}
      </div>
    </div>
  );
}

export default Swiperbutton;
