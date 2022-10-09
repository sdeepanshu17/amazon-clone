import React from 'react'
import "./Modal.css"

function Modal(props) {
    console.log(props.props);
    return (
        <div className='modal'>
            <img className='modal-img' src={props.props.image} alt="img" />
            <div className="modal-info">
                <span className='modal-title'>{props.props.title}</span>
                <span>Added to cart</span>
            </div>
        </div>
    )
}

export default Modal