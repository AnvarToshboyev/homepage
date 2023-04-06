import Carusel from "./carusel";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Swiperslates(props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      slidesPerGroup={3}
      loop={false}
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: props.navigationPrevRef.current,
        nextEl: props.navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = props.navigationPrevRef.current;
        swiper.params.navigation.nextEl = props.navigationNextRef.current;
      }}
      modules={[Pagination, Navigation]}
      className=""
    >
      <SwiperSlide>
        <Carusel
          title={
            "“Buyer buzz partner network disruptive non-disclosure agreement business”"
          }
          image={"/swiperimg.png"}
          title1={"Albus Dumbledore"}
          title2={"Manager @ Howarts"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Carusel
          title={
            "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
          }
          image={"/swiperimg1.png"}
          title1={"Severus Snape"}
          title2={"Manager @ Slytherin"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Carusel
          title={
            "“Release facebook responsive web design business model canvas seed money monetization.”"
          }
          image={"/swiperimg2.png"}
          title1={"Harry Potter"}
          title2={"Team Leader @ Gryffindor"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Carusel
          title={
            "“Buyer buzz partner network disruptive non-disclosure agreement business”"
          }
          image={"/swiperimg.png"}
          title1={"Albus Dumbledore"}
          title2={"Manager @ Howarts"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Carusel
          title={
            "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
          }
          image={"/swiperimg1.png"}
          title1={"Severus Snape"}
          title2={"Manager @ Slytherin"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Carusel
          title={
            "“Release facebook responsive web design business model canvas seed money monetization.”"
          }
          image={"/swiperimg2.png"}
          title1={"Harry Potter"}
          title2={"Team Leader @ Gryffindor"}
        />
      </SwiperSlide>
    </Swiper>
  );
}
export default Swiperslates;
