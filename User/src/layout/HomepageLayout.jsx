import React from 'react'
import HomepageHeader from '../components/header/HomepageHeader';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Homepage from '../Homepage';

const HomepageLayout = () => {
  return <>
    <HomepageHeader />
    <main>
      <Homepage />
      <Outlet />
    </main>
    <Footer />
  </>
}

export default HomepageLayout
