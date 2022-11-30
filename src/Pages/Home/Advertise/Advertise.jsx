import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../Products/BookingModal/BookingModal';
import AdvertiseProduct from './AdvertiseProduct';

const Advertise = () => {
    const [selectProduct, setSelectProduct] = useState(null);

    const { data: adverProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['produtcs'],
        queryFn: async () => {
            const res = await fetch('https://resale-server-ten.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    });
    console.log(adverProducts)
    return (
        <div>
            {
                adverProducts.length > 0 && <>

                    <h2 className='text-orange-500 text-center font-serif m-10'>Hot Deals</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-2'>

                        {
                            adverProducts.map(product => <AdvertiseProduct key={product._id} product={product} setSelectProduct={setSelectProduct}></AdvertiseProduct>)
                        }
                    </div>
                    <div>
                        {
                            selectProduct && <BookingModal selectProduct={selectProduct} setSelectProduct={setSelectProduct}></BookingModal>
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default Advertise;