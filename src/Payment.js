import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { getBasketTool } from './reducer'
import axios from "axios";


function Payment() {

    const [{basket,user}, dispatch] = useStateValue();
    const [isChecked, setCheck] = useState(false);

    const history = useNavigate();

    function handleChange(event) {
        setCheck(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(user.email);

        let url = "http://localhost:4000/api/getOne/"+user.email;
        // const [data, setData] = useState();

        const dt = new Date();
        const y = dt.getFullYear(); let m = dt.getMonth(); let d = dt.getDate();
        let h = dt.getHours(); let min = dt.getMinutes();
        if(m<10) m="0"+m; if(d<10) d="0"+d;
        if(h.length<10) h="0"+h; if(min<10) min="0"+min;
        const date = h+":"+min+", "+d+"/"+m+"/"+y;

        axios.get(url).then(res => {
            // console.log(res.data)
            if (!res.data) {
                url = "http://localhost:4000/api/post"
                axios.post(url,{email: user.email, orderNo: 1, items: basket, amount: getBasketTool(basket), date: date});
            }
            else {
                url = "http://localhost:4000/api/update/"+user.email
                // axios.patch("http://localhost:4000/api/delete/"+user.email)
                axios.patch(url,{email: user.email, orders: [...res.data.orders, {orderNo: res.data.orders.length+1, items: basket.map(item => {
                    return {
                        title: item.title,
                        price: item.price,
                        rating: item.rating,
                        img: item.image
                    }
                }), amount: getBasketTool(basket), date: date  }]});
            }
        }) .catch(err => console.log(err))

        dispatch({
            type: "EMPTY_BASKET",
        })

        history("/orders")
    }

    return (
    <div className='payment'>
        <div className="payment-cont">

            <h1>
                Checkout (<Link to="/checkout">{basket.length} items</Link>)
            </h1>

            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user?.email}</p>
                    <p>C1-1402, Cherry County</p>
                    <p>Greater Noida West, UP</p>
                </div>
            </div>

            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment-items">
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                    ))}
                </div>
            </div>

            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    <input type="radio" onChange={handleChange} name="" id="" /> Cash on Delivery<br />
                    <button type='submit' className='payments-place-order' onClick={handleSubmit} disabled={!isChecked}> Place order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment