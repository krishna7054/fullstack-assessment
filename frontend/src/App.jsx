import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import StudentsTable from './components/StudentsTable'
import DropdownHoverYear from './components/DropdownHoverYear'
import DropdownHoverClass from './components/DropdownHoverClass'
import AddStudentForm from './components/AddStudentForm'



function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  const handleFormSubmit = (e) => {
    // e.preventDefault()
    console.log('Form submitted!')
    setIsFormOpen(false) // Close the form after submission
  }

  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr] relative">
      
      <Sidebar />
      <div className="flex flex-col relative">
        <Header />
        <main className="flex-1 p-6 bg-white mx-5 my-5 rounded-xl">
          <div className="flex items-center justify-between mb-6 relative">
            <div className="flex gap-4 relative">
              <DropdownHoverYear />
              <DropdownHoverClass />
            </div>

            <button
              onClick={toggleForm}
              className="flex items-center px-4 py-1.5 bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 text-black font-semibold text-lg rounded-lg shadow-2xl hover:from-gray-400 hover:via-gray-400 hover:to-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-70 active:bg-gray-800 active:shadow-inner transform transition duration-500 ease-in-out ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-8 h-8 mr-4 -ml-2 text-black animate-pulse"
              >
                <path
                  d="M12 4v16m8-8H4"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              Add new Student
            </button>
          </div>

          <div className="relative">
            <StudentsTable />
          </div>

          {/* AddStudentForm Component */}
          <AddStudentForm
            isOpen={isFormOpen}
            onClose={toggleForm}
            onSubmit={handleFormSubmit}
          />
        </main>
      </div>
    </div>
  )
}

export default App;
