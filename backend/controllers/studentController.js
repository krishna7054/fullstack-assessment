// controllers/studentController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new student
const createStudent = async (req, res) => {
  const { studentName, cohort, courses, dateJoined, lastLogin, status } = req.body;

  try {
    const student = await prisma.student.create({
      data: {
        studentName: studentName,
        cohort,
        courses,
        dateJoined: new Date(dateJoined),
        lastLogin: new Date(lastLogin),
        status,
      },
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await prisma.student.findUnique({
      where: { id: parseInt(id) },
    });
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update student
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { student_name, cohort, courses, date_joined, last_login, status } = req.body;

  try {
    const updatedStudent = await prisma.student.update({
      where: { id: parseInt(id) },
      data: {
        studentName: student_name,
        cohort,
        courses,
        dateJoined: new Date(date_joined),
        lastLogin: new Date(last_login),
        status,
      },
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await prisma.student.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
