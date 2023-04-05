import Herobutton from "./herobutton";

function HeroSection() {
  return (
    <div className="pt-[64px] bg-[#0A2640]   px-2 md:px-4 lg:px-0 md:dlex">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto gap-[110px]">
        <div>
          <h2 className="text-[#fff] text-[48px] font-[400] font-monorope">
            Save time by building fast with Boldo Template
          </h2>
          <p className="mt-[16px] text-[#F1F1F1] text-[16px] font-[400] font-Open Sans">
            Save time by building fast with Boldo Template
          </p>
          <div className="flex space-x-[24px] items-center">
            <Herobutton herobutton={"Buy template"} />
            <button className="border border-[#FFFFFF] text-[20px] font-[700] text-[#fff] mt-[40px] rounded-[56px] w-[187px] h-[60px] flex justify-center items-center">
              Explore
            </button>
          </div>
        </div>
        <div>
          <img src="/heroimg.svg" />
        </div>
      </div>
      <img
        className="py-[56px]  lg:max-w-[1250px] lg:mx-auto object-contain"
        src="/herologo.png"
      />
    </div>
  );
}

export default HeroSection;
