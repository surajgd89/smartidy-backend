import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_LOGIN_USER_URL = 'http://localhost:4000/idyUser/loginRequest';


export const loginRequest = createAsyncThunk('loginRequest', async (req) => {
   try {
      const res = await axios.post(`${API_LOGIN_USER_URL}`, req);
      return res.data;
   } catch (err) {
      throw new Error('Failed to loginRequest');
   }
});


const loginSlice = createSlice({
   name: 'loginRequest',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(loginRequest.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(loginRequest.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(loginRequest.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default loginSlice.reducer;

