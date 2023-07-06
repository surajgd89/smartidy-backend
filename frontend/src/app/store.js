import { configureStore } from "@reduxjs/toolkit";
import IdyUserReducer from '../features/IdyUser/IdyUserSlice';
import RegistredUserReducer from '../features/IdyUser/registredUserSlice';

export const store = configureStore({
   reducer: {
      IdyUser: IdyUserReducer,
      RegistredUser: RegistredUserReducer,
   }
})
export default store;