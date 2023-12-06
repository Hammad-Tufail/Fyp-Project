import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}>
        <SwiperSlide>
        <div className="py-3 px-5 rounded-3px ml-0 md:ml-300px">
  <div className="flex items-center gap-3 md:gap-13">
    <img src={patientAvatar} alt="" className="w-12 h-12 md:w-auto md:h-auto" />
    <div>
      <h4 className="text-lg md:text-18px leading-6 md:leading-30px font-semibold text-headingColor">
        Ali Hussain
      </h4>
      <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
      </div>

    </div>
  </div>
  <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>I have gotten my pet treated from them and I was fully satisfied with the process.</p>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="py-3 px-5 rounded-3px ml-0 md:ml-300px">
  <div className="flex items-center gap-3 md:gap-13">
    <img src={patientAvatar} alt="" className="w-12 h-12 md:w-auto md:h-auto" />
    <div>
      <h4 className="text-lg md:text-18px leading-6 md:leading-30px font-semibold text-headingColor">
        Ahmed
      </h4>
      <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
      </div>

    </div>
  </div>
  <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>I have gotten my pet treated from them and I was fully satisfied with the process.</p>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="py-3 px-5 rounded-3px ml-0 md:ml-300px">
  <div className="flex items-center gap-3 md:gap-13">
    <img src={patientAvatar} alt="" className="w-12 h-12 md:w-auto md:h-auto" />
    <div>
      <h4 className="text-lg md:text-18px leading-6 md:leading-30px font-semibold text-headingColor">
        Abdullah 
      </h4>
      <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
      </div>

    </div>
  </div>
  <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>I have gotten my pet treated from them and I was fully satisfied with the process.</p>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="py-3 px-5 rounded-3px ml-0 md:ml-300px">
  <div className="flex items-center gap-3 md:gap-13">
    <img src={patientAvatar} alt="" className="w-12 h-12 md:w-auto md:h-auto" />
    <div>
      <h4 className="text-lg md:text-18px leading-6 md:leading-30px font-semibold text-headingColor">
        Abdul Hadi
      </h4>
      <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
      </div>

    </div>
  </div>
  <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>I have gotten my pet treated from them and I was fully satisfied with the process.</p>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="py-3 px-5 rounded-3px ml-0 md:ml-300px">
  <div className="flex items-center gap-3 md:gap-13">
    <img src={patientAvatar} alt="" className="w-12 h-12 md:w-auto md:h-auto" />
    <div>
      <h4 className="text-lg md:text-18px leading-6 md:leading-30px font-semibold text-headingColor">
        Kumail Raza
      </h4>
      <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
      </div>

    </div>
  </div>
  <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>I have gotten my pet treated from them and I was fully satisfied with the process.</p>
</div>

        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default Testimonial
