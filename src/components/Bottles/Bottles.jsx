import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise)

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
    }
    // console.log(bottles);
    return (
        <div >
            <p>Bottles: {bottles.length}</p>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id}
                    handleAddToCart={handleAddToCart}
                    bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;