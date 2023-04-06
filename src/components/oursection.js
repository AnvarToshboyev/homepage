import Card from "./card";
import H3 from "./h3";
import Our from "./our";

function Oursection() {
  return (
    <div className="mt-[84px] max-w-[1200px] mx-auto">
      <Our our={"Our Services"} />
      <div className=" mx-2 md:mx-4  lg:max-w-[842px] lg:mx-auto ">
        <H3 h3={"Handshake infographic mass market crowdfunding iteration."} />
      </div>
      <div className="grid grid-cols-1 mx-5 md:mx-7  lg:mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-[107px]">
        <Card
          image={"/card1.png"}
          cardplar={"Cool feature title"}
          cardp={"Learning curve network effects return on investment."}
        />
        <Card
          image={"/card2.png"}
          cardplar={"Even cooler feature"}
          cardp={"Learning curve network effects return on investment."}
        />
        <Card
          image={"/card3.png"}
          cardplar={"Cool feature title"}
          cardp={"Learning curve network effects return on investment."}
        />
      </div>
    </div>
  );
}

export default Oursection;
