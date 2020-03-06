import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img src="{imageUrl}" alt="item" className="item"/>
        <div className="item-details">
            <span className="name">
                {name}
            </span>
            <span className="name">
                {quantity} x ${price}
            </span>
        </div>
    </div>
)

export default CartItem