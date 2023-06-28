import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_USER_URL = 'http://localhost:4000/user/isRegistredUser';

//CHECK REGD EMAIL
export const isRegistredUser = createAsyncThunk('user/isRegistredUser', async (email) => {
   try {
      const res = await axios.get(`${API_USER_URL}?individual.email=${email}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to isRegistredUser');
   }
});


//ACTIONS
const isRegistredUserSlice = createSlice({
   name: 'isReg',
   initialState: {
      data: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder

         //CHECK REGD EMAIL
         .addCase(isRegistredUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(isRegistredUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
         })
         .addCase(isRegistredUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


   },
});

export default isRegistredUserSlice.reducer;