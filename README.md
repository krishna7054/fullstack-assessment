# Student Management System

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Frontend Installation Steps](#frontend-installation-steps)
- [Backend Installation Steps](#backend-installation-steps)
- [Usage Instructions](#usage-instructions)
- [Preview](#preview)


---

## Overview
The Student Management System is a modern web-based solution designed to streamline the process of managing student information. With features for adding, viewing, and organizing student details, this system is built to ensure optimal performance and scalability. The project combines a React.js frontend with a robust Node.js backend powered by PostgreSQL, Prisma ORM, and Supabase.

---

## Features
- Effortlessly add, edit, and view student details.
- Real-time updates using Redux for state management.
- Elegant and consistent date formatting using Tailwind CSS.
- Secure and scalable backend architecture leveraging PostgreSQL and Prisma ORM.

---

## Technologies Used
### Frontend:
- **React.js**: For building the user interface.
- **Redux Toolkit**: For managing application state.
- **Tailwind CSS**: For styling and design.
- **React Router**: For handling routing.

### Backend:
- **Node.js**: For building server-side functionality.
- **PostgreSQL**: As the relational database.
- **Prisma ORM**: For efficient database management.
- **Supabase**: For real-time database operations and APIs.

---

## Frontend Installation Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/krishna7054/fullstack-assessment.git
   cd fullstack-assessment/frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Environment Variables**
   Create a `.env` file in the `frontend` folder with the following:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_KEY=your_supabase_key
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`.

---

## Backend Installation Steps
1. **Navigate to Backend Directory**
   ```bash
   cd your-repo-folder/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Supabase**
   - Create a project on [Supabase](https://supabase.com/).

4. **Set Up PostgreSQL Database**
   - Install PostgreSQL on your system if not already installed.
     ```sql
     npm install prisma @prisma/client
      npx prisma init
     ```

5. **Configure Prisma**
   - Update the `prisma/schema.prisma` file with your database connection string:
     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }
     ```
   - Add the connection string in a `.env` file in the backend directory:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/student_management
     ```

6. **Run Migrations**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

7. **Seed the Database (Optional)**
   ```bash
   npx prisma db seed
   ```

7. **Update the `.env` file with your Supabase credentials**
     ```env
     SUPABASE_URL=your_supabase_url
     SUPABASE_KEY=your_supabase_key
     ```

8. **Start the Backend Server**
   ```bash
   node server.js
   ```

---

## Usage Instructions
1. **Start the Backend Server**
   Navigate to the `backend` directory and run:
   ```bash
   node server.js
   ```

2. **Start the Frontend Development Server**
   Navigate to the `frontend` directory and run:
   ```bash
   npm run dev
   ```

3. **Access the Application**
   Open your browser and go to `http://localhost:3000` to interact with the system.

---

## Preview
<p>
   <img src="https://github.com/user-attachments/assets/f0858017-cff7-4d33-9302-3c6ecb33e43b" width=45% height = 300>
 <img src="https://github.com/user-attachments/assets/615ff42d-af31-4d26-aecc-13d33e97cbc2" width=45% height = 300>

</p>

---

