import Connectour from "./connectour";
import H2 from "./h2";

function Connectsection() {
  return (
    <div className="lg:mt-[185px] grid grid-cols-1 mt-5 md:grid-cols-2 mx-2 md:mx-4 md:gap-7  md:mt-10 lg:gap-[150px] lg:max-w-[1200px] lg:mx-auto">
      <div>
        <img src="/connectimg.png" />
      </div>
      <div className="lg:mt-[50px]">
        <H2
          h2={
            "We connect our customers with the best, and help them keep up-and stay open."
          }
        />
        <Connectour connect={"We connect our customers with the best."} />
        <Connectour connect={"Advisor success customer launch party."} />
        <Connectour connect={"Business-to-consumer long tail."} />
        <div className="flex justify-center md:justify-normal">
          <button className="lg:mt-[56px] mt-4 bg-[#0A2640] w-[140px] h-[45px]  lg:w-[210px] lg:h-[60px] flex justify-center items-center rounded-[56px] text-[#FFFFFF] text-[20px] font-[700]">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connectsection;
