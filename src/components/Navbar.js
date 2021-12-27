import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { NavlinkContext } from '../context/NavlinkContext'

const Navbar = () => {

    useEffect(() => {

    })

    const { cart } = useContext(CartContext);
    const { navlink, setnavlink } = useContext(NavlinkContext);

    return (
        <nav style={{ height: '14vh' }} className="w-full flex items-center justify-between px-6">
            <div className="logo flex items-center justify-center">
                <img className='w-20 h-20' src="/images/logo.png" alt="" />
                <strong style={{ width: '9rem' }} className="font-bold text-xl ml-4 text-red-500">Mama's Cafe</strong>
            </div>
            <div className="navlinks flex items-center">
                {
                    navlink === 'home'?  
                    <NavLink to="/" className='font-semibold text-xl mx-4 text-red-500' >Home</NavLink>
                    :
                    <NavLink to="/" className='font-semibold text-xl mx-4 hover:text-red-500' >Home</NavLink>
                }

                {
                    navlink === 'menu' ?
                    <NavLink to="/menu" className='font-semibold text-xl mx-4 text-red-500' >Menu</NavLink>
                    :
                    <NavLink to="/menu" className='font-semibold text-xl mx-4 hover:text-red-500' >Menu</NavLink>

                }

                <NavLink to="/cart">
                    <div className="cart w-32 h-14 bg-red-500 ml-6 rounded-full flex items-center justify-evenly p-4">
                        <img className='w-12 h-12' src="/images/cart.png" alt="" />
                        <span className="counter text-2xl font-bold text-white">{cart.totalItems? cart.totalItems: 0}</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
