import React from 'react'
import ProfileHeader from '../components/header/ProfileHeader'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
    return <>
    <ProfileHeader />
    <main>
        <Outlet />
    </main>
    <Footer />
</>
}

export default ProfileLayout
