import React from "react";
import "./cartIcons.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <>
      <div className="cart-icon-container " onClick={toggleIsCartOpen}>
        <ShoppingBag className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </>
  );
};
export default CartIcon;
