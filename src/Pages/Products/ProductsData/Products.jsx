import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import ProductsCards from '../ProductCards/ProductsCards';

const Products = () => {
  const [selectProduct, setSelectProduct] = useState(null);
 
 
  const allProducts = useLoaderData()
  // console.log(allProducts.length)
  console.log(selectProduct)

    return (
       <div className='m-16'>
         <h1 className='text-center text-3xl font-bold '>{allProducts[0].category}</h1>
        <div>
        {
            allProducts.map((product) => <ProductsCards product={product} key={product._id} setSelectProduct={setSelectProduct}></ProductsCards>)
         }
        </div>
        {
          selectProduct &&  <BookingModal  selectProduct={selectProduct} setSelectProduct={setSelectProduct}></BookingModal>
        }
        
       </div>
    );
};

export default Products;