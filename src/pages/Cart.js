import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import { NavlinkContext } from '../context/NavlinkContext';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);

    const {navlink, setnavlink} = useContext(NavlinkContext);

    useEffect(() => {
        setnavlink('cart')
    }, [])

    useEffect(() => {
        if (cart.items) {
            const ids = Object.keys(cart.items);

            axios.post('/cart-items', { items: JSON.stringify(ids) })
                .then((res) => {
                    const items = res.data.items;
                    setCartItems(items);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [cart])
    // const deleteItem = (pid) => {
    //     let _cart = { ...cart };
    //     delete _cart.items[pid]

    //     setCart(_cart);
    // }



    return (
        <div className='container mx-auto'>
            <h1 className='mx-8 my-4 font-bold text-2xl'>Cart</h1>

            <div>
                <ul>
                    {
                        cartItems.length ? cartItems.map((item) => {
                            return (
                                <li>
                                    <div className='flex items-center justify-between'>
                                        <img className='w-32 h-32' src={item.image} alt="" />
                                        <h1 className="font-semibold text-xl">{item.name}</h1>
                                        <div className='flex items-center justify-center'>
                                            <button className="w-10 h-10 bg-red-500 rounded-md mx-4">-</button>
                                            <span className='font-bold'>1</span>
                                            <button className="w-10 h-10 bg-red-500 rounded-md mx-4">+</button>
                                        </div>
                                        <h2 className='font-semibold text-xl text-red-500'>Rs. {item.price}</h2>
                                        <button className='bg-black w-40 h-12 text-white rounded-full font-bold'>Delete</button>
                                    </div>
                                </li>
                            )
                        }) : ""
                    }
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
