import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_REGISTER_URL = 'http://localhost:4000/register';

//SEARCH USER
export const searchRegisterUser = createAsyncThunk('register/search', async (searchQuery) => {
   if (searchQuery !== undefined) {
      try {
         const response = await axios.get(`${API_REGISTER_URL}${searchQuery}`);
         return response.data;
      } catch (error) {
         throw Error('Failed to searchRegisterUser');
      }
   }
});

//GET USER
export const getRegisterUser = createAsyncThunk('register/get', async () => {
   try {
      const response = await axios.get(API_REGISTER_URL);
      return response.data;
   } catch (error) {
      throw Error('Failed to getRegisterUser');
   }
});

//CREATE USER
export const createRegisterUser = createAsyncThunk('register/create', async (userData) => {
   try {
      const response = await axios.post(API_REGISTER_URL, userData);
      return response.data;
   } catch (error) {
      throw Error('Failed to createRegisterUser');
   }
});

//UPDATE USER
export const updateRegisterUser = createAsyncThunk('register/update', async (userData) => {
   const id = userData._id;
   try {
      const response = await axios.put(`${API_REGISTER_URL}/${id}`, userData);
      return response.data;
   } catch (error) {
      throw Error('Failed to updateRegisterUser');
   }
});

//DELETE USER
export const deleteRegisterUser = createAsyncThunk('register/delete', async (id) => {
   try {
      await axios.delete(`${API_REGISTER_URL}/${id}`);
      return id;
   } catch (error) {
      throw Error('Failed to deleteRegisterUser');
   }
});

//ACTIONS
const registerSlice = createSlice({
   name: 'register',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },

   reducers: {},
   extraReducers: builder => {
      builder

         //SEARCH 
         .addCase(searchRegisterUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(searchRegisterUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(searchRegisterUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //GET 
         .addCase(getRegisterUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getRegisterUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getRegisterUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //CREATE 
         .addCase(createRegisterUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(createRegisterUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
         })
         .addCase(createRegisterUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //UPDATE 
         .addCase(updateRegisterUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })

         .addCase(updateRegisterUser.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            const index = state.data.findIndex(user => user._id === updatedUser._id);
            if (index !== -1) {
               state.data[index] = updatedUser;
            }
            state.loading = false;
         })

         .addCase(updateRegisterUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //DELETE 
         .addCase(deleteRegisterUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(deleteRegisterUser.fulfilled, (state, action) => {
            const id = action.payload;
            state.data = state.data.filter((user) => user.id !== id);
            state.loading = false;
         })
         .addCase(deleteRegisterUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });


   },
});

export default registerSlice.reducer;