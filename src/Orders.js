import React , {useState, useEffect} from 'react'
import "./Orders.css"
import axios from "axios";
import productList from './ProductList';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Order from './Order';


function Orders() {

    const [{basket,user} , dispatch] = useStateValue();
    console.log(user);
    console.log(user.email);
    const url = "http://localhost:4000/api/getOne/"+user.email;
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res.data);
            setData(res.data);
        })
    }, [])

    return (
        
        <div className='orders'>
            <p className='order-id'></p>
            {!data ? null : data.orders.map(order => (
                <Order order={order} />
            ))}

        </div>
    )
}

export default Orders