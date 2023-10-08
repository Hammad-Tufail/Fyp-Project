import React from 'react'
import pethealth from '../../assets/images/pethealth.jpg'
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import postprofile from '../../assets/images/post-profile.svg'

const ArticleCard = ({ className }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
            <img src={pethealth} alt="" className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60" />
            <div className="p-5">
                <h2 className="font-bold text-[20px] text-headingColor md:text-[16px] lg:text-[24px]"> Pet Health</h2>
                <p className="text-textColor mt-3 text-[12px] md:text-[16px]">
                    Health is an important aspect of life
                </p>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5"> <img src={postprofile} alt="" className="w-9 h-9 md:w-10 md:h-10 rounded-full" />
                        <div className="flex flex-col">
                            <h4 className="font-bold italic text-textColor text-sm md:text-base">
                                Ali Hussain
                            </h4>
                        </div>
                    </div>
                    <span className="font-bold text-textColor italic text-sm md:text-base">02 Oct</span>
                </div>

            </div>
        </div>
    )
}

export default ArticleCard
