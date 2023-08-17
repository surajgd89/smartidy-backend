import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_RESET_PASSWORD_URL = 'http://localhost:4000/idyUser/resetPassword';


export const resetPassword = createAsyncThunk('resetPassword', async (req) => {
   try {
      const res = await axios.post(`${API_RESET_PASSWORD_URL}`, req);
      return res.data;
   } catch (err) {
      throw new Error('Failed to resetPassword');
   }
});

const resetPasswordSlice = createSlice({
   name: 'resetPassword',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(resetPassword.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default resetPasswordSlice.reducer;

