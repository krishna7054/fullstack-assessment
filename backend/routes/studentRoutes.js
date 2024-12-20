// routes/studentRoutes.js
const express = require('express');
const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
} = require('../controllers/studentController');

const router = express.Router();

// Define CRUD routes
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
