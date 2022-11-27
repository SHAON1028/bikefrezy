import axios from 'axios';
import React, { useState } from 'react';
import CatergoriesCard from './CatergoriesCard';

const Categories = () => {
const [categories,setCategories] = useState([])
axios.get('http://localhost:5000/categories')
.then(data=>setCategories(data.data))


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