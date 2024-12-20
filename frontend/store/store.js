import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../store/studentsSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
