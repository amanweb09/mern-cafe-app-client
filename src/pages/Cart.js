import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Cart = () => {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        if (cart.items) {
            const ids = Object.keys(cart.items);
            console.log(ids);

            axios.post('/cart-items', { items: JSON.stringify(ids) })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            // fetch('/cart-items', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: {
            //         items: JSON.stringify(ids)
            //     }
            // })
        }
    }, [])


    return (
        <div className='container mx-auto'>
            <h1 className='mx-8 my-4 font-bold text-2xl'>Cart</h1>

            <div>
                <ul>
                    <li>
                        <div className='flex items-center justify-between'>
                            <img className='w-32 h-32' src="/images/oreo.png" alt="" />
                            <h1 className="font-semibold text-xl">Oreo Shake</h1>
                            <div className='flex items-center justify-center'>
                                <button className="w-10 h-10 bg-red-500 rounded-md mx-4">-</button>
                                <span className='font-bold'>1</span>
                                <button className="w-10 h-10 bg-red-500 rounded-md mx-4">+</button>
                            </div>
                            <h2 className='font-semibold text-xl text-red-500'>Rs. 120</h2>
                            <button className='bg-black w-40 h-12 text-white rounded-full font-bold'>Delete</button>
                        </div>
                    </li>
                </ul>

                <hr className="text-red-500" />

                <div className='flex justify-end items-center my-8'>
                    <span className="font-semibold text-xl px-4">Sub-Total: </span>
                    <span className="text-xl">Rs. 120 </span>
                </div>

                <button style={{ float: 'right' }} className='w-44 h-14 text-white font-bold text-xl bg-red-500 hover:bg-red-600 rounded-full'>Order Now</button>
            </div>
        </div>
    )
}

export default Cart
