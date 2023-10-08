import Home from './pages/home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import './styles/global.scss';
import Product from './pages/product/Product';
import User from './pages/user/User';
import React from 'react';
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



function App() {
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route path='homepage' element={<HomepageLayout />}>
          <Route path='/homepage/' element={<Homepage />} />
          <Route path='/homepage/login' element={<Login />} />
          <Route path='/homepage/signup' element={<Signup />} />

        </Route>
        <Route path='blog'element={<BlogLayout/>}>
        <Route path='/blog/' element={<BlogHomePage />} />
        <Route path='/blog/article' element={<ArticleDetail />} />

        </Route>
        <Route path="admin" element={<Layout />}>
          <Route path="/admin/" element={<Home />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/products" element={<Products />} />

          <Route path="/admin/products/:id" element={<Product />} />
          <Route path="/admin/users/:id" element={<User />} />
        </Route>



        <Route path="doctor" element={<DoctorLayout />}>
          <Route path="/doctor/" element={<DoctorHome />} />
          <Route path="/doctor/doctordetails" element={<DoctorDetails />} />

          <Route path="/doctor/doctors" element={<Doctors />} />
          <Route path="/doctor/doctorservices" element={<DoctorServices />} />
          <Route path="/doctor/otherclinics" element={<Clinics />} />


        </Route>
        {/* <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/users/:id" element={<User />} />
        </Route> */}

        {/* <Route path="/doctor" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route> */}
      </>)
  );

  return (
    <RouterProvider router={router} />
  );

}

export default App;
