import Bloggrid from "./bloggrid";
import H3 from "./h3";
import Our from "./our";

function BlogSection() {
  return (
    <div className="lg:mt-[182px] mt-9 lg:max-w-[1200px] lg:mx-auto">
      <Our our={"Our Blog"} />
      <div className="lg:max-w-[842px] lg:mx-auto mx-3 md:mx-5">
        <H3 h3={"Value proposition accelerator product management venture"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-6 lg:grid-cols-3">
        <Bloggrid
          image={"/blogimg.png"}
          titles={"Pitch termsheet backing validation focus release."}
          images={"/blogimg3.png"}
          title1={"Chandler Bing"}
        />
        <Bloggrid
          image={"/blogimg1.png"}
          titles={
            "Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          }
          images={"/blogimg3.png"}
          title1={"Rachel Green"}
        />
        <Bloggrid
          image={"/blogimg2.png"}
          titles={
            "Beta prototype sales iPad gen-z marketing network effects value proposition"
          }
          images={"/blogimg3.png"}
          title1={"Monica Geller"}
        />
      </div>
      <div className="flex justify-center">
        <button className="border flex justify-center items-center rounded-[56px] lg:mt-[84px] mt-7 border-[#0A2640] w-[150px] h-[50px] md:w-[219px] md:h-[60px] text-[#0A2640] text-[20px] font-[700]">
          Load more
        </button>
      </div>
    </div>
  );
}

export default BlogSection;
