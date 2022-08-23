import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../cartItems/CartItems";
import { CartDropdownContext } from "../../context/cartDropdownContext";

import Button from "../button/button";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItems key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={gotoCheckoutHandler}>CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
