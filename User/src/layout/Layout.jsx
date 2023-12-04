
import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const DoctorLayout = () => {
    return <>
            <Header />
            <main >
                <Outlet />
            </main>
            <Card />
            <Footer />
        </>
    
};

export default DoctorLayout
