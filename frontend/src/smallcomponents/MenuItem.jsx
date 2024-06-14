import { useState } from "react";


export default function MenuItem({ logo: Logo, text, isActive }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className={` my-4 h-[70px] flex justify-start items-center rounded-xl w-[322px] font-bold border-2 hover:border-white border-blue-400 cursor-pointer ${
        isActive ? " bg-blue-400 text-white" : " bg-white text-black"
      } `}
    >
      <div className=" flex items-center ml-5">
        <Logo isHover={isHover} isActive={isActive} />
        <h1 className=" mx-4">{text}</h1>
      </div>
    </div>
  );
}
