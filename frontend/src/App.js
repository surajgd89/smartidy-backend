import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import ResetPassword from './pages/reset-password/ResetPassword';
import ChangePassword from './pages/change-password/ChangePassword';
import Create from './pages/create/Create';
import OneTimePassCode from './pages/otp/OneTimePassword';
import Footer from './components/footer/Footer';
import Protected from './components/protected/Protected'
import './App.scss';

import { getUser } from "./features/idyUser/userSlice";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const logIn = (id) => {
    goLogin(id)
    setIsLoggedIn(true);
  }

  const goLogin = (id) => {
    dispatch(getUser(id));
  }

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.clear()
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header isLoggedIn={isLoggedIn} logOut={logOut} />
        <div className='content-sec'>
          <div className="container-fluid">
            <div className="container">
              <Routes>
                <Route path="/change-password" element={
                  <Protected isLoggedIn={isLoggedIn}>
                    <ChangePassword />
                  </Protected>
                } />
                <Route path="/create" element={
                  <Protected isLoggedIn={isLoggedIn}>
                    <Create />
                  </Protected>
                } />
                <Route index element={<Login logIn={logIn} />} />
                <Route path="/login" element={<Login logIn={logIn} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/otp" element={<OneTimePassCode />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
