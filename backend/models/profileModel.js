import mongoose, { Schema } from "mongoose";

const educationSchema = mongoose.Schema({
  school: {
    type: "string",
    required: true,
  },
  degree: {
    type: "string",
    required: true,
  },
});

const socialSchema = mongoose.Schema({
  linkedin: {
    type: "string",
  },
  github: {
    type: "string",
  },
  stackoverflow: {
    type: "string",
  },
});

const profileSchema = mongoose.Schema({
  about: {
    type: "string",
    default: "",
  },
  current_position: {
    type: "string",
    default: "",
  },
  languages: [
    {
      type: String,
      required: true,
    },
  ],
  education: educationSchema,
  linkedAccounts: socialSchema,
  skills: [
    {
      type: String,
    },
  ],
});

export const Profile = mongoose.model("Profile", profileSchema);
