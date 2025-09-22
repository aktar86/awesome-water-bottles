import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoredCart, getStoreCart } from '../../utlities/LocalStorage';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise)
      
    
    //use effect 
    useEffect(() => {
        const storedCard = getStoreCart();
        console.log(storedCard);
    }, [])


    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)

        // save the bottle id in the storeage 
        addToStoredCart(bottle.id)
    }
    // console.log(bottles);
    return (
        <div >
            <p>Bottles: {bottles.length}</p>
            <p>added to cart: {cart.length}</p>
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


//39.7 er 7.15 porjonto dekha