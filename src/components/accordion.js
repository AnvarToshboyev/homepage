import H2 from "./h2";

function Accordions() {
  return (
    <div className="lg:mt-[124px] lg:max-w-[1200px] lg:mx-auto">
      <img
        className="max-w-[100%] mt-5  w-full h-auto object-contain"
        src="/accordionimg.png"
      />
      <div className="lg:mt-[56px] mx-3 md:mx-6 mt-7 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <H2
            h2={
              "We connect our customers with the best, and help them keep up-and stay open."
            }
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Accordions;
