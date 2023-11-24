import React, { useEffect, useRef } from 'react';
import backgroundImage from './assets/images/homepage-bg.png'
import { Link } from 'react-router-dom';

const navLinks = [
    { path: '/doctor', display: 'Clinics' },
    { path: '/blog', display: 'Blog' },
    { path: '/petshop', display: 'Shop' },
    { path: '/daycare', display: 'Day Care Center' },
    { path: '/petfinder', display: 'Pet Finder' },
    { path: '/marketplace', display: 'Marketplace' },
]

function Homepage() {
    const headerRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        });
    };
    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    return (
        <div className="bg-center bg-fitsh bg-no-repeat min-h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>

            {/* <div className="absolute top-10 left-10 text-white text-xl font-semibold">
                petnvet
            </div> */}

            {/* <div className="absolute top-10 right-10 flex space-x-8">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.path} className="text-white hover:underline">{link.display}</a>
                ))}
            </div> */}

            <div className="text-center space-y-8">
                <h1 className="text-headingColor text-5xl font-semibold">Your pet care center</h1>
                <p className="text-white text-lg">Before you bring your pet home make sure you can take care of him</p>
                <div className="space-x-4">
                    <Link to='/homepage/login'> <button className="bg-green-500 hover:bg-green-600 py-2 px-6 text-white rounded-full">Login</button></Link>
                    <Link to='/homepage/signup'>   <button className="bg-white hover:bg-gray-100 py-2 px-6 text-green-500 rounded-full">SignUp</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;