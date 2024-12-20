import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStudents } from "../../store/studentsSlice";
import supabase from "../utils/supabase";

const StudentsTable = () => {
  const students = useSelector((state) => state.students.students); // Access state
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase.from("Student").select("*");
      if (error) {
        console.error("Error fetching students:", error);
      } else {
        dispatch(setStudents(data)); // Update Redux state
      }
    };

    fetchStudents();
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);  // Format to "17 Nov. 2024"
  };
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // 12-hour format
    };
  
    // Format date and time using toLocaleString
    let formattedDate = date.toLocaleString('en-GB', options);
  
    // Manually convert AM/PM to uppercase if necessary
    formattedDate = formattedDate.replace(/(am|pm)/i, (match) => match.toUpperCase());
  
    return formattedDate;  // This will return the date and time with AM/PM in uppercase
  };
  

  return (
    <table className="w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border-b text-left">Student Name</th>
          <th className="px-4 py-2 border-b text-left">Cohort</th>
          <th className="px-4 py-2 border-b text-left">Courses</th>
          <th className="px-4 py-2 border-b text-left">Date Joined</th>
          <th className="px-4 py-2 border-b text-left">Last Login</th>
          <th className="px-4 py-2 border-b text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {students && students.length > 0 ? (
          students.map((student, index) => {
            if (!student) return null; // Ensure student exists

            return (
              <tr key={index} className="hover:bg-gray-50 items-center gap-1">
                <td className="px-4 py-2 border-b">{student.studentName}</td>
                <td className="px-4 py-2 border-b">{student.cohort}</td>
                <td className="px-4 py-2 border-b">
                  <div className="flex flex-wrap gap-4">
                    {student.courses.map((course, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-slate-100 px-1.5 py-1.5 rounded-md"
                      >
                        {i % 2 === 0 ? (
                          <img src="/st2.jpg" alt="" className="h-5 w-5" />
                        ) : (
                          <img src="/st1.png" alt="" className="h-5 w-5" />
                        )}
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2 border-b">{formatDate(student.dateJoined)}</td>
                <td className="px-4 py-2 border-b">{formatDateTime(student.lastLogin)}</td>
                <td className="px-8 py-2 border-b">
                  <span
                    className={`inline-block h-3 w-3 rounded-full ${
                      student.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                    title={student.status}
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="6" className="text-center py-4">
              No students available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StudentsTable;
