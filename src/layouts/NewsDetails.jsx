import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import RightNavbar from '../components/layout-components/RightNavbar';

const NewsDetails = () => {
    const { data } = useLoaderData()
    const news = data[0]
    const { details, image_url, title, category_id } = news

    return (
        <div className='w-[85%] mx-auto font-poppins'>
            <Header></Header>
            <main className='grid grid-cols-12 gap-8'>
                <section className='col-span-9'>
                    <h3 className='text-xl font-semibold'>Dragon News</h3>
                    <div className='border border-[#E7E7E7] p-6 my-6 rounded-lg'>
                        <img className='w-full' src={image_url} alt="" />
                        <h3 className='font-bold text-2xl my-8 text-[#403F3F] font-poppins'>{title}</h3>
                        <p className='text-[#706F6F]'>{details}</p>
                        <div className='mt-10 '>
                            <Link to={`/category/${category_id}`} className='bg-[#D72050] text-xl font-medium text-white px-6 py-3'>All news in this category</Link>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;