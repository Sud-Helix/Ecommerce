import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../cartItems/CartItems";
import { CartDropdownContext } from "../../context/cartDropdownContext";

import Button from "../button/button";
import {CartDropdownContainer , NavItems} from "./cartDropdownStyles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <CartDropdownContainer>
        <NavItems>
          {cartItems.map((item) => (
            <CartItems key={item.id} cartItem={item} />
          ))}
        </NavItems>
        <Button onClick={gotoCheckoutHandler}>CHECKOUT</Button>
      </CartDropdownContainer>
    </>
  );
};

export default CartDropdown;
