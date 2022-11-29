import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ selectProduct, setSelectProduct }) => {
    const { user } = useContext(AuthContext)
    const { name, location, originalPrice, picture, postDate, resalePrice, sellerName, yearOfUse } = selectProduct;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const location = form.location.value;
        const price = form.price.value;
        const product = form.product.value;
        const phone = form.phone.value;

        // [3, 4, 5].map((value, i) => console.log(value))
        const order = {

            name,
            email,
            product,
            price,
            location,
            phone,
            picture:picture



        }
        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setSelectProduct(null)
                    toast.success('Order confirmed');

                }
                else{
                    toast.error(data.message);
                }
            })


    }

    return (
        <div>



            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>


                        <label className="label">
                            <span className="label-text">Name</span>
                            
                        </label>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Product Name</span>
                            
                        </label>
                        <input name="product" type="text" defaultValue={name} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Price</span>
                            
                        </label>
                        <input name="price" type="text" defaultValue={resalePrice} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                            
                        </label>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Location</span>
                            
                        </label>
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;