function Carusel(props) {
  return (
    <div className="lg:mt-[72px] bg-[#FFFFFF] md:w-[350px] w-[300px] rounded-[12px]">
      <div className="md:p-[40px] p-[20px ]">
        <p className="text-[#000000] text-[24px] font-[400]">{props.title}</p>
        <div className="mt-[20px] md:mt-[40px] flex space-x-[16px]">
          <img src={props.image} />
          <div>
            <p className="text-[#0A2640] text-[16px] font-[700]">
              {props.title1}
            </p>
            <p className="text-[#0A2640] text-[14px] font-[400] mt-[6px]">
              {props.title2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carusel;
