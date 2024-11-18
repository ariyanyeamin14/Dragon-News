import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 pt-9'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h4 className='text-lg text-gray-500'>Journalism Without Fear or Favour</h4>
            <h3 className='text-xl font-medium'> {moment().format("dddd, MMMM Do YYYY")} </h3>
        </div>
    );
};

export default Header;