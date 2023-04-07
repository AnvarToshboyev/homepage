function Loginsection() {
  return (
    <div className="lg:mt-[124px] md:mt-[70px] mt-[40px] bg-[#1C3D5B] rounded-[8px] lg:max-w-[1200px] lg:mx-auto mx-3 md:mx-6">
      <div className="lg:pt-[72px] md:pt-[45px] pt-[30px]">
        <p className="lg:max-w-[716px] lg:mx-auto mx-3 md:mx-6 text-[#FFFFFF] text-[48px] font-[400]">
          An enterprise template to ramp up your company website
        </p>
        <div className="lg:pt-[50px] md:pt-[30px] pt-[20px] lg:pb-[74px] mb:pb-[40px] mx-3 md:mx-6 pb-10 flex  lg:justify-center  space-x-2 lg:space-x-[24px] items-center">
          <div className="bg-[#FFFFFF] rounded-[240px] md:w-[350px] w-[220px]    lg:w-[370px] lg:h-[56px] md:h-[60px]">
            <input
              className="flex justify-center items-center my-3 mx-4 text-[#000000] w-[200px] md:w-[300px] text-[20px] font-[400]"
              typeof="text"
              placeholder="Your email address"
            />
          </div>
          <button className="bg-[#65E4A3] md:w-[160px]  rounded-[56px] lg:w-[210px] lg:h-[60px]    text-[#0A2640] text-[16px] font-[500] w-[120px] h-[50px]  md:text-[20px] md:font-[700]">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loginsection;
