function Connectour(props) {
  return (
    <div className="lg:mt-[40px] mt-3 flex space-x-[27px]">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#0A2640" />
        <path
          d="M26 12L15 23L10 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-[#000000] text-[20px] font-[400]">{props.connect}</p>
    </div>
  );
}

export default Connectour;
