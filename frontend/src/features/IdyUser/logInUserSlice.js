import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_LOGIN_USER_URL = 'http://localhost:4000/idyUser/logInUser';

//LOGIN USER
export const logInUser = createAsyncThunk('logInUser', async (req) => {
   try {
      const res = await axios.post(`${API_LOGIN_USER_URL}`, req);
      return res.data;
   } catch (err) {
      throw new Error('Failed to logInUser');
   }
});

//IdyLogInUser ACTIONS
const logInUserSlice = createSlice({
   name: 'logInUser',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         //LOGIN USER
         .addCase(logInUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(logInUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(logInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default logInUserSlice.reducer;

