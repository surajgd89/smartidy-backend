
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
import './App.scss';



function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        {/* <Header /> */}
        <Navbar />
        <div className='content-sec'>
          <div className="container-fluid">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/create" element={<Create />} />
                <Route path="/otp" element={<OneTimePassCode />} />
              </Routes>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
