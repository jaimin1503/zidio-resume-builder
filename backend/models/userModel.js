import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  username: {
    type: "string",
    unique: true,
    required: true,
  },
  email: {
    type: "string",
    unique: true,
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  location: {
    type: "string",
    default: "India",
  },
  role: {
    type: "string",
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  resetPasswordToken: {
    type: "string",
  },
  tokenExpireTime: {
    type: "Date",
  },
});

export const User = mongoose.model("User", userSchema);
