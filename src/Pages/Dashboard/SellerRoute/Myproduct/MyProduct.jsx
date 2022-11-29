import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyProduct = () => {
    const{user} = useContext(AuthContext)
    const { data: products = [], refetch,isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/myproduct/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(products)
    // const products = useLoaderData()
   
    console.log(products)
    const handleDelte = (id,name) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json()) 
        .then(data => {
            if(data.deletedCount > 0){
                console.log('delete')
                refetch()
                toast.success('Deleted successfully')
                // handleDeleteAd(name)
            }
        })
    }
    const handleadvertise = (id)=>{
        console.log(id)
       
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json',
                Authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
           
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount> 0){
               refetch()
                toast.success('advertised successfully')
            }
        })
    }
    // const handleDeleteAd = (name) => {
    //     fetch(`http://localhost:5000/advertise/${name}`, {
    //         method: 'DELETE', 
    //         headers: {
    //             'content-type': 'application/json',
    //             Authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         },
    // })
    //    .then(res => res.json())
    //    .then(data=>{
    //     if(data.deletedCount > 0){
    //         console.log('delete')
           
    //         toast.success('Deleted successfully')
    //     }
    //    })
    // }
    return (
        <div>
            {products.length==0 && <p className='text-red-500 text-center'>No Product</p>}
              <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th></th>
                                    <th className="px-4 py-3">Name</th>
                                  
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    products.map(product => <tr key={product._id} className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-full" src={product.picture} alt="" loading="lazy" />
                                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                
                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-md font-bold border">
                                         <p>{product.name}</p>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">
                                          
                                           {
                                            product.add ? <p>Advertised</p> :
                                            <button onClick={()=>handleadvertise(product._id)} className=' btn btn-sm btn-primary'>Advertise</button>
                                           }
                                           
                                          
                                        </td>
                                        <td className="px-4 py-3 text-sm border">
                                            <button onClick={()=> handleDelte(product._id,product.name)} className=' btn btn-sm btn-error'>Delete</button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyProduct;