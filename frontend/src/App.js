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

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "./features/idyUser/userSlice";


function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.idyUser.data);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const logIn = () => {
    setIsLoggedIn(true);
  }

  const logOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
  }

  function getIdFromToken(token) {
    try {
      const tokenParts = token.split('.');
      const decodedPayload = JSON.parse(atob(tokenParts[1]));
      const id = decodedPayload.id;
      return id;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const id = getIdFromToken(token);
      dispatch(getUser(id));
      setIsLoggedIn(true)
    }
  }, []);


  useEffect(() => {
    if (isLoggedIn) {
      setUser(userData);
    }
  }, [userData]);



  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header isLoggedIn={isLoggedIn} logOut={logOut} user={user} />
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
