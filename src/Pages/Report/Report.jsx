import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Report = () => {
    const {user} = useContext(AuthContext)
    const product = useLoaderData()
    const navigate = useNavigate();
    console.log(product)
    const handleReport = (e)=>{

        e.preventDefault();
        const report = e.target.reportM.value
        const reportInfo ={
            productName:product.name,
            product_id:product._id,
            sellerName:product.sellerName,
            buyerName:user?.displayName,
            message:report
        } 
        console.log(reportInfo)

        fetch('http://localhost:5000/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                   
                    toast.success('reported successfully');
                    navigate('/dashboard/myorder');

                }
                else{
                    toast.error(data.message);
                }
            })

    }
    return (
        <div className='text-center'>
            <p>Product ID: {product._id}</p>
            <p>Product Name:{product.name}</p>
            <p className='m-2 text-red-500'>Write your Report Here</p>
           <form onSubmit={handleReport}>
                  <textarea name='reportM' className="textarea textarea-bordered" placeholder="Bio"></textarea><br/>
                  <input className='btn btn-error  btn-sm m-2' type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default Report;