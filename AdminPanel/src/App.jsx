import Home from './pages/home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, Navigate, Routes } from "react-router-dom";
import Users from './pages/users/Users';
import Doctors from './pages/users/Doctors';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import './styles/global.scss';
import React, { useCallback, useEffect } from 'react';
import './App.css';
import { useUser } from './context/UserContext';
import { CircularProgress } from '@mui/material';
import User from './pages/user/User';
import Products from './pages/products/Products';

function App() {

  const [userContext, setUserContext] = useUser();

  const verifyUser = useCallback(() => {
    console.log('here');
    fetch("http://localhost:8000/" + "admins/refreshTokenCall", {
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
            adminPhotoLink: data.data.admin.adminPhotoLink || '/images/admin/defaultProfile.jpg',
            name: data.data.admin.name,
            email: data.data.admin.email
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
            </Route>
          </Routes>
        ) : userContext.token ? (
          <Routes>
            <Route path="/" element={<Navigate to="/admin" />} />
            <Route path="/admin" element={<Layout />}>
              <Route path="/admin/" element={<Home />} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/doctors" element={<Doctors />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/users/:userId" element={<User />} />
              <Route path="/admin/orders" element={<User />} />
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
