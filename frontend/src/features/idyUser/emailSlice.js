import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_EMAIL_VERIFY_URL = 'http://localhost:4000/idyUser/verifyEmail';


export const verifyEmail = createAsyncThunk('verifyEmail', async (req) => {
   try {
      const res = await axios.post(`${API_EMAIL_VERIFY_URL}`, req);
      return res.data;
   } catch (err) {
      throw new Error('Failed to verifyEmail');
   }
});

const emailSlice = createSlice({
   name: 'verifyEmail',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(verifyEmail.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(verifyEmail.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(verifyEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default emailSlice.reducer;

