const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();  // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());  // For parsing JSON bodies

// Register student-related routes
app.use('/api/students', studentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
