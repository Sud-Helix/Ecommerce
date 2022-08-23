import React from "react";
import { useContext } from "react";
import CartItems from "../cartItems/CartItems";
import { CartDropdownContext } from "../../context/cartDropdownContext";

import Button from "../button/button";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItems key={item.id} cartItem={item} />
          ))}
        </div>
        <Button>CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
