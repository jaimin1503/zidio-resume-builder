export default function MenuItem({ logo, text }) {
  return (
    <div className=" my-4 h-[70px] flex justify-start items-center rounded-xl w-[322px] bg-white text-blue-300 font-bold border-2 border-blue-300 cursor-pointer">
      <div className=" flex items-center ml-5">
        <img src={logo} alt="logo" />
        <h1 className=" mx-4">{text}</h1>
      </div>
    </div>
  );
}
