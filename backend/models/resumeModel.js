import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PersonalInfoSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
  website: { type: String },
});

const ExperienceSchema = new Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true },
});

const EducationSchema = new Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String },
});

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
});

const CertificationSchema = new Schema({
  name: { type: String, required: true },
  issuingOrganization: { type: String, required: true },
  issueDate: { type: Date, required: true },
  expirationDate: { type: Date },
});

const ResumeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  personalInfo: { type: PersonalInfoSchema, required: true },
  summary: { type: String, required: true },
  experiences: [ExperienceSchema],
  education: [EducationSchema],
  skills: [String],
  projects: [ProjectSchema],
  certifications: [CertificationSchema],
  languages: [String],
  interests: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  hobbies: [String],
});

ResumeSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export const Resume = mongoose.model("Resume", ResumeSchema);
