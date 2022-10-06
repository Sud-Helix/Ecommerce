import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import {CartIconContainer , ItemCount } from './cartIconsStyles.jsx'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } =
    useContext(CartDropdownContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <>
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingBag style={{width : '24px' ,height : '24px'}}/>
        <ItemCount className="item-count">{cartCount}</ItemCount>
      </CartIconContainer>
    </>
  );
};
export default CartIcon;
