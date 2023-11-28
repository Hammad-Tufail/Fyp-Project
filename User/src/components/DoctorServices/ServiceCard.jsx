
import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ item, index }) => {
    const { name, desc, bgColor, textColor } = item

    return (
        <div className='py-[30px] px-3 lg:px-5' >
            <div style={{ backgroundImage: "https://img.freepik.com/premium-photo/cat-examination-table-veterinarian-clinic-veterinary-care-vet-doctor-cat_1715-2540.jpg" ,height:'16px',width:'16px'}}>

            </div>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] '>
                {name}
            </h2>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                {desc}
            </p>
            <div>
                <Link to='/doctor/doctorservices' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
