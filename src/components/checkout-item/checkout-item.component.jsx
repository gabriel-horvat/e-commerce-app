import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" className="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow">
&#10094;
            </div>
            <span className="value"> {quantity} </span>
            <div className="arrow">
            &#10095;        
                </div>
            </span>
        <span className="price">{price}</span>
<div className="remove-button"
onClick= { ()=> clearItem(cartItem)}>
     &#10005;</div>

    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CheckoutItem);