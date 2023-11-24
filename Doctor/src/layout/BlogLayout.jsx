import React from 'react';
import BlogHeader from '../components/header/BlogHeader';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';



const BlogLayout = () => {
  return <>
  <BlogHeader/>
  <main>
    <Outlet />
  </main>
  <Footer />
</>
}

export default BlogLayout
