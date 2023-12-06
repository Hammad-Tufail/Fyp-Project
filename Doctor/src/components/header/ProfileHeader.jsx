import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from 'react-icons/bi';

const ProfileHeader = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const location = useLocation();

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
    });

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
    const isProfilePage = location.pathname.startsWith('/profile/user');

    return (
        <>
            <header className={`header flex items-center bg-primaryColor text-white ${isProfilePage ? 'profile-header' : ''}`} ref={headerRef}>
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <span className="font-bold text-14px">Pet</span>
                        <span className="font-bold text-yellow-200 text-14px">n</span>
                        <span className="font-bold text-14px">Vet</span>
                    </div>

                    {isProfilePage ? (
                        <div className="hidden md:flex items-center gap-4">
                            {/* <div className='hidden'>
                                <Link to='/doctor/'>
                                    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                        <img src={userImg} className='w-full rounded-full' alt="" />
                                    </figure>
                                </Link>
                            </div> */}
                            {/* Add your profile picture or other content here */}
                        </div>
                    ) : (
                        <>
                            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                                <BiMenu className='w-6 h-6 cursor-pointer' />
                            </div>
                            <div className='flex items-center gap-4'>
                                {/* <div className='hidden'>
                                    <Link to='/doctor/'>
                                        <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                            <img src={userImg} className='w-full rounded-full' alt="" />
                                        </figure>
                                    </Link>
                                </div> */}
                                {!isProfilePage && (
                                    <Link to='/homepage/login'>
                                        <button className='text-white py-0 px-0 font-[500] h-[40px] flex items-center justify-center' >
                                            Login
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </header>
        </>
    );
};

export default ProfileHeader;
