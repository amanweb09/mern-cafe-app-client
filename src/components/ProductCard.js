import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = (props) => {

    const { cart, setCart } = useContext(CartContext);
    const [isAdding, setIsAdding] = useState(false)
    const item = props.details;

    const addToCart = (_id) => {
        let _cart = { ...cart }

        if (!_cart.items) {
            _cart.items = {}
        }
        if (!_cart.items[_id]) {
            _cart.items[_id] = 1
        }
        else {
            _cart.items[_id] += 1
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0
        }
        _cart.totalItems += 1

        setCart(_cart);
        setIsAdding(true);

        setTimeout(() => {
            setIsAdding(false)
        }, 1000)
    }

    return (
        <div>
            <div style={{ height: '50vh' }} className="product-card relative">
                <img style={{ height: '30vh', margin: "1rem 0" }} src={item.image} alt="" />
                <div className="">
                    <h1 className="font-semibold text-xl text-center">{item.name}</h1>
                    <div className="flex items-center justify-between p-4">
                        <p className="text-lg-text-red-500 font-semibold">Rs. {item.price}</p>
                        <button onClick={() => { addToCart(item._id) }} className={isAdding?'w-36 h-14 bg-green-500 rounded-full text-white': 'w-36 h-14 bg-red-500 rounded-full text-white hover:bg-red-600'}>{isAdding? "Added to cart!": "Add to cart"}</button>
                    </div>
                </div>
                {
                    item.type === 'veg' ? <img style={{ top: '15px', right: '15px' }} src='/images/veg.png' className='absolute w-8 h-8' />
                        : <img style={{ top: '15px', right: '15px' }} src='/images/non-veg.png' className='absolute w-8 h-8' />
                }

            </div>
        </div>
    )
}

export default ProductCard
