import React, { useContext, useEffect } from 'react'
import Products from '../components/Products'
import { NavlinkContext } from '../context/NavlinkContext';

const Menu = () => {
    const { navlink, setnavlink } = useContext(NavlinkContext);

    useEffect(() => {
        setnavlink('menu')
    }, [])

    return (
        <div className='container mx-auto' >
            <Products />
        </div >
    )
}

export default Menu
