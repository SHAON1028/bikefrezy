import React from 'react';
import {BsCalendar2DateFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md';
import useVerification from '../../../Hooks/useVerification';

const ProductsCards = ({product,setSelectProduct}) => {
   
    const{name,location,originalPrice,picture,postDate,resalePrice,sellerName,yearOfUse,email} = product;
    const [isVerification]= useVerification(email)
    // console.log(isVerification,email)
    return (
        <div className='m-5'>
            <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={picture} className="w-full relative z-10" alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                   
                    {
                        isVerification ? <>
                        <p className='font-semibold flex items-center gap-1 text-gray-500 mb-2'><FaUser/>Seller: <span className='uppercase flex items-center gap-1'>{sellerName} <span className='text-sm text-blue-600'><MdVerified/></span></span></p>
                        </>:<>
                        <p className='font-semibold flex items-center gap-1 text-gray-500 mb-2'><FaUser/>Seller: <span className='uppercase'>{sellerName}</span></p>
                        </>
                    }
                    <p className='font-semibold flex items-center gap-2 text-gray-500 mb-2'><ImLocation2/>Location: {location}</p>
                    <p className='font-semibold text-gray-500 mb-2 flex items-center gap-2'><BsCalendar2DateFill/> {postDate}</p>
                    <p className="font-semibold text-gray-500 mb-2 text-sm">Year of Use: {yearOfUse}</p>
                    <p className='font-semibold text-md'>Original Price : {originalPrice}</p>
                </div>
                <div>
                    <div className="mt-10 mb-10 align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{resalePrice}</span>
                       
                    </div>
                    <div className="inline-block align-bottom">
                    <label   onClick={() => setSelectProduct(product)}  htmlFor="booking-modal"className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold cursor-pointer"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</label>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>
        </div>
    );
};

export default ProductsCards;