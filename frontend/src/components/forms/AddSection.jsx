import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close'; // Import close icon
import 'react-quill/dist/quill.snow.css'; // import styles for react-quill
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalIndex } from '../../redux/slices/globalIndexSlice';
export default function CertificationDetails() {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState(''); // New state to handle popup type

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('beginner'); // Default to 'beginner'
  const [editSkillIndex, setEditSkillIndex] = useState(null);

  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: '',
    organization: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editCourseIndex, setEditCourseIndex] = useState(null);

  const [internships, setInternships] = useState([]);
  const [newInternship, setNewInternship] = useState({
    jobRole: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editInternshipIndex, setEditInternshipIndex] = useState(null);

  const [references, setReferences] = useState([]);
  const [newReference, setNewReference] = useState({
    referentName: '',
    company: '',
    referentNumber: '',
    email: '',
  });
  const [editReferenceIndex, setEditReferenceIndex] = useState(null);

  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editActivityIndex, setEditActivityIndex] = useState(null);

  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState({ hobby: '' });
  const [editHobbyIndex, setEditHobbyIndex] = useState(null);

  const [customSections, setCustomSections] = useState([]);
  const [newCustomSection, setNewCustomSection] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editCustomSectionIndex, setEditCustomSectionIndex] = useState(null);

  const handleSkillClick = () => {
    setIsPopupOpen(true);
    setPopupType('skill');
    setEditSkillIndex(null); // Ensure not in edit mode initially
  };

  const handleCourseClick = () => {
    setIsPopupOpen(true);
    setPopupType('course');
    setEditCourseIndex(null); // Ensure not in edit mode initially
  };

  const handleInternshipClick = () => {
    setIsPopupOpen(true);
    setPopupType('internship');
    setEditInternshipIndex(null); // Ensure not in edit mode initially
  };

  const handleReferenceClick = () => {
    setIsPopupOpen(true);
    setPopupType('reference');
    setEditReferenceIndex(null); // Ensure not in edit mode initially
  };

  const handleActivityClick = () => {
    setIsPopupOpen(true);
    setPopupType('activity');
    setEditActivityIndex(null); // Ensure not in edit mode initially
  };

  const handleHobbyClick = () => {
    setIsPopupOpen(true);
    setPopupType('hobby');
    setEditHobbyIndex(null); // Ensure not in edit mode initially
    setNewHobby({ hobby: '' }); // Reset newHobby state
  };


  const handleCustomSectionClick = () => {
    setIsPopupOpen(true);
    setPopupType('customSection');
    setEditCustomSectionIndex(null); // Ensure not in edit mode initially
  };

  const handleSavePopup = () => {
    switch (popupType) {
      case 'skill':
        if (editSkillIndex !== null) {
          // Update existing skill if in edit mode
          const updatedSkills = [...skills];
          updatedSkills[editSkillIndex] = { name: newSkill, level: newSkillLevel };
          setSkills(updatedSkills);
          setEditSkillIndex(null); // Exit edit mode
        } else {
          // Add new skill if not in edit mode
          if (newSkill.trim() === '') {
            return; // Don't add empty skill
          }
          const skill = { name: newSkill, level: newSkillLevel };
          setSkills([...skills, skill]);
        }
        setNewSkill('');
        setNewSkillLevel('beginner'); // Reset level to default after adding skill
        break;

      case 'course':
        if (editCourseIndex !== null) {
          // Update existing course if in edit mode
          const updatedCourses = [...courses];
          updatedCourses[editCourseIndex] = newCourse;
          setCourses(updatedCourses);
          setEditCourseIndex(null); // Exit edit mode
        } else {
          // Add new course if not in edit mode
          if (newCourse.title.trim() === '' || newCourse.organization.trim() === '') {
            return; // Don't add course with empty required fields
          }
          setCourses([...courses, newCourse]);
        }
        setNewCourse({ title: '', organization: '', startDate: '', endDate: '', description: '' });
        break;

      case 'internship':
        if (editInternshipIndex !== null) {
          // Update existing internship if in edit mode
          const updatedInternships = [...internships];
          updatedInternships[editInternshipIndex] = newInternship;
          setInternships(updatedInternships);
          setEditInternshipIndex(null); // Exit edit mode
        } else {
          // Add new internship if not in edit mode
          if (newInternship.jobRole.trim() === '' || newInternship.company.trim() === '') {
            return; // Don't add internship with empty required fields
          }
          setInternships([...internships, newInternship]);
        }
        setNewInternship({ jobRole: '', company: '', startDate: '', endDate: '', description: '' });
        break;

      case 'reference':
        if (editReferenceIndex !== null) {
          // Update existing reference if in edit mode
          const updatedReferences = [...references];
          updatedReferences[editReferenceIndex] = newReference;
          setReferences(updatedReferences);
          setEditReferenceIndex(null); // Exit edit mode
        } else {
          // Add new reference if not in edit mode
          if (
            newReference.referentName.trim() === '' ||
            newReference.company.trim() === '' ||
            newReference.referentNumber.trim() === '' ||
            newReference.email.trim() === ''
          ) {
            return; // Don't add reference with empty required fields
          }
          setReferences([...references, newReference]);
        }
        setNewReference({ referentName: '', company: '', referentNumber: '', email: '' });
        break;

      case 'activity':
        if (editActivityIndex !== null) {
          // Update existing activity if in edit mode
          const updatedActivities = [...activities];
          updatedActivities[editActivityIndex] = newActivity;
          setActivities(updatedActivities);
          setEditActivityIndex(null); // Exit edit mode
        } else {
          // Add new activity if not in edit mode
          if (newActivity.title.trim() === '') {
            return; // Don't add activity with empty title
          }
          setActivities([...activities, newActivity]);
        }
        setNewActivity({ title: '', startDate: '', endDate: '', description: '' });
        break;

      case 'hobby':
        if (editHobbyIndex !== null) {
          // Editing existing hobby
          const updatedHobbies = [...hobbies];
          updatedHobbies[editHobbyIndex] = newHobby;
          setHobbies(updatedHobbies);
          setEditHobbyIndex(null); // Exit edit mode
        } else {
          // Adding new hobby
          if (newHobby.hobby.trim() === '') {
            return; // Don't add hobby with empty title
          }
          setHobbies([...hobbies, newHobby]);
        }
        setNewHobby({ hobby: '' }); 
        break;

      case 'customSection':
        if (editCustomSectionIndex !== null) {
          // Update existing custom section if in edit mode
          const updatedCustomSections = [...customSections];
          updatedCustomSections[editCustomSectionIndex] = newCustomSection;
          setCustomSections(updatedCustomSections);
          setEditCustomSectionIndex(null); // Exit edit mode
        } else {
          // Add new custom section if not in edit mode
          if (newCustomSection.title.trim() === '') {
            return; // Don't add custom section with empty title
          }
          setCustomSections([...customSections, newCustomSection]);
        }
        setNewCustomSection({ title: '', startDate: '', endDate: '', description: '' });
        break;

      default:
        break;
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };
  
  const handleEditSkill = (index) => {
    const skillToEdit = skills[index];
    setNewSkill(skillToEdit.name);
    setNewSkillLevel(skillToEdit.level);
    setEditSkillIndex(index);
    setIsPopupOpen(true);
    setPopupType('skill');
  };
  
  const handleDeleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };
  
  const handleEditCourse = (index) => {
    const courseToEdit = courses[index];
    setNewCourse({
      title: courseToEdit.title,
      organization: courseToEdit.organization,
      startDate: courseToEdit.startDate,
      endDate: courseToEdit.endDate,
      description: courseToEdit.description,
    });
    setEditCourseIndex(index);
    setIsPopupOpen(true);
    setPopupType('course');
  };
  
  const handleDeleteInternship = (index) => {
    const updatedInternships = [...internships];
    updatedInternships.splice(index, 1);
    setInternships(updatedInternships);
  };
  
  const handleEditInternship = (index) => {
    const internshipToEdit = internships[index];
    setNewInternship({
      jobRole: internshipToEdit.jobRole,
      company: internshipToEdit.company,
      startDate: internshipToEdit.startDate,
      endDate: internshipToEdit.endDate,
      description: internshipToEdit.description,
    });
    setEditInternshipIndex(index);
    setIsPopupOpen(true);
    setPopupType('internship');
  };
  
  const handleDeleteReference = (index) => {
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    setReferences(updatedReferences);
  };
  
  const handleEditReference = (index) => {
    const referenceToEdit = references[index];
    setNewReference({
      referentName: referenceToEdit.referentName,
      company: referenceToEdit.company,
      referentNumber: referenceToEdit.referentNumber,
      email: referenceToEdit.email,
    });
    setEditReferenceIndex(index);
    setIsPopupOpen(true);
    setPopupType('reference');
  };
  
  const handleDeleteActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };
  
  const handleEditActivity = (index) => {
    const activityToEdit = activities[index];
    setNewActivity({
      title: activityToEdit.title,
      startDate: activityToEdit.startDate,
      endDate: activityToEdit.endDate,
      description: activityToEdit.description,
    });
    setEditActivityIndex(index);
    setIsPopupOpen(true);
    setPopupType('activity');
  };
  

  const handleDeleteHobby = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies.splice(index, 1);
    setHobbies(updatedHobbies);
  };

  const handleEditHobby = (index) => {
    const hobbyToEdit = hobbies[index];
    setNewHobby({ hobby: hobbyToEdit.hobby });
    setEditHobbyIndex(index);
    setIsPopupOpen(true);
    setPopupType('hobby');
  };
  
  const handleDeleteCustomSection = (index) => {
    const updatedCustomSections = [...customSections];
    updatedCustomSections.splice(index, 1);
    setCustomSections(updatedCustomSections);
  };
  
  const handleEditCustomSection = (index) => {
    const customSectionToEdit = customSections[index];
    setNewCustomSection({
      title: customSectionToEdit.title,
      startDate: customSectionToEdit.startDate,
      endDate: customSectionToEdit.endDate,
      description: customSectionToEdit.description,
    });
    setEditCustomSectionIndex(index);
    setIsPopupOpen(true);
    setPopupType('customSection');
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setEditSkillIndex(null); // Reset skill edit index
    setEditCourseIndex(null); // Reset course edit index
    setEditInternshipIndex(null); // Reset internship edit index
    setEditReferenceIndex(null); 
    setEditActivityIndex(null);  
    setEditHobbyIndex(null); 
    setEditCustomSectionIndex(null); 
  };


  return (
   
      <div className="p-6 h-[calc(100vh-100px)] w-full bg-richblack-800 rounded-2xl shadow-lg flex-1 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-white">Add Section</h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={handleSkillClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Skills
          </button>
          <button
            onClick={handleCourseClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Courses
          </button>
          <button
            onClick={handleInternshipClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Internship
          </button>
          <button
            onClick={handleReferenceClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Reference
          </button>
          <button
            onClick={handleActivityClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Extracurricular Activities
          </button>
          <button
            onClick={handleHobbyClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Hobbies
          </button>
          <button
            onClick={handleCustomSectionClick}
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300"
          >
            Custom Section
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div
            onClick={() => dispatch(setGlobalIndex(globalIndex - 1))}
            className="cursor-pointer py-[0.7rem] px-3 text-gray-500 hover:text-black hover:bg-richblack-500 rounded-full transition duration-300"
          >
            <ArrowBackIcon />
          </div>
          <button
            className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
          >
            Finish
          </button>
        </div>
        {isPopupOpen && (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-black">
      <div className="flex justify-between items-center mb-4">
        {popupType === 'skill' ? (
          <>
            {editSkillIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Skill</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Skill</h2>
            )}
          </>
        ) : popupType === 'course' ? (
          <>
            {editCourseIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Course</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Course</h2>
            )}
          </>
        ) : popupType === 'internship' ? (
          <>
            {editInternshipIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Internship</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Internship</h2>
            )}
          </>
        ) : popupType === 'reference' ? (
          <>
            {editReferenceIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Reference</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Reference</h2>
            )}
          </>
        ) : popupType === 'activity' ? (
          <>
            {editActivityIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Activity</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Activity</h2>
            )}
          </>
        ) : popupType === 'hobby' ? (
          <>
            {editHobbyIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Hobby</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Hobby</h2>
            )}
          </>
        ) : popupType === 'customSection' ? (
          <>
            {editCustomSectionIndex !== null ? (
              <h2 className="text-xl font-semibold text-black">Edit Custom Section</h2>
            ) : (
              <h2 className="text-xl font-semibold text-black">Add Custom Section</h2>
            )}
          </>
        ) : null}
        <div>
          <button
            onClick={handleSavePopup}
            className="py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300 mr-2"
          >
            Save
          </button>
          <button
            onClick={handleClosePopup} // Close popup on click
            className="py-0 px-1 bg-blue-200 hover:bg-red-500 text-white rounded-md transition duration-300"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
      {popupType === 'skill' && (
        <>
          <div className="mb-4">
            <label className="block text-lr font-medium text-black">Skill</label>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
              placeholder="Enter skill"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-lr font-medium text-black">Level</label>
            <select
              value={newSkillLevel}
              onChange={(e) => setNewSkillLevel(e.target.value)}
              className="mt-1 p-2 block w-full border border-black-300 rounded-md text-black"
            
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="pro">Pro</option>
            </select>
          </div>
          {skills.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg text-black font-semibold mb-2">Skills List</h2>
              <ul className="divide-y divide-gray-200">
                {skills.map((skill, index) => (
                  <li key={index} className="py-2 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-black font-medium">{skill.name}</p>
                      <p className="text-xs text-black">{skill.level}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditSkill(index)}
                        className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSkill(index)}
                        className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </>
      )}
    {popupType === 'course' && (
                 <>
                 <div className="mb-4">
                   <label className="block text-lr font-medium text-black">Course Title</label>
                   <input
                     type="text"
                     value={newCourse.title}
                     onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                     placeholder="Enter course title"
                   />
                 </div>
                 <div className="mb-4">
                   <label className="block text-lr  font-medium text-black">Organization</label>
                   <input
                     type="text"
                     value={newCourse.organization}
                     onChange={(e) => setNewCourse({ ...newCourse, organization: e.target.value })}
                     className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                     placeholder="Enter organization"
                   />
                 </div>
                 <div className="mb-4">
                   <label className="block text-lr font-medium text-black">Start Date</label>
                   <input
                     type="date"
                     value={newCourse.startDate}
                     onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })}
                     className="mt-1 p-2 block w-full border border-black-300 text-black rounded-md"
                   />
                 </div>
                 <div className="mb-4">
                   <label className="block text-lr font-medium text-black">End Date</label>
                   <input
                     type="date"
                     value={newCourse.endDate}
                     onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })}
                     className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                   />
                 </div>
                 <div className="mb-4">
                   <label className="block text-lr font-medium text-black">Description</label>
                   <textarea
                     value={newCourse.description}
                     onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                     className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                     placeholder="Enter course description"
                   />
                 </div>
                 {courses.length > 0 && (
                   <div className="mt-6">
                     <h2 className="text-lg text-black font-semibold mb-2">Courses List</h2>
                     <ul className="divide-y divide-gray-200">
                       {courses.map((course, index) => (
                         <li key={index} className="py-2 flex justify-between items-center">
                           <div>
                             <p className="text-sm text-black font-medium">{course.title}</p>
                             <p className="text-xs text-black">{course.organization}</p>
                           </div>
                           <div>
                             <button
                               onClick={() => handleEditCourse(index)}
                               className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs mr-2"
                             >
                               Edit
                             </button>
                             <button
                               onClick={() => handleDeleteCourse(index)}
                               className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs"
                             >
                               Delete
                             </button>
                           </div>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
               </>
             ) }
              {popupType === 'internship' && (
              <>
               <div className="mb-4">
                    <label className="block text-lr font-medium text-black">Job Role</label>
                    <input
                      type="text"
                      value={newInternship.jobRole}
                      onChange={(e) => setNewInternship({ ...newInternship, jobRole: e.target.value })}
                      className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                      placeholder="Enter job role"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lr font-medium text-black">Company</label>
                    <input
                      type="text"
                      value={newInternship.company}
                      onChange={(e) => setNewInternship({ ...newInternship, company: e.target.value })}
                      className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                      placeholder="Enter company"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lr font-medium text-black">Start Date</label>
                    <input
                      type="date"
                      value={newInternship.startDate}
                      onChange={(e) => setNewInternship({ ...newInternship, startDate: e.target.value })}
                      className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lr font-medium text-black">End Date</label>
                    <input
                      type="date"
                      value={newInternship.endDate}
                      onChange={(e) => setNewInternship({ ...newInternship, endDate: e.target.value })}
                      className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lr font-medium text-black">Description</label>
                    <textarea
                      value={newInternship.description}
                      onChange={(e) => setNewInternship({ ...newInternship, description: e.target.value })}
                      className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                      placeholder="Enter internship description"
                    />
                  </div>
                  {internships.length > 0 && (
                    <div className="mt-6">
                      <h2 className="text-lg text-black font-semibold mb-2">Internships List</h2>
                      <ul className="divide-y divide-black-200">
                        {internships.map((internship, index) => (
                          <li key={index} className="py-2 flex justify-between items-center">
                            <div>
                              <p className="text-sm text-black font-medium">{internship.jobRole}</p>
                              <p className="text-xs text-black">{internship.company}</p>
                            </div>
                            <div>
                              <button
                                onClick={() => handleEditInternship(index)}
                                className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs mr-2"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteInternship(index)}
                                className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs"
                              >
                                Delete
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

              </>
            )}
             {popupType === 'reference' && (
              <>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Referent Name</label>
                  <input
                    type="text"
                    value={newReference.name}
                    onChange={(e) => setNewReference({ ...newReference, name: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter referent name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Company</label>
                  <input
                    type="text"
                    value={newReference.company}
                    onChange={(e) => setNewReference({ ...newReference, company: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter company"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Referent Number</label>
                  <input
                    type="text"
                    value={newReference.number}
                    onChange={(e) => setNewReference({ ...newReference, number: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter referent number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">Email</label>
                  <input
                    type="email"
                    value={newReference.email}
                    onChange={(e) => setNewReference({ ...newReference, email: e.target.value })}
                    className="mt-1 p-2 block w-full text-black border border-gray-300 rounded-md"
                    placeholder="Enter email"
                  />
                </div>
                {references.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2 text-black">References List</h2>
                    <ul className="divide-y divide-gray-200">
                      {references.map((reference, index) => (
                        <li key={index} className="py-2 flex justify-between items-center">
                          <div>
                            <p className="text-sm text-black font-medium">{reference.name}</p>
                            <p className="text-xs text-black">{reference.company}</p>
                          </div>
                          <div>
                            <button
                              onClick={() => handleEditReference(index)}
                              className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteReference(index)}
                              className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            {popupType === 'activity' && (
              <>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Title</label>
                  <input
                    type="text"
                    value={newActivity.title}
                    onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter activity title"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Start Date</label>
                  <input
                    type="date"
                    value={newActivity.startDate}
                    onChange={(e) => setNewActivity({ ...newActivity, startDate: e.target.value })}
                    className="mt-1 p-2 block w-full text-black border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">End Date</label>
                  <input
                    type="date"
                    value={newActivity.endDate}
                    onChange={(e) => setNewActivity({ ...newActivity, endDate: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Description</label>
                  <textarea
                    value={newActivity.description}
                    onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter activity description"
                  />
                </div>
                {activities.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-lg text-black font-semibold mb-2">Activities List</h2>
                    <ul className="divide-y divide-black-200">
                      {activities.map((activity, index) => (
                        <li key={index} className="py-2 flex justify-between items-center">
                          <div>
                            <p className="text-sm text-black font-medium">{activity.title}</p>
                                    </div>
                          <div>
                            <button
                              onClick={() => handleEditActivity(index)}
                              className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteActivity(index)}
                              className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            {popupType === 'hobby' && (
              <>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Hobby</label>
                  <input
                    type="text"
                    value={newHobby}
                    onChange={(e) => setNewHobby(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter hobby"
                  />
                </div>
                {hobbies.length > 0 && (
        <div className="hobbies-list">
          <h2 className="text-lg font-semibold">Hobbies List</h2>
          <ul className="divide-y divide-black-200">
            {hobbies.map((hobby, index) => (
              <li key={index} className="py-2 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{hobby.hobby}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleEditHobby(index)}
                    className="button-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteHobby(index)}
                    className="button-delete"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )}
            {popupType === 'customSection' && (
              <>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Title</label>
                  <input
                    type="text"
                    value={newCustomSection.title}
                    onChange={(e) => setNewCustomSection({ ...newCustomSection, title: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter custom section title"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Start Date</label>
                  <input
                    type="date"
                    value={newCustomSection.startDate}
                    onChange={(e) => setNewCustomSection({ ...newCustomSection, startDate: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">End Date</label>
                  <input
                    type="date"
                    value={newCustomSection.endDate}
                    onChange={(e) => setNewCustomSection({ ...newCustomSection, endDate: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lr font-medium text-black">Description</label>
                  <textarea
                    value={newCustomSection.description}
                    onChange={(e) => setNewCustomSection({ ...newCustomSection, description: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                    placeholder="Enter custom section description"
                  />
                </div>
                {customSections.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-lg text-black font-semibold mb-2">Custom Sections List</h2>
                    <ul className="divide-y divide-gray-200">
                      {customSections.map((customSection, index) => (
                        <li key={index} className="py-2 flex justify-between items-center">
                          <div>
                            <p className="text-sm text-black font-medium">{customSection.title}</p>
                               </div>
                          <div>
                            <button
                              onClick={() => handleEditCustomSection(index)}
                              className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteCustomSection(index)}
                              className="py-1 px-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>

);
}