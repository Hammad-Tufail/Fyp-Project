
import React from 'react';
import aboutImg from '../../assets/images/about.png';
import { Link } from 'react-router-dom';

const About = () => {
  return <section>
  <div className="container">
    <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-0">

      {/* Image (hidden on medium or smaller screens) */}
      <div className="relative w-3/4 lg:w-1/2 xl:w-[570px] z-10 order-2 lg:order-1 hidden md:block">
        <img src={aboutImg} alt="" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl heading">We take pride in providing the best treatment.</h2>
        <p className="text-sm md:text-base lg:text-lg text__para">We provide different quality services so that the pet parents can be sure about their pet's healthy lifestyle and they can live a long and healthy life.</p>
        <p className="text-sm md:text-base lg:text-lg text__para mt-4 md:mt-6">Our best is something we strive for each day, caring for our patients. We don't look back at what we have achieved but towards what we can do tomorrow.</p>
       
      </div>
    </div>
  </div>
</section>

}

export default About
