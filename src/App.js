import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { NavlinkContext } from './context/NavlinkContext'

const App = () => {
    const [cart, setCart] = useState({})
    const [navlink, setnavlink] = useState('home');


    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(cart);
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <BrowserRouter>
                <CartContext.Provider value={{ cart, setCart }}>
                    <NavlinkContext.Provider value={{ navlink, setnavlink }}>
                        <Navbar />
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </NavlinkContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>

        </>
    )
}

export default App;