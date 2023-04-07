import Accordeionp from "./accordionp";
import H2 from "./h2";

function Accordions() {
  return (
    <div className="lg:mt-[124px] lg:max-w-[1200px] lg:mx-auto">
      <img
        className="max-w-[100%] mt-5  w-full h-auto object-contain"
        src="/accordionimg.png"
      />
      <div className="lg:mt-[56px] mx-3 md:mx-6 mt-7 grid grid-cols-1 md:grid-cols-2 lg:gap-[100px] md:gap-[65px] ">
        <div>
          <H2
            h2={
              "We connect our customers with the best, and help them keep up-and stay open."
            }
          />
        </div>
        <div className="pt-[15px]">
          <Accordeionp title={"We connect our customers with the best? "} />
          <img
            className="lg:pt-[16px] md:pt-[10px] pt-[7px]"
            src={"/accordionimg1.png"}
          />
          <div className="pt-[32px]">
            <Accordeionp title={"We connect our customers with the best?"} />
            <img
              className="lg:pt-[16px] md:pt-[10px] pt-[7px]"
              src={"/accordionimg1.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordions;
