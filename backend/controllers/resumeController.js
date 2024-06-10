import { Resume } from "../models/resumeModel.js";
import { User } from "../models/userModel.js";

// Controller function to create a new resume
export const createResume = async (req, res) => {
  try {
    // Extract resume data from the request body
    const {
      title,
      personalInfo,
      summary,
      experiences,
      education,
      skills,
      projects,
      certifications,
      languages,
      interests,
    } = req.body;

    // Create a new resume instance
    const newResume = new Resume({
      user: req.user._id, // Assuming req.user.id contains the authenticated user's ID
      title,
      personalInfo,
      summary,
      experiences,
      education,
      skills,
      projects,
      certifications,
      languages,
      interests,
    });

    // Save the new resume to the database
    const savedResume = await newResume.save();

    // Update the user's resumes array with the new resume ID
    await User.findByIdAndUpdate(req.user._id, {
      $push: { resumes: savedResume._id },
    });

    // Return the saved resume in the response
    res.status(201).json({
      message: "resume created successfully",
      data: savedResume,
      success: true,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};
