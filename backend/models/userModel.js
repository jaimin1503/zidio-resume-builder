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
  userName: {
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
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

export const User = mongoose.model("User", userSchema);
