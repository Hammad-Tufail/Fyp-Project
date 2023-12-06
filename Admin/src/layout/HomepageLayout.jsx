import React from 'react'
import HomepageHeader from '../components/header/HomepageHeader';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const HomepageLayout = () => {
  return <>
    <HomepageHeader />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
}

export default HomepageLayout
