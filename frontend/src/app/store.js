import { configureStore } from "@reduxjs/toolkit";
import idyUserReducer from '../features/idyUser/idyUserSlice';
import registredUserReducer from '../features/idyUser/registredUserSlice';
import logInUserReducer from '../features/idyUser/logInUserSlice';

export const store = configureStore({
   reducer: {
      idyUser: idyUserReducer,
      registredUser: registredUserReducer,
      logInUser: logInUserReducer,
   }
})
export default store;