import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_USER_URL = 'http://localhost:4000/IdyUser/RegistredUser';

//CHECK IS REGISTER USER
export const RegistredUser = createAsyncThunk('IdyUser/RegistredUser', async (searchQuery) => {
   try {
      const res = await axios.get(`${API_USER_URL}${searchQuery}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to RegistredUser');
   }
});

//ACTIONS
const RegistredUserSlice = createSlice({
   name: 'RegistredUser',
   initialState: {
      data: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         //CHECK IS REGISTER USER
         .addCase(RegistredUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(RegistredUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
         })
         .addCase(RegistredUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })

   },
});

export default RegistredUserSlice.reducer;