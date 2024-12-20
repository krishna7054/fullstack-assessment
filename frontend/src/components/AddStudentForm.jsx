import { useState } from 'react';
import supabase from '../utils/supabase';
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/studentsSlice";

export default function AddStudentForm({ isOpen, onClose, onSubmit }) {
  const [studentName, setStudentName] = useState('');
  const [selectedCohort, setSelectedCohort] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [joiningDate, setJoiningDate] = useState(''); // New state for joining date
  const [errormessage, setErrorMessage]=useState('');

  const coursesByClass = {
    'CBSE 9': ['CBSE9 Math', 'CBSE9 Science', 'CBSE9 Social Studies', 'CBSE9 English'],
    'CBSE 11': ['CBSE11 Physics', 'CBSE11 Chemistry', 'CBSE11 Biology', 'CBSE11 Computer Science'],
  };

  if (!isOpen) return null;

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubjects([]); // Reset subjects when class changes
  };

  const handleSubjectToggle = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleCohortChange = (e) => {
    setSelectedCohort(e.target.value); // Set selected cohort
  };

  const handleJoiningDateChange = (e) => {
    setJoiningDate(e.target.value); // Set joining date
  };

 

// Inside the AddStudentForm Component:
const dispatch = useDispatch();

const handleSubmit = async (e) => {
  e.preventDefault();
  const studentData = {
    studentName: studentName,
    cohort: selectedCohort,
    courses: selectedSubjects,
    dateJoined: joiningDate,
  };

  try {
    // Insert student data into Supabase
    const { data, error } = await supabase.from("Student").insert([studentData]);
    dispatch(addStudent(data));
    

    if (error) {
      // If there is an error, set the errorMessage and return early
      console.error("Error inserting data:", error.message);
      setErrorMessage("Failed to add student. Please try again."); // Set error message
      return; // Stop further execution
    }

    // If successful, clear any previous error message
    setErrorMessage("");

    // Dispatch to Redux
    
    alert("Student added successfully!");
     // Update Redux state with the new student
    

    // Reset form fields
    setStudentName("");
    setSelectedCohort("");
    setSelectedClass("");
    setSelectedSubjects([]);
    setJoiningDate("");
    onClose();
  
    // Close the form after submission
    
  } catch (error) {
    // Catch unexpected errors
    console.error("Unexpected error:", error);
    setErrorMessage("An unexpected error occurred. Please try again.");
  }
};



  return (
    <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 -mt-96 lg:pt-96">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Add New Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="name">
              Student Name
            </label>
            <input
              id="StudentName"
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter student's name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>

          {/* Cohort */}
          <div>
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="cohort">
              Cohort
            </label>
            <select
              id="cohort"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              value={selectedCohort}
              onChange={handleCohortChange}
              required
            >
              <option value="" disabled>
                Select cohort
              </option>
              <option value="AY 2024-25">AY 2024-25</option>
              <option value="AY 2023-24">AY 2023-24</option>
              <option value="AY 2022-23">AY 2022-23</option>
            </select>
          </div>

          {/* Class */}
          <div>
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="class">
              Class
            </label>
            <select
              id="class"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              value={selectedClass}
              onChange={handleClassChange}
              required
            >
              <option value="" disabled>
                Select Class
              </option>
              <option value="CBSE 9">CBSE 9</option>
              <option value="CBSE 11">CBSE 11</option>
            </select>
          </div>

          {/* Subjects */}
          {selectedClass && (
            <div>
              <label className="block text-gray-700 text-sm md:text-base font-bold mb-2">Subjects</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coursesByClass[selectedClass]?.map((subject, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      id={`subject-${index}`}
                      type="checkbox"
                      value={subject}
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => handleSubjectToggle(subject)}
                      className="mr-2"
                    />
                    <label htmlFor={`subject-${index}`} className="text-gray-700">
                      {subject}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Subjects Display */}
          {selectedSubjects.length > 0 && (
            <div>
              <label className="block text-gray-700 text-sm md:text-base font-bold mb-2">Selected Subjects</label>
              <div className="border px-3 py-2 rounded-lg shadow-sm">
                {selectedSubjects.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded inline-block"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Joining Date */}
          <div>
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="joiningDate">
              Joining Date
            </label>
            <input
              id="joiningDate"
              type="date"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              value={joiningDate}
              onChange={handleJoiningDateChange}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button onClick={()=>window.location.reload(false)}
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
