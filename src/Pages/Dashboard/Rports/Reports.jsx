import { useQuery } from '@tanstack/react-query';
import { set } from 'date-fns';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Reports = () => {
   
    const { data: reports = [], refetch,isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/reports');
            const data = await res.json();
            return data;
        }
    });

    const handledeleteRepot = (reportid,id)=>{
        fetch(`http://localhost:5000/reports/${reportid}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('delete')
                refetch();
                toast.success('Deleted successfully')
                handleDelte(id)
               
            }
        })
    }
    const handleDelte = (id) => {
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
              
                toast.success('Deleted successfully')
              
            }
        })
    }
    
    return (
        <div>
                      <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase breport-b breport-gray-600">
                                  
                                    <th className="px-4 py-3">Product Info</th>
                                    <th className="px-4 py-3">Owner</th>
                                    <th className="px-4 py-3">Reporter</th>
                                    <th className="px-4 py-3">Message</th>
                                    <th className="px-4 py-3">Action</th>

                                    
                                   
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    reports.map(report => <tr key={report._id} className="text-gray-700">
                                        
                                      
                                       
                                       
                                        <td className="px-4 py-3 text-md font-bold breport">
                                         <p>{report.productName}</p>
                                         <p>{report.product_id}</p>
                                        </td>
                                        <td className="px-4 py-3 text-md font-bold breport">
                                         <p>{report.sellerName}</p>
                                        </td>
                                        <td className="px-4 py-3 text-md font-bold breport">
                                         <p>{report.buyerName}</p>
                                        </td>
                                        <td className="px-4 py-3 text-md font-bold breport">
                                         <p>{report.message}</p>
                                        </td>
                                        <td className="px-4 py-3 text-md font-bold breport">
                                       
                                  
                                        <button onClick={()=>handledeleteRepot(report._id,report.product_id)} className='btn btn-sm btn-error'>Delete Product</button>
                                       
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

export default Reports;