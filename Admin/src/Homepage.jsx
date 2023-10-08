import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { BiMenu } from 'react-icons/bi';
import { useEffect, useRef } from 'react';
import backgroundImage from './assets/images/homepage-bg.jpg'


const navLinks = [
    {
        path: '/doctor',
        display: 'Clinics'
    },
    {
        path: '/blog',
        display: 'Blog'
    },
    {
        path: '/petshop',
        display: 'Shop'
    },
    {
        path: '/daycare',
        display: 'Day Care Center'
    },
    {
        path: '/petfinder',
        display: 'Pet Finder'
    },
    {
        path: '/marketplace',
        display: 'Marketplace'
    },


]

function Homepage() {
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    function vh(percent) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
    }
    function getBackgroundHeight() {
        let height = vh(100) - 60 - 64;
        return height;
    }
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
    });

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
    return <>



        <div
            className=" bg-center bg-no-repeat  bg-cover min-h-screen"
            style={{ minHeight: getBackgroundHeight(), backgroundImage: `url(${backgroundImage})` }}
        >
        </div>

    </>
}

export default Homepage;
