
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
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
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = () => {
    setIsLoggedIn(true)
  }
  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header isLoggedIn={isLoggedIn} />
        <Navbar isLoggedIn={isLoggedIn} logOut={logOut} />

        <div className='content-sec'>
          <div className="container-fluid">
            <div className="container">
              <Routes>

                <Route path="/" index element={<Home isLoggedIn={isLoggedIn} />} />

                <Route path="/home" element={
                  <Protected isLoggedIn={isLoggedIn}>
                    <Home isLoggedIn={isLoggedIn} />
                  </Protected>
                } />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login logIn={logIn} />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/otp" element={<OneTimePassCode />} />

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
