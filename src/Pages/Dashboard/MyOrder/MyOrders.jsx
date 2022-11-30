import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const { data: orders = [], refetch,isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/orders/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    const handleDelte = ()=>{
        
    }
    console.log(orders)
    return (
        <div>
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                   <th></th>
                                    <th className="px-4 py-3">Product Name</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Report</th>
                                    
                                   
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    orders.map(order => <tr key={order._id} className="text-gray-700">
                                        
                                      
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-full" src={order.picture} />
                                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                               
                                            </div>
                                        </td>
                                       
                                        <td className="px-4 py-3 text-md font-bold border">
                                         <p>{order.product}</p>
                                        </td>
                                        <td className="px-4 py-3 text-md font-bold border">
                                         <p>{order.price}</p>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">
                                          
                                          {/* <button className='btn btn-primary btn-sm  '>Pay</button> */}
                                          {
                                        order.price && !order.paid && <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-500'>Paid</span>
                                    }
                                           
                                          
                                        </td>
                                     
                                      <td className="px-4 py-3 text-sm border">
                                         <Link to={`/dashboard/report/${order.product_id}`}>
                                            <button className='btn btn-sm btn-error'>
                                                Report

                                            </button>
                                            <p>{order.product_id}</p>
                                            </Link>
                                            
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

export default MyOrders;