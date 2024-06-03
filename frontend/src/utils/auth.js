import { setSignupData } from "../redux/slices/authSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

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
          navigate("/");
          toast.success("Signup successfull 🎉");
        });
    } catch (error) {
      console.log("error while signup: ", error);
    }
    toast.dismiss(toastId);
  };
}
