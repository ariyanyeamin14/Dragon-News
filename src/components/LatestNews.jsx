import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-gray-100 py-3'>
            <p className='bg-[#D72050] text-xl text-white font-xl px-5 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className='text-xl font-medium text-black' to={"/news"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, at!</Link>
                <Link className='text-xl font-medium text-black' to={"/news"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, at!</Link>
                <Link className='text-xl font-medium text-black' to={"/news"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, at!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;