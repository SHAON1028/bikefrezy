import React from 'react';
import CatergoriesCard from './CatergoriesCard';

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: "Road Bikes",
            brand:'from brands such as Reid, Momentum & More',
            img:'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2021/07/Screenshot-2022-02-15-at-15.38.56.png'
            

        },
        {
            id: 2,
            title: "Mountain Bikes",
            brand:'from brands such as Whyte, Rocky Mountain & more',
           
            img: 'https://veloprofs.lv/6498-medium_default/mountainbike-trek-procaliber-96-radioactive-redtrek-black-2021.jpg'

        },
        {
            id: 3,
            title: "ELECTRIC BIKES",
            brand:'from brands such as 3T, Cannondale,  Wilier & more',
            img:'https://www.electricbikesuperstore.com.au/wp-content/uploads/2020/10/vallkree-spirit-horse-belt-drive-ebike-1-800x528-1-489x346.jpg'

        },
    ]
    return (
        <div>
            <h2 className='text-center text-4xl m-10 font-semibold'>Choose Your Bikes</h2>
            <div className='gap-10 ml-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map((category, index) => <CatergoriesCard key={category.id} category={category}>

                    </CatergoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;