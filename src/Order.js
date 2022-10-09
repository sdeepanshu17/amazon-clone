import React from 'react'
import "./Order.css"
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    console.log(order);
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{order.date}</p>
            <p className='order-id'>{order._id}</p>
            {order.items.map(item => (
                <CheckoutProduct
                    id={item._id}
                    title={item.title}
                    image={item.img}
                    price={item.price}
                    rating={item.rating}
                    hideBtn={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className='order-total'>Order Total: {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

        </div>
    )
}

export default Order