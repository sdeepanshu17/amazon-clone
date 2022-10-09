import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
    const {id,image,title,price,rating,hideBtn} = props;

    const [{basket},dispatch] = useStateValue();
    function removeFromBasket() {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className='checkout-product'>
            <img className='checkout-product-img' src={image} alt="" />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className='checkout-product-price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>⭐️</p>
                ))}
                </div>
                {!hideBtn ? <button onClick={removeFromBasket}>Remove from Basket</button> : null}
            </div>
        </div>
    )
}

export default CheckoutProduct