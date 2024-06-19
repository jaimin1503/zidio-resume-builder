import { Resume } from "../models/resumeModel.js";
import { User } from "../models/userModel.js";

export const createResume = async (req, res) => {
  try {
    const {
      personalDetails,
      experienceDetails,
      educationDetails,
      contactDetails,
      certificationsDetails,
    } = req.body;

    // Create a new resume instance
    const newResume = new Resume({
      user: req.user._id,
      personalDetails,
      experienceDetails,
      educationDetails,
      contactDetails,
      certificationsDetails,
    });

    // Save the new resume to the database
    const savedResume = await newResume.save();

    // Update the user's resumes array with the new resume ID
    await User.findByIdAndUpdate(req.user._id, {
      $push: { resumes: savedResume._id },
    });

    // Return the saved resume in the response
    res.status(201).json({
      message: "Resume created successfully",
      data: savedResume,
      success: true,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const editResume = async (req, res) => {
  try {
    const resumeId = req.params.id;
    const userId = req.user._id;

    const resume = await Resume.findById(resumeId);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    if (resume.user.toString() !== userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Update resume fields with provided data
    const updates = req.body;
    Object.assign(resume, updates);

    // Save the updated resume
    const updatedResume = await resume.save();

    // Return the updated resume in the response
    res.status(200).json(updatedResume);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};
