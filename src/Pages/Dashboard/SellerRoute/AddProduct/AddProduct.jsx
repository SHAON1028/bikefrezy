import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

import useVerification from '../../../../Hooks/useVerification';
import GetLoader from '../../../shared/GetLoader/GetLoader';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const [isVerification] = useVerification(user?.email)
    const imageHostKey = process.env.REACT_APP_imgbb_key;
   
    const navigate = useNavigate();
    
    const { data: catagories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name, 
                    email:user?.email,
                    sellerName:user?.displayName,
                    picture: imgData.data.url,
                    postDate:data.postDate,
                    category:data.category,
                    yearOfUse:data.yearOfUse,
                    originalPrice:data.originalPrice,
                    resalePrice:data.resalePrice,
                    location:data.location,

                }

                // save doctor information to the database
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    // navigate('/dashboard/addproduct')
                })
            }
        })
    }

    if(isLoading){
        return <div className='text-center'>
        <GetLoader></GetLoader>
    </div>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add a Product</h2>
          
        
      
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Post Date</span></label>
                    <input type="date" {...register("postDate", {
                        required: "postDate is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.postDate && <p className='text-red-500'>{errors.postDate.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                    {...register('category')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            catagories.map(category => <option
                                key={category._id}
                                value={category.categoryName}
                            >{category.categoryName}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
               
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of Use</span></label>
                    <input type="text" {...register("yearOfUse", {
                        required: "yearOfUse is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="num" {...register("originalPrice", {
                        required: "price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resalePrice", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Submit" type="submit" />
            </form>
        </div>
    );
};




export default AddProduct;