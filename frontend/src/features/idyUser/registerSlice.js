import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_REGISTRED_USER_URL = 'http://localhost:4000/idyUser/registerRequest';

export const registerRequest = createAsyncThunk('registerRequest', async (query) => {
   try {
      const res = await axios.get(`${API_REGISTRED_USER_URL}${query}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to registerRequest');
   }
});

const registerSlice = createSlice({
   name: 'registerRequest',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(registerRequest.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerRequest.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(registerRequest.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default registerSlice.reducer;

