import React from 'react';
import bike5 from '../../../assets/bike5.jpg'
import bike4 from '../../../assets/bike4.jpg'
const Banner = () => {
    return (
        <div>


            <div class="w-full bg-cover bg-center" style={{
                "height": "32rem",
                backgroundImage: `url(${bike5})`,
            }}  >
                <div class="flex items-center pl-10 lg:pl-80 h-full w-full bg-gray-900 bg-opacity-60">
                    <div class="">
                        <h1 class="text-gray-200 text-4xl  lg:text-6xl">Selling your bike?  <br/>
                            It's as simple as 123 </h1>
                        <p className='text-gray-200 w-4/6 lg:text-lg mt-4'>We buy & sell premium Road, Triathlon, Mountain and eBikes that  have a resale at reasonable price .</p>
                        <button class="mt-4 px-4 py-2 bg-yellow-400 text-black text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;