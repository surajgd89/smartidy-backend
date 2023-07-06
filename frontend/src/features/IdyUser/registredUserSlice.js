import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_REGISTRED_USER_URL = 'http://localhost:4000/IdyUser/registredUser';

//GET REGISTRED USER
export const getRegistredUser = createAsyncThunk('getRegistredUser', async (searchQuery) => {
   try {
      const res = await axios.get(`${API_REGISTRED_USER_URL}${searchQuery}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to getRegistredUser');
   }
});

//IdyUserSlice ACTIONS
const registredUserSlice = createSlice({
   name: 'IdyRegistredUser',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         //GET REGISTRED USER
         .addCase(getRegistredUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getRegistredUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getRegistredUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default registredUserSlice.reducer;

