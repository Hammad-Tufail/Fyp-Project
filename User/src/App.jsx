import Home from './pages/home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, Navigate, Routes } from "react-router-dom";
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import './styles/global.scss';
import Product from './pages/product/Product';
import User from './pages/user/User';
import React, { useCallback, useEffect } from 'react';
import DoctorLayout from './layout/Layout';
import DoctorHome from './pages/doctor/DoctorHome';
import DoctorServices from './pages/doctor/DoctorServices';
import Doctors from "./pages/doctor/Doctors";
import DoctorDetails from "./pages/doctor/DoctorDetails";
import './App.css';
import Clinics from './pages/doctor/Clinics';
import Homepage from './Homepage';
import HomepageLayout from './layout/HomepageLayout';
import Signup from './pages/login/Signup';
import BlogLayout from './layout/BlogLayout';
import BlogHomePage from './pages/Blog/BlogHomePage';
import Article from './pages/Blog/Article';
import ArticleDetail from './pages/Blog/ArticleDetail';
import ProfilePage from './pages/profile/ProfilePage';
import ProfileLayout from './layout/ProfileLayout';
import DoctorProfile from './pages/doctor/DoctorProfile';
import AppointmentsPage from './pages/doctor/AppointmentsPage';
import DoctorProfilePage from './pages/doctor/DoctorProfilePage';
import { useUser } from './context/UserContext';
import { CircularProgress } from '@mui/material';
import UserAppointment from './pages/profile/UserAppointment';




function App() {

  const [userContext, setUserContext] = useUser();

  const verifyUser = useCallback(() => {
    console.log('here');
    fetch("http://localhost:8000/" + "users/refreshTokenCall", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()
        console.log(data);
        setUserContext(oldValues => {
          return {
            ...oldValues,
            token: data.data.token,
            userPhotoLink: data.data.user.userPhotoLink || '/images/admin/defaultProfile.jpg',
            name: data.data.user.name,
            email: data.data.user.email
          }
        })
      } else {
        setUserContext(oldValues => {
          console.log(userContext)
          return { ...oldValues, token: null, }
        })
      }
      // call refreshToken every 60 minutes to renew the authentication token.
      setTimeout(verifyUser, 60 * 60 * 1000)
    })
  }, [setUserContext])

  useEffect(() => {
    verifyUser()
  }, [verifyUser])


  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>



    )
  }

  return (
    <>
      {
        userContext.token === null ? (
          <Routes>
            <Route path="/" >
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Route>
          </Routes>
        ) : userContext.token ? (
          <Routes>
            <Route path="/" >
              <Route path="/" element={<Navigate to="/profile/user" />} />
              <Route path="/profile/user" element={<ProfilePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/profile/user/appointment" element={<UserAppointment />} />




              {/* <Route path="/appointmentspage" element={<AppointmentsPage />} />
              <Route path="/doctorprofilepage" element={<DoctorProfilePage />} /> */}
            </Route>
          </Routes>


        ) : (
          <CircularProgress />
        )
      }

    </>
  );

}

export default App;
