import H2 from "./h2";
import Iconcasection from "./iconcasection";

function Customersection() {
  return (
    <div className="lg:mt-[120px] mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-[15px] lg:gap-[156px] mx-3 md:mx-4 lg:mx-auto lg:max-w-[1200px]">
      <div className="lg:mt-[50px] mt-4">
        <H2
          h2={
            "We connect our customers with the best, and help them keep up-and stay open."
          }
        />
        <div className="px-[20px] shadow-lg mt-[25px] lg:mx-auto bg-[#0A2640] flex space-x-[12px] items-center w-[300px] rounded-[4px] lg:mt-[64px] md:mt-4 h-[50px] md:w-[380px] md:h-[55px] lg:w-[500px] lg:h-[68px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.24 12.24C21.3658 11.1142 21.9983 9.58719 21.9983 7.99501C21.9983 6.40282 21.3658 4.87585 20.24 3.75001C19.1142 2.62416 17.5872 1.99167 15.995 1.99167C14.4028 1.99167 12.8758 2.62416 11.75 3.75001L5 10.5V19H13.5L20.24 12.24Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 8L2 22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 15H9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[16px] font-[600] text-[#FFFFFF]">
            We connect our customers with the best.
          </p>
        </div>
        <Iconcasection
          image={"/iconca.png"}
          iconca={"Advisor success customer launch party."}
        />
        <Iconcasection
          image={"/iconcaimg.png"}
          iconca={"Business-to-consumer long tail."}
        />
      </div>
      <div>
        <img src="/customerimg.png" />
      </div>
    </div>
  );
}

export default Customersection;
