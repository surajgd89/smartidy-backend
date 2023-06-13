import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_USER_URL = 'http://localhost:4000/user';

//GET USER
export const getUser = createAsyncThunk('users/getUser', async (searchQuery) => {

   if (searchQuery) {
      try {
         const response = await axios.get(`${API_USER_URL}${searchQuery}`);
         return response.data;
      } catch (error) {
         throw Error(error.response.data.error);
      }
   } else {
      try {
         const response = await axios.get(`${API_USER_URL}`);
         return response.data;
      } catch (error) {
         throw Error(error.response.data.error);
      }
   }


});

//CREATE USERS
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
   try {
      const response = await axios.post(API_USER_URL, userData);
      return response.data;
   } catch (error) {
      throw Error(error.response.data.error);
   }
});

//UPDATE USERS
export const updateUser = createAsyncThunk('users/updateUser', async (userData) => {
   try {
      const response = await axios.patch(`${API_USER_URL}/${userData._id}`, userData);
      return response.data;
   } catch (error) {
      throw Error(error.response.data.error);
   }
});


//DELETE USERS
export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
   try {
      await axios.delete(`${API_USER_URL}/${id}`);
      return id;
   } catch (error) {
      throw Error(error.response.data.error);
   }
});


//ACTIONS
const userSlice = createSlice({
   name: 'user',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },

   reducers: {},
   extraReducers: builder => {
      builder


         //GET 
         .addCase(getUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //CREATE 
         .addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
         })
         .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //UPDATE 
         .addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(updateUser.fulfilled, (state, action) => {
            const updateUserData = action.payload;
            const index = state.data.findIndex((user) => user.id === updateUserData.id);
            if (index !== -1) {
               state.data[index] = updateUserData;
            }
            state.loading = false;
         })
         .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //DELETE 
         .addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(deleteUser.fulfilled, (state, action) => {
            const id = action.payload;
            state.data = state.data.filter((user) => user.id !== id);
            state.loading = false;
         })
         .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });


   },
});

export default userSlice.reducer;