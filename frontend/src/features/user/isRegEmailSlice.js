import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_USER_URL = 'http://localhost:4000/user/checkEmail';


//CHECK REGD EMAIL
export const checkRegdEmail = createAsyncThunk('user/checkRegdEmail', async (email) => {
   try {
      const res = await axios.get(`${API_USER_URL}?individual.email=${email}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to checkRegdEmail');
   }
});


//ACTIONS
const isRegEmailSlice = createSlice({
   name: 'isReg',
   initialState: {
      data: false,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder

         //CHECK REGD EMAIL
         .addCase(checkRegdEmail.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(checkRegdEmail.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(checkRegdEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


   },
});

export default isRegEmailSlice.reducer;