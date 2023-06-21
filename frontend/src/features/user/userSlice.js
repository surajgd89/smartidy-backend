import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const serverError = {}

const API_USER_URL = 'http://localhost:4000/user';

//SEARCH USER
export const searchUser = createAsyncThunk('user/search', async (searchQuery) => {
   if (searchQuery !== undefined) {
      try {
         const response = await axios.get(`${API_USER_URL}${searchQuery}`);
         return response.data;
      } catch (error) {
         throw new Error('Failed to searchUser');
      }
   }
});

//ID USER
export const getIdUser = createAsyncThunk('user/id', async (id) => {
   try {
      const response = await axios.get(`${API_USER_URL}/${id}`);
      return response.data;
   } catch (error) {
      throw new Error('Failed to idUser');
   }
});

//GET USER
export const getUser = createAsyncThunk('user/get', async () => {
   try {
      const response = await axios.get(API_USER_URL);
      return response.data;
   } catch (error) {
      throw new Error('Failed to getUser');
   }
});

//CREATE USER
export const createUser = createAsyncThunk('user/create', async (userData) => {
   try {
      const response = await axios.post(`${API_USER_URL}`, userData);
      return response.data;
   } catch (error) {
      if (error.response && error.response.data.error === 'Email is already registered') {
         throw new Error('Email is already registered');
      } else {
         throw new Error('Failed to createUser');
      }
   }
});

//UPDATE USER
export const updateUser = createAsyncThunk('user/update', async (userData) => {
   const id = userData._id;
   try {
      const response = await axios.put(`${API_USER_URL}/${id}`, userData);
      if (response.data.token) {
         sessionStorage.setItem("token", response.data.token)
      }
      return response.data;
   } catch (error) {
      throw new Error('Failed to updateUser');
   }
});

//DELETE USER
export const deleteUser = createAsyncThunk('user/delete', async (id) => {
   try {
      await axios.delete(`${API_USER_URL}/${id}`);
      return id;
   } catch (error) {
      throw new Error('Failed to deleteUser');
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


         //SEARCH 
         .addCase(searchUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(searchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(searchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })



         //ID USER 
         .addCase(getIdUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getIdUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getIdUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


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


         //DELETE 
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

export default userSlice.reducer;