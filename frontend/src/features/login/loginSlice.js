import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_LOGIN_URL = 'http://localhost:4000/login';


//SEARCH USER
export const searchLoginUser = createAsyncThunk('login/search', async (searchQuery) => {
   if (searchQuery !== undefined) {
      try {
         const response = await axios.get(`${API_LOGIN_URL}${searchQuery}`);
         return response.data;
      } catch (error) {
         throw Error('Failed to searchLoginUser');
      }
   }
});

//GET USER
export const getLoginUser = createAsyncThunk('login/get', async () => {
   try {
      const response = await axios.get(API_LOGIN_URL);
      return response.data;
   } catch (error) {
      throw Error('Failed to getLoginUser');
   }
});

//CREATE USER
export const createLoginUser = createAsyncThunk('login/create', async (userData) => {
   try {
      const response = await axios.post(API_LOGIN_URL, userData);
      return response.data;
   } catch (error) {
      throw Error('Failed to createLoginUser');
   }
});

//UPDATE USER
export const updateLoginUser = createAsyncThunk('login/update', async (userData) => {
   const id = userData._id;
   try {
      const response = await axios.put(`${API_LOGIN_URL}/${id}`, userData);
      return response.data;
   } catch (error) {
      throw Error('Failed to updateLoginUser');
   }
});

//DELETE USER
export const deleteLoginUser = createAsyncThunk('login/delete', async (id) => {
   try {
      await axios.delete(`${API_LOGIN_URL}/${id}`);
      return id;
   } catch (error) {
      throw Error('Failed to deleteLoginUser');
   }
});

//ACTIONS
const loginSlice = createSlice({
   name: 'login',
   initialState: {
      data: [],
      loading: false,
      error: null,
   },

   reducers: {},
   extraReducers: builder => {
      builder
         //SEARCH 
         .addCase(searchLoginUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(searchLoginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(searchLoginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //GET 
         .addCase(getLoginUser.pending, state => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getLoginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getLoginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //CREATE 
         .addCase(createLoginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(createLoginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
         })
         .addCase(createLoginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //UPDATE 
         .addCase(updateLoginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })

         .addCase(updateLoginUser.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            const index = state.data.findIndex(user => user._id === updatedUser._id);
            if (index !== -1) {
               state.data[index] = updatedUser;
            }
            state.loading = false;
         })

         .addCase(updateLoginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })


         //DELETE 
         .addCase(deleteLoginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(deleteLoginUser.fulfilled, (state, action) => {
            const id = action.payload;
            state.data = state.data.filter((user) => user.id !== id);
            state.loading = false;
         })
         .addCase(deleteLoginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });


   },
});

export default loginSlice.reducer;