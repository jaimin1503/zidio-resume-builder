import "./Styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setSignupData } from "../redux/slices/authSlice";
import { signUp } from "../utils/auth";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    location: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    dispatch(signUp(formData, navigate, setError));
    dispatch(setLoading(false));
  };

  return (
    <div className=" text-white w-fit mx-auto md:border-2 max-w-lg border-blue-300 rounded-2xl p-10 mt-20">
      <h1 className="text-3xl sm:text-4xl font-medium text-center mb-10">
        SignUp to "Resume-Builder"
      </h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field bg-black"
          placeholder="FirstName"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName || ""}
        />
        <input
          type="text"
          className="input-field bg-black"
          placeholder="Lastname"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName || ""}
        />
        <input
          type="email"
          className="input-field bg-black"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email || ""}
        />
        <input
          type="text"
          className="input-field bg-black"
          placeholder="Username"
          onChange={handleChange}
          name="userName"
          value={formData.userName || ""}
        />
        <input
          type="password"
          className="input-field bg-black"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password || ""}
        />
        <button type="submit" className="submit-button hover:bg-blue-600">
          Continue
        </button>
      </form>
      <div className=" text-center">
        <p className=" my-8 w-full border-b leading-[.1em]">
          <span className=" bg-black px-2">or</span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-lg text-gray-600">Already have an account?</p>
        <a href="/login" className="text-blue-500 ml-2">
          Login
        </a>
      </div>
    </div>
  );
}
