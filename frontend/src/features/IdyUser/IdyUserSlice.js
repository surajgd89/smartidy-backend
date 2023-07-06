import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_USER_URL = 'http://localhost:4000/IdyUser';


//GET USERS
export const getUsers = createAsyncThunk('getUsers', async () => {
   try {
      const res = await axios.get(API_USER_URL);
      return res.data;
   } catch (err) {
      throw new Error('Failed to getUsers');
   }
});

//GET USER
export const getUser = createAsyncThunk('getUser', async (id) => {
   try {
      const res = await axios.get(`${API_USER_URL}/${id}`);
      return res.data;
   } catch (err) {
      throw new Error('Failed to idUser');
   }
});

//CREATE USER
export const createUser = createAsyncThunk('createUser', async (req) => {
   try {
      const res = await axios.post(`${API_USER_URL}`, req);
      return res.data;
   } catch (err) {
      throw new Error('Failed to createUser');
   }
});

//UPDATE USER
export const updateUser = createAsyncThunk('updateUser', async (req) => {
   const id = req._id;
   try {
      const res = await axios.put(`${API_USER_URL}/${id}`, req);
      return res.data;
   } catch (err) {
      throw new Error('Failed to updateUser');
   }
});

//DELETE USER
export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
   try {
      await axios.delete(`${API_USER_URL}/${id}`);
      return id;
   } catch (err) {
      throw new Error('Failed to deleteUser');
   }
});

//IdyUserSlice ACTIONS
const IdyUserSlice = createSlice({
   name: 'IdyUser',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder

         //GET USERS 
         .addCase(getUsers.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //GET USER 
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


         //CREATE USER 
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


         //UPDATE USER
         .addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })

         .addCase(updateUser.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            const index = state.data.findIndex(user => user._id === updatedUser._id);
            if (index !== -1) {
               state.data[index] = updatedUser;
            }
            state.loading = false;
         })
         .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //DELETE USER
         .addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(deleteUser.fulfilled, (state, action) => {
            const deletedUser = action.payload;
            state.data = state.data.filter((user) => user._id !== deletedUser._id);
            state.loading = false;
         })
         .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });


   },
});

export default IdyUserSlice.reducer;




