import React from 'react';
import { Link } from 'react-router-dom';

const CatergoriesCard = ({ category }) => {
    const { title, img, brand } = category
    return (
        <Link to=''>
       
        <div className="overflow-hidden rounded-lg bg-white text-slate-500 shadow-md shadow-slate-200">
      
          <figure className="relative">
            <img
              src={img}
              alt="card image"
              className="aspect-video w-full "
            />
            <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white">
              <h3 className="text-xl font-bold ">{title}</h3>
              <p className="text-sm opacity-75"> {brand}</p>
            </figcaption>
          </figure>
        </div>
        {/*<!-- End Image overlay card --> */}
      </Link>
    );
};

export default CatergoriesCard;