import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout-left">
                <img className='checkout-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout-title">Your Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} 
                        />
                    ))}
                    {/* <CartItem /> */}
                    {/* <CartItem /> */}
                    {/* <CartItem /> */}
                    {/* <CartItem /> */}
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
                {/* <h2>The subtotal will go here</h2> */}
            </div>
        </div>
    )
}

export default Checkout