import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';

function Product(props) {

    function notify(props) {
        toast.success(<Modal props={props}/>,{
            transition: Slide
        });
    }
    // const notify = (props) => toast("Wow so easy!");


    const { id, title, image, price, rating } = props;

    const [{basket}, dispatch] = useStateValue();
    // console.log("this is the basket: ",basket)

    function addToBasket() {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
        notify(props);
    }

    return (
        <div className='product'>
            <div className="product-info">
                <p>{title}</p>
                {/* <p>Rich Dad Poor Dad</p> */}
                <p className="product-price">
                    <small>₹</small>
                    {/* <strong>499{price}</strong> */}
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐️</p>
                        ))}
                    {/* <p>{rating}</p> */}
                </div>
            </div>
            {/* <img className='product-img' src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" alt="product" /> */}
            <img className='product-img' src={image} alt="product" />
            <button onClick={addToBasket}>Add to Cart</button>

        </div>
    )
}

export default Product