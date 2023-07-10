import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_REGISTRED_USER_URL = 'http://localhost:4000/idyUser/registredUser';

//GET REGISTRED USER
export const registredUser = createAsyncThunk('registredUser', async (searchQuery) => {
   try {
      const res = await axios.get(`${API_REGISTRED_USER_URL}${searchQuery}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to registredUser');
   }
});

//IdyRegistredUser ACTIONS
const registredUserSlice = createSlice({
   name: 'registredUser',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder
         //REGISTRED USER
         .addCase(registredUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registredUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(registredUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default registredUserSlice.reducer;

