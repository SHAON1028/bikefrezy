import axios from 'axios';
import React, { useState } from 'react';
import GetLoader from '../../shared/GetLoader/GetLoader';
import CatergoriesCard from './CatergoriesCard';

const Categories = () => {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    axios.get('https://resale-server-ten.vercel.app/categories')
        .then(data => {
            setCategories(data.data)
            setLoading(false)
        })
    if (loading) {
        return <div className='text-center'>
            <GetLoader></GetLoader>
        </div>
    }


    return (
        <div>
            <h2 className='text-center text-4xl m-10 font-semibold'>Choose Your Bikes</h2>
            <div className='gap-10 ml-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map((category, index) => <CatergoriesCard key={category._id} category={category}>

                    </CatergoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;