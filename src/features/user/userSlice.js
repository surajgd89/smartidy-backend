import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_USER_URL = 'http://localhost:3000/user';


//FETCH User
export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
   try {
      const response = await axios.get(`${API_USER_URL}`);
      return response.data;
   } catch (error) {
      throw Error(error.response.data.error);
   }
});

//CREATE User
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
   try {
      const response = await axios.post(API_USER_URL, userData);
      return response.data;
   } catch (error) {
      throw Error(error.response.data.error);
   }
});

//UPDATE User
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, userData }) => {
   try {
      const response = await axios.put(`${API_USER_URL}/${id}`, userData);
      return response.data;
   } catch (error) {
      throw Error(error.response.data.error);
   }
});


//DELETE User
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


         //FETCH 
         .addCase(fetchUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(fetchUser.rejected, (state, action) => {
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