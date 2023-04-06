function Bloggrid(props) {
  return (
    <div className="lg:mt-[75px] mt-5">
      <img className="ml-[50px] md:ml-0" src={props.image} />
      <div className="lg:mt-[24px] mt-4 flex space-x-[12px] items-center">
        <p className=" text-[#0A2640] text-[16px] font-[700]">Category</p>
        <p className=" text-[#777777] text-[16px] font-[400]">
          November 22, 2021
        </p>
      </div>
      <p className="lg:mt-[12px] mt-1 text-[#000000] text-[20px] font-[400] ">
        {props.titles}
      </p>
      <div className="lg:mt-[20px] mt-3 flex space-x-[12px] items-center">
        <img src={props.images} />
        <p className="text-[#000000] text-[16px] font-[400]">{props.title1}</p>
      </div>
    </div>
  );
}

export default Bloggrid;
