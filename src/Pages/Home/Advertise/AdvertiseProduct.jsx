import React from 'react';

const AdvertiseProduct = ({product,setSelectProduct}) => {
    return (
        <div>
            <div className="card w-96 bg-black shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-lg font-bold text-white">{product.name}</h2>
                    <p className='text-white'>Price: $ {product.resalePrice}</p>
                    <div className="card-actions">
                    <label   onClick={() => setSelectProduct(product)}  htmlFor="booking-modal"className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold cursor-pointer"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;