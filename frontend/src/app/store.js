import { configureStore } from "@reduxjs/toolkit";
import IdyUserReducer from '../features/IdyUser/IdyUserSlice';
import RegistredUserReducer from '../features/IdyUser/RegistredUserSlice';
import LoggedUserReducer from '../features/IdyUser/LoggedUserSlice';

export const store = configureStore({
   reducer: {
      IdyUser: IdyUserReducer,
      RegistredUser: RegistredUserReducer,
      LoggedUser: LoggedUserReducer,
   }
})
export default store;