import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalIndex } from "../../redux/slices/globalIndexSlice";

export default function PersonalDetails() {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const dispatch = useDispatch();
  return (
    <div className="p-6 h-full w-full bg-richblack-700 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Personal Information</h1>
        <button className="text-blue-200 font-medium">Add Info</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="firstname"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-gray-700 mb-2">
            Last name
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="lastname"
            placeholder="Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="profession" className="text-gray-700 mb-2">
            Profession
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="profession"
            placeholder="Software Engineer"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="address"
            placeholder="St James street New Jersey"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="city"
            placeholder="Janes Inn"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="state" className="text-gray-700 mb-2">
            State
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="state"
            placeholder="New Jersey"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="zip" className="text-gray-700 mb-2">
            Zip Code
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="zip"
            placeholder="123789"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className=" py-[0.7rem] px-3 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full transition duration-300 cursor-not-allowed">
          <ArrowBackIcon />
        </div>
        <button
          onClick={() => dispatch(setGlobalIndex((globalIndex + 1) % 5))}
          className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
        >
          Next session
        </button>
      </div>
    </div>
  );
}
