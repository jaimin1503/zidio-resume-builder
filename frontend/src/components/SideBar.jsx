import MenuItem from "../smallcomponents/MenuItem";

export default function SideBar() {
  return (
    <div className=" rounded-2xl mx-10 absolute flex flex-col justify-center items-center bg-blue-400 w-[379px] h-[765px] top-44 shadow-lg ">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}
