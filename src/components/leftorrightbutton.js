import { lefticon, righticon } from "../utilts/icon";

function LeftorRightbutton(props) {
  return (
    <button
      ref={props.isRight ? props.navigationNextRef : props.navigationPrevRef}
      className="bg-[#fff] w-[72px] h-[72px] flex justify-center items-center rounded-full"
    >
      {props.isRight ? righticon : lefticon}
    </button>
  );
}

export default LeftorRightbutton;
