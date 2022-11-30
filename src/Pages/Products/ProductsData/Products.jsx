import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import ProductsCards from '../ProductCards/ProductsCards';

const Products = () => {
  const [selectProduct, setSelectProduct] = useState(null);
 
 
  const allProducts = useLoaderData()
  console.log(allProducts.length,allProducts)
  console.log(selectProduct)

    return (
       <div className='m-16'>
        { allProducts.length===0 &&
          <p className='text-center font-bold text-rose-600'>No products Here</p>
        }
         <h1 className='text-center text-3xl font-bold '>{allProducts[0]?.category}</h1>
        <div>
        {
            allProducts.map((product) => <ProductsCards key={product._id} product={product}  setSelectProduct={setSelectProduct}></ProductsCards>)
         }
        </div>
        {
          selectProduct &&  <BookingModal  selectProduct={selectProduct} setSelectProduct={setSelectProduct}></BookingModal>
        }
        
       </div>
    );
};

export default Products;