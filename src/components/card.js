function Card(props) {
  return (
    <div className="mt-[80px]">
      <img src={props.image} />
      <p className="mt-[24px] text-[#000000] text-[24px] font-[400]">
        {props.cardplar}
      </p>
      <p className="mt-[12px] text-[#777777] text-[20px] font-[400]">
        {props.cardp}
      </p>
      <div>
        <div className="flex items-center space-x-[12px] mt-[28px] mb-[8px]">
          <p className="text-[#0A2640] text-[20px] font-[700]">Explore page</p>
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 14H19"
              stroke="#0A2640"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7L19 14L12 21"
              stroke="#0A2640"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <svg
          width="164"
          height="1"
          viewBox="0 0 164 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="164" height="1" fill="#0A2640" />
        </svg>
      </div>
    </div>
  );
}

export default Card;
