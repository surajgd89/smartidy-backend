import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import isRegEmailReducer from '../features/user/isRegistredUserSlice';

export const store = configureStore({
   reducer: {
      idyUser: userReducer,
      isRegistredUser: isRegEmailReducer,
   }
})
export default store;