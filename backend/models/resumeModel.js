import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PersonalDetailsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profession: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  description: { type: String },
});

const ExperienceDetailsSchema = new Schema({
  employer: { type: String, required: true },
  company: { type: String, required: true },
  employerAddress: { type: String, required: true },
  role: { type: String, required: true },
  employerStart: { type: Date, required: true },
  employerFinish: { type: Date },
  currently: { type: Boolean, default: true },
  description: { type: String },
});

const EducationDetailsSchema = new Schema({
  institutionName: { type: String, required: true },
  course: { type: String, required: true },
  educationCountry: { type: String, required: true },
  educationState: { type: String, required: true },
  educationStart: { type: Date, required: true },
  educationFinish: { type: Date },
});

const ContactDetailsSchema = new Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  portfolio: { type: String },
  github: { type: String },
});

const CertificationsDetailsSchema = new Schema({
  organization: { type: String },
  title: { type: String },
  date: { type: Date },
  description: { type: String },
});

const ResumeSchema = new Schema({
  personalDetails: { type: PersonalDetailsSchema, required: true },
  experienceDetails: { type: [ExperienceDetailsSchema], required: true },
  educationDetails: { type: [EducationDetailsSchema], required: true },
  contactDetails: { type: ContactDetailsSchema, required: true },
  certificationsDetails: {
    type: [CertificationsDetailsSchema],
  },
  skills: { type: [String], required: true },
  hobbies: { type: [String] },
});

export const Resume = mongoose.model("Resume", ResumeSchema);
