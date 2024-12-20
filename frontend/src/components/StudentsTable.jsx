import React, { useEffect, useState } from "react";
import { BookOpen, GraduationCap } from "lucide-react";
import supabase from "../utils/supabase";

// const students = [
//   {
//     name: "Anshuman Kashyap",
//     cohort: "AY 2024-25",
//     courses: ["CBSE 9 Science", "CBSE 9 Math"],
//     dateJoined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "active",
//   },
//   {
//     name: "Bansi Dadhaniya",
//     cohort: "AY 2024-25",
//     courses: ["CBSE 9 Science", "CBSE 9 Math"],
//     dateJoined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "active",
//   },
//   {
//     name: "Chandrika Valotia",
//     cohort: "AY 2024-25",
//     courses: ["CBSE 9 Science", "CBSE 9 Math"],
//     dateJoined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "inactive",
//   },
//   // ... other student data
// ];



const StudentsTable = () => {
  const [student,setStudent]=useState([]);
useEffect(()=>{
  const fetchStudnt=async()=>{
    const {data,error}=await supabase.from("Student").select("*");
    if(error){
      console.log("error",error);
      }else{
        console.log(data);
        setStudent(data);
      }
      };
  fetchStudnt();
},[]);


  return (
   
    <table className="min-w-full table-auto   ">
      <thead className="bg-gray-100">
        <tr >
          <th className="px-4 py-2 border-b text-left">Student Name</th>
          <th className="px-4 py-2 border-b text-left">Cohort</th>
          <th className="px-4 py-2 border-b text-left">Courses</th>
          <th className="px-4 py-2 border-b text-left">Date Joined</th>
          <th className="px-4 py-2 border-b text-left">Last Login</th>
          <th className="px-4 py-2 border-b text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {student.map((student, index) => (
          <tr key={index} className="hover:bg-gray-50 ">
            <td className="px-4 py-2 border-b ">{student.studentName}</td>
            <td className="px-4 py-2 border-b">{student.cohort}</td>
            <td className="px-4 py-2 border-b font-medium">
              <div className="flex flex-wrap gap-4 ">
                {student.courses.map((course, i) => (
                  <div key={i} className="flex items-center gap-1 bg-slate-100 px-1.5 py-1.5 rounded-md">
                    {course.includes("Science") ? (
                    //   <BookOpen className="h-4 w-4 text-gray-600" />
                    <img src="src\assets\st2.jpg" alt="" className="h-5 w-5" />
                      
                    ) : (
                    //   <GraduationCap className="h-4 w-4 text-gray-600" />
                    
                    <img src="src\assets\st1.png" alt="" className="h-5 w-5" />
                    )}
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </td>
            <td className="px-4 py-2 border-b">{student.dateJoined}</td>
            <td className="px-4 py-2 border-b ">{student.lastLogin}</td>
            <td className="px-4 py-2 border-b ">
              <span
                className={`inline-block h-3 w-3 rounded-full ${
                  student.status === "Active" ? "bg-green-500" : "bg-red-500"
                }`}
                title={student.status}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
