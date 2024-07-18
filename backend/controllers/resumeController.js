import { Resume } from "../models/resumeModel.js";
import { User } from "../models/userModel.js";

export const createResume = async (req, res) => {
  try {
    const { personalDetails } = req.body;

    if (!personalDetails) {
      return res.status(404).json({ message: "fill all details" });
    }

    const newResume = new Resume({
      user: req.user._id,
      personalDetails,
    });

    // Save the new resume to the database
    const savedResume = await newResume.save();

    // Update the user's resumes array with the new resume ID
    await User.findByIdAndUpdate(req.user._id, {
      $push: { resumes: savedResume._id },
    });

    // Return the saved resume in the response
    res.status(201).json({
      message: "Added personal details successfully",
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

export const getResume = async (req, res) => {
  try {
    const id = req.params.id;

    console.log("Received resume ID:", id);

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid resume ID" });
    }

    const resume = await Resume.findById(id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.status(200).json({
      message: "Resume found",
      resume,
    });
  } catch (error) {
    console.error("Error fetching resume:", error);
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later." });
  }
};

export const addSection = async (req, res) => {
  const {
    skills,
    educationDetails,
    experienceDetails,
    contactDetails,
    certificationsDetails,
  } = req.body;
  const { id } = req.params;
  console.log(skills);
  try {
    const resume = await Resume.findById(id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Update fields if they exist in the request body
    if (skills) resume.skills = skills;
    if (educationDetails) resume.educationDetails = educationDetails;
    if (experienceDetails) resume.experienceDetails = experienceDetails;
    if (contactDetails) resume.contactDetails = contactDetails;
    if (certificationsDetails)
      resume.certificationsDetails = certificationsDetails;

    // Save the updated resume
    await resume.save();

    return res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      resume,
    });
  } catch (error) {
    console.error("Error updating resume:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getResumes = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    const resumes = await Resume.find({ user: userId });

    if (!resumes) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.status(200).json({
      message: "Resumes found",
      data: resumes,
    });
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later." });
  }
};
