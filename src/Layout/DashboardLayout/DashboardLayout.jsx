import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';

import Navbar from '../../Pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    // console.log(isAdmin)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile lg:mt-10">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 drawer-button lg:hidden"><svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg></label>
    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className=""
                       
                    >
                        
                    </button>
  
  
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 lg:w-80 w-40 bg-base-100 text-base-content">
  
     {
       !isAdmin && !isSeller &&  <Link to="#" className="flex items-center p-2 text-base font-normal bg-gray-700 rounded-lg dark:text-white hover:bg-green-500 hover:text-black mb-2">
       <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
       <span className="flex-1 ml-3 whitespace-nowrap">My orders</span>
   </Link>
     }
      {
                            isAdmin && <>

                                <NavLink to="/dashboard/allseller" 

                                className={({ isActive }) =>
                                isActive ? "flex items-center p-2  font-normal rounded-lg  bg-blue-500 text-black mb-2" : "flex items-center p-2 text-base font-normal bg-gray-700 rounded-lg dark:text-white hover:bg-green-500 hover:text-black mb-2"
                                }>
                               
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">All Sellers</span>
                                </NavLink>
                                <NavLink to="/dashboard/allbuyer"  className={({ isActive }) =>
                                isActive ? "flex items-center p-2  font-normal rounded-lg  bg-blue-500 text-black mb-2" : "flex items-center p-2 text-base font-normal bg-gray-700 rounded-lg dark:text-white hover:bg-green-500 hover:text-black mb-2"
                                }>
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">All Buyers</span>
                                </NavLink>

                            </>
                        }
                        
                            {
                                isSeller && <>
    
                                    <NavLink to="#"  className={({ isActive }) =>
                                isActive ? "flex items-center p-2  font-normal rounded-lg  bg-blue-500 text-black mb-2" : "flex items-center p-2 text-base font-normal bg-gray-700 rounded-lg dark:text-white hover:bg-green-500 hover:text-black mb-2"
                                }>
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">My Products</span>
                                    </NavLink>
                                    <NavLink to="#"  className={({ isActive }) =>
                                isActive ? "flex items-center p-2  font-normal rounded-lg  bg-blue-500 text-black mb-2" : "flex items-center p-2 text-base font-normal bg-gray-700 rounded-lg dark:text-white hover:bg-green-500 hover:text-black mb-2"
                                }>
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Add Products</span>
                                    </NavLink>
                                    <NavLink to="#"  className={({ isActive }) =>
                                isActive ? "flex items-center p-2  font-normal rounded-lg  bg-blue-500 text-black mb-2" : "flex items-center p-2 text-base font-normal bg-gray-700 rounded-lg dark:text-white hover:bg-green-500 hover:text-black mb-2"
                                }> 
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Add to Advertise</span>
                                    </NavLink>
    
                                </>
                            }
                        
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;