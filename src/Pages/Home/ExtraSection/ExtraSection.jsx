import React from 'react';
import bike from '../../../assets/bike3.jpg'
const ExtraSection = () => {
    return (
		<section className='w-full' style={{
			"height": "20rem",
			backgroundImage:`url(${bike})`}}> 
		<div className='text-center  '> 
		   <div>
			   <h2 className='text-lg text-primary font-bold mt-36 pt-[65px]'>Contact Us</h2>
			   <p className='text-4xl text-gray-300 mb-[41px]'>Stay connected with us</p>
		   </div>
		   <div>
		   <input type="text" placeholder="Email Address" className="input bg-slate-400 input-bordered w-[450px] mb-[19px]" />
		 
		 
		   <button className="w-[120px] btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mb-[71px] ">Submit</button>
		   
		   </div>
	   </div>
	  </section>
    );
};

export default ExtraSection;