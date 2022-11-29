import React from 'react';

const AdvertiseProduct = ({product}) => {
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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;