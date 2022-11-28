import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import GetLoader from '../../shared/GetLoader/GetLoader';
const AllBuyer = () => {
    const { data: buyers = [], refetch,isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer');
            const data = await res.json();
            return data;
        }
    });
    // console.log(buyers)
    const handleVerify = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('successfully verified')
                    refetch();
                }
            })
    }
    if(isLoading){
        return <div className='text-center'>
            <GetLoader></GetLoader>
        </div>
    }
    const handleDelte = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
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
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Email</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    buyers.map(buyer => <tr key={buyer._id} className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black">{buyer.name}</p>
                                                    <p className="text-xs text-gray-600">{buyer.role}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">{buyer.email}</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">
                                            <button onClick={()=> handleDelte(buyer._id)} className=' btn btn-sm btn-error'>Delete</button>
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

export default AllBuyer;