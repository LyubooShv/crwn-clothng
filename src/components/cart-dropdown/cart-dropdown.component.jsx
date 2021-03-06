import React from "react";
import './cart-dropdown.styles.scss'
import CusomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history, dispatch}) => {
  const  redirectToCheckout = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
    }
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                cartItems.length ? 
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            :
            <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CusomButton onClick={redirectToCheckout}>GO TO CHECKOUT</CusomButton>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));