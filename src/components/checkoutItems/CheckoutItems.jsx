import React from "react";
import {CheckoutItemsContainer , ImageContainer , Name ,Quantity ,RemoveButton, Price,Arrow,Value } from "./checkoutItemsStyles.jsx";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";

const CheckOutItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearCartFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartDropdownContext);

  const clearCartHandler = () => clearCartFromCart(cartItem);
  const addtoCartHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemsContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} style={{width: '100%',height: '100%'}} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow className="arrow" onClick={removeItemFromCartHandler}>
          {/* &#10094; */} -
        </Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow className="arrow" onClick={addtoCartHandler}>
          {/* &#10095; */} +
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton className="remove-button" onClick={clearCartHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemsContainer>
  );
};

export default CheckOutItems;
