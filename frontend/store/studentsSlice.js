import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: { students: [] },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload); // Add the new student
    },
  },
});

export const { addStudent, setStudents } = studentSlice.actions;
export default studentSlice.reducer;
