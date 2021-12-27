import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/menu')
            .then(res => res.json()
                .then((resp) => {
                    const menu = resp.menu;
                    setMenu(menu);
                })
                .catch((err) => {
                    console.log(err);
                }))
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className="font-bold text-2xl my-8 mx-2">Menu</h2>

            <div className='grid grid-cols-5 gap-12'>
                {
                    menu.map((item) => {
                        return <ProductCard key={item._id} details={item}/>
                    })
                }

            </div>
        </div>
    )
}

export default Products
