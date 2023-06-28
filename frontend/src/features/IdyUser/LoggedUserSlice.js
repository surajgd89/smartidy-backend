import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_USER_URL = 'http://localhost:4000/IdyUser/LoggedUser';

//CHECK IS LOGGED USER
export const LoggedUser = createAsyncThunk('IdyUser/LoggedUser', async (searchQuery) => {
   try {
      const res = await axios.get(`${API_USER_URL}${searchQuery}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to LoggedUser');
   }
});


//ACTIONS
const LoggedUserSlice = createSlice({
   name: 'LoggedUser',
   initialState: {
      data: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder

         //CHECK IS LOGGED USER
         .addCase(LoggedUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(LoggedUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
         })
         .addCase(LoggedUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })

   },
});

export default LoggedUserSlice.reducer;