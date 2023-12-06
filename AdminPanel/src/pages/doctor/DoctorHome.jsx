import React from 'react'
import heroImg01 from '../../assets/images/hero-img01.png';
import heroImg02 from '../../assets/images/hero-img02.png';
import heroImg03 from '../../assets/images/hero-img03.png';
import icon01 from '../../assets/images/icon01.png';
import icon02 from '../../assets/images/icon02.png';
import icon03 from '../../assets/images/icon03.png';
import faqImg from '../../assets/images/faq-img.png';
import featureImg from '../../assets/images/feature-img.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../../components/About/About';
import ServiceList from '../../components/DoctorServices/ServiceList';
import DoctorList from '../../components/ForDoctor/DoctorList';
import FaqList from '../../components/faq/FaqList';
import Testimonial from '../../components/Testimonial/Testimonial';

const DoctorHome = () => {
    return (
        <>
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row lg:gap-[400px] items-center justify-between">
                        {/* hero content */}
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]"> We help pets to live long and healthy life.</h1>

                                <p className="text__para"> We believe that every pet deserves the opportunity to thrive, and our services are designed to support their longevity and vitality.</p>

                                {/* <button className="btn">Request an Appointment</button> */}

                            </div>

                            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                                <div>

                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'> Hospitals</p>
                                </div>
                                <div>

                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>Services </p>
                                </div>
                                <div>

                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'> Satisfaction</p>
                                </div>

                            </div>
                        </div>
                        {/* hero content end*/}

                        <div className='flex gap-[30px] justify-end'>
                            <div>
                                <img className='w-full' src={heroImg01} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                                <img className='w-full ' src={heroImg03} alt="" />

                            </div>

                        </div>



                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='lg:w-[470px] mx-auto '>
                        <h2 className='heading text-center'>Providing the best services</h2>
                        <p className='text__para text-center'> World class care for every pet.
                        </p>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon01} alt="" />
                        </div>
                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Doctor</h2>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for every pet. Our system offers unmatched, expert health and hygiene care</p>
                            <Link to='/doctor/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon02} alt="" />
                        </div>
                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                Other Clinics
                            </h2>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                For the ease of users other clinics/hospitals locations</p>
                            <Link to='/doctor/otherclinics' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon03} alt="" />
                        </div>
                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Don't be late and book your appointment with our experienced doctors.</p>
                            <Link to='/doctor/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <About />
            {/* ===============================Services==================================== */}
            <section>
                <div className="container ">
                    <div className="xl:w-[670px] mx-auto  ">
                        <h2 className="heading text-center">Our Services</h2>
                        <p className='text__para text-center'>We provide the best medical services</p>

                    </div>


                </div>
                <ServiceList />
            </section>
            {/* ================================Feature=================================== */}
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">

                        <div className='xl:w-[500px]'>
                            <h2 className='heading '> Get virtual treatment <br /> anytime </h2>
                            <ul className='pl-4'>
                                <li className='text__para'>1. Schedule the appointment directly.</li>
                                <li className='text__para'>2. Search for doctors and contact them.</li>
                                <li className='text__para'>3. View our doctors who are accepting new patients, use the online scheduling tool to select an appointment date.</li>
                            </ul>
                        </div>

                        <div className="relative z-10 xl:w-[770px] flex justify-center md:justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} className="w-3/4" alt="" />
                        </div>



                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="xl:w-[670px] mx-auto  ">
                        <h2 className="heading text-center">Our Doctors</h2>
                        <p className='text__para text-center'>We provide the best medical services</p>

                    </div>

                </div>
                <DoctorList />

            </section>

            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0 w-full">
                        <div className='w-1/2 hidden md:block'>
                            <img src={faqImg} alt="" />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h2 className='heading  md:ml-[70px] lg:ml-[200px]'>FAQs</h2>
                            <FaqList />

                        </div>
                    </div>
                </div>
            </section>
            {/* ===========================Testimonial============================= */}
            <section>

                <div className="container">
                    <div className="xl:w-[470px] mx-auto  ">
                        <h2 className="heading text-center">What our patient say about us</h2>
                        <p className='text__para text-center'>We provide the best medical services</p>

                    </div>

                </div>
                <Testimonial />
            </section>
        </>
    );
};

export default DoctorHome
