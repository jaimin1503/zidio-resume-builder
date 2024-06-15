import { setSignupData } from "../redux/slices/authSlice";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setToken } from "../redux/slices/authSlice";

export function signUp(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .post(`http://localhost:5555/user/signup`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data.message);
          dispatch(setSignupData(res.data.user));
          dispatch(setToken(res.data.token));
          navigate("/login");
          toast.success("Signup successfull 🎉");
        });
    } catch (error) {
      console.log("error while signup: ", error);
    }
    toast.dismiss(toastId);
  };
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT_SUCCESS" });
};
