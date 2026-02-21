import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  birthDate: null,
  meetingTime: null,
};

const reducers = {
  setName: (state, action) => {
    state.name = action.payload;
  },
  setEmail: (state, action) => {
    state.email = action.payload;
  },
  setBirthDate: (state, action) => {
    state.birthDate = action.payload ? action.payload.toISOString() : null;
  },
  setMeetingTime: (state, action) => {
    state.meetingTime = action.payload ? action.payload.toISOString() : null;
  },
  resetForm: () => initialState,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers,
});

export const { setName, setEmail, setBirthDate, setMeetingTime, resetForm } = formSlice.actions;
export default formSlice.reducer;
