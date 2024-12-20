import { useState } from 'react';
import supabase from '../utils/supabase';

export default function AddStudentForm({ isOpen, onClose, onSubmit }) {
  const [studentName, setStudentName] = useState('');
  const [selectedCohort, setSelectedCohort] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [joiningDate, setJoiningDate] = useState(''); // New state for joining date
  

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const studentData = {
      studentName: studentName,
      cohort: selectedCohort, // Adjust the column names as per your table
    
    courses:selectedSubjects,
    dateJoined:joiningDate, // Add joining date to the data
    };
    try {
      const { data, error } = await supabase.from('Student').insert([studentData]);
  
      if (error) {
        console.error('Error inserting data:', error.message);
        alert('Failed to add student. Please try again.');
      } else {
        alert('Student added successfully!');
        onSubmit(data); // Optionally pass the data back to the parent
        setStudentName('');
        setSelectedCohort('');
        setSelectedClass('');
        setSelectedSubjects([]);
        setJoiningDate('');
        onClose(); // Close the form
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          {/* Student Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Student Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter student's name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>

          {/* Cohort */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cohort">
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
              <option value="2024-25">AY 2024-25</option>
              <option value="2023-24">AY 2023-24</option>
              <option value="2022-23">AY 2022-23</option>
            </select>
          </div>

          {/* Class */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Subjects
              </label>
              <div className="grid grid-cols-2">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Selected Subjects
              </label>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="joiningDate">
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
