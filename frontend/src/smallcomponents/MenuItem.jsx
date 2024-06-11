import { useState } from "react";

export default function MenuItem({ logo: Logo, text }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className=" my-4 h-[70px] flex justify-start items-center rounded-xl w-[322px] bg-white hover:text-blue-400 font-bold border-2 border-white text-black hover:border-blue-400 cursor-pointer"
    >
      <div className=" flex items-center ml-5">
        <Logo isHover={isHover} />
        <h1 className=" mx-4">{text}</h1>
      </div>
    </div>
  );
}
