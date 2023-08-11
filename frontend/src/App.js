import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import IsSession from './components/is-session/IsSession'
import './App.scss';

import { getUser } from "./features/idyUser/userSlice";
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const user = useSelector(state => state.idyUser.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [forgotOtp, setForgotOtp] = useState(false);
  const [registerOtp, setRegisterOtp] = useState(false);

  const isSendOtp = sessionStorage.getItem('isSendOtp');


  const logIn = (pathname, id) => {
    dispatch(getUser(id));
    setIsLoggedIn(true);
    navigate(pathname);
  }

  const logOut = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  }

  useEffect(() => {
    sessionStorage.setItem('isSendOtp', false);
    const token = sessionStorage.getItem('token');
    if (token) {
      logIn(pathname, user._id);
    }
  }, []);



  return (

    <div className="wrapper">
      <Header isLoggedIn={isLoggedIn} logOut={logOut} user={user} />
      <div className='content-sec'>
        <div className="container-fluid">
          <div className="container">
            <Routes>

              <Route path="/change-password" element={
                <Protected isLoggedIn={isLoggedIn}>
                  <ChangePassword user={user} />
                </Protected>
              } />
              <Route path="/create" element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Create user={user} />
                </Protected>
              } />

              <Route index element={
                <IsSession isLoggedIn={isLoggedIn}>
                  <Login logIn={logIn} />
                </IsSession>
              } />

              <Route path="/login" element={
                <IsSession isLoggedIn={isLoggedIn}>
                  <Login logIn={logIn} />
                </IsSession>
              } />

              <Route path="/register" element={
                <IsSession isLoggedIn={isLoggedIn}>
                  <Register />
                </IsSession>
              } />

              <Route path="/forgot-password" element={
                <IsSession isLoggedIn={isLoggedIn}>
                  <ForgotPassword />
                </IsSession>
              } />

              <Route path="/reset-password" element={
                <IsSession isLoggedIn={isLoggedIn} forgotOtp={forgotOtp}>
                  <ResetPassword />
                </IsSession>
              } />

              <Route path="/otp" element={
                <IsSession isLoggedIn={isLoggedIn} forgotOtp={forgotOtp} registerOtp={registerOtp}>
                  <OneTimePassCode />
                </IsSession>
              } />

              <Route path="*" element={
                <IsSession isLoggedIn={isLoggedIn}>
                  <p>There's nothing here: 404!</p>
                </IsSession>
              } />

            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
