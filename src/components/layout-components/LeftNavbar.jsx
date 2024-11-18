import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h3 className='text-xl font-semibold'>All Category ({categories.length})</h3>
            <div className='space-y-3 mt-8 flex flex-col'>
                {
                    categories.map(category => 
                    <NavLink to={`/category/${category.category_id}`} className='btn bg-base-100 text-xl font-semibold py-2' key={category.category_id}> {category.category_name} 
                    </NavLink> )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;