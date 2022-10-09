import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import "./Subtotal.css"
import { getBasketTool } from './reducer'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
    const history = useNavigate();

    const [{basket},dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTool(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button onClick={e => history("/payment")} disabled={basket.length===0 ? true: false}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal