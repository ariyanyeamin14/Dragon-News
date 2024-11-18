import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold'>Find Us On</h1>
            <div className="join flex join-vertical mt-6">
                <button className="btn join-item font-medium justify-start py-8 bg-base-100"> <FaFacebook /> Facebook</button>
                <button className="btn join-item font-medium justify-start py-8 bg-base-100"> <FaTwitter /> Twitter</button>
                <button className="btn join-item font-medium justify-start py-8 bg-base-100"> <FaInstagram /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;