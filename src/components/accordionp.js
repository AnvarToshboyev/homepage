import { check } from "../utilts/icon";

function Accordeionp(props) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-[#000000] text-[20px] font-[400]">{props.title}</p>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="14" fill="#0A2640" />
        <path
          d="M8 12L14 18L20 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
export default Accordeionp;
