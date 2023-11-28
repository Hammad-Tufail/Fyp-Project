import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text=headingColor font-semibold flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                Dr.Saleh
            </span>
        </h3>
        <p className="text__para">He is a dedicated animal neurologist with a profound passion for animals. They pursued advanced veterinary training to become a leading expert in their field, driven by an unwavering commitment to the well-being of animals and a fascination with the complexity of their nervous systems.</p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text=headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
        <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>23 June, 2001</span>
                    <    p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Neurology</p>
                </div>
               
                    <p className='text-[14px] leading-5 font-medium text-textColor'>HP Hospital, Comsat</p>
            </li>
            
        </ul>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea] '>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    1 January,2010 - 1 January, 2022
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Neurologist</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>HP Hospital, Comsat</p>
            </li>

        </ul>

      </div>
    </div>
  )
}

export default About
