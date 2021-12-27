import React, { useContext, useEffect } from 'react';
import Products from '../components/Products'
import { NavlinkContext } from '../context/NavlinkContext';


const Home = () => {

    const {navlink, setnavlink} = useContext(NavlinkContext);

    useEffect(() => {
        setnavlink('home')
    }, [])

    return (
        <div className='container mx-auto'>

            <div style={{ height: '70vh' }} className="flex w-full my-8 items-center justify-between">
                <div>
                    <small className="text-xl font-semibold text-red-500">How about a</small>
                    <h2 className='text-6xl font-bold my-4'>Nice Coffee <span className="text-red-500">Date?</span></h2>

                    <button className='bg-red-500 text-white font-bold w-48 h-14 rounded-full my-4 hover:bg-red-600'>Order Now</button>
                </div>
                <div>
                    <img src="/images/coffee-bg.png" alt="" />
                </div>
            </div>

            <hr className='text-red-500' />

            <Products />
        </div>
    )
}

export default Home;
