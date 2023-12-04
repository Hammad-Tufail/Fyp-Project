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
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    return (
        <>
            <div
                className="bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover", // Set background size to cover
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%"
                }}
            >
                {/* Your existing content */}
                <div className="text-center space-y-8">
                    <h1 className="text-headingColor text-5xl font-semibold">Your pet care center</h1>
                    <p className="text-white text-lg">Before you bring your pet home make sure you can take care of him</p>
                    <div className="space-x-4">
                        <Link to='/login'>
                            <button className="bg-green-500 hover:bg-green-600 py-2 px-6 text-white rounded-full">Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="bg-white hover:bg-gray-100 py-2 px-6 text-green-500 rounded-full">SignUp</button>
                        </Link>
                    </div>
                </div>


            </div>

        </>
    );
}


export default Homepage;