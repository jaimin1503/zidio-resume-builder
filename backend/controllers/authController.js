import { User } from "../models/userModel.js";
import { Profile } from "../models/profileModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;
    if (!firstName || !lastName || !email || !password || !userName) {
      res.status(400).json({
        success: false,
        message: `please fill all the details`,
      });
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "please provide a valid email ",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "your password is to short please provide at least 6 charcter password ",
      });
    }
    const userexist = await User.findOne({ email });

    if (userexist) {
      return res.status(400).json({
        success: false,
        message: `user with this email already exist please login`,
      });
    }
    let hashedpassword;
    try {
      hashedpassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `error occurred while hashing password and error is ${error}`,
      });
    }

    let profile;

    try {
      profile = await Profile.create({
        about: "",
        current_position: "",
      });
    } catch (error) {
      console.error("Error occurred while creating profile:", error);
      return res.status(400).json({
        success: false,
        message: `Error occurred while creating profile.`,
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      userName,
      password: hashedpassword,
      profile,
    });

    user.password = undefined;
    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).json({
        success: false,
        message: `Email is already in use. Please use a different email.`,
      });
    } else if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.userName
    ) {
      return res.status(400).json({
        success: false,
        message: `Username is already taken. Please choose another username.`,
      });
    } else {
      console.error("Unexpected error occurred:", error);
      return res.status(400).json({
        success: false,
        message: `Something went wrong while signing up. and error is ${error}`,
      });
    }
  }
};
