function Iconcasection(props) {
  return (
    <div className="px-[20px] shadow-lg my-[25px] flex space-x-[12px] items-center w-[300px] md:w-[380px] md:h-[55px] rounded-[4px] lg:mt-[64px] md:mt-4 h-[50px] lg:w-[500px] lg:h-[68px]">
      <img src={props.image} />
      <p className="text-[16px] font-[600] text-[#000000]">{props.iconca}</p>
    </div>
  );
}

export default Iconcasection;
