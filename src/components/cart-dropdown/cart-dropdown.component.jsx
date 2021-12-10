import React from "react";
import './cart-dropdown.styles.scss'
import CusomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
<div className="cart-dropdown">
    <div className="cart-items"/>
    <CusomButton>GO TO CHECKOUT</CusomButton>
</div>
)

export default CartDropdown