import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-[85%] mx-auto font-poppins'>
            <header>
                <Header></Header>
                <section className='my-8'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 gap-4'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default Home;