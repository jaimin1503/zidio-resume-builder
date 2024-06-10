import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function EducationDetails() {
  return (
    <div className="p-6 h-full w-full bg-richblack-700 rounded-2xl shadow-lg text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-white">Education</h1>
        <button className="text-blue-300 font-medium">Add Info</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="institution" className="text-pure-greys-200 mb-2">
            Institution Name
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300"
            id="institution"
            placeholder="Name of school"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="course" className="text-pure-greys-200 mb-2">
            Course
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300"
            id="course"
            placeholder="Course studied"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country" className="text-pure-greys-200 mb-2">
            Country
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300"
            id="country"
            placeholder="Country name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="state" className="text-pure-greys-200 mb-2">
            State
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300"
            id="state"
            placeholder="State"
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-pure-greys-200 font-medium mb-2">Time Period</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="start" className="text-pure-greys-200 mb-2">
              Start
            </label>
            <input
              type="text"
              className="p-3 rounded border border-gray-300"
              id="start"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="finish" className="text-pure-greys-200 mb-2">
              Finish
            </label>
            <input
              type="text"
              className="p-3 rounded border border-gray-300"
              id="finish"
              placeholder="MM/YY"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" id="currently" />
              <label htmlFor="currently" className="text-pure-greys-200">
                Currently study here
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="cursor-pointer py-[0.7rem] px-3 text-gray-500 text-white hover:text-black hover:bg-richblack-200 rounded-full transition duration-300">
          <ArrowBackIcon />
        </div>
        <button className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300">
          Next session
        </button>
      </div>
    </div>
  );
}
