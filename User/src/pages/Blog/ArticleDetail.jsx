import React from 'react'
import pethealth from '../../assets/images/pethealth.jpg'
import { Link } from 'react-router-dom'
import SuggestedPost from './SuggestedPost'
import CommentContainer from './comment/CommentContainer';

const postsData = [
    {
        _id: '1',
        image: 'pethealth',
        title: 'Help pets to live a healthy life',
        createdAt: '02-10-2023'
    },
    {
        _id: '2',
        image: 'pethealth',
        title: 'Help pets to live a healthy life',
        createdAt: '02-10-2023'
    },
    {
        _id: '3',
        image: 'pethealth',
        title: 'Help pets to live a healthy life',
        createdAt: '02-10-2023'
    },
    {
        _id: '4',
        image: 'pethealth',
        title: 'Help pets to live a healthy life',
        createdAt: '02-10-2023'
    },
];
const tagsData = [
    "Medical",
    "Lifestyle",
    "Food",

]



const ArticleDetail = () => {
    return (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
                <img className="rounded-xl w-full" src={pethealth} alt="Health" />
                <Link to='/blog?category=selectedCategory' className='text-[#2563eb] font-bold text-[20px] md:text-[16px] inline-block md:text-base'>
                    Health
                </Link>
                <h1 className="text-[20px] font-bold mt-4 text-headingColor md:text-[16px]">Help pets to live a healthy life. </h1>
                <div className='mt-4 text-textColor'>
                    <p className='leading-7'>Pets' health is of paramount importance, as it directly impacts their quality of life and longevity. Proper nutrition, regular exercise, and routine veterinary care are essential for maintaining their well-being. Additionally, pets offer emotional support and companionship, contributing positively to their owners' mental and emotional health. Investing in their health ensures a happy and fulfilling life for both pets and their human companions.</p>
                </div>
                <CommentContainer className='mt-10' logginedUserId='a'/>
            </article>
            <SuggestedPost header='Latest Articles'
             posts={postsData}
             tags={tagsData}
             className='mt-8 lg:mt-0 lg:max-w-xs'
              
              />
        </section>
    )
}

export default ArticleDetail
